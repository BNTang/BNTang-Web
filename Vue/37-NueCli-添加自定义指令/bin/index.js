#! /usr/bin/env node

const { program } = require('commander');
const { version } = require('./const');

program.version(version).parse(process.argv);
