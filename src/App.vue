<template>
    <div id="app">
        <header-guide></header-guide>
        <left-guide></left-guide>
    </div>

</template>
<script>
    import HeaderGuide from './components/HeaderGuide/HeaderGuide'
    import LeftGuide from './components/LeftGuide/LeftGuide'


    export default {
        name: "app",
        components:{
            HeaderGuide,
            LeftGuide
        },
    }

</script>
<style  lang="stylus" rel="stylesheet/stylus">
    

</style>