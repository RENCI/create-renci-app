#! /usr/bin/env node

require = require('esm')({});

const args = process.argv.slice(2)
require('./src/cli').cli(args);
