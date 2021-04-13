<template>
    <div>
        <text-field catalog
                    title="HTML-回流（reflow）和重绘（repaint）"
                    content="1.了解浏览器的渲染机制："
                    fontSizeType="middle">
        </text-field>
        <text-field :list="htmlList"
                    style="margin-left:3%" />
        <text-field content="2.回流：当renderTree中的元素结构或者尺寸等发生改变，浏览器重新渲染部分或全部文档的过程。"></text-field>
        <text-field content="3.导致回流的操作:"></text-field>
        <text-field :list="reflowList"
                    style="margin-left:3%" />
        <text-field content="4.重绘：当页面中元素样式的改变不影响浏览器文档流的位置，浏览器会将新样式赋值给元素的过程。"></text-field>
        <text-field content="5.导致重绘的操作:"></text-field>
        <text-field :list="repaintList"
                    style="margin-left:3%" />
        <text-field content="6.回流和重绘带来的性能影响"></text-field>
        <text-field content="回流的性能消耗比重绘大，回流必将引起重绘，重绘不一定会引起回流。"></text-field>
        <text-field content="7.优化性能影响"></text-field>
        <text-field :list="optimizationList"
                    style="margin-left:3%" />
        <el-divider></el-divider>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210412',
    data() {
        return {
            htmlList: {
                listTitle: '',
                routeList: [
                    {
                        data: '浏览器采用流式布局模型；',
                    },
                    {
                        data:
                            '首先浏览器会将html转换成dom树，将css转换成cssom树，再把cssom和dom结合产生渲染树（renderTree）；',
                    },
                    {
                        data:
                            '浏览器根据renderTree计算所有节点的大小和位置，然后把节点绘制到页面上。',
                    },
                    {
                        data: '总结：回流必将引起重绘，重绘不一定会引起回流',
                    },
                ],
            },
            reflowList: {
                listTitle: '',
                routeList: [
                    {
                        data: '浏览器初次加载渲染',
                    },
                    {
                        data: '浏览器窗口大小发生改变',
                    },
                    {
                        data: '内容改变',
                    },
                    {
                        data: '添加或删除节点',
                    },
                    {
                        data: '.激活css伪类',
                    },
                ],
            },
            repaintList: {
                listTitle: '',
                routeList: [
                    {
                        data: 'background',
                    },
                    {
                        data: 'visibility',
                    },
                ],
            },
            optimizationList: {
                listTitle: '',
                routeList: [
                    {
                        data: 'css:避免使用table布局；',
                    },
                    {
                        data: 'css:避免设置多层内联样式；',
                    },
                    {
                        data: 'javascript:避免频繁操作dom节点；',
                    },
                    {
                        data:
                            'javascript:对于大量插入dom元素的操作，尽量使用文档片段（documentFragment）；',
                    },
                ],
            },
        };
    },
    methods: {
        jumpTo() {},
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
.commonStyle {
    margin-top: 20px;
}
</style>
