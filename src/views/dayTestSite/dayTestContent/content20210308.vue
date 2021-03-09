<template>
    <div>
        <text-field catalog
                    title="CSS-介绍边界叠加"
                    content="边界叠加其实就是：当一个元素出现在另一个元素上面时，第一个元素的底边界与第二个元素的顶边界发生叠加，
                            解决办法如下："
                    fontSizeType="middle">
        </text-field>
        <text-field :list="htmlList" />
        <el-button type="text"
                   @click="jumpToBFC">BFC详情跳转</el-button>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-let、const、var区别"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="cssList" />
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 代码一<br/>
        {<br/>
            let a = 1;<br/>
        }<br/>
        console.log(a); // a is not defined<br/>
        // 代码二<br/>
        {<br/>
            let a = 123;<br/>
            let a = 'str';<br/>
        }<br/>
        // 上面代码报错，Identifier 'a' has already been declared
            </pre>
        </div>
        <el-divider></el-divider>
        <text-field catalog
                    title="代码审查"
                    content="Code Review 的首要目的是改善和保证代码质量，预防 bug。
                    此外还有益于制定团队代码规范，形成团队技术氛围，加深技术团队成员沟通，老带新互助成长等等."
                    fontSizeType="middle">
        </text-field>
        <text-field content="Code Review实用建议：每个 Review 至少给一条正面评价、对事不对人、保证发布的代码和评审意见的可读性、
                            用工具进行基础问题的自动化检查、全员参加 Code Review，并设定各部分负责人、不要在 review 中讨论需求，review 就是 review
                            、有更好的方案，尽管提出来。"></text-field>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210308',
    data() {
        return {
            cssList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            '是否可以变量提升：var存在变量提升、let/const不存在；',
                    },
                    {
                        data: 'let/const都是块级局部变量，如代码一；',
                    },
                    {
                        data:
                            'let/const在一个块作用域里不能声明两个相同名字的变量，如代码二；',
                    },
                    {
                        data:
                            'const声明必需赋值，且不允许多次赋值，其他同let；',
                    },
                ],
            },
            htmlList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            '设置1px的透明边框：border:1px solid transparent；',
                    },
                    {
                        data: '设置BFC',
                    },
                ],
            },
        };
    },
    methods: {
        jumpToBFC() {
            this.$router.push({
                name: 'LearnCSS',
                params: {
                    id: 'bfc',
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
</style>
