/**
 * Russian dictionary for the `directory-browser` namespace owned by
 * `@deepseek-ai/dsh-client-ui-directory-picker-browse` (the Select Workspace
 * Directory dialog). Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'directory-browser'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'browser.title': 'Выбор каталога рабочей области',
  'browser.home': 'Домашний каталог',
  'browser.newFolder': 'Новая папка',
  'browser.folderName': 'Имя папки',
  'browser.createIn': 'Новая папка в «{name}»',
  'browser.untitledFolder': 'Папка без названия',
  'browser.create': 'Создать',
  'browser.cancel': 'Отмена',
  'browser.open': 'Открыть',
  'browser.editPath': 'Изменить путь',
  'browser.loading': 'Загрузка…',
  'browser.truncated': 'Слишком много папок; показано только начало списка.',
  'browser.showHidden': 'Показывать скрытые файлы',
}
