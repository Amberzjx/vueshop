<template>
    <div id="app">
        <Mstie></Mstie>
        <router-view></router-view>
    </div>

</template>
<script>
    import Home from './components/common/Home'
    import Mstie from './components/pages/Msite/Msite'

    export default {
        name: "app",
        components:{
            Home
            ,Mstie
        },
    }

</script>
<style  lang="stylus" rel="stylesheet/stylus">
    

</style>