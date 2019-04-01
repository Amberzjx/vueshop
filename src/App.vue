<template>
    <div id="app">

        <router-view></router-view> <!--组件-->
        <FooterGuide></FooterGuide>
    </div>

</template>
<script>
    import FooterGuide from './components/FooterGuide/FooterGuide'


    export default {
        name: "App",
        components:[
            FooterGuide
        ]
    }

</script>
<style scoped  lang="stylus" rel="stylesheet/stylus">
    

</style>