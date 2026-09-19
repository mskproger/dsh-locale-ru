/**
 * Russian dictionary for the `schedule.catalog` namespace owned by
 * `@deepseek-ai/dsh-client-ui-schedule`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'schedule.catalog'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'trigger.one': '{count} напоминание',
  'trigger.few': '{count} напоминания',
  'trigger.many': '{count} напоминаний',
  'trigger.other': '{count} напоминаний',
  'list.aria': 'Активные напоминания',
  'status.scheduled': 'Запланировано',
  'status.overdue': 'Просрочено',
  'frequency.once': 'Однократно',
  'frequency.every': 'Интервал: {value} {unit}',
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
  'relative.now': 'Срок наступил',
  'relative.future': 'через {value} {unit}',
  'relative.overdue': 'просрочено на {value} {unit}',
}
