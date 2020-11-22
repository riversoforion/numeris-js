# Romanus: JavaScript implementation

*TODO: CI & NPM links*

The JavaScript implementation of Romanus is actually implemented in TypeScript.
This gives it full JavaScript compatibility, as well as type information for
TypeScript clients.

## Library Usage

###### ES6 modules/TypeScript

```js
import { integerToRoman, romanToInteger } from 'romanus';

const intVal = romanToInteger('CXXVI');
const numeral = integerToRoman(932);
```

###### Node.js/CommonJS

```js
const { integerToRoman, romanToInteger } = require('romanus');

const intVal = romanToInteger('CXXVI');
const numeral = integerToRoman(932);
```

## Command Line Usage

Install the Romanus package globally:

```
# NPM
$ npm i -g romanus
# Yarn
$ yarn global add romanus
```

If the above command installs Romanus somewhere in the user's path, then it can
be run directly:

```
$ romanus --integer 139
RESULT: CXXXIX
$ romanus --roman MDCII
RESULT: 1602
```

Use the `-h` or `--help` flag to see all options.

## Development

Romanus is a straightforward TypeScript project. Yarn is the build tool of
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
