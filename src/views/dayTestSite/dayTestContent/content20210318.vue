<template>
    <div>
        <text-field catalog
                    title="JS-深度克隆对象的方法有哪些"
                    content="第一种最常用的就是JSON.parse(JSON.stringify(obj))，第二种就是使用Object对象的assign方法：
                            Object.assign({},obj)"
                    fontSizeType="middle">
        </text-field>
        <text-field content="这里值得注意的是，通过第一种JSON来深拷贝对象，会忽略函数对象和原型对象。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-手写一个深度克隆对象的方法"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        deepClone(obj) {<br/>
            let result;<br/>
            if (typeof obj === 'object') {<br/>
                result = obj.constructor === Array ? [] : {};<br/>
                for (let i in obj) {<br/>
                    result[i] = typeof obj[i] === 'object' ? this.deepClone(obj[i]) : obj[i];<br/>
                }<br/>
            } else {<br/>
                result = obj;<br/>
            }<br/>
            return result;<br/>
        },
            </pre>
        </div>
        <el-divider></el-divider>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210318',
    data() {
        return {
            testObj: {
                name: 'geng',
                obj: {
                    sex: 'male',
                    age: '20',
                },
            },
        };
    },
    methods: {
        jumpTo() {
            let testO = this.deepClone(this.testObj);
            console.log(testO);
        },
        deepClone(obj) {
            let result;
            if (typeof obj === 'object') {
                result = obj.constructor === Array ? [] : {};
                for (let i in obj) {
                    result[i] =
                        typeof obj[i] === 'object'
                            ? this.deepClone(obj[i])
                            : obj[i];
                }
            } else {
                result = obj;
            }
            return result;
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
</style>
