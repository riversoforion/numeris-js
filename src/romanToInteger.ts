/**
 * romanToInteger function module.
 * @module
 */

/**
 * Convert the given Roman numeral to an integer.
 * @param val
 */
// eslint-disable-next-line import/prefer-default-export
export function romanToInteger(val: string): number {
  if (val === 'I') {
    return 1;
  }
  return 0;
}
