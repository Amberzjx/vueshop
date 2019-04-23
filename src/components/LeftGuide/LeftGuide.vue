<template>
    <div id="left-guide">
        <div class="left-menu">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="leftMenu">
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>

        </div>
    </div>
</template>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>

<script>
    export default {
        name: "left-guide",
        data() {
            return {
                isCollapse: false
            };
        }
        , computed: {
            leftMenu(){
                return this.$store.state.leftMenu
            }
        }
        , watch:{

        }
        , methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            }
            , handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .left-menu
        width 200px
        min-height 400px

</style>