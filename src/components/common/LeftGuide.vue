<template>
    <div id="left-guide">
        <div class="left-menu">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="leftMenu"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b"  unique-opened  router>
                <template v-for="item in navs">
                    <template v-if="item.subs">
                        <el-submenu :index="item.index" :key="item.index">
                            <template slot="title">
                                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                            </template>
                            <template v-for="subItem in item.subs">
                                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                    <!--三级-->
                                    <template slot="title">{{ subItem.title }}</template>
                                    <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                        {{ threeItem.title }}
                                    </el-menu-item>
                                </el-submenu>
                                <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.index" :key="item.index">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </el-menu-item>
                    </template>
                </template>

            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "left-guide",
        data() {
            return {
                isCollapse: false,
                navs: [
                    {
                        icon: 'el-icon-document',
                        index: 'dashboard',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'table',
                        title: '基础表格'
                    },
                    {
                        icon: 'el-icon-location',
                        index: 'tabs',
                        title: 'tab选项卡'
                    },
                    {
                        icon: 'el-icon-location',
                        index: '3',
                        title: '表单相关',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: '3-2',
                                title: '三级菜单',
                                subs: [
                                    {
                                        index: 'editor',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器'
                                    },
                                ]
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-location',
                        index: '6',
                        title: '拖拽组件',
                    },
                    {
                        icon: 'el-icon-location',
                        index: '7',
                        title: '错误处理',
                    }
                ]
            };
        }
        , computed: {
            leftMenu(){
                return this.$store.state.leftMenu //监听变量的变化
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

<style lang="stylus" rel="stylesheet/stylus">
    .left-menu
        /*width 200px*/
        height 100%
        display: block;
        position: absolute;
        left: 0;
        top: 50px;
        bottom:0;
        overflow-y: scroll;
    .left-menu::-webkit-scrollbar {
        display:none
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-menu--collapse
        height:100%

    .el-menu
        height:inherit !important

    .el-menu-item-group>ul{
        height:auto !important
    }

    .left-menu> ul {
        height:100%;
    }
</style>