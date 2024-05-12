// 导入 axios
const axios = require('axios');
// 导入 ora，用于显示加载中
const ora = require('ora');
// 导入 inquirer，用于命令行交互
const inquirer = require('inquirer');

const fetchRepoList = async () => {
    const spinner = ora('Loading template list...').start();
    const {data} = await axios.get('https://api.github.com/orgs/neo-it6666/repos')
    spinner.succeed('Template list loaded successfully');
    return data;
}

const waitLoading = async ( message, fn) => {
    const spinner = ora(message).start();
    const result = await fn();
    spinner.succeed(`${message} successfully`);
    return result;
}

// 获取模板标签，也就是版本号
const getTemplateTags = async (currentTemplateName) => {
    const spinner = ora('Loading tags...').start();
    const {data} = await axios.get(`https://api.github.com/repos/neo-it6666/${currentTemplateName}/tags`)
    spinner.succeed('Tags loaded successfully');
    return data;
}

module.exports = async (projectName) => {
    // 获取模板列表

    const fetchRepoListData = await fetchRepoList();
    const templateNames = fetchRepoListData.map((item) => item.name);
    console.log(templateNames);

    // 选择模板
    const {template} = await inquirer.prompt([
        {
            type: 'list',
            name: 'template',
            message: 'Please choose a template to create project',
            choices: templateNames
        }
    ]);
    console.log(template);

    // 获取模板标签
    const fetchTemplateTags = await getTemplateTags(template);
    const tags = fetchTemplateTags.map((item) => item.name);
    console.log(tags);

    const { version } = await inquirer.prompt({
        name: 'version',
        type: 'list',
        message: 'Please select the version number',
        choices: tags
    })
    console.log(version);
}
