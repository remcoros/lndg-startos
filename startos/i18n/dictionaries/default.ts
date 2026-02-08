export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Admin password not set!': 1,
  'Web Interface': 2,
  'The web interface is ready': 3,
  'The web interface is not ready': 4,

  // interfaces.ts
  'Web UI': 100,
  'The web interface of LNDg': 101,

  // actions/resetPassword.ts
  'Reset Password': 200,
  'Create Password': 201,
  'Reset your LNDg password': 202,
  'Create your LNDg password': 203,
  'Success': 204,
  'Your password is below. Your username is lndg-admin': 205,

  // manifest/index.ts
  'Used to communicate with the Lightning Network.': 300,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
