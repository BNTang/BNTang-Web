#! /usr/bin/env node

const { program } = require('commander');
const { version } = require('./const');

const commandMap = {
  create: {
    alias: 'c',
    description: 'create a new project powered by vue-cli-service',
    example: 'nue-cli create <app-name>',
  },
  add: {
    alias: 'a',
    description: 'install a plugin and invoke its generator in an already created project',
    example: 'nue-cli add [options] <plugin> [pluginOptions]',
  },
  '*': {
    alias: '',
    description: 'command not found',
    example: '',
  },
};

// program
//   .command('create')
//   .alias('c')
//   .description('create a new project powered by vue-cli-service')
//   .action(() => {
//     console.log('创建一个 Vue 项目');
//   });

Reflect.ownKeys(commandMap).forEach((key) => {
  const value = commandMap[key];
  program
    .command(key)
    .alias(value.alias)
    .description(value.description)
    .action(() => {
      if (key === '*') {
        console.log(value.description);
      } else {
        console.log(value.description);
      }
    });
});

// program.on('--help', () => {
//   console.log('Examples:');
//   console.log('  nue-cli create <app-name>  ');
// });

program.on('--help', () => {
  console.log('Examples:');
  Reflect.ownKeys(commandMap).forEach((key) => {
    const value = commandMap[key];
    console.log(`  ${value.example}`);
  });
});

program.version(version).parse(process.argv);
