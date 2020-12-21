#!/usr/bin/env node
import chalk from 'chalk';
import { integerToRoman, romanToInteger } from '../index';

const { Command } = require('commander');

const VERSION = process.env.npm_package_version;
const exitBadArgs = () => process.exit(1);
const exitBadInput = () => process.exit(2);

const program = new Command();
program
  .version(VERSION)
  .description('Numeris - a roman numeral converter')
  .option('-i, --integer <number>', 'Convert the given integer value to a roman numeral', parseInt)
  .option('-r, --roman <numeral>', 'Convert the given roman numeral to an integer value')
  .option('-d, --debug', 'Debugging output')
  .option('-b, --bare', 'Only output the result');

program.parse(process.argv);

const color = new chalk.Instance({
  level: program.bare ? 0 : chalk.level,
});

if (!program.integer && !program.roman) {
  console.error(color`{red {bold.inverse ERROR:} Must specify one of --integer or --roman}`);
  exitBadArgs();
}

if (program.debug) {
  console.debug(color`{dim integer =} ${program.integer}`);
  console.debug(color`{dim roman   =} ${program.roman}`);
}

try {
  const result: string | number = program.integer
    ? integerToRoman(program.integer)
    : romanToInteger(program.roman);

  const RESULT_PREFIX = program.bare ? '' : color`{bold.inverse RESULT:} `;
  console.log(color`{green ${RESULT_PREFIX}${result}}`);
}
catch (error) {
  const ERROR_PREFIX = program.bare ? '' : color`{bold.inverse ERROR:} `;
  console.error(color`{red ${ERROR_PREFIX}${error.message}}`);
  exitBadInput();
}
