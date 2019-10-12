/**
 * integerToRoman function module.
 * @module
 */
import unfold from 'ramda/src/unfold';

/**
 * Minimum supported value for converting to a Roman numeral.
 */
export const MIN_VALUE = 1;
/**
 * Maximum supported value for converting to a Roman numeral.
 */
export const MAX_VALUE = 3999;

const DIGITS_TO_NUMERALS: Map<number, string> = new Map<number, string>([
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]);
const DIGITS: number[] = Array.from(DIGITS_TO_NUMERALS.keys());

function checkNumberValue(val: number): void {
  if (val < MIN_VALUE) {
    throw new Error(`Value must be greater than or equal to ${MIN_VALUE}`);
  }
  if (val > MAX_VALUE) {
    throw new Error(`Value must be less than or equal to ${MAX_VALUE}`);
  }
  if (!Number.isInteger(val)) {
    throw new Error('Value must be an integer');
  }
}

/**
 * Used to unfold the integer into factors that can be expressed as Roman
 * numeral atoms.
 *
 * @param seed The value that is being unfolded
 */
function digitExtractor(seed: number): false | [number, number] {
  if (seed === 0) {
    return false;
  }
  // Find the largest atom that can completely contain our value
  const digit = DIGITS.find((element: number) => seed >= element) || 1;
  // Return that atom and the remainder of the value
  return [digit, seed - digit];
}

/**
 * Convert the given integer to a Roman numeral. The number must be an integral
 * value between 1 and 3999, inclusive.
 *
 * @param val The integer value to convert
 */
export function integerToRoman(val: number): string {
  checkNumberValue(val);
  // Extract the Roman numeral integral atoms, map them to numerals, and
  // concatenate the result
  return unfold(digitExtractor, val)
    .map((digit: number) => DIGITS_TO_NUMERALS.get(digit))
    .join('');
}
