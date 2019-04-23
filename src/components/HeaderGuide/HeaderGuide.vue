<template>
    <div id="header-guide">
        <menu-collapse></menu-collapse>
        <div class="site-logo">
            <img src="../../../static/images/tcl-logo.png" >
            <div class="site-name">
                SCBC RDM
            </div>
        </div>
        <header-nav></header-nav>

    </div>
</template>

<script>
    import HeaderNav from './HeaderNav'
    import MenuCollapse from '../MenuCollapse/MenuCollapse'

    export default {
        name: "header-guide",
        components:{
            HeaderNav,
            MenuCollapse
        },
        data() {
            return {

            };
        },
        methods: {

        }
    }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
    #header-guide
        background-color #545C64
        width 100%
        height 50px
        display block
    #header-guide div
        float left
        height 50px;
    .site-logo img
        float left
        height 50px
        display inline-block
        margin 0 auto
        padding 0px 10px 0px 35px
    .site-name
        height 50px
        line-height 50px
        color white
        font-size 20px
        display: inline-block;


</style>