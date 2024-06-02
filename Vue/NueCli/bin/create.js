const {promisify} = require('util');
const axios = require('axios');
const ora = require('ora');
const inquirer = require('inquirer');
const downloadGitRepo = promisify(require('download-git-repo'));
const {downloadDirPath} = require('./const');
const path = require('path');
let ncp = require('ncp');
ncp = promisify(ncp);
const shell = require('shelljs');
const exec = promisify(shell.exec);
const chalk = require('chalk');
const fs = require('fs');
const Metalsmith = require('metalsmith');
let {render} = require('consolidate').ejs;
render = promisify(render);
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const boxen = require('boxen');

const checkVersion = () => {
    const {update} = updateNotifier({pkg, updateCheckInterval: 0});

    if (update) {
        const message = [];

        message.push(
            `${chalk.bgYellow.black(' WARNI: ')}  Nue-Cli is not latest. \n`,
        );

        message.push(
            chalk.grey('current ')
            + chalk.grey(update.current)
            + chalk.grey(' → ')
            + chalk.grey('latest ')
            + chalk.green(update.latest),
        );

        message.push(
            `${chalk.grey('Up to date')
            }npm i -g ${pkg.name}`,
        )

        console.log(boxen(message.join('\n'), {
            padding: 2,
            margin: 2,
            align: 'center',
            borderColor: 'yellow',
            borderStyle: 'round',
        }));
    }
};

const downloadTemplate = async (templateName, version) => {
    let url = `neo-it6666/${templateName}`;
    if (version) {
        url += `#${version}`;
    }
    const downloadPath = `${downloadDirPath}\\${templateName}`;
    await downloadGitRepo(url, downloadPath);
    return downloadPath;
}

const fetchRepoList = async () => {
    const {data} = await axios.get('https://api.github.com/orgs/neo-it6666/repos');
    return data;
}
const waitLoading = (message, fn) => async (...args) => {
    const spinner = ora(message).start();
    try {
        const result = await fn(...args);
        spinner.succeed(`${message} successfully`);
        return result;
    } catch (error) {
        spinner.fail(`${message} failed`);
        throw error;
    }
}

const getTemplateTags = async (currentTemplateName) => {
    const {data} = await axios.get(`https://api.github.com/repos/neo-it6666/${currentTemplateName}/tags`);
    return data;
}

const installDependencies = async (projectName) => {
    shell.cd(projectName);
    // 设置 npm 源为官方源，并等待其执行完成
    await exec('npm install');
}

module.exports = async (projectName) => {
    checkVersion();

    // const destPath = path.resolve(projectName);
    /*console.log(chalk.green(`✨  Creating project in `) + chalk.red(`${destPath}`));

    const fetchRepoListData = await waitLoading('downloading template names...', fetchRepoList)();
    const templateNames = fetchRepoListData.map((item) => item.name);

    const { template } = await inquirer.prompt([
        {
            type: 'list',
            name: 'template',
            message: 'Please choose a template to create project',
            choices: templateNames
        }
    ]);

    const fetchTemplateTags = await waitLoading('downloading template tags...', getTemplateTags)(template);
    const tags = fetchTemplateTags.map((item) => item.name);

    const { version } = await inquirer.prompt({
        name: 'version',
        type: 'list',
        message: 'Please select the version number',
        choices: tags
    })

    console.log(chalk.green(`🗃  Initializing git repository...`));
    const sourcePath = await waitLoading('downloading template...', downloadTemplate)(template, version);*/

    /* const sourcePath = `C:\\Users\\BNTang\\.nue-template\\vue-advanced-template`;
     const askPath = path.join(sourcePath, 'ask.js');
     if (!fs.existsSync(askPath)) {
         await waitLoading('copying template...', ncp)(sourcePath, destPath);
     } else {
         // 处理用户输入
         await new Promise((resolve, reject) => {
             // 处理用户输入
             Metalsmith(__dirname)
                 // 配置源目录
                 .source(sourcePath)
                 // 配置目标目录
                 .destination(destPath)
                 // 注册一个插件
                 .use(async (files, metal, done) => {
                     // 获取元数据
                     const args = require(askPath);
                     // 执行询问
                     const result = inquirer.prompt(args);
                     // 将询问的结果挂载到 metal.metadata() 上，这样在下一个插件中就可以获取到询问的结果
                     const data = await result;
                     const meta = metal.metadata();
                     Object.assign(meta, data);
                     done();
                 })
                 .use(async (files, metal, done) => {
                     // 从 metal.metadata() 获取到用户输入的数据
                     const meta = metal.metadata();
                     Reflect.ownKeys(files).forEach(async (file) => {
                         // 判断是否是模板文件
                         if (file.includes('js') || file.includes('json')) {
                             // 判断是否需要编译
                             const fileContent = files[file].contents.toString();
                             if (fileContent.includes('<%')) {
                                 const result = await render(fileContent, meta);
                                 files[file].contents = Buffer.from(result);
                             }
                         }
                     });
                     done();
                 })
                 .build((err) => {
                     if (err) {
                         reject(err);
                     } else {
                         resolve();
                     }
                 });
         });
     }*/

    /*console.log(chalk.green(`📦  Installing additional dependencies...`));
    try {
        await waitLoading('installing dependencies...', installDependencies)(projectName);
    } catch (error) {
        console.error(`Failed to install dependencies: ${error.message}`);
        process.exit(1); // 退出程序并返回错误码
    }

    console.log(chalk.green(` Successfully created project ${projectName}`));
    console.log(chalk.green(` Get started with the following commands:`));
    console.log(chalk.magenta(` $ cd ${projectName}`));
    console.log(chalk.magenta(` $ npm run serve`));*/
}
