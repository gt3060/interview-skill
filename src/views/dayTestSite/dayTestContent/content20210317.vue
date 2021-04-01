<template>
    <div>
        <text-field catalog
                    title="HTTP-公钥加密和私钥加密"
                    content="私钥加密就是双方必需持有一个匹配的私钥，或者在传输时交换的私钥。可以使用其进行加密/解密明文，
                            私钥加密有一个重大缺陷，就是当双方之间的距离很远，需要通过第三方进行交易，进而存在安全漏洞，在
                            当今互联网时代中，也会存在在没有进行身份验证前提下进行正确合理的加解密。"
                    fontSizeType="middle">
        </text-field>
        <text-field content="慢慢的，公钥加密的方法就逐渐展开形成了。目前最经常使用的公钥加密算法就是RSA。
                            RSA加密算法是一种非对称加密算法，对称加密指的是加解密采用同一个密钥。公钥加密是使用一对密钥，
                            分别是加密的公钥和解密的私钥。"></text-field>
        <el-button type="text"
                   @click="jumpTo">对称加密技术-共享密钥，有兴趣可以读一下，很有意思。《改变未来的九大算法》</el-button>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-window对象和document对象有什么区别"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="jsList" />
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210317',
    data() {
        return {
            jsList: {
                listTitle: '',
                routeList: [
                    {
                        data: `1.指代不同:document对象代表给定浏览器窗口中的HTML文档，document是window的一个对象属性，
                                window对象表示浏览器中打开的窗口；`,
                    },
                    {
                        data: `2.作用不同:使用document对象可以对HTML文档进行检查、修改或添加内容，并处理内部事件，
                                window对象是浏览器会为每个HTML文档创建一个window对象，并为每个对象创建一个额外的window对象；`,
                    },
                    {
                        data: `3.使用方式不同:可以window.document,也可以直接使用document,
                                直接使用window对象`,
                    },
                ],
            },
        };
    },
    methods: {
        jumpTo() {
            window.open('https://juejin.cn/post/6844903587693199374');
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
