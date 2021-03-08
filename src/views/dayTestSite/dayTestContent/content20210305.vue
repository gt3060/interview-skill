<template>
    <div>
        <text-field catalog
                    title="HTML-html5中的form怎么关闭自动完成"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="首先要理解的是，什么是form的自动完成，首先，HTML5有个新属性:autocomplete，
                            这个属性就是设置表单是否启用自动完成功能，如果启用自动完成功能，那么，在用户输入内容之后，
                            输入记录会被记录，会被加载到提示输入列表中，但是什么情况不用自动完成功能呢？如果这个提示输入列表
                            中的数据是从数据库中查询列举，而非历史纪录中查询，则应该关闭，该属性值为on/off。"></text-field>
        <text-field content="在理解题目是什么意思后，就可以知道关闭自动完成功能的方法有一下几种："></text-field>
        <text-field content="①：设置form的autocomplete为off，即关闭整个表单的自动完成；"></text-field>
        <text-field content="②：设置input输入框的autocomplete为off，即单纯关闭此输入框的自动完成；"></text-field>
        <text-field content="③：除了上面两种方式外，还有一种是针对IE浏览器，在IE的internet选项菜单中的内容-自动完成处直接设置。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="http有哪些状态码"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-button type="text"
                   @click="jumpToHTTPsatus">详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210305',
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
        jumpToHTTPsatus() {
            this.$router.push({
                name: 'htmlAndCssInterview',
                params: {
                    id: 'c19',
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
