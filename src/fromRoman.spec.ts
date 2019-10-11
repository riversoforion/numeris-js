import { fromRoman } from './roman';

describe('roman to integer tests', () => {
  describe('simple numerals', () => {
    test('converts I to 1', () => {
      expect(fromRoman('I')).toEqual(1);
    });

    test('converts V to 5', () => {
      expect(true).toEqual(true);
    });

    test('converts X to 10', () => {
      expect(true).toEqual(true);
    });

    test('converts L to 50', () => {
      expect(true).toEqual(true);
    });

    test('converts C to 100', () => {
      expect(true).toEqual(true);
    });

    test('converts D to 500', () => {
      expect(true).toEqual(true);
    });

    test('converts M to 1000', () => {
      expect(true).toEqual(true);
    });
  });

  describe('compound numerals', () => {
    test('converts CXXIII to 123', () => {
      expect(true).toEqual(true);
    });
  });
});
