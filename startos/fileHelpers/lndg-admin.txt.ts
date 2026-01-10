import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const adminTxtFile = FileHelper.raw(
  {    
    // base: sdk.volumes.main,
    volumeId: 'main',
    subpath: '/lndg-admin.txt',
  },
  (a) => a,
  (a) => a,
  matches.string.unsafeCast,
)
