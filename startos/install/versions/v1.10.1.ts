import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'

export const v_1_10_1 = VersionInfo.of({
  version: '1.10.1:1-beta.2',
  releaseNotes: 'Revamped for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {
      await rm('/media/startos/volumes/main/start9', { recursive: true }).catch(
        console.error,
      )
    },
    down: IMPOSSIBLE,
  },
})
