// 导入 util 模块
const {promisify} = require('util');
// 导入 axios
const axios = require('axios');
// 导入 ora，用于显示加载中
const ora = require('ora');
// 导入 inquirer，用于命令行交互
const inquirer = require('inquirer');
// 导入 download-git-repo，用于下载模板
const downloadGitRepo = promisify(require('download-git-repo'));
// 导入 downloadDirPath，用于获取下载路径
const {downloadDirPath} = require('./const');
const path = require('path');
let ncp = require('ncp');
ncp = promisify(ncp);
const shell = require('shelljs');
const exec = promisify(shell.exec);
const downloadTemplate = async (templateName, version) => {
    // 组织机构的名称/模板名称#版本号
    // 1.拼接模板在github上的地址
    let url = `neo-it6666/${templateName}`;

    if (version) {
        url += `#${version}`;
    }

    // 2.拼接存储下载好的模板的路径
    const downloadPath = `${downloadDirPath}\\${templateName}`;
    await downloadGitRepo(url, downloadPath);
    return downloadPath;
}

const fetchRepoList = async () => {
    const {data} = await axios.get('https://api.github.com/orgs/neo-it6666/repos')
    return data;
}

const waitLoading = (message, fn) => async (...args) => {
    const spinner = ora(message).start();
    const result = await fn(...args);
    spinner.succeed(`${message} successfully`);
    return result;
}
// 获取模板标签，也就是版本号
const getTemplateTags = async (currentTemplateName) => {
    const {data} = await axios.get(`https://api.github.com/repos/neo-it6666/${currentTemplateName}/tags`)
    return data;
}
const installDependencies = async (projectName) => {
    shell.cd(projectName);
    await exec('npm install');
}

module.exports = async (projectName) => {
    /*// 获取模板列表
    const fetchRepoListData = await waitLoading('downloading template names...', fetchRepoList)();
    const templateNames = fetchRepoListData.map((item) => item.name);

    // 选择模板
    const {template} = await inquirer.prompt([
        {
            type: 'list',
            name: 'template',
            message: 'Please choose a template to create project',
            choices: templateNames
        }
    ]);

    // 获取模板标签
    const fetchTemplateTags = await waitLoading('downloading template tags...', getTemplateTags)(template);
    const tags = fetchTemplateTags.map((item) => item.name);

    const {version} = await inquirer.prompt({
        name: 'version',
        type: 'list',
        message: 'Please select the version number',
        choices: tags
    })

    const destPath = waitLoading('downloading template...', downloadTemplate)(template, version)
    console.log(destPath)*/

    // 将用户目录中的模板拷贝到执行指令路径中
    /*const destPath = 'C:\\Users\\BNTang\\.nue-template\\vue-simple-template';
    await waitLoading('copying template...', ncp)(destPath, path.resolve(projectName));*/
    // console.log(path.resolve(projectName));

    // 执行 npm install
    await waitLoading('installing dependencies...', installDependencies)(projectName);
}
