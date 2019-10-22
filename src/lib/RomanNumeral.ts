export interface RomanNumeral {
  value: number;
  symbol: 'M' | 'CM' | 'D' | 'CD' | 'C' | 'XC' | 'L' | 'XL' | 'X' | 'IX' | 'V' | 'IV' | 'I';
  allowMultiples: boolean;
}

export const ALL_ROMAN_NUMERALS: RomanNumeral[] = [
  { value: 1000, symbol: 'M', allowMultiples: true },
  { value: 900, symbol: 'CM', allowMultiples: false },
  { value: 500, symbol: 'D', allowMultiples: false },
  { value: 400, symbol: 'CD', allowMultiples: false },
  { value: 100, symbol: 'C', allowMultiples: true },
  { value: 90, symbol: 'XC', allowMultiples: false },
  { value: 50, symbol: 'L', allowMultiples: false },
  { value: 40, symbol: 'XL', allowMultiples: false },
  { value: 10, symbol: 'X', allowMultiples: true },
  { value: 9, symbol: 'IX', allowMultiples: false },
  { value: 5, symbol: 'V', allowMultiples: false },
  { value: 4, symbol: 'IV', allowMultiples: false },
  { value: 1, symbol: 'I', allowMultiples: true },
];
