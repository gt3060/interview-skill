<template>
    <div>
        <text-field catalog
                    title="CSS-让div隐藏的几种方式"
                    content="这里主要记录面试中常问的三种方式:"
                    fontSizeType="middle">
        </text-field>
        <text-field :list="cssList" />
        <div style="margin-bottom:10px;">①---opacity:0</div>
        <div class="opacityStyle">opacity</div>
        <div class="opacity0Style">opacity</div>
        <div style="margin-bottom:10px;">②---visibility:hidden</div>
        <div class="visibilityStyle">visibility</div>
        <div class="visibilityHStyle">visibility</div>
        <div style="margin-bottom:10px;">③---display:none</div>
        <div class="displayStyle">display</div>
        <div class="displayNStyle">display</div>
        <text-field content="display:none和visibility:hidden的区别"></text-field>
        <text-field content="display: none隐藏后的元素不占据任何空间，但是通过控制台查看仍可以查看这个元素，而visibility: hidden隐藏后的元素空间依旧保留"></text-field>
        <text-field content="visibility具有继承性，给父元素设置visibility:hidden;子元素也会继承这个属性。但是如果重新给子元素设置visibility: visible,则子元素又会显示出来。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="VUE-vue的声明周期"
                    content="基本的八大生命周期在此不做展开，想着重记录下剩下的三个："
                    fontSizeType="middle">
        </text-field>
        <text-field content="activated:被keep-alive缓存的组件激活时调用"></text-field>
        <text-field content="deactivated:被keep-alive缓存的组件停用时调用。"></text-field>
        <text-field content="errorCaptured:当捕获一个来自子孙组件的错误时被调用。"></text-field>
        <el-divider></el-divider>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210415',
    data() {
        return {
            cssList: {
                listTitle: '',
                routeList: [
                    {
                        data: 'opacity:0 ：就是将div的透明度设置为0；',
                    },
                    {
                        data: 'visibility:hidden：将div的元素隐藏；',
                    },
                    {
                        data: 'display:none：这种方式同样也是让div元素隐藏',
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
.opacityStyle,
.opacity0Style,
.visibilityStyle,
.visibilityHStyle,
.displayStyle,
.displayNStyle {
    width: 100px;
    height: 100px;
    border: 1px solid black;
}
.opacity0Style {
    opacity: 0;
}
.visibilityHStyle {
    visibility: hidden;
}
.displayNStyle {
    display: none;
}
</style>
