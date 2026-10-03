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
  'error.resubmit': 'Ответ не был доставлен до продолжения работы; отправьте его снова.',
  'error.unavailable': 'Сейчас отправить нельзя; попробуйте через мгновение.',
  'nav.cancel': 'Отменить все вопросы',
  'nav.close': 'Закрыть панель — её можно снова открыть из вызова инструмента',
  'nav.maximize': 'Развернуть карточку вопросов',
  'nav.minimize': 'Свернуть карточку вопросов',
  'nav.next': 'Следующий вопрос',
  'nav.prev': 'Предыдущий вопрос',
  'option.recommended': 'Рекомендуется',
  'custom.placeholder': 'Введите свой ответ',
  'action.skip': 'Пропустить',
  'action.next': 'Далее',
  'plan.header': 'Проверка плана',
  'plan.approve': 'Разрешить',
  'plan.decline': 'Отклонить',
  'plan.discuss': 'Запросить изменения',
  'reply.answerLabel': 'Ответ: ',
  'reply.close': 'Свернуть сведения о вопросе',
  'reply.label': 'Ответить на ранее ожидающие вопросы',
  'reply.open': 'Развернуть сведения о вопросе',
  'reply.skipped': 'Пропущено',
  'review.skipped': 'Этот вопрос был пропущен.',
  'review.status': 'Отвечено',
  'status.sent': 'Ответ отправлен; панель не удалось закрыть.',
  'wait.continued': 'Работа продолжена — вы всё ещё можете ответить',
  'wait.countdown': 'Продолжение через {seconds} с',
  'wait.held': 'Ожидание вашего ответа',
  'wait.paused': 'Пауза · осталось {seconds} с',
  'wait.takeTime': 'Не спешите',
}
