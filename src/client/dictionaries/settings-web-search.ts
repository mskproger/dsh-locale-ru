/**
 * Russian dictionary for the `settings.webSearch` namespace owned by
 * `@deepseek-ai/dsh-client-ui-settings-web-search`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'settings.webSearch'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  title: 'Поиск в интернете',
  description: 'Настройка поставщика поиска DeepSeek.',
  apiKey: 'API-ключ',
  apiKeyHint: 'Хранится вне файла настроек. Оставьте пустым, чтобы сохранить текущий ключ.',
  apiKeySet: 'Ключ настроен.',
  apiKeyUnset: 'Ключ не настроен; искать могут только диалоги с моделью аккаунта DeepSeek — через эндпоинт по умолчанию.',
  baseUrl: 'Эндпоинт',
  baseUrlHint: 'Оставьте пустым, чтобы использовать адрес поставщика по умолчанию.',
  maxUses: 'Макс. поисков на запрос',
  maxUsesHint: 'Сколько раз один запрос может искать, прежде чем должен ответить.',
  invalidNumber: 'Введите число или оставьте поле пустым, чтобы использовать значение по умолчанию.',
  overridden: 'Переопределено',
  readOnly: 'В этом развёртывании настройки хранятся только для чтения.',
  reset: 'Сбросить к значениям по умолчанию',
  save: 'Сохранить',
  saveFailed: 'Развёртывание не приняло эти значения; они оставлены для исправления.',
  saving: 'Сохранение…',
  unavailable: 'Этот плагин не загружен, поэтому сейчас его нельзя настроить.',
}
