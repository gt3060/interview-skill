<template>
    <div>
        <template style="display: flex">
            <template v-if="type === 'sync'">
                <el-button @click="handleIsSync"
                           type="primary">按钮一</el-button>
            </template>
            <template v-if="type === 'isnotsync'">
                <el-button @click="handleIsNotSync"
                           style="margin-top:15px"
                           type="primary">按钮二</el-button>
            </template>
        </template>

    </div>

</template>

<script>
export default {
    props: {
        type: String,
    },
    data() {
        return {
            newValue: '',
        };
    },
    methods: {
        handleIsSync() {
            this.newValue = '啦啦啦！我是使用sync改变新的值';
            this.$emit('update:defaultVal', this.newValue);
        },
        handleIsNotSync() {
            this.newValue = '嘿嘿嘿！我是不使用sync修饰符改变的新的值';
            this.$emit('updateValMethod', this.newValue);
        },
    },
};
</script>

<style>
</style>
