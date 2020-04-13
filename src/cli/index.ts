#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();
program
  .version('0.0.1')
  .description('Romanus - a roman numeral converter')
  .option('-i, --integer', 'Convert the given integer value to a roman numeral')
  .option('-r, --roman', 'Convert the given roman numeral to an integer value');

program.parse(process.argv);

if (!program.integer && !program.roman) {
  console.error('Must specify one of --integer or --roman');
  process.exit(1);
}
// If --integer, call integerToRoman
// If --roman, call romanToInteger
// Output the result
