# Numeris: JavaScript implementation

*TODO: CI & NPM links*

The JavaScript implementation of Numeris is actually implemented in TypeScript.
This gives it full JavaScript compatibility, as well as type information for
TypeScript clients.

## Library Usage

###### ES6 modules/TypeScript

```js
import { integerToRoman, romanToInteger } from 'numeris';

const intVal = romanToInteger('CXXVI');
const numeral = integerToRoman(932);
```

###### Node.js/CommonJS

```js
const { integerToRoman, romanToInteger } = require('numeris');

const intVal = romanToInteger('CXXVI');
const numeral = integerToRoman(932);
```

## Command Line Usage

Install the Numeris package globally:

```
# NPM
$ npm i -g numeris
# Yarn
$ yarn global add numeris
```

If the above command installs Numeris somewhere in the user's path, then it can
be run directly:

```
$ numeris --integer 139
RESULT: CXXXIX
$ numeris --roman MDCII
RESULT: 1602
```

Use the `-h` or `--help` flag to see all options.

## Development

Numeris is a straightforward TypeScript project. Yarn is the build tool of
choice, but NPM should work the same way.

The following scripts in `package.json` will help with development:

| Script          | Description                                                                               |
|:----------------|:------------------------------------------------------------------------------------------|
| `clean`         | Resets the workspace by deleting build artifacts                                          |
| `lint`          | Checks code for cleanliness                                                               |
| `test`          | Runs unit tests (Jest)                                                                    |
| `coverage`      | Runs unit tests with coverage reports                                                     |
| `build:compile` | Transpiles the TypeScript code                                                            |
| `build:full`    | Full rebuild of the project: `clean`, `lint`, `coverage`, `build:compile`                 |
| `build`         | Default build: `lint`, `build:compile`                                                    |
| `cli:start`     | Starts the CLI with nodemon in a watch mode. Only useful with program arguments.          |
| `cli:test`      | Executes the CLI. Only useful with program arguments.                                     |
| `cli:install`   | Performs a full rebuild and links the CLI executable into the system as a global package. |
| `cli:uninstall` | Removes the CLI executable from the system.                                               |
