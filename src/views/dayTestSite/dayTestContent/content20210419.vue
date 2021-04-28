<template>
    <div>
        <text-field catalog
                    title="实现一个转盘布局，点击按钮2s后开始旋转，5s后停止旋转，再3s后跳转到新的一个表单页面"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <div class="box">
            <div class="lottery">
                <div class="block">
                    <div class="content">
                        <div class="none">一等奖</div>
                    </div>
                </div>
                <div class="block">
                    <div class="content">
                        <div class="none">三等奖</div>
                    </div>
                </div>
                <div class="block">
                    <div class="content">
                        <div class="none">二等奖</div>
                    </div>
                </div>
                <div class="block">
                    <div class="content">
                        <div class="none">三等奖</div>
                    </div>
                </div>
                <div class="block">
                    <div class="content">
                        <div class="none">二等奖</div>
                    </div>
                </div>
                <div class="block">
                    <div class="content">
                        <div class="none">三等奖</div>
                    </div>
                </div>
            </div>
            <div class="btn"
                 @click="handleRotate">抽奖</div>
        </div>
        <div v-if="isShowForm">表单.....显示</div>
        <el-divider></el-divider>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
            </pre>
        </div>
        <text-field :list="cssList" />
        <el-button type="text"
                   @click="jumpTo">详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210419',
    data() {
        return {
            cssList: {
                listTitle: '',
                routeList: [
                    {
                        data: '',
                    },
                ],
            },
            isShowForm: false,
        };
    },
    methods: {
        jumpTo() {},
        async handleRotate() {
            await this.rotateFun();
        },
        rotateFun() {
            setTimeout(() => {
                let rotateNum = Math.floor(Math.random() * 8 + 4);
                let rotateFin = Math.floor(Math.random() * 6 + 6);
                let finallyNum = 60 * rotateFin + rotateNum * 360 + 30;
                console.log(rotateNum, rotateFin, finallyNum);
                let dom = document.getElementsByClassName('lottery');
                dom[0].style.transition = 'all 5s ease';
                dom[0].style.transform = `rotate(${finallyNum}deg)`;
                setTimeout(() => {
                    this.isShowForm = true;
                }, 8000);
            }, 2000);
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
.box {
    width: 600px;
    height: 600px;
    background-color: #dea681;
    border-radius: 50%;
    margin: 30px auto;
    padding: 20px;
    position: relative;
}
.lottery {
    width: 600px;
    height: 600px;
    margin: 0 auto;
    border-radius: 50%;
    position: relative;
    background-color: #330000;
    box-shadow: 0 0 15px #000;
    overflow: hidden;
}
.block {
    box-shadow: 0 0 1px #000 inset;
    position: absolute;
    width: 300px;
    height: 300px;
    transform-origin: right bottom 0;
    // overflow: hidden;
}
.block:nth-child(odd) {
    background-color: #f1aaa6;
}
.block:nth-child(even) {
    background-color: #fd5b78;
}
.block:nth-child(1) {
    transform: rotate(0deg) skewY(30deg);
}
.block:nth-child(2) {
    transform: rotate(60deg) skewY(30deg);
}
.block:nth-child(3) {
    transform: rotate(120deg) skewY(30deg);
}
.block:nth-child(4) {
    transform: rotate(180deg) skewY(30deg);
}
.block:nth-child(5) {
    transform: rotate(240deg) skewY(30deg);
}
.block:nth-child(6) {
    transform: rotate(300deg) skewY(30deg);
}
.content {
    width: 200px;
    height: 230px;
    text-align: center;
    transform-origin: center center 0;
    font-size: 25px;
    transform: skewY(-30deg) rotate(-30deg) translate(10px, 104px);
    position: absolute;
    right: 0;
    bottom: 0;
}
.btn {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    background-color: #96c;
    cursor: pointer;
    box-shadow: 0 0 14px #000 inset;
    color: #fff;
    position: absolute;
    top: 270px;
    left: 270px;
}
</style>
