/**
 * Russian dictionary for the `job` namespace owned by
 * `@deepseek-ai/dsh-client-ui-jobs`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'job'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'count.live.one': '{count} фоновая задача выполняется',
  'count.live.few': '{count} фоновые задачи выполняются',
  'count.live.many': '{count} фоновых задач выполняются',
  'count.live.other': '{count} фоновых задач выполняется',
  'count.idle.one': '{count} фоновая задача',
  'count.idle.few': '{count} фоновые задачи',
  'count.idle.many': '{count} фоновых задач',
  'count.idle.other': '{count} фоновых задач',
  'list.aria': 'Фоновые задачи',
  'status.running': 'выполняется',
  'status.stopping': 'останавливается',
  'status.completed': 'завершено',
  'status.killed': 'отменено',
  'status.failed': 'ошибка',
  'duration.seconds': '{seconds} с',
  'duration.minutes': '{minutes} мин {seconds} с',
  'duration.hours': '{hours} ч {minutes} мин',
  'duration.title.live': 'Выполняется {duration}',
  'duration.title.done': 'Заняло {duration}',
}
