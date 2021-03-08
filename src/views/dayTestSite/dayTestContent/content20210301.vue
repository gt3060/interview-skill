<template>
    <div>
        <text-field catalog
                    title="HTML-浏览器内多个标签页之间的通信"
                    content="方法主要有两个：一个是利用localStorage，一个是利用cookie+setInterval，外加一个可以路由传参，具体如下："
                    fontSizeType="middle">
        </text-field>
        <text-field content="localStorage，这个很好理解，就是在一个标签页将数据通过localStorage放入浏览器缓存，
                            然后，在另一个页面通过getItem获取，localStorage缓存过期时间是由开发者决定，除非人为通过代码清楚；
                            或者在浏览器清楚，否则依然存在。"></text-field>
        <div class="randomStyle">
            <span>输入要要传新标签的数据：</span>
            <el-input v-model="paramsValue"
                      class="inputStyle"
                      placeholder="请输入"></el-input>
        </div>
        <el-button @click="localStorageJump"
                   type="primary"
                   class="commonStyle">localStorage方法跳转</el-button>
        <el-button @click="cookieSetIntervalJump"
                   type="primary"
                   class="commonStyle">cookie+setInterval方法跳转</el-button>
        <el-button @click="cookieSetIntervalUpdate"
                   type="primary"
                   class="commonStyle">cookie+setInterval更新数据</el-button>
        <text-field content="代码如下："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 方法一：localStorage<br/>
        localStorage.setItem('tempStorage', JSON.stringify(obj));<br/>
        this.newVal = JSON.parse(localStorage.getItem('tempStorage'));<br/>
        // 方法二：<br/>
        document.cookie = 'value=' + this.paramsValue;<br/>
        setInterval(() => {<br/>
            let cookie = document.cookie;<br/>
            this.newVal = cookie.split('=')[1];<br/>
        }, 1000);
            </pre>
        </div>
        <el-divider></el-divider>
        <text-field catalog
                    title="CSS-清除浮动的方法"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-button type="text"
                   @click="jumpToClearFloat">详情跳转</el-button>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-判断类型方法"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-button type="text"
                   @click="jumpToType">详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210301',
    data() {
        return {
            paramsValue: '',
        };
    },
    methods: {
        localStorageJump() {
            let obj = {};
            obj.value = this.paramsValue;
            obj.type = 'localStorage';
            localStorage.setItem('tempStorage', JSON.stringify(obj));
            this.jumpNewTab('localStorage');
        },
        cookieSetIntervalJump() {
            document.cookie = 'value=' + this.paramsValue;
            this.jumpNewTab('setInterval');
        },
        cookieSetIntervalUpdate() {
            document.cookie = 'value=' + this.paramsValue;
        },
        jumpNewTab(type) {
            let newPage = this.$router.resolve({
                name: 'testPage',
                query: {
                    type,
                },
            });
            window.open(newPage.href, '_blank');
        },
        jumpToClearFloat() {
            this.$router.push({
                name: 'LearnCSS',
                params: {
                    id: 'clearFloat',
                    type: '',
                },
            });
        },
        jumpToType() {
            this.$router.push({
                name: 'jsBasicsInterview',
                params: {
                    id: 'c2',
                },
            });
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
    width: 30%;
}
</style>
