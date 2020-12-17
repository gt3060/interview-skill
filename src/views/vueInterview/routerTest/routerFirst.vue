<template>
    <div class="fontCodeStyle">
        <div>通过name传参：</div>
        <div>参数值为路由的name属性：{{$route.name}}</div>
        <div>------------------------------------------</div>
        <div>通过url传参：</div>
        <div>参数值为组件所传：{{$route.params.dataFirst}}-----{{$route.params.dataSecond}}</div>
    </div>
</template>

<script>
export default {
    beforeRouteEnter: (to, from, next) => {
        console.log('准备进入模板', to, from);
        next();
    },
    beforeRouteLeave: (to, from, next) => {
        console.log('准备离开模板');
        next();
    },
};
</script>

<style scoped>
.fontCodeStyle {
    line-height: 24px;
}
</style>
