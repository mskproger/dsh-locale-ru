/**
 * Russian dictionary for the `locale` namespace owned by
 * `@deepseek-ai/dsh-client-locale`. Key parity is asserted by
 * tests/dictionaries.client.spec.ts.
 */

/** Registered namespace id. */
export const ns = 'locale'

/** Russian dictionary. */
export const dict: Record<string, string> = {
  symbol: '$',
  decimal: ',',
  thousands: ' ',
  thousand: ' тыс.',
  million: ' млн',
  billion: ' млрд',
  trillion: ' трлн',
  rd: '',
}
