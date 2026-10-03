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
  'kill.confirm': 'Нажмите ещё раз для подтверждения',
  'kill.confirmAction': 'Подтвердить остановку',
  'kill.failed': 'Не удалось остановить',
  'kill.stop': 'Остановить задачу {label}',
  'output.error': 'Поток вывода прерван: {error}',
  'output.gap': '… часть вывода пропущена …',
  'row.collapseAria': 'Скрыть вывод {label}',
  'row.expandAria': 'Показать вывод {label}',
  'section.clear': 'Очистить',
  'section.live': 'Выполняется',
  'section.settledCount': 'Завершено: {count}',
  'terminal.collapse': 'Свернуть',
  'terminal.collapseAria': 'Свернуть вывод',
  'terminal.copied': 'Скопировано',
  'terminal.copy': 'Копировать',
  'terminal.done': 'завершено',
  'terminal.exitCode': 'код выхода {code}',
  'terminal.expand': 'Показать ещё {n} строк',
  'terminal.expandAria': 'Развернуть {n} свёрнутых строк вывода',
  'terminal.failed': 'ошибка',
  'terminal.noExitCode': 'нет кода выхода',
  'terminal.noOutput': '(нет вывода)',
  'terminal.running': 'выполняется',
  'terminal.signal': 'сигнал {signal}',
}
