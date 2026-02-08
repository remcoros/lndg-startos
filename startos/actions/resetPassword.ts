import { utils } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
import { adminTxtFile } from '../fileHelpers/lndg-admin.txt'
import { mainMounts } from '../utils'

export const resetPassword = sdk.Action.withoutInput(
  // id
  'reset-password',

  // metadata
  async ({ effects }) => {
    const hasPass = await adminTxtFile.read().const(effects)

    return {
      name: hasPass ? 'Reset Password' : 'Create Password',
      description: hasPass ? 'Reset your LNDg password' : 'Create your LNDg password',
      warning: null,
      allowedStatuses: 'any',
      group: null,
      visibility: 'enabled',
    }
  },

  // the execution function
  async ({ effects }) => {
    const password = utils.getDefaultString({
      charset: 'a-z,A-Z,1-9,!,@,$,%,&,*',
      len: 22,
    })

    const script = `
import os
from django.contrib.auth import get_user_model

username = os.environ["USERNAME"]
password = os.environ["PASSWORD"]

User = get_user_model()
u = User.objects.get(username=username)
u.set_password(password)
u.save()

print("password updated for", username)
`

    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'lndg', sharedRun: false },
      mainMounts,
      'set-password',
      async sub => {
        // Initialize LNDg
        await sub.execFail([
          'python',
          'initialize.py',
          '--network', 'mainnet',
          '--rpcserver', 'lnd.startos:10009',
          '--tlscert', '/mnt/lnd/tls.cert',
          '--macaroon', '/mnt/lnd/data/chain/bitcoin/mainnet/admin.macaroon',
          '--lnddatabase', '/mnt/lnd/data/graph/mainnet/channel.db',
          '--adminpw', password,
          '--docker',
        ])

        // ensure migrations are applied
        await sub.execFail(['python', 'manage.py', 'migrate', '--noinput'])

        // update the password (above initialize step does not update existing user)
        await sub.execFail(
          ['python', 'manage.py', 'shell', '-c', script],
          {
            env: {
              USERNAME: 'lndg-admin',
              PASSWORD: password,
            }
          }
        )
      }
    )

    await adminTxtFile.write(effects, "1")

    return {
      version: '1',
      title: 'Success',
      message: 'Your password is below. Your username is lndg-admin',
      result: {
        type: 'single',
        value: password,
        masked: true,
        copyable: true,
        qr: false,
      },
    }
  },
)
