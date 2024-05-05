// 导入 axios
const axios = require('axios');
// 导入 ora，用于显示加载中
const ora = require('ora');

const fetchRepoList = async () => {
    const spinner = ora('Loading template list...').start();
    const { data } = await axios.get('https://api.github.com/orgs/neo-it6666/repos')
    spinner.succeed('Template list loaded successfully');
    return data;
}

module.exports = async (projectName) => {
    // 获取模板列表
    const fetchRepoListData = await fetchRepoList();
    const templateNames =  fetchRepoListData.map((item) => item.name);
    console.log(templateNames);
}
