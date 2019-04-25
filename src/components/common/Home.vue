<template>
    <div id="home">
        <header-guide></header-guide>
        <left-guide></left-guide>

    </div>
</template>

<script>
    import HeaderNav from './HeaderNav'
    import MenuCollapse from './MenuCollapse'
    import HeaderGuide from './HeaderGuide'
    import LeftGuide from './LeftGuide'

    export default {
        name: "home",
        components:{
            HeaderNav,
            MenuCollapse,
            HeaderGuide,
            LeftGuide,
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>