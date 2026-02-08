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
    short: {
      en_US: 'Web UI for LND developed specifically for LND Routing Node Operators',
      es_ES: 'Interfaz web para LND desarrollada específicamente para operadores de nodos de enrutamiento LND',
      de_DE: 'Web-UI für LND, speziell für LND-Routing-Knotenbetreiber entwickelt',
      pl_PL: 'Interfejs webowy dla LND opracowany specjalnie dla operatorów węzłów routingu LND',
      fr_FR: "Interface web pour LND développée spécifiquement pour les opérateurs de nœuds de routage LND",
    },
    long: {
      en_US:
        'Powerful web interface to analyze lnd data and leverage the backend database for automation tools around rebalancing and other basic maintenance tasks.',
      es_ES:
        'Potente interfaz web para analizar datos de lnd y aprovechar la base de datos backend para herramientas de automatización en torno al rebalanceo y otras tareas básicas de mantenimiento.',
      de_DE:
        'Leistungsstarke Weboberfläche zur Analyse von lnd-Daten und Nutzung der Backend-Datenbank für Automatisierungstools rund um Rebalancing und andere grundlegende Wartungsaufgaben.',
      pl_PL:
        'Potężny interfejs webowy do analizy danych lnd i wykorzystania bazy danych backend dla narzędzi automatyzacji wokół rebalansowania i innych podstawowych zadań konserwacyjnych.',
      fr_FR:
        "Interface web puissante pour analyser les données lnd et exploiter la base de données backend pour les outils d'automatisation autour du rééquilibrage et d'autres tâches de maintenance de base.",
    },
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
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
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
