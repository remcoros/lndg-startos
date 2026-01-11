FROM python:3-alpine AS builder

ENV PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PYTHONDONTWRITEBYTECODE=1

RUN apk add --no-cache \
      git \
      build-base \
      linux-headers \
      libffi-dev

WORKDIR /app

ARG LNDG_REF=v1.10.1

RUN git clone --depth 1 --branch "${LNDG_REF}" https://github.com/cryptosharks131/lndg /app

# Build wheels for dependencies (faster + clean final image)
RUN pip wheel --wheel-dir /wheels -r requirements.txt && \
    pip wheel --wheel-dir /wheels supervisor whitenoise

FROM python:3-alpine

ENV PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PYTHONDONTWRITEBYTECODE=1

RUN apk add --no-cache \
      tini \
      libffi

WORKDIR /app

COPY --from=builder /app /app
COPY --from=builder /wheels /wheels

RUN pip install --no-index --find-links=/wheels -r requirements.txt && \
    pip install --no-index --find-links=/wheels supervisor whitenoise && \
    rm -rf /wheels

COPY --chmod=755 ./entrypoint.sh /app/entrypoint.sh

EXPOSE 8889

ENTRYPOINT ["/sbin/tini", "--", "/app/entrypoint.sh"]
