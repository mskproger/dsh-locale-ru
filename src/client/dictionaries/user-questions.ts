/**
 * Russian dictionary for the `question` namespace owned by
 * `@deepseek-ai/dsh-client-ui-user-questions`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'question'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  'error.incomplete': 'Сначала завершите этот вопрос.',
  'error.unanswered': 'Выберите вариант или введите свой ответ.',
  'nav.prev': 'Предыдущий вопрос',
  'nav.next': 'Следующий вопрос',
  'nav.minimize': 'Свернуть карточку вопросов',
  'nav.maximize': 'Развернуть карточку вопросов',
  'nav.cancel': 'Отменить все вопросы',
  'option.recommended': 'Рекомендуется',
  'custom.placeholder': 'Введите свой ответ',
  'action.skip': 'Пропустить',
  'action.next': 'Далее',
  'plan.header': 'Проверка плана',
  'plan.approve': 'Разрешить',
  'plan.decline': 'Отклонить',
  'plan.discuss': 'Запросить изменения',
}
