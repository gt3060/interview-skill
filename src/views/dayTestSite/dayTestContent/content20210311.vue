<template>
    <div>
        <text-field catalog
                    title="JS-0.1 + 0.2和0.1 + 0.3分别等于多少？并解释下为什么？"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="0.1+0.2 = 0.30000000000000004；这是由于浮点数运算精度问题，简单来说，计算机只认识二进制，
                            在进行运算时需要将值转为二进制，然后再进行计算，由于浮点数用二进制表示是无穷的，"></text-field>
        <text-field content="小数是如何转为二进制的？将该数字乘以2，取出整数部分作为二进制表示的第1位；然后再将小数部分乘以2，
                            将得到的整数部分作为二进制表示的第2位；以此类推，直到小数部分为0。"></text-field>
        <text-field content="那么用来表示小数的二进制数转为十进制：从左到右，v[i] * 2^( - i ), i 为从左到右的index，v[i]为该位的值；
                            以0.6（1001 1001 1001 1001）为例：0.6 = 1 * 2^-1 + 0 * 2^-2 + 0 * 2^-3 + 1 * 2^-4 + ……"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        console.log(0.1.toString(2));//0.0001100110011001100110011001100110011001100110011001101<br/>
        console.log(0.2.toString(2));  // 0.001100110011001100110011001100110011001100110011001101<br/>
            </pre>
        </div>
        <text-field content="IEEE 754 标准的 64 位双精度浮点数的小数部分最多支持52位二进制位，故转为二进制时候就是截取的，
                            在相加后就会变成0.30000000000000004。"></text-field>
        <text-field content="0.1+0.3 = 0.4；这里为什么就等于了0.4"></text-field>
        <text-field content="先计算0.4的循环：0.0110011(0011)，之前说js采用64位双精度浮点数来保存数字，分别是一个符号位，11个指数位，
                            52个尾数位，指数位就是将转换后的二进制小数再转为科学计数法形式：0.4 -> 1.10011(0011)*e^(-2)"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 下面分析一下0.1+0.2和0.1+0.3的计算过程：<br/>
        // 0.1+0.2：<br/>
        1.1001100110011001100110011001100110011001100110011010 (指数:-4)+ // 0.1<br/>
        1.1001100110011001100110011001100110011001100110011010 (指数:-3)= // 0.2<br/>
        // 指数不一致时，指数往更大数看齐，右移，由-4移到-3
        0.11001100110011001100110011001100110011001100110011010 (Exponent:-3)+ // 指数由 -4 变为 -3，小数部分右移 1 位<br/>
        1.10011001100110011001100110011001100110011001100110100 (Exponent:-3)= // 尾数长度不够，加一个0<br/><br/>
        // 相加结果：<br/>
        10.01100110011001100110011001100110011001100110011001110 (Exponent:-3)<br/>
        计算结果小数部分 53 位，整数部分为 10，转换为IEEE754双精度为<br/>
        1.0011001100110011001100110011001100110011001100110100 * 2^(-2)。<br/>
        如果用二进制转成十进制为 2^(-2) + 2^(-5) + 2^(-6)...。<br/>
        结果大约是0.30000000000000004419，去小数点后面17位精度为0.30000000000000004。<br/>
        // 下面再看0.1+0.3计算过程：<br/>
        1.1001100110011001100110011001100110011001100110011010 (Exponent:-4)+ // 0.1<br/>
        1.0011001100110011001100110011001100110011001100110011 (Exponent:-2) // 0.3<br/>
        0.011001100110011001100110011001100110011001100110011010 (Exponent:-2)+ // 指数由- 4变为 -2，小数部分右移 2 位<br/>
        1.001100110011001100110011001100110011001100110011001100 (Exponent:-2)= // 尾数不够，加两个 0<br/>
        // 相加结果：<br/>
        1.100110011001100110011001100110011001100110011001100110 (Exponent:-2)<br/>
        计算结果有 54 位，保存时需要二进制舍入，得到：<br/>
        1.1001100110011001100110011001100110011001100110011010 (Exponent:-2) // 52 位<br/>
        这个结果，恰好等于 0.4。
            </pre>
        </div>
        <text-field content="所以结果就是，0.1+0.3虽然结果等于0.4，虽然看起来正确，但是，实际也舍去了后面数字，碰巧等于实际结果。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="CSS-预处理器"
                    content="预处理器是一种程序，需要将一种程序的数据转换成另一种程序的数据。它可以帮助我们编写可维护的、与时俱进的代码，
                            也可以减少需要编写的CSS数量，这些工具对于哪些需要大量样式表和样式规则的大型用户界面是非常有帮助的。
                            常用的css预处理器有：sass、less、stylus"
                    fontSizeType="middle">
        </text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 三种预处理器基本用法：<br/>
        // Less-----SCSS：<br/>
        .box {<br/>
            display: block;<br/>
        }<br/>
        // Sass：<br/>
        .box<br/>
            display: block<br/>
        // Stylus：<br/>
        .box<br/>
            display: block<br/><br/>

        // 嵌套语法：<br/>
        .a {<br/>
            &amp;.b {<br/>
                color: red;<br/>
            }<br/>
        }<br/>
        -----等同于-------<br/>
        .a.b {<br/>
            color: red;<br/>
        }<br/><br/>

        // 变量<br/>
        @red: #c00;<br/>
        strong {<br/>
            color: @red;<br/>
        }<br/><br/>
        // 变量作用域<br/>
        // less<br/>
        @size: 10px;<br/>
        .box {<br/>
            width: @size; // 20px<br/>
        }<br/>
        @size: 20px;<br/>
        .ball {<br/>
            width: @size; // 20px<br/>
        }<br/>
        //Stylus：(sass等同)<br/>
        size = 10px<br/>
        .box<br/>
            width: size // 10px<br/>
        size = 20px<br/>
        .ball<br/>
            width: size // 20px<br/>
            </pre>
        </div>
        <el-button type="text"
                   @click="jumpToCSS">详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210311',
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
    methods: {
        jumpToCSS() {
            window.open(
                'https://efe.baidu.com/blog/revisiting-css-preprocessors/'
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
</style>
