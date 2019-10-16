/**
 * Main Roman numeral module.
 * @module romanNumeral
 * @see: module:romanToInteger
 * @see: module:integerToRoman
 */
import { integerToRoman, MAX_VALUE, MIN_VALUE } from './integerToRoman';
import { romanToInteger } from './romanToInteger';

// TODO Restructure this entire thing
// I like the RomanNumeral interface and the corresponding constant array. I
// think we can export those. But that would cause confusion with the
// `romanNumeral` constant below. Honestly, I really don't think we need that.
// Instead, we can use the functions as-is, or maybe rename them to be shorter.
// Also, separate the "values" from the "conversions". I need to really research
// and think about the best way to structure the modules for purposes of
// exposing the library to client code.
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
