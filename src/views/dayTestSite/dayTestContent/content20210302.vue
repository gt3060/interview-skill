<template>
    <div>
        <text-field catalog
                    title="CSS-简述优雅降级和渐进增强"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，
                            然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验"></text-field>
        <text-field content="优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-简述回调函数"
                    content="一个函数被作为参数传递给另一个函数，这个函数在另一个函数中调用，这个函数就是回调函数，"
                    fontSizeType="middle">
        </text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="CSS-简述px em rem区别"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="px:px是固定的像素，一旦设置了就无法因为适应页面大小而改变。"></text-field>
        <text-field content="em和rem相对于px更具有灵活性，他们是相对长度单位，意思是长度不是定死了的，更适用于响应式布局。"></text-field>
        <text-field content="em是相对于其父元素来设置字体大小的，一般都是以<body>的“font-size”为基准。这样就会存在一个问题，进行任何元素设置，
            都有可能需要知道他父元素的大小。而Rem是相对于根元素<html>，这样就意味着，我们只需要在根元素确定一个参考值。具体如下："></text-field>
        <text-field content="em:子元素字体大小的em是相对于父元素字体的大小；子元素的width/height/margin/padding用em是相对于该元素自身的字体大小："></text-field>
        <el-card class="commonStyle">
            <div class="style1">
                父元素
                <div class="style2">
                    子元素
                    <div class="style3"></div>
                </div>
            </div>
            <div style="margin-top:20px; margin-bottom:20px">代码：</div>
            <div class="codeBorder fontCodeStyle">
                <pre class="codeBorder">
        // html<br/>
        &lt;div class="style1"&gt;<br/>
            父元素<br/>
            &lt;div class="style2"&gt;<br/>
                子元素<br/>
                &lt;div class="style3"&gt;&lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
        &lt;/div&gt;<br/>
        // css<br/>
        .style1 {<br/>
            font-size: 20px;<br/>
            width: 7.5em; // 相对于自身，20*7.5 = 150px<br/>
            height: 7.5em; // 相对于自身，20*7.5 = 150px<br/>
            border: 1px solid black;<br/>
        }<br/>
        .style2 {<br/>
            font-size: 0.5em; // 相对于父元素20px*0.5 = 10px<br/>
            width: 7.5em; // 相对于自身，10*7.5 = 75px<br/>
            height: 7.5em;<br/>
            border: 1px solid pink;<br/>
        }<br/>
        .style3 {<br/>
            font-size: 0.5em; // 相对于父元素10*0.5em = 5px<br/>
            width: 7em; // 相对于自身，7*5 = 35px<br/>
            height: 6em; // 相对于自身，6*5 = 30px<br/>
            border: 1px solid blue;<br/>
        }
                </pre>
            </div>
        </el-card>
        <text-field content="rem是全部的长度都相对于根元素，根元素是谁？<html>元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。"></text-field>
        <el-card>
            <div style="margin-bottom:20px">代码：</div>
            <div class="codeBorder fontCodeStyle">
                <pre class="codeBorder">
        // html<br/>
        &lt;div class="style1"&gt;<br/>
            父元素<br/>
            &lt;div class="style2"&gt;<br/>
                子元素<br/>
                &lt;div class="style3"&gt;&lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
        &lt;/div&gt;<br/>
        // css<br/>
        html {<br/>
            font-size: 10px;<br/>
        }<br/>
        .style4 {<br/>
            font-size: 2rem; /* 20px */<br/>
            width: 20rem; /* 200px */<br/>
            height: 20rem;<br/>
            border: solid 1px black;<br/>
        }<br/>
        .style5 {<br/>
            font-size: 2rem; /* 20px */<br/>
            width: 10rem;<br/>
            height: 10rem;<br/>
            border: solid 1px blue;<br/>
        }<br/>
        .style6 {<br/>
            font-size: 1.5rem;<br/>
            width: 7rem;<br/>
            height: 6rem;<br/>
            border: solid 2px red;<br/>
        }
                </pre>
            </div>
        </el-card>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210302',
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
    width: 90%;
    border-radius: 10px;
}
.commonStyle {
    margin-top: 20px;
}
.style1 {
    font-size: 20px;
    width: 7.5em; // 相对于自身，20*7.5 = 150px
    height: 7.5em; // 相对于自身，20*7.5 = 150px
    border: 1px solid black;
}
.style2 {
    font-size: 0.5em; // 相对于父元素20px*0.5 = 10px
    width: 7.5em; // 相对于自身，10*7.5 = 75px
    height: 7.5em;
    border: 1px solid pink;
}
.style3 {
    font-size: 0.5em; // 相对于父元素10*0.5em = 5px
    width: 7em; // 相对于自身，7*5 = 35px
    height: 6em; // 相对于自身，6*5 = 30px
    border: 1px solid blue;
}
html {
    font-size: 10px;
}
.style4 {
    font-size: 2rem; /* 20px */
    width: 20rem; /* 200px */
    height: 20rem;
    border: solid 1px black;
}
.style5 {
    font-size: 2rem; /* 20px */
    width: 10rem;
    height: 10rem;
    border: solid 1px blue;
}
.style6 {
    font-size: 1.5rem;
    width: 7rem;
    height: 6rem;
    border: solid 2px red;
}
</style>
