<!--侧边栏显示按钮-->
<template>
    <div id="menu-collapse">
        <i :class="{'el-icon-d-arrow-left':!leftMenu,'el-icon-d-arrow-right':leftMenu}" @click = "visableLeftMenu"></i>
    </div>
</template>

<script>
    export default {
        name: "menu-collapse",
        data(){
            return {
                //iconClass:true,
                leftMenu:this.$store.state.leftMenu
            }

        },
        methods:{
            visableLeftMenu(){
                this.leftMenu = !this.leftMenu
                this.$store.dispatch('visableLeftMenu',this.leftMenu)
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    #menu-collapse i
        line-height: 50px;
        color: #fff;
        margin: 0 auto;
        padding-left: 13px;
        cursor: pointer;
    #menu-collapse i:hover
        color #409EFF; //蓝色
</style>