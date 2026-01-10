import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'lndg',
  title: 'LNDg',
  license: 'MIT',
  wrapperRepo: 'https://github.com/islandbitcoin/lndg-startos',
  upstreamRepo: 'https://github.com/cryptosharks131/lndg',
  supportSite: 'https://t.me/+cPi5nRCg_1g1MTNh',
  marketingSite: 'https://twitter.com/cryptosharks131',
  donationUrl: null,
  docsUrl:
    'https://github.com/islandbitcoin/lndg-startos/tree/master/instructions.md',
  description: {
    short:
      'Web UI for LND developed specifically for LND Routing Node Operators',
    long: 'Powerful web interface to analyze lnd data and leverage the backend database for automation tools around rebalancing and other basic maintenance tasks.',
  },
  volumes: ['main', 'data'],
  images: {
    lndg: {
      source: {
        //dockerTag: 'ghcr.io/cryptosharks131/lndg:v1.10.1',
        dockerBuild: {
          dockerfile: 'Dockerfile',
          buildArgs: {
            LNDG_REF: 'v1.10.1',
          }
        }
      },
    },
  },
  hardwareRequirements: {
    arch: ['x86_64', 'aarch64'],
  },
  dependencies: {
    lnd: {
      description: 'Used to communicate with the Lightning Network.',
      optional: true,
      metadata: {
        title: 'LND Lightning Node',
        icon: 'https://github.com/Start9Labs/lnd-startos/blob/master/icon.png?raw=true',
      },
    },
  },
})
