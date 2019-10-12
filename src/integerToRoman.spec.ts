import { integerToRoman, MAX_VALUE, MIN_VALUE } from './integerToRoman';

describe('integer to roman tests', () => {
  describe('simple numerals', () => {
    test('converts 1 to I', () => {
      expect(integerToRoman(1)).toEqual('I');
    });

    test('converts 5 to V', () => {
      expect(integerToRoman(5)).toEqual('V');
    });

    test('converts 10 to X', () => {
      expect(integerToRoman(10)).toEqual('X');
    });

    test('converts 50 to L', () => {
      expect(integerToRoman(50)).toEqual('L');
    });

    test('converts 100 to C', () => {
      expect(integerToRoman(100)).toEqual('C');
    });

    test('converts 500 to D', () => {
      expect(integerToRoman(500)).toEqual('D');
    });

    test('converts 1000 to M', () => {
      expect(integerToRoman(1000)).toEqual('M');
    });
  });

  describe('compound numerals', () => {
    test('converts 42 to XLII', () => {
      expect(integerToRoman(42)).toEqual('XLII');
    });

    test('converts 123 to CXXIII', () => {
      expect(integerToRoman(123)).toEqual('CXXIII');
    });

    test('converts 987 to CMLXXXVII', () => {
      expect(integerToRoman(987)).toEqual('CMLXXXVII');
    });
  });

  describe('boundaries', () => {
    test(`values lower than ${MIN_VALUE} throw error`, () => {
      expect(() => integerToRoman(MIN_VALUE - 1)).toThrow(`${MIN_VALUE}`);
      expect(() => integerToRoman(MIN_VALUE - 2)).toThrow(`${MIN_VALUE}`);
      expect(() => integerToRoman(-934359934)).toThrow(`${MIN_VALUE}`);
    });

    test(`values higher than ${MAX_VALUE} throw error`, () => {
      expect(() => integerToRoman(MAX_VALUE + 1)).toThrow(`${MAX_VALUE}`);
      expect(() => integerToRoman(MAX_VALUE + 2)).toThrow(`${MAX_VALUE}`);
      expect(() => integerToRoman(2333048)).toThrow(`${MAX_VALUE}`);
    });

    test('non-integral values throw error', () => {
      expect(() => integerToRoman(1.1)).toThrow(/integer/);
      expect(() => integerToRoman(3.14159)).toThrow(/integer/);
      expect(() => integerToRoman(999.99999)).toThrow(/integer/);
    });
  });
});
