import integerToRoman, { MAX_VALUE, MIN_VALUE } from './integerToRoman';
import romanToInteger from './romanToInteger';

const romanNumeral = {
  toInteger: romanToInteger,
  fromInteger: integerToRoman,
  MIN: MIN_VALUE,
  MAX: MAX_VALUE,
};

export default romanNumeral;
