<template>
    <div>
        <text-field catalog
                    title="JS-promise、async、generator三者区别"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="promise是一个类函数，当他执行完毕后，会开启异步任务，这个异步任务还需要看promise状态，也就是
                            then中的回调函数。promise是为了实现函数回调的扁平化，需要把异步任务放在promise中进行封装。"></text-field>
        <text-field content="Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。虽然Generator将异步操作表示得很简洁，但是流程管理却不方便"></text-field>
        <text-field content="async 是 ES7 才有的与异步操作有关的关键字，也是generator语法糖，无论是async函数还是await返回都是promise对象"></text-field>
        <el-divider></el-divider>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
            </pre>
        </div>
        <text-field catalog
                    title="VUE-keep-alive"
                    content="keep-alive 可以实现组件的缓存，当组件切换时不会对当前组件进行卸载。常用的2个属性 include/exclude ，2个生命周期 activated ， deactivated"
                    fontSizeType="middle">
        </text-field>
        <el-divider></el-divider>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210409',
    data() {
        return {
            jsList: {
                listTitle: '',
                routeList: [
                    {
                        data: '',
                    },
                ],
            },
        };
    },
    methods: {
        jumpTo() {},
        promiseMethod() {
            let promiseFun = function (val) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        console.log(val);
                        resolve();
                    }, 1000);
                });
            };
            promiseFun(111)
                .then(() => {
                    return promiseFun(222);
                })
                .then(() => {
                    return promiseFun(333);
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
</style>
