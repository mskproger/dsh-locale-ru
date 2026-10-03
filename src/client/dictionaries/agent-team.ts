/**
 * Russian dictionary for the `agent-team` namespace owned by
 * `@deepseek-ai/dsh-experimental-client-ui-agent-team`. The namespace belongs
 * to an experimental surface outside the shipped web roster, so this
 * dictionary takes effect only where that row is mounted. Key parity is
 * asserted by tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'agent-team'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'trigger': 'Команда агентов',
  'current': 'Текущий диалог',
  'failure': 'Некорректная сохранённая запись команды: {message}',
  'unavailable': 'Команда недоступна',
  'refresh': 'Обновить данные команды',
  'close': 'Закрыть',
  'loading': 'Загрузка команды…',
  'empty': 'Общих задач пока нет',
  'roster': 'Участники',
  'tasks': 'Общие задачи',
  'model': 'Модель',
  'open': 'Открыть диалог с участником',
  'create': 'Новая задача',
  'subject': 'Заголовок задачи',
  'description': 'Описание задачи',
  'blockers': 'id задач-зависимостей (через запятую)',
  'scopes': 'Области записи (через запятую)',
  'save': 'Сохранить',
  'cancel': 'Отмена',
  'edit': 'Изменить',
  'complete': 'Завершить',
  'reopen': 'Переоткрыть',
  'delete': 'Удалить',
  'owner': 'Владелец',
  'unowned': 'Не назначен',
  'blockedBy': 'Зависит от',
  'writeScopes': 'Области записи',
  'ready': 'Готова',
  'blocked': 'Заблокирована зависимостями',
  'conflict': 'Состояние задачи изменилось, данные перезагружены; проверьте и повторите.',
  'memberStatus.running': 'Выполняется',
  'memberStatus.idle': 'Простаивает',
  'memberStatus.inactive': 'Не запущен',
  'memberStatus.provisioning': 'Подготовка',
  'memberStatus.failed': 'Ошибка',
  'status.pending': 'Ожидает',
  'status.in_progress': 'В работе',
  'status.completed': 'Завершена',
  'task.expand': 'Развернуть',
  'task.collapse': 'Свернуть',
}
