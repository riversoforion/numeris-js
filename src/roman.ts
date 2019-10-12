import unfold from 'ramda/src/unfold';

export const MIN_VALUE = 1;
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

function digitExtractor(seed: number): false | [number, number] {
  if (seed === 0) {
    return false;
  }
  const digit = DIGITS.find((element: number) => seed >= element) || 1;
  return [digit, seed - digit];
}

export function toRoman(val: number): string {
  checkNumberValue(val);
  return unfold(digitExtractor, val)
    .map((digit: number) => DIGITS_TO_NUMERALS.get(digit))
    .join('');
}

export function fromRoman(val: string): number {
  if (val === 'I') {
    return 1;
  }
  return 0;
}
