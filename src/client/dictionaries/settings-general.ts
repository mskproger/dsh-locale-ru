/**
 * Russian dictionary for the `settings` namespace owned by
 * `@deepseek-ai/dsh-client-ui-settings-general`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'settings'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'trigger': 'Настройки',
  'desktop.update.available': 'Новая версия',
  'desktop.update.checking': 'Проверка обновлений…',
  'desktop.update.progress': '{percent}%…',
  'desktop.update.verifying': 'Проверка файлов обновления…',
  'desktop.update.installing': 'Подготовка к перезапуску…',
  'desktop.update.ready': 'Установить и перезапустить',
  'desktop.update.retry': 'Повторить обновление',
  'desktop.update.versionDetail': '{label} — V{version}',
  'desktop.update.downloadDetail': 'Загрузка обновления: {percent}%\nЦелевая версия: V{version}',
  'desktop.update.checkFailed': 'Не удалось проверить обновления, попробуйте позже.',
  'desktop.update.downloadFailed': 'Не удалось загрузить обновление, повторите попытку.',
  'desktop.update.installFailed': 'Не удалось установить обновление, попробуйте позже.',
  'desktop.update.checkNetworkFailed': 'Не удалось проверить обновления, попробуйте позже. Соединение прервано, проверьте сеть и повторите попытку.',
  'desktop.update.downloadNetworkFailed': 'Не удалось загрузить обновление, повторите попытку. Соединение прервано, проверьте сеть и повторите попытку.',
  'desktop.update.installNetworkFailed': 'Не удалось установить обновление, попробуйте позже. Соединение прервано, проверьте сеть и повторите попытку.',
  'desktop.update.stopFailed': 'Не удалось безопасно остановить задачи, обновление не установлено. Попробуйте позже.',
  'desktop.update.tasksChanged': 'Запущены новые задачи, подтвердите обновление ещё раз.',
  'desktop.update.tasksUnavailable': 'Не удалось проверить состояние задач, повторите обновление, когда рабочая область будет готова.',
  'title': 'Настройки',
  'close': 'Закрыть',
  'openDocument': 'Открыть файл конфигурации',
  'openDocument.error': 'Не удалось открыть файл конфигурации',
  'general.nav': 'Общие настройки',
  'connection.error': 'Сбой подключения, обновите страницу',
  'connection.connecting': 'Переподключение',
  'connection.connected': 'Подключено',
  'connection.reconnect': 'Сбой подключения, нажмите, чтобы переподключиться',
  'connection.restart': 'Подключение прервано, идёт повторная попытка, нажмите, чтобы переподключиться',
}
