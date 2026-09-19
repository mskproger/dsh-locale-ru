/**
 * Russian dictionary for the `settings.agentPreset` namespace owned by
 * `@deepseek-ai/dsh-client-ui-agent-preset`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'settings.agentPreset'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  error: 'Не удалось загрузить пресеты агента.',
  userTrust: 'Пользовательский',
  seatHint: 'Пресет агента для сессии, которую вы собираетесь начать',
  headerHint: 'Пресет агента, на котором работает эта сессия; фиксируется при запуске',
  nav: 'Пресеты агента',
  sectionIntro:
    'Пресет — это набор плагинов, с которым работает агент сессии: его инструменты, системные инструкции и возможности. '
    + 'Создайте копию существующего и измените её под себя или позвольте агенту подготовить пресет в режиме Creator.',
  builtIn: 'Встроенный',
  setDefault: 'Сделать по умолчанию',
  view: 'Просмотреть',
  presetStandardName: 'Режим Standard',
  presetStandardDescription:
    'Полнофункциональный агент для разработки: редактирует файлы, выполняет команды, ищет по файлам и в интернете, использует навыки, планы, цели, субагентов и сценарии.',
  presetPtcName: 'Режим PTC',
  presetPtcDescription:
    'Полнофункциональный агент для разработки без инструмента сценариев; остальные инструменты доступны через SDK режима PTC, чтобы модель могла объединять многошаговые операции в одну программу TypeScript.',
  presetMinimalName: 'Режим Minimal',
  presetMinimalDescription:
    'Агент для разработки с одним инструментом — постоянной командной оболочкой.',
  presetCordisName: 'Режим Creator',
  presetCordisDescription:
    'Предназначен для создания пользовательских пресетов агента: все возможности режима Standard, а также инспекция среды выполнения, управление плагинами и руководство по созданию пресетов.',
  duplicate: 'Дублировать',
  duplicateUnavailable: 'В этом развёртывании нет доступного для записи каталога пресетов',
  delete: 'Удалить',
  presetId: 'Идентификатор',
  presetIdPlaceholder: 'my-agent',
  displayName: 'Имя',
  displayNamePlaceholder: 'Отображается в выборе; по умолчанию — идентификатор',
  inUse: 'По умолчанию для новых задач',
  selectionOffDefault: 'По умолчанию',
  builtInGroup: 'Встроенные',
  customGroup: 'Пользовательские',
  noDescription: 'Нет описания.',
  brokenBadge: 'Ошибка загрузки',
  brokenNoCopy: 'Пресет, который не удалось загрузить, нельзя дублировать',
  switchRefused: 'Не удалось переключиться на «{name}»: {reason}',
  copyOf: 'Скопировано из',
  composition: 'Состав (agent.cordis.yml)',
  cancel: 'Отмена',
  close: 'Закрыть',
  retry: 'Повторить',
  copyTitle: 'Дублировать пресет',
  copyIntro:
    'Весь пресет копируется на этом компьютере. Идентификатор становится именем каталога и не может '
    + 'быть изменён позже; всё остальное редактируется в файлах самого пресета.',
  create: 'Создать',
  creating: 'Создание…',
  creatorDraft: 'Создать пользовательский пресет в режиме Creator',
  openLocation: 'Открыть папку',
  showLocation: 'Показать расположение',
  revealedPathLabel: 'Файлы пресета:',
  idRequired: 'Укажите идентификатор пресета.',
  idInvalid: 'Используйте строчные буквы, цифры и дефисы, начиная с буквы или цифры.',
  idTaken: 'Пресет с таким идентификатором уже существует.',
  deleteTitle: 'Удалить этот пресет?',
  deleteDescription:
    'Каталог пресета будет удалён. Сессии, уже работающие на нём, продолжат работу; новые сессии не смогут его выбрать.',
  deleteConfirm: 'Удалить',
  deleting: 'Удаление…',
  showPicker: 'Разрешить переключение режимов агента',
  showPickerBeta: 'Бета',
  showPickerDescription:
    'Если включено, новые задачи могут выбирать режимы Standard, PTC, Creator, Minimal и пользовательские. Если выключено, все новые задачи используют режим по умолчанию (по умолчанию Standard; настраивается). Влияет только на новые задачи.',
  enablePickerToSetDefault: 'Включите выбор режима агента, чтобы задать режим по умолчанию',
  enablePickerToCreate: 'Включите выбор режима агента, чтобы запустить режим Creator',
}
