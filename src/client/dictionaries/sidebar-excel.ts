/**
 * Russian dictionary for the `sidebarExcel` namespace owned by
 * `@deepseek-ai/dsh-client-ui-sidebar-documentpreview`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'sidebarExcel'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  title: 'Таблица',
  loading: 'Рендеринг документа…',
  retry: 'Повторить',
  language: 'ru',
  invalid: 'Не удалось открыть эту таблицу. Проверьте формат, содержимое или защиту паролем.',
  encoding: 'Эту кодировку текста не удалось прочитать. Сохраните файл в UTF-8 или UTF-16 с BOM и повторите.',
  timeout: 'Время открытия книги истекло. Попробуйте файл меньшего размера.',
  tooLarge: 'Эта книга превышает лимит размера предпросмотра.',
  formulaWarning: 'Эта книга содержит формулы. Отображаемые результаты могут быть неполными или неточными.',
  unsupportedNotice: 'Предпросмотр не поддерживает {features} в этой книге. Откройте её в системном приложении для полного просмотра.',
  charts: 'диаграммы',
  images: 'изображения',
  shapes: 'фигуры',
  conditionalFormatting: 'условное форматирование',
  featureSeparator: ', ',
}
