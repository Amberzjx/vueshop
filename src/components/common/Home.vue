<template>
    <div id="home">
        <header-guide></header-guide>
        <left-guide></left-guide>
        <div  class="content-box">
            <!--tags标签-->
            <tags-view></tags-view>

            <!--主内容-->

        </div>
    </div>
</template>

<script>
    import HeaderNav from './HeaderNav'
    import MenuCollapse from './MenuCollapse'
    import HeaderGuide from './HeaderGuide'
    import LeftGuide from './LeftGuide'
    import TagsView from './TagsView'

    export default {
        name: "home",
        components:{
            HeaderNav,
            MenuCollapse,
            HeaderGuide,
            LeftGuide,
            TagsView,
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>