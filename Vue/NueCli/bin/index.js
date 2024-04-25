#! /usr/bin/env node

const { program } = require('commander');
const { version } = require('./const');

program
  .command('create')
  .alias('c')
  .description('create a new project powered by nue-cli-service')
  .action(() => {
    console.log('创建一个 Nue 项目');
  });
program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  nue create <app-name>  ');
});
program
  .version(version)
  .parse(process.argv);
