<template>
    <div>
        <text-field catalog
                    title="HTML-简述GBK和UTF-8"
                    content="GBK编码是用来专门解决中文编码的，无论是中文还是英文都是双字节编码；UTF-8编码是用来解决国际字符的
                            一种多字节编码，是国际编码，通用性更强，他对中文使用8位（即一个字节），中文使用24位（即三个字节）来编码；因此，对于英文字符
                            比较多的论坛，更建议使用UTF-8，会大大的节省空间。"
                    fontSizeType="middle">
        </text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-bind、call、apply区别，手写一个bind方法"
                    content="在说明bind、call、apply区别之前，先说明下标准es5下this的指向，this永远指向最后调用它的那个对象。那么如何改变this指向呢？
                            主要有以下几种方式:"
                    fontSizeType="middle">
        </text-field>
        <text-field content="①箭头函数：箭头函数的this指向，永远指向函数定义的this，而非执行时。"></text-field>
        <text-field content="②存储this：在函数内使用let that = this;然后在函数内都使用that而不是this。"></text-field>
        <text-field content="③使用call、apply、bind：this指向其参数。"></text-field>
        <text-field content="下面具体说一下这三个之间用法和区别："></text-field>
        <text-field content="apply语法：fn.apply(thisArg,[...args])，其中thisArg指函数运行时指定的this值；
                            args指的是一个数组或者类数组，其中数组的元素作为参数床欸fun函数。"></text-field>
        <text-field content="call语法：fn.call(thisArg, args1, args2,...)，其大致和apply类似，区别在于传入的参数方式不同，
                            appyly参数是数组，call参数是一个列表直接放在call参数中。"></text-field>
        <text-field content="bind语法：fn.bind(thisArg, args1, args2,...)()，其参数存放方式同call，值得注意的是，
                            bind方法创建了一个新的函数，所以需要手动调用一下。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="HTML-简述页面乱码产生原因的可能"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="htmlList" />
        <text-field content="总结就是，如果出现乱码就想方设法的转换成原本字符该有的编码格式，再者如果自己开发网页，必须网页加入meta charset编码标签。"></text-field>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210315',
    data() {
        return {
            htmlList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            '1.如果网页源代码是gbk编写的，而内容中的文字是utf-8的，那么，此时打开浏览器就会出现HTML乱码。反之也会出现乱码。',
                    },
                    {
                        data:
                            '2.HTML网页编码是gbk，但是程序从程序库中调出呈现的是utf-8编码的内容也会造成编码乱码。',
                    },
                    {
                        data: '3.浏览器不能自动检测网页编码，造成网页乱码。',
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
