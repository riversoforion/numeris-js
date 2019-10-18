import { romanToInteger } from './romanToInteger';

describe('roman to integer tests', () => {
  describe('simple numerals', () => {
    test('converts I to 1', () => {
      expect(romanToInteger('I')).toEqual(1);
    });

    test('converts V to 5', () => {
      expect(romanToInteger('V')).toEqual(5);
    });

    test('converts X to 10', () => {
      expect(romanToInteger('X')).toEqual(10);
    });

    test('converts L to 50', () => {
      expect(romanToInteger('L')).toEqual(50);
    });

    test('converts C to 100', () => {
      expect(romanToInteger('C')).toEqual(100);
    });

    test('converts D to 500', () => {
      expect(romanToInteger('D')).toEqual(500);
    });

    test('converts M to 1000', () => {
      expect(romanToInteger('M')).toEqual(1000);
    });
  });

  describe('compound numerals', () => {
    test('converts XLII to 42', () => {
      expect(romanToInteger('XLII')).toEqual(42);
    });

    test('converts CXXIII to 123', () => {
      expect(romanToInteger('CXXIII')).toEqual(123);
    });

    test('converts CMLXXXVII to 987', () => {
      expect(romanToInteger('CMLXXXVII')).toEqual(987);
    });
  });

  describe('boundaries', () => {
    test('invalid characters throw an error', () => {
      expect(() => romanToInteger('ABCDEF')).toThrow(/invalid characters/);
      expect(() => romanToInteger('MMDL1')).toThrow(/invalid characters/);
      expect(() => romanToInteger('934;-)')).toThrow(/invalid characters/);
    });

    test('empty string throws an error', () => {
      expect(() => romanToInteger('')).toThrow('No value provided');
      expect(() => romanToInteger('    ')).toThrow('No value provided');
    });

    test('invalid format throws an error', () => {
      expect(() => romanToInteger('CMM')).toThrow(/not formatted correctly/);
      expect(() => romanToInteger('ID')).toThrow(/not formatted correctly/);
      expect(() => romanToInteger('MMCCD')).toThrow(/not formatted correctly/);
      expect(() => romanToInteger('XLXL')).toThrow(/not formatted correctly/);
    });

    test('lower case characters are accepted', () => {
      expect(() => romanToInteger('mcmxl')).not.toThrow();
      expect(() => romanToInteger(' cclxi ')).not.toThrow();
      expect(() => romanToInteger('mmCCxXiI')).not.toThrow();
    });
  });
});
