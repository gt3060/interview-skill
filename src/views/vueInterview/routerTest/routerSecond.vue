<template>
    <div class="fontCodeStyle">
        <div>通过router-link的to方式传参</div>
        <div>{{$route.params.dataParams}}</div>
    </div>
</template>

<script>
export default {
    created() {
        console.log('---', this.$route.params);
    },
};
</script>

<style scoped>
.fontCodeStyle {
    line-height: 24px;
}
</style>
