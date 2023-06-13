<template>
    <el-container>
        <el-aside>Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
      <router-link to="/exampleComponent">跳转到ExampleComponent</router-link>
      <router-link to="/example">跳转到Example</router-link>
      <router-link to="/mapBoxExample">跳转到MapBox Example</router-link>
    </el-container>
</template>

<script>
export default {
    // Component name "Container" should always be multi-word  vue/multi-word-component-names
    // 这个错误的意思是在 Vue.js 中组件名 "Container" 应该使用多个单词，而不是单个单词。这是因为 Vue.js 的开发者推荐使用多个单词来命名组件，以提高代码的可读性和维护性。
    // 要解决这个问题，你可以考虑给你的组件一个更具描述性的名称，例如 "PageContainer" 或者 "ContentContainer"。这将有助于避免组件名称与 HTML 元素名称冲突，并且更容易理解和使用。
    // 在代码中更新组件名称后，记得在组件的引用处也进行相应的更改。
    name: "ContentContainer"
}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
    height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
