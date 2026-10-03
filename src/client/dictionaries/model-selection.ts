/**
 * Russian dictionary for the `model` namespace owned by
 * `@deepseek-ai/dsh-client-ui-model-selection`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'model'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'command.label': 'Модель',
  'command.description': 'Выбрать модель для этой беседы',
  'option.loadError': 'Не удалось загрузить каталог: {message}',
  'option.deepseekV4Flash.description': 'Быстрая, эффективная и экономичная; подходит для чётко сформулированных, рутинных или параллельных задач.',
  'option.deepseekV4Pro.description': 'Более сильные возможности автономного кодирования, знаний и сложного рассуждения; подходит для сложных или критичных к качеству задач, но стоит дороже.',
  'provider.account': 'Аккаунт DeepSeek',
  'search.placeholder': 'Поиск моделей…',
  'search.clear': 'Очистить поиск',
  'search.empty': 'Нет подходящих моделей.',
  'trigger.fallback': 'Выбрать модель',
  'trigger.loading': 'Загрузка моделей…',
  'trigger.selectAria': 'Выбрать модель',
  'trigger.aria': 'Выбрать модель, текущая {model}',
  'trigger.ariaEffort': 'Выбрать модель, текущая {model}, уровень рассуждения {effort}',
  'menu.aria': 'Модель и уровень рассуждения',
  'menu.model': 'Модель',
  'menu.effort': 'Уровень рассуждения',
  'effort.providerDefault': 'По умолчанию',
  'status.loading': 'Обновление списка моделей…',
  'error.action': 'Операция с моделью не удалась: {message}',
  'error.sessionInUse': 'Эта сессия уже занята, возможно, другим запущенным экземпляром DSH (например, dsh web или настольным приложением). Завершите другие запущенные экземпляры DSH и повторите попытку.',
  'action.reload': 'Перезагрузить',
  'warning.groupLoad': 'Не удалось загрузить {name}: {message}',
  'empty.models': 'Нет доступных моделей.',
  'blocked.composer': 'Эта модель недоступна — выберите модель, чтобы продолжить',
  'empty.efforts': 'Эта модель не предоставляет уровней рассуждения.',
}
