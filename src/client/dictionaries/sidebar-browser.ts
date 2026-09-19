/**
 * Russian dictionary for the `sidebarBrowser` namespace owned by
 * `@deepseek-ai/dsh-client-ui-sidebar-browser`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'sidebarBrowser'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'type.label': 'Браузер',
  'guide.title': 'Браузер',
  'guide.description': 'Просмотр HTTP(S) страниц',
  'address.placeholder': 'Введите HTTP(S) адрес',
  'address.changed': 'URL изменился',
  back: 'Назад',
  forward: 'Вперёд',
  reload: 'Обновить',
  go: 'Перейти',
  external: 'Открыть в системном браузере',
  'sandbox.disable': 'Отключить ограничения песочницы',
  'sandbox.enable': 'Восстановить ограничения песочницы',
  'sandbox.warning': 'Ограничения песочницы отключены; страница может перенаправлять приложение верхнего уровня и использовать загрузки, модальные диалоги и блокировку ввода.',
  start: 'Введите HTTP(S) адрес, чтобы начать просмотр',
  loading: 'Открытие…',
  'error.empty': 'Введите адрес.',
  'error.invalid': 'Этот адрес недействителен или слишком длинный.',
  'error.protocol': 'Поддерживаются только адреса HTTP и HTTPS; для локальных файлов используйте предпросмотр документа.',
  'error.credentials': 'Адрес не может содержать имя пользователя или пароль.',
  'error.application-origin': 'Во встроенном браузере нельзя открыть само приложение DSH.',
  'web.loadFailed': 'Страница сообщила об ошибке загрузки или запрещает встраивание; попробуйте открыть её в системном браузере.',
  'web.unknown': 'Страница перешла внутри iframe; режим Web не может прочитать её текущий URL.',
}
