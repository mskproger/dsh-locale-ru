/**
 * Russian dictionary for the `settings.subagent` namespace owned by
 * `@deepseek-ai/dsh-client-ui-settings-subagent`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'settings.subagent'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  subagentTitle: 'Субагенты',
  subagentDescription: 'Настройка глубины рекурсии, числа субагентов и моделей.',
  subagentLimitsTitle: 'Ограничения',
  subagentMaxDepth: 'Максимальная глубина рекурсии',
  subagentDepthHelpLabel: 'О максимальной глубине рекурсии',
  subagentDepthHelp: 'Ограничивает, сколько уровней субагентов может создавать агент.',
  subagentDepthInvalid: 'Введите целое число от 0.',
  subagentDepthZero: 'Отключить субагентов',
  subagentDepthOne: 'Субагентов может создавать только главный агент',
  subagentDepthOverride: 'Если инструмент задаёт собственную максимальную глубину рекурсии, приоритет у его настройки.',
  subagentMaxActive: 'Лимит параллельных субагентов',
  subagentCapacityHelpLabel: 'О лимите параллельных субагентов',
  subagentCapacityHelp: 'Общее число одновременно работающих субагентов одного главного агента на всех уровнях рекурсии. Главный агент не учитывается. При достижении лимита новые запуски отклоняются.',
  subagentCapacityInvalid: 'Введите целое число от 1.',
  subagentModelSelectionTitle: 'Выбор моделей',
  subagentModelSelectionToggle: 'Разрешить агентам выбирать модели для субагентов',
  subagentModelSelectionChoose: 'При включении агенты смогут выбирать поставщика, модель и уровень рассуждения для каждого субагента из авторизованных моделей ниже. Действует только для новых сессий.',
  subagentModelSelectionOff: 'Субагенты используют настроенные значения по умолчанию или наследуют модель родительского агента. Сохранённый выбор моделей сохраняется.',
  subagentModelSelectionAllowed: 'Модели, которые могут выбирать агенты',
  subagentModelSelectionLoading: 'Загрузка моделей…',
  subagentModelSelectionLoadFailed: 'Не удалось загрузить модели.',
  subagentModelSelectionEmpty: 'Ни один поставщик сейчас не предлагает модели.',
  subagentModelSelectionPartial: 'Часть поставщиков не удалось загрузить; сохранённый выбор можно удалить.',
  subagentModelSelectionRequired: 'Перед сохранением выберите хотя бы одну модель.',
  subagentModelSelectionConflict: 'Настройки изменены в другом месте. Отбросьте черновик и попробуйте снова.',
  subagentModelSelectionRetry: 'Повторить',
  subagentModelSelectionUnavailable: 'Сейчас недоступно',
  subagentModelSelectionUnavailableGroup: 'Сохранено, но сейчас недоступно',
  overridden: 'Переопределено',
  readOnly: 'В этом развёртывании настройки хранятся только для чтения.',
  reset: 'Сбросить к значениям по умолчанию',
  save: 'Сохранить',
  saveFailed: 'Развёртывание не приняло эти значения; они оставлены для исправления.',
  saving: 'Сохранение…',
  unavailable: 'Этот плагин не загружен, поэтому сейчас его нельзя настроить.',
}
