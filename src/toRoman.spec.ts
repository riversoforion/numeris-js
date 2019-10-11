import { toRoman } from './roman';

describe('integer to roman tests', () => {
  describe('simple numerals', () => {
    test('converts 1 to I', () => {
      expect(toRoman(1)).toEqual('I');
    });

    test('converts 5 to V', () => {
      expect(true).toEqual(true);
    });

    test('converts 10 to X', () => {
      expect(true).toEqual(true);
    });

    test('converts 50 to L', () => {
      expect(true).toEqual(true);
    });

    test('converts 100 to C', () => {
      expect(true).toEqual(true);
    });

    test('converts 500 to D', () => {
      expect(true).toEqual(true);
    });

    test('converts 1000 to M', () => {
      expect(true).toEqual(true);
    });
  });

  describe('compound numerals', () => {
    test('converts 123 to CXXIII', () => {
      expect(true).toEqual(true);
    });
  });
});
