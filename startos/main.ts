import { adminTxtFile } from './fileHelpers/lndg-admin.txt'
import { sdk } from './sdk'
import { mainMounts, uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info('Starting LNDg!')

  const adminPassword = await adminTxtFile.read().const(effects)

  if (!adminPassword) {
    throw new Error('Admin password not set!')
  }

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'lndg' },
      mainMounts,
      'lndg-sub',
    ),
    exec: {
      command: sdk.useEntrypoint(),
      runAsInit: true,
    },
    ready: {
      display: 'Web Interface',
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: 'The web interface is ready',
          errorMessage: 'The web interface is not ready',
        }),
    },
    requires: [],
  })
})
