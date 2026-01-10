import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  return {
    lnd: {
      kind: 'running',
      versionRange: '>=0.19.3-beta:1-beta.0',
      healthChecks: [],
    },
  }
})
