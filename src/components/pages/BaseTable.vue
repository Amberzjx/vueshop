<template>
    <div class="table">
        表格 测试页
    </div>
</template>

<script>
    export default {
        name: 'basetable',
        data() {
            return {

            }
        },
        created() {
            this.getData();
        },
        computed: {

        },
        methods: {}
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
    .mr10{
        margin-right: 10px;
    }
</style>
