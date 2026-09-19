/**
 * Russian dictionary for the `sidebarPdf` namespace owned by
 * `@deepseek-ai/dsh-client-ui-sidebar-documentpreview`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'sidebarPdf'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  title: 'PDF',
  pageImage: 'PDF, страница {page}',
  loading: 'Чтение…',
  rendering: 'Отрисовка страницы…',
  failed: 'Не удалось отобразить PDF: {message}',
  password: 'Этот PDF защищён паролем; предпросмотр таких файлов не поддерживается.',
  workerFailed: 'Процесс отрисовки PDF не смог продолжить работу. Повторите попытку.',
  unsupported: 'Для предпросмотра PDF требуется полное содержимое файла.',
  retry: 'Повторить',
}
