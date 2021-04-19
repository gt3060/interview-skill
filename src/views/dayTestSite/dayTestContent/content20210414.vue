<template>
    <div>
        <text-field catalog
                    title="CSS-position属性值都有哪些，具体区别是什么?"
                    content="position属性值主要包括：static、relative、absolute、fixed、inherit，具体区别："
                    fontSizeType="middle">
        </text-field>
        <text-field :list="cssList" />
        <text-field content="下面是原始三个div"></text-field>
        <div class="oldpositionFirst">111</div>
        <div class="oldpositionSecond">222</div>
        <div class="oldpositionThird">333</div>
        <text-field content="下面是将第二个div设置relative的三个div"></text-field>
        <div class="positionFirst">111</div>
        <div class="positionSecond">222</div>
        <div class="positionThird">333</div>
        <text-field content="下面是将第二个div设置absolute的三个div"></text-field>
        <div class="positionFirst">111</div>
        <div class="absoPositionSecond">222</div>
        <div class="positionThird">333</div>
        <text-field content="下面是给三个div外包上一层div"></text-field>
        <div class="fatherDiv">
            <p>包裹的div</p>
            <div class="positionFirst">111</div>
            <div class="absoPositionSecond">222</div>
            <div class="positionThird">333</div>
        </div>
        <el-divider></el-divider>
        <el-button type="text"
                   @click="jumpTo">详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210414',
    data() {
        return {
            cssList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            'static：默认值，没有定位，元素出现在正常的文档流中，忽略top/left/right/bottom/z-index',
                    },
                    {
                        data: 'fixed：相对于浏览器窗口进行定位',
                    },
                    {
                        data: 'inherit：继承父元素的定位方式',
                    },
                    {
                        data:
                            'relative：元素相对于原来位置进行移动，如果设置了top/left属性后，仍然处在文档流中，不影响其他元素的布局；',
                    },
                    {
                        data: `absolute：元素会脱离文档流，在没有设置宽度情况下，宽度等于元素内容的宽度，
                            如果设置了top/left属性后，会影响其他元素的定位；如果父元素没有设置绝对定位/相对定位，元素相对于根元素进行定位，
                            否则，会相对于离自己最近的设置了相对元素/绝对元素的父元素进行定位，`,
                    },
                ],
            },
        };
    },
    methods: {
        jumpTo() {
            window.open(
                'https://www.runoob.com/w3cnote/css-position-static-relative-absolute-fixed.html'
            );
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
.commonStyle {
    margin-top: 20px;
}
.oldpositionFirst,
.positionFirst {
    height: 100px;
    background-color: pink;
}
.oldpositionSecond,
.absoPositionSecond,
.positionSecond {
    height: 100px;
    background-color: yellow;
}
.positionThird,
.oldpositionThird {
    height: 100px;
    background-color: blue;
}
.positionFirst {
}
.positionSecond {
    position: relative;
    top: 50px;
    left: 50px;
}
.positionThird {
}
.absoPositionSecond {
    position: absolute;
    top: 50px;
    left: 50px;
}
.fatherDiv {
    position: relative;
}
</style>
