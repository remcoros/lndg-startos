import { LangDict } from './default'

export default {
  es_ES: {
    // main.ts
    1: '¡Contraseña de administrador no establecida!',
    2: 'Interfaz web',
    3: 'La interfaz web está lista',
    4: 'La interfaz web no está lista',

    // interfaces.ts
    100: 'Interfaz web',
    101: 'La interfaz web de LNDg',

    // actions/resetPassword.ts
    200: 'Restablecer contraseña',
    201: 'Crear contraseña',
    202: 'Restablecer tu contraseña de LNDg',
    203: 'Crear tu contraseña de LNDg',
    204: 'Éxito',
    205: 'Tu contraseña se muestra a continuación. Tu nombre de usuario es lndg-admin',

    // manifest/index.ts
    300: 'Se usa para comunicarse con la red Lightning.',
  },
  de_DE: {
    // main.ts
    1: 'Admin-Passwort nicht gesetzt!',
    2: 'Weboberfläche',
    3: 'Die Weboberfläche ist bereit',
    4: 'Die Weboberfläche ist nicht bereit',

    // interfaces.ts
    100: 'Weboberfläche',
    101: 'Die Weboberfläche von LNDg',

    // actions/resetPassword.ts
    200: 'Passwort zurücksetzen',
    201: 'Passwort erstellen',
    202: 'Ihr LNDg-Passwort zurücksetzen',
    203: 'Ihr LNDg-Passwort erstellen',
    204: 'Erfolg',
    205: 'Ihr Passwort wird unten angezeigt. Ihr Benutzername ist lndg-admin',

    // manifest/index.ts
    300: 'Wird verwendet, um mit dem Lightning-Netzwerk zu kommunizieren.',
  },
  pl_PL: {
    // main.ts
    1: 'Hasło administratora nie zostało ustawione!',
    2: 'Interfejs webowy',
    3: 'Interfejs webowy jest gotowy',
    4: 'Interfejs webowy nie jest gotowy',

    // interfaces.ts
    100: 'Interfejs webowy',
    101: 'Interfejs webowy LNDg',

    // actions/resetPassword.ts
    200: 'Zresetuj hasło',
    201: 'Utwórz hasło',
    202: 'Zresetuj swoje hasło LNDg',
    203: 'Utwórz swoje hasło LNDg',
    204: 'Sukces',
    205: 'Twoje hasło znajduje się poniżej. Twoja nazwa użytkownika to lndg-admin',

    // manifest/index.ts
    300: 'Służy do komunikacji z siecią Lightning.',
  },
  fr_FR: {
    // main.ts
    1: "Mot de passe administrateur non défini !",
    2: 'Interface web',
    3: "L'interface web est prête",
    4: "L'interface web n'est pas prête",

    // interfaces.ts
    100: 'Interface web',
    101: "L'interface web de LNDg",

    // actions/resetPassword.ts
    200: 'Réinitialiser le mot de passe',
    201: 'Créer un mot de passe',
    202: 'Réinitialiser votre mot de passe LNDg',
    203: 'Créer votre mot de passe LNDg',
    204: 'Succès',
    205: "Votre mot de passe est ci-dessous. Votre nom d'utilisateur est lndg-admin",

    // manifest/index.ts
    300: 'Utilisé pour communiquer avec le réseau Lightning.',
  },
} satisfies Record<string, LangDict>
