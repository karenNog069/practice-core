<template>
    <div class="login-container">
        <div class="login-form">
            <span class="login-form-title">Login</span>
            <div class="login-form-cube">
                <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules">
                    <el-form-item prop="userName">
                        <el-input placeholder="username" v-model="loginForm.userName">
                            <i slot="prefix" class="el-input__icon el-icon-user"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="passWord">
                        <el-input placeholder="password" type="password" v-model="loginForm.passWord">
                            <i slot="prefix" class="el-input__icon el-icon-key"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
                <div class="do-login">
                    <el-button type="success" icon="el-icon-right" circle @click="doLogin('loginForm')"></el-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import js from "./login";

export default js;
</script>

<style scoped>

</style>