/**
 * Russian dictionary for the `open-in-app` namespace owned by
 * `@deepseek-ai/dsh-client-ui-open-in-app`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'open-in-app'

/* jscpd:ignore-start */
// Application labels are product names spelled identically in every locale;
// the owner keeps this same verbatim block shared by its own dictionaries.
// The repetition is the subject of the data, not a refactor candidate.
const PRODUCT_NAMES = {
  'app.cursor': 'Cursor',
  'app.vscode': 'VS Code',
  'app.vscodeinsiders': 'VS Code Insiders',
  'app.windsurf': 'Windsurf',
  'app.zed': 'Zed',
  'app.sublimetext': 'Sublime Text',
  'app.xcode': 'Xcode',
  'app.androidstudio': 'Android Studio',
  'app.intellij': 'IntelliJ IDEA',
  'app.pycharm': 'PyCharm',
  'app.webstorm': 'WebStorm',
  'app.phpstorm': 'PhpStorm',
  'app.goland': 'GoLand',
  'app.rider': 'Rider',
  'app.rustrover': 'RustRover',
  'app.fork': 'Fork',
  'app.sourcetree': 'Sourcetree',
  'app.github': 'GitHub Desktop',
  'app.tower': 'Tower',
  'app.gitkraken': 'GitKraken',
  'app.smartgit': 'SmartGit',
  'app.sublimemerge': 'Sublime Merge',
  'app.ghostty': 'Ghostty',
  'app.warp': 'Warp',
  'app.iterm': 'iTerm2',
  'app.kitty': 'kitty',
  'app.windowsterminal': 'Windows Terminal',
  'app.gitbash': 'Git Bash',
  'app.gnometerminal': 'GNOME Terminal',
  'app.konsole': 'Konsole',
} as const
/* jscpd:ignore-end */

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'open.title': 'Открыть рабочую область в {app}',
  'open.tooltip': 'Открыть локально',
  'open.error': 'Не удалось открыть',
  'menu.toggle': 'Выбрать приложение для открытия',
  'menu.aria': 'Открыть в',
  ...PRODUCT_NAMES,
  'app.finder': 'Finder',
  'app.explorer': 'Проводник',
  'app.filemanager': 'Файловый менеджер',
  'app.terminal': 'Терминал',
}
