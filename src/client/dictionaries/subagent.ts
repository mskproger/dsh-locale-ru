/**
 * Russian dictionary for the `subagent` namespace owned by
 * `@deepseek-ai/dsh-client-ui-subagent`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'subagent'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'diagnostic.corrupt': 'запись сессии повреждена',
  'diagnostic.unsupported': 'версия записи субагента не поддерживается',
  'diagnostic.unavailable': 'запись сессии временно недоступна',
  'duration.seconds': '{seconds} с',
  'duration.minutes': '{minutes} мин {seconds} с',
  'duration.hours': '{hours} ч {minutes} мин {seconds} с',
  'duration.days': '{days} д',
  'duration.daysHours': '{days} д {hours} ч',
  'duration.months': '~{months} мес.',
  'duration.monthsDays': '~{months} мес. {days} д',
  'duration.years': '~{years} г.',
  'duration.yearsMonths': '~{years} г. {months} мес.',
  'duration.exactDays': '{days} д {hours} ч {minutes} мин {seconds} с',
  'duration.exactTitle': 'Общая активная длительность: {duration}',
  'tokens.thousand': '{value}K',
  'tokens.million': '{value}M',
  'tokens.total': 'Токены: {value}',
  'loading.label': 'Загрузка субагентов…',
  'loading.aria': 'Загрузка субагентов',
  'load.error': 'Не удалось загрузить субагентов',
  'retry': 'Повторить',
  'mode.oneShot': 'одноразовый',
  'mode.continuable': 'продолжаемый',
  'activity.running': 'выполняется',
  'activity.inactive': 'не выполняется',
  'branch.collapse': 'Свернуть дочерние субагенты {label}',
  'branch.expand': 'Развернуть дочерние субагенты {label}',
  'count.total.one': '{count} субагент',
  'count.total.few': '{count} субагента',
  'count.total.many': '{count} субагентов',
  'count.total.other': '{count} субагентов',
  'count.running.one': '{count} субагент выполняется',
  'count.running.few': '{count} субагента выполняются',
  'count.running.many': '{count} субагентов выполняются',
  'count.running.other': '{count} субагентов выполняются',
  'switcher.aria': 'Переключить субагента: {title}',
  'tree.aria': 'Сессии субагентов',
  'open.sidebar': 'Открыть {label} в боковой панели',
  'sidebar.chat': 'Чат',
  'readonly.oneShot.title': 'Запись одноразового субагента',
  'readonly.title': 'Этот субагент пока доступен только для чтения',
  'readonly.oneShot.body': 'Одноразовые задачи не принимают последующих сообщений; здесь можно просмотреть полную запись выполнения.',
  'readonly.body': 'Родительская сессия не в сети; откройте её заново, чтобы продолжить отправку сообщений.',
}
