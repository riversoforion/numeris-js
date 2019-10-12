import { MAX_VALUE, MIN_VALUE, toRoman } from './roman';

describe('integer to roman tests', () => {
  describe('simple numerals', () => {
    test('converts 1 to I', () => {
      expect(toRoman(1)).toEqual('I');
    });

    test('converts 5 to V', () => {
      expect(toRoman(5)).toEqual('V');
    });

    test('converts 10 to X', () => {
      expect(toRoman(10)).toEqual('X');
    });

    test('converts 50 to L', () => {
      expect(toRoman(50)).toEqual('L');
    });

    test('converts 100 to C', () => {
      expect(toRoman(100)).toEqual('C');
    });

    test('converts 500 to D', () => {
      expect(toRoman(500)).toEqual('D');
    });

    test('converts 1000 to M', () => {
      expect(toRoman(1000)).toEqual('M');
    });
  });

  describe('compound numerals', () => {
    test('converts 42 to XLII', () => {
      expect(toRoman(42)).toEqual('XLII');
    });

    test('converts 123 to CXXIII', () => {
      expect(toRoman(123)).toEqual('CXXIII');
    });

    test('converts 987 to CMLXXXVII', () => {
      expect(toRoman(987)).toEqual('CMLXXXVII');
    });
  });

  describe('boundaries', () => {
    test(`values lower than ${MIN_VALUE} throw error`, () => {
      expect(() => toRoman(MIN_VALUE - 1)).toThrow(`${MIN_VALUE}`);
      expect(() => toRoman(MIN_VALUE - 2)).toThrow(`${MIN_VALUE}`);
      expect(() => toRoman(-934359934)).toThrow(`${MIN_VALUE}`);
    });

    test(`values higher than ${MAX_VALUE} throw error`, () => {
      expect(() => toRoman(MAX_VALUE + 1)).toThrow(`${MAX_VALUE}`);
      expect(() => toRoman(MAX_VALUE + 2)).toThrow(`${MAX_VALUE}`);
      expect(() => toRoman(2333048)).toThrow(`${MAX_VALUE}`);
    });

    test('non-integral values throw error', () => {
      expect(() => toRoman(1.1)).toThrow(/integer/);
      expect(() => toRoman(3.14159)).toThrow(/integer/);
      expect(() => toRoman(999.99999)).toThrow(/integer/);
    });
  });
});
