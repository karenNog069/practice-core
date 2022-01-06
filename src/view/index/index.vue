<!--首页-->
<template>
    <el-container>
        <el-header>
            <el-button @click="loginOut">注销</el-button>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import js from "./index";

export default js;
</script>

<style scoped>

</style>