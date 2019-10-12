/**
 * Main Roman numeral module.
 * @module romanNumeral
 * @see: module:romanToInteger
 * @see: module:integerToRoman
 */
import { integerToRoman, MAX_VALUE, MIN_VALUE } from './integerToRoman';
import { romanToInteger } from './romanToInteger';

/**
 * An object that contains functions for converting between integers and Roman
 * numerals
 */
// eslint-disable-next-line import/prefer-default-export
export const romanNumeral = {
  toInteger: romanToInteger,
  fromInteger: integerToRoman,
  MIN: MIN_VALUE,
  MAX: MAX_VALUE,
};
