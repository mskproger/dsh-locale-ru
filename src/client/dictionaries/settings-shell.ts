/**
 * Russian dictionary for the `settings.shell` namespace owned by
 * `@deepseek-ai/dsh-client-ui-settings-shell`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'settings.shell'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  title: 'Командная оболочка',
  description: 'Ограничение времени выполнения и объёма вывода каждой команды.',
  timeoutMs: 'Тайм-аут команды (мс)',
  timeoutMsHint: 'Сколько может выполняться одна команда до её завершения.',
  maxOutputBytes: 'Лимит вывода на поток (байт)',
  maxOutputBytesHint: 'Вывод сверх лимита записывается во временный файл, а не теряется.',
  invalidNumber: 'Введите число или оставьте поле пустым, чтобы использовать значение по умолчанию.',
  overridden: 'Переопределено',
  readOnly: 'В этом развёртывании настройки хранятся только для чтения.',
  reset: 'Сбросить к значениям по умолчанию',
  save: 'Сохранить',
  saveFailed: 'Развёртывание не приняло эти значения; они оставлены для исправления.',
  saving: 'Сохранение…',
  unavailable: 'Этот плагин не загружен, поэтому сейчас его нельзя настроить.',
}
