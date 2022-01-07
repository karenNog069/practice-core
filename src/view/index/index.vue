<!--首页-->
<template>
    <el-container class="home-page">
        <el-aside width="350px" class="home-page-aside">
            <div class="aside-menu-title">menu</div>
            <div class="aside-menu">
                <div class="aside-menu-li" v-for="(menu,index) in menuList" :key="menu.tag"
                     @click="changeMenu(menu,index)">
                    <div class="aside-menu-li-icon" :class="{'on-click-style':clickFlag === index}"><i
                        class="aside-menu-icon" :class="menu.icon"></i></div>
                    <span class="aside-menu-li-name"
                          :class="{'on-click-font-style':clickFlag === index}">{{ menu.menuName }}</span>
                </div>
            </div>
        </el-aside>
        <el-container class="home-page-right-container">
            <el-header class="home-page-header">
                <div class="home-page-header-left"></div>
                <div class="home-page-header-right">
                    <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
                    <el-dropdown trigger="click" class="dropdown">
                        <span class="el-dropdown-link">
                            nico<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人信息</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-tooltip class="item" effect="light" content="注销" placement="bottom">
                        <i class="el-icon-switch-button login-out" @click="loginOut"></i>
                    </el-tooltip>
                </div>
            </el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import js from "./index";

export default js;
</script>

<style scoped>

</style>