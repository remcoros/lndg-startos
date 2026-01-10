#!/bin/sh

set -e

python initialize.py \
    --network mainnet \
    --rpcserver lnd.startos:10009 \
    --tlscert /mnt/lnd/tls.cert \
    --macaroon /mnt/lnd/data/chain/bitcoin/mainnet/admin.macaroon \
    --lnddatabase /mnt/lnd/data/graph/mainnet/channel.db \
    --adminpw "$(cat /app/data/lndg-admin.txt)" \
    --docker \
    --force

echo '
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
USE_X_FORWARDED_HOST = True
DEBUG = True
' >> /app/lndg/settings.py

python controller.py 2>&1 | tee -a /var/log/lndg-controller.log &

exec gunicorn lndg.wsgi:application \
  --bind 0.0.0.0:8889 \
  --workers 2 \
  --threads 2 \
  --timeout 60