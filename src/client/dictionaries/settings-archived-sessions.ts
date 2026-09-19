/**
 * Russian dictionary for the `settings.archivedSessions` namespace owned by
 * `@deepseek-ai/dsh-client-ui-settings-unarchive-sessions`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'settings.archivedSessions'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  nav: 'Архивные сессии',
  search: 'Поиск архивных сессий',
  loading: 'Чтение сессий…',
  empty: 'Архивных сессий нет.',
  unavailable: 'Здесь нет архивных сессий, которые можно восстановить.',
  emptySearch: 'Нет подходящих сессий.',
  unarchive: 'Восстановить из архива',
  unarchiveNamed: 'Восстановить из архива {title}',
  ungrouped: 'Без группы',
  'time.now': 'только что',
  'time.minutes': '{n} мин',
  'time.hours': '{n} ч',
  'time.days': '{n} дн',
  'time.months': '{n} мес',
  'time.years': '{n} г',
}
