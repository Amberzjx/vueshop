<template>
    <div>
        BaseForm 测试页
    </div>
</template>

<script>
    export default {
        name: 'baseform',
        data: function(){

        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>