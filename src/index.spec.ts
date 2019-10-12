import { romanNumeral } from './index';
import { integerToRoman, MAX_VALUE, MIN_VALUE } from './integerToRoman';
import { romanToInteger } from './romanToInteger';

describe('module loading', () => {
  test('module correctly aliases functions', () => {
    expect(romanNumeral.fromInteger).toBe(integerToRoman);
    expect(romanNumeral.toInteger).toBe(romanToInteger);
    expect(romanNumeral.MIN).toBe(MIN_VALUE);
    expect(romanNumeral.MAX).toBe(MAX_VALUE);
  });
});
