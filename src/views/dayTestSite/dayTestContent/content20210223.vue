<template>
    <div>
        <text-field catalog
                    title="HTML-html5新属性"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="html5List"></text-field>
        <text-field catalog
                    title="CSS-css3新属性"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :isBtn="true"
                    btnText="详细请跳转"
                    :btnMethod="jumpCSS3"></text-field>
        <text-field :list="css3List" />
        <text-field catalog
                    title="JS-es6新属性"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :isBtn="true"
                    btnText="详细请跳转"
                    :btnMethod="jumpes6"></text-field>
        <text-field :list="es6List" />
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210223',
    data() {
        return {
            html5List: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            '语义化标签例如：<header/>、<footer/>、<nav/>、<section/>、<aside/>等；',
                    },
                    {
                        data:
                            '视频和音频：<audio/>(暂时支持三种音频文件播放：mp3、wav、ogg)、<video/>；',
                    },
                    {
                        data:
                            'canvas绘图：canvas只是图形容器，必需使用脚本来绘制图形；',
                    },
                    {
                        data: `SVG绘图：是指可伸缩的矢量图形，他与canvas区别在于svg使用xml描述2D图形的语言，
                            而canvas通过js来绘制2D图形；`,
                    },
                    {
                        data:
                            '地理位置：HTML5 Geolocation（地理定位）用于定位用户的位置；',
                    },
                    {
                        data: '拖放API',
                    },
                    {
                        data:
                            'Web Storage：早前使用cookie，H5新增localStorage和sessionStorage',
                    },
                    {
                        data: 'Web Socket。',
                    },
                ],
            },
            css3List: {
                listTitle: '',
                routeList: [
                    {
                        data: '过渡：transition；',
                    },
                    {
                        data: '动画：animation；',
                    },
                    {
                        data: '形状转换：transform；',
                    },
                    {
                        data: '阴影：box-shadow；',
                    },
                    {
                        data: '边框：border-image/border-radius；',
                    },
                    {
                        data:
                            '背景：background-clip/background-origin/background-size；',
                    },
                    {
                        data: '文字阴影：text-shadow；',
                    },
                    {
                        data:
                            '渐变：linear-gradient(direction, color-stop, color1-stop1)；',
                    },
                    {
                        data: '媒体查询。',
                    },
                ],
            },
            es6List: {
                listTitle: '',
                routeList: [
                    {
                        data: 'let/const；',
                    },
                    {
                        data: 'Map/Set对象；',
                    },
                    {
                        data: '箭头函数；',
                    },
                    {
                        data: 'Class/extends',
                    },
                    {
                        data: '解构赋值',
                    },
                    {
                        data: '对象扩展方法：keys/values/entries',
                    },
                    {
                        data:
                            '数组新增属性方法：find/fill/Array.from/Array.of/for...of/',
                    },
                    {
                        data: '模板字符串',
                    },
                    {
                        data: 'Promise',
                    },
                ],
            },
        };
    },
    methods: {
        jumpCSS3() {
            this.$router.push({
                name: 'LearnCSS',
            });
        },
        jumpes6() {
            window.open('https://www.cnblogs.com/sunshinezjb/p/9248533.html');
        },
    },
    components: {
        TextField,
    },
    mounted() {
        highlightCode();
    },
};
</script>

<style scoped lang='less'>
.codeBorder {
    width: 100%;
    border-radius: 10px;
}
</style>
