<template>
    <div>
        <div>
            <el-row>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success" @click="btnClick()">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </el-row>
        </div>
        <div style="width: 500px; height: 500px;">
            <tableComp/>
        </div>
        <el-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949">
        </el-switch>
    </div>
</template>

<script>
export default {
    name: "Example",
    data() {
        return {
            value1: true,
            value2: true
        }
    },
    methods: {
        btnClick() {
            this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
            });
        }
    }
}
</script>
<style scoped>
</style>