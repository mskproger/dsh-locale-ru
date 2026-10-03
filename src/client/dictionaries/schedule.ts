/**
 * Russian dictionary for the `schedule.catalog` namespace owned by
 * `@deepseek-ai/dsh-client-ui-schedule`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'schedule.catalog'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'delete.action': 'Удалить',
  'delete.label': 'Удалить напоминание: {title}',
  'delete.pending': 'Удаление…',
  'frequency.once': 'Однократно',
  'frequency.every': 'Интервал: {value} {unit}',
  'hover.more': 'ещё {count}',
  'list.aria': 'Активные напоминания',
  'list.error': 'Не удалось загрузить напоминания.',
  'list.loading': 'Загрузка напоминаний…',
  'list.nextRun': 'Следующий запуск',
  'list.open': 'Открыть сведения о напоминании: {title}',
  'list.retry': 'Повторить',
  'mark.aria': 'Задач по расписанию: {count}',
  'relative.now': 'Срок наступил',
  'relative.future': 'через {value} {unit}',
  'relative.overdue': 'просрочено на {value} {unit}',
  'status.scheduled': 'Запланировано',
  'status.overdue': 'Просрочено',
  'trigger.label': 'Напоминания',
  'trigger.one': '{count} напоминание',
  'trigger.few': '{count} напоминания',
  'trigger.many': '{count} напоминаний',
  'trigger.other': '{count} напоминаний',
  'unit.day.one': 'день',
  'unit.day.few': 'дня',
  'unit.day.many': 'дней',
  'unit.day.other': 'дней',
  'unit.hour.one': 'час',
  'unit.hour.few': 'часа',
  'unit.hour.many': 'часов',
  'unit.hour.other': 'часов',
  'unit.minute.one': 'минута',
  'unit.minute.few': 'минуты',
  'unit.minute.many': 'минут',
  'unit.minute.other': 'минут',
  'unit.second.one': 'секунда',
  'unit.second.few': 'секунды',
  'unit.second.many': 'секунд',
  'unit.second.other': 'секунд',
}
