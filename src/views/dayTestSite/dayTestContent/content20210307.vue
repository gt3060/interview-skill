<template>
    <div>
        <text-field catalog
                    title="HTML-html5中为什么只需要写!DOCTYPE HTML就可以"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="h5之前的版本，是基于SGML创建的，需要DTD引用，才能告知浏览器文档所使用的文档类型；但是
                            h5并不是基于SGML创建，故无需引用DTD，但是需要DOCTYPE来规范浏览器行为，其中，
                            doctype指定页面所使用的版本（xhtml/html），html指定文件是html版本的。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="CSS-解决position：fixed在ios无效办法"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="只需要在滑动区域添加css样式："> </text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        .content{<br/>
            position:fixed;<br/>
            top:0;<br/>
            left:0;<br/>
            bottom:200px;//此处为固定内容的高度<br/>
            overflow:scroll;<br/>
            -webkit-overflow-scrolling: touch;//最好要加上，是为了让ios内容滑动更加顺滑<br/>
        }
            </pre>
        </div>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-声明提升"
                    content="主要分为两种，一种是变量提升，一种是函数提升，下面具体记录两者区别："
                    fontSizeType="middle">
        </text-field>
        <text-field content="声明提升：大部分语言都是先声明变量再使用，但是js有所不同，如下面这个代码一，console.log(a)
                            输出的结果不是a报错，而是undefined，这是因为引擎再预处理阶段对变量进行了声明提升，变成了
                            下面代码二这个形式："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 代码一<br/>
        console.log(a); //undefined<br/>
        var a = 1;<br/>
        console.log(a); //1<br/>
        // 代码二<br/>
        var a;<br/>
        console.log(a);//undefined<br/>
        a = 1;<br/>
        console.log(a);//1
            </pre>
        </div>
        <text-field content="函数提升：函数声明的提升是在堆里开辟空间，把函数内容以字符串的形式存储进去，
                            然后把堆地址返回给函数名。例如："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        console.log(f1);//function f1 () { console.log('111') }<br/>
        function f1 () { console.log('111') }<br/>
        console.log(f2);//undefined<br/>
        var f2 = function(){};<br/>
            </pre>
        </div>
        <text-field content="上面f2之所以返回未定义，是因为，f2是函数表达式，相当于变量，进而变量提升。
                            如果函数和变量同名，且都遇到提升问题时，函数声明的优先级高于变量声明，进而出现：
                            变量声明会被函数声明覆盖，但是会重新赋值。"></text-field>
        <text-field content="接着就记录下ES6出现的let和const，之前一直知道let和const时块级作用域，不存在变量提升，
                            之前不清楚什么意思，现在是明白了。let和const不能在同一作用域声明两个相同名字的变量，即："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        console.log(a); //a is not defined（报错）<br/>
        let a = 1;<br/>
        console.log(a); //1<br/>
            </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210307',
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
        };
    },
    methods: {},
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
