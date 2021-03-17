<template>
    <div>
        <text-field catalog
                    title="CSS-如何处理Chrome浏览器小于12px字体"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="google Chrome浏览器无法识别小于12px的字体，如下："></text-field>
        <el-card>
            <div class="commonStyle"
                 style="font-size:16px">
                测试字体大小1---16px
            </div>
            <div class="commonStyle"
                 style="font-size:12px">
                测试字体大小2---12px
            </div>
            <div class="commonStyle"
                 style="font-size:8px">
                测试字体大小3--- 8 px
            </div>
            <div class="commonStyle"
                 style="font-size:8px">
                测试字体大小4--- 8 px
            </div>
        </el-card>
        <text-field content="解决办法："></text-field>
        <el-card>
            <div class="commonStyle">
                采用css3中缩放：transform:scale(0.9)，代码如下：
            </div>
            <div class="codeBorder fontCodeStyle commonStyle">
                <pre class="codeBorder">
        -webkit-transform: scale(0.5);<br/>
        transform: scale(0.5);<br/>
        // x轴方向缩放的中心点<br/>
        -webkit-transform-origin-x: 0;
                </pre>
            </div>
            <div class="commonStyle transformStyle">
                测试字体大小3--- 8 px
            </div>
        </el-card>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-写一个验证身份证号的方法"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field isInput
                    @callback="validateIdCard"
                    :inputList="idCardInputList"></text-field>
        <text-field content="代码如下："> </text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        let regex = /^[\d]{17}[0-9|X|x]{1}$/;<br/>
        if (regex.test(idCard)) {<br/>
            let sevenTeenIndex = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];<br/>
            let remainderKeyArr = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];<br/>
                let frontNum = idCard.slice(0, 17).split('');<br/>
                let lastNum = parseInt(idCard.slice(17));<br/>
                let sum = 0;<br/>
                for (let i = 0; i &lt; frontNum.length; i++) {<br/>
                    sum = sum + frontNum[i] * beforeIndex[i];<br/>
                }<br/>
                remainderKeyArr[sum % 11] === lastNum ? '成功' : '失败'<br/>
        } else {<br/>
            console.log('失败')<br/>
        }
            </pre>
        </div>
        <el-divider></el-divider>
        <text-field catalog
                    title="HTML-重排和重绘的理解"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="重排：根据渲染树中每个渲染对象的信息，计算出各自渲染对象的几何信息（DOM对象的位置和尺寸大小
                            ），并将其安装在界面的正确位置，重排也叫回流。引起重排的操作有:"></text-field>
        <text-field content="页面首次渲染、浏览器窗口大小发生改变、元素尺寸或位置改变、元素字体大小变化、
                            添加/删除可见的DOM、激活CSS伪类、设置style属性等等。"></text-field>
        <text-field content="重绘：就是当页面中元素样式的改变并不影响他的文档流中的位置，例如更改字体颜色
                            ，浏览器会将新样式赋予给元素并重新绘制的过程。"></text-field>
        <text-field content="重排必将引起重绘，重绘不一定引发重排。"></text-field>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210310',
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
            idCardInputList: [
                {
                    title: '请输入需要验证的身份证号',
                    key: 'idCard',
                },
            ],
        };
    },
    methods: {
        jumpTo() {},
        validateIdCard(data) {
            console.log(data);
            let idCard = data.idCard;
            let regex = /^[\d]{17}[0-9|X|x]{1}$/;
            if (regex.test(idCard)) {
                let beforeIndex = [
                    7,
                    9,
                    10,
                    5,
                    8,
                    4,
                    2,
                    1,
                    6,
                    3,
                    7,
                    9,
                    10,
                    5,
                    8,
                    4,
                    2,
                ];
                let remainderKeyArr = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                let frontNum = idCard.slice(0, 17).split('');
                let lastNum = parseInt(idCard.slice(17));
                let sum = 0;
                for (let i = 0; i < frontNum.length; i++) {
                    sum = sum + frontNum[i] * beforeIndex[i];
                }
                remainderKeyArr[sum % 11] === lastNum
                    ? this.$message({
                          showClose: true,
                          type: 'success',
                          message: '验证成功',
                      })
                    : this.$message({
                          showClose: true,
                          type: 'error',
                          message: '验证失败',
                      });
            } else {
                this.$message({
                    showClose: true,
                    type: 'warning',
                    message: '请输入需要验证的身份证号',
                });
            }
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
.transformStyle {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    // x轴方向缩放的中心点
    -webkit-transform-origin-x: 0;
}
</style>
