export function toRoman(val: number): string {
  if (val === 1) {
    return 'I';
  }
  return '';
}

export function fromRoman(val: string): number {
  if (val === 'I') {
    return 1;
  }
  return 0;
}
