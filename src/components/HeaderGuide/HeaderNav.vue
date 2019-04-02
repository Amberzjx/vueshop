<template>
    <div id="header-nav">
        <div class="site-ctrl">
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="3">我的待办</el-menu-item>
                <el-menu-item index="4">个人中心</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">张锦晓</template>
                    <el-menu-item index="2-4-1">个人资料</el-menu-item>
                    <el-menu-item index="2-4-2">修改密码</el-menu-item>
                    <el-menu-item index="2-4-3">退出登录</el-menu-item>
                </el-submenu>

            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-nav",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key,keyPath);
            }
        }
    }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
    #header-guide #header-nav
        float right
        padding-right 100px
        el-submenu__title
            height 50px

    #header-nav .site-ctrl ul>li
        height inherit
        height 50px
    ul
        height 50px

</style>