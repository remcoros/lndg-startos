import { sdk } from "./sdk"

export const uiPort = 8889

export const mainMounts = sdk.Mounts.of()
    .mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/root',
        readonly: false,
    })
    .mountVolume({
        volumeId: 'data',
        subpath: null,
        mountpoint: '/app/data',
        readonly: false,
    })
    // @TODO watch the macaroon and restart if changes
    .mountDependency({
        dependencyId: 'lnd',
        volumeId: 'main',
        subpath: null,
        mountpoint: '/mnt/lnd',
        readonly: true,
    })