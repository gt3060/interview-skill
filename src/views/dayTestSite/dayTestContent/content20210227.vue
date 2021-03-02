<template>
    <div>
        <text-field catalog
                    title="HTML-简述超链接target的取值和作用"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="htmlList" />
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-写一个加密/解密字符串方法"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <div class="randomStyle">
            <span>按照几进制加密/解密（2，8，10，16）：</span>
            <el-input v-model="encryptNum"
                      class="inputStyle"
                      placeholder="请输入按几进制加密/解密"></el-input>
        </div>
        <div class="randomStyle">
            <span>输入要加密的字符串：</span>
            <el-input v-model="encryptStr"
                      class="inputStyle"
                      placeholder="请输入要加密的字符串"></el-input>
        </div>
        <div class="randomStyle">
            <span>输入要解密的字符串：</span>
            <el-input v-model="decryptStr"
                      class="inputStyle"
                      placeholder="请输入要解密的字符串"></el-input>
        </div>
        <div class="randomStyle">
            <span>最终结果为：</span>
        </div>
        <div class="randomStyle">
            <span>{{endValue}}</span>
        </div>
        <el-button type="primary"
                   @click="handleToEncrypt"
                   class="commonStyle">加密</el-button>
        <el-button type="primary"
                   @click="handleToDecrypt"
                   class="commonStyle">解密</el-button>
        <text-field content="代码如下："
                    class="commonStyle"></text-field>
        <div class="codeBorder fontCodeStyle commonStyle">
            <pre class="codeBorder">
        // 加密<br/>
        handleToEncrypt() {<br/>
            let length = this.encryptStr.length;<br/>
            let valueStr = '';<br/>
            for (let i = 0; i &lt; length; i++) {<br/>
                // charCodeAt:将字符串第几个字符转为unicode；<br/>
                // toString()中参数为Number表示将字符串转为几进制<br/>
                valueStr += `\\${this.encryptStr<br/>
                    .charCodeAt(i)<br/>
                    .toString(this.encryptNum)}`;<br/>
            }<br/>
            this.endValue = valueStr;<br/>
        },<br/>
        // 解密<br/>
        handleToDecrypt() {<br/>
            let strArray = this.decryptStr.split('/');<br/>
            let newValue = '';<br/>
            for (let i = 1; i &lt; strArray.length; i++) {<br/>
                // 其他进制数据转为10进制，用parseInt(str, num),其中str为数据字符串，num为此时数据为几进制<br/>
                // String.fromCharCode是用来将unicode编码的数据转为字符<br/>
                newValue += String.fromCharCode(parseInt(strArray[i], 8));<br/>
            }<br/>
            this.endValue = newValue;<br/>
        },
            </pre>
        </div>

    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210227',
    data() {
        return {
            htmlList: {
                listTitle: '',
                routeList: [
                    {
                        data: '_blank:在新窗口打开被链接的文档；',
                    },
                    {
                        data: '_self:默认，在相同的框架或窗口中打开;',
                    },
                    {
                        data: '_parent:在父框架集中打开被链接文档;',
                    },
                    {
                        data: '_top:在整个窗口中打开被链接文档;',
                    },
                    {
                        data:
                            'framename:在指定的框架中打开被链接文档，在使用frameset框架集的时候才能用，用name=“”。',
                    },
                ],
            },
            encryptNum: '',
            encryptStr: '',
            endValue: '',
            decryptStr: '',
        };
    },
    methods: {
        handleToEncrypt() {
            if (this.verity('encode')) {
                return;
            }
            let length = this.encryptStr.length;
            let valueStr = '';
            for (let i = 0; i < length; i++) {
                // charCodeAt:将字符串第几个字符转为unicode；
                // toString()中参数为Number表示将字符串转为几进制
                valueStr += `/${this.encryptStr
                    .charCodeAt(i)
                    .toString(this.encryptNum)}`;
            }
            this.endValue = valueStr;
        },
        handleToDecrypt() {
            if (this.verity('decode')) {
                return;
            }
            let strArray = this.decryptStr.split('/');
            let newValue = '';
            for (let i = 1; i < strArray.length; i++) {
                // 其他进制数据转为10进制，用parseInt(str, num),其中str为数据字符串，num为此时数据为几进制
                // String.fromCharCode是用来将unicode编码的数据转为字符
                newValue += String.fromCharCode(parseInt(strArray[i], 8));
            }
            this.endValue = newValue;
        },
        // 校验输入框是否为空
        verity(str) {
            if (this.encryptNum === '') {
                this.$message({
                    message: '请输入按几进制加密/解密',
                    type: 'warning',
                });
                return;
            }
            if (str === 'encode' && this.encryptStr === '') {
                this.$message({
                    message: '请输入要加密的字符串',
                    type: 'warning',
                });
                return;
            }
            if (str === 'decode' && this.decryptStr === '') {
                this.$message({
                    message: '请输入要解密的字符串',
                    type: 'warning',
                });
                return;
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
.aLabel:link {
    color: red;
}
.randomStyle {
    display: flex;
    margin: 20px 20px 0px 0px;
    span {
        &:first-child {
            margin-top: 7px;
            margin-right: 15px;
        }
    }
}
.inputStyle {
    width: 20%;
}
</style>
