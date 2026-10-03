/**
 * Russian dictionary for the `settings.agentLoop` namespace owned by
 * `@deepseek-ai/dsh-client-ui-settings-agent-loop`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'settings.agentLoop'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  title: 'Цикл агента',
  description: 'Управление тем, как агент выполняет вызовы инструментов.',
  maxParallel: 'Параллельные вызовы инструментов',
  maxParallelHint: 'Верхняя граница одновременно выполняемых параллельных вызовов в одном шаге.',
  invalidNumber: 'Введите число или оставьте поле пустым, чтобы использовать значение по умолчанию.',
  overridden: 'Переопределено',
  readOnly: 'В этом развёртывании настройки хранятся только для чтения.',
  reset: 'Сбросить к значениям по умолчанию',
  save: 'Сохранить',
  saveFailed: 'Развёртывание не приняло эти значения; они оставлены для исправления.',
  saving: 'Сохранение…',
  unavailable: 'Этот плагин не загружен, поэтому сейчас его нельзя настроить.',
}
