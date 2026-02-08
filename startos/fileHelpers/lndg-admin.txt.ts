import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

// note: this is just a marker file to indicate that the admin password has been set
// it does not actually store any password
export const adminTxtFile = FileHelper.raw(
  {    
    base: sdk.volumes.data,
    subpath: '/lndg-admin.txt',
  },
  (a) => a,
  (a) => a,
  matches.string.unsafeCast,
)
