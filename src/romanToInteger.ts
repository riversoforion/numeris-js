/**
 * romanToInteger function module.
 * @module
 */
// eslint-disable-next-line no-unused-vars
import { ALL_ROMAN_NUMERALS, RomanNumeral } from './lib/RomanNumeral';

function normalizeNumeralValue(numeral: string): string {
  return numeral.trim().toUpperCase();
}

function checkNumeralValue(numeral: string): void {
  if (numeral.length === 0) {
    throw new Error('No value provided');
  }
  if (!/^[IVXLCDM]+$/.test(numeral)) {
    throw new Error('Value contains invalid characters');
  }
}

class ParseState {
  private remainingNumerals = [...ALL_ROMAN_NUMERALS];

  private remainingToParse: string;

  constructor(numeral: string) {
    this.remainingToParse = numeral;
  }

  public get remaining(): string {
    return this.remainingToParse;
  }

  public get currentNumeral(): RomanNumeral {
    return this.remainingNumerals[0];
  }

  public advanceNumeral(): RomanNumeral | undefined {
    return this.remainingNumerals.shift();
  }

  public isParsingComplete(): boolean {
    return this.remainingNumerals.length === 0;
  }

  public removeCurrent(): void {
    this.remainingToParse = this.remainingToParse.substr(this.currentNumeral.symbol.length);
  }
}

function decomposeNumeral(numeral: string): number[] {
  const parseState = new ParseState(numeral);
  const numbers: number[] = [];
  while (!parseState.isParsingComplete()) {
    const current = parseState.currentNumeral;
    if (parseState.remaining.startsWith(current.symbol)) {
      numbers.push(current.value);
      parseState.removeCurrent();
      if (!current.allowMultiples) {
        parseState.advanceNumeral();
      }
    }
    else {
      parseState.advanceNumeral();
    }
  }
  if (parseState.remaining) {
    throw new Error('Value not formatted correctly');
  }
  return numbers;
}

/**
 * Convert the given Roman numeral to an integer.
 * @param numeral
 */
export function romanToInteger(numeral: string): number {
  const normalized = normalizeNumeralValue(numeral);
  checkNumeralValue(normalized);
  const digits: number[] = decomposeNumeral(normalized);
  return digits.reduce((sum, num) => sum + num);
}
