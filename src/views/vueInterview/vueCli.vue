<template>
    <div class="vueDirectiveAbsolute">
        <text-field :title="titleContent[0].title"
                    :content="titleContent[0].content"></text-field>
        <text-field :title="titleContent[1].title"
                    :content="titleContent[1].content"></text-field>
        <text-field :title="titleContent[2].title"
                    :content="titleContent[2].content"></text-field>
        <text-field :content="titleContent[3].content"></text-field>
        <text-field content="所以，在3.x版本利用2.x版本的init初始化项目需要额外安装桥接工具，使用：npm install -g @vue/cli-init。" />
        <text-field :list="initProjectList"></text-field>
        <text-field :list="structureList"></text-field>
        <text-field :title="titleContent[4].title"
                    :content="titleContent[4].content"></text-field>
    </div>
</template>

<script>
import { highlightCode } from '../../assets/js/common';
import TextField from '../../components/textField.vue';
export default {
    components: {
        TextField,
    },
    mounted() {
        highlightCode();
    },
    data() {
        return {
            titleContent: [
                {
                    title: '1.初识vueCli',
                    content: `利用vue脚手架安装项目的前提需要安装node，原因是可以利用npm进行下载安装脚手架`,
                },
                {
                    title: '2.利用vue2.x初始化项目',
                    content: `利用vue init webpack(模板名称，通常使用webpack) xxx(文件名)`,
                },
                {
                    title: '3.利用vue3.x初始化项目',
                    content: `利用vue create xxx(文件名)`,
                },
                {
                    content: `这里值得注意的是：如果在安装脚手架时候，脚手架是3.x版本，那么，会覆盖2.x版本的vue命令。`,
                },
                {
                    title: '4.vue-cli项目结构',
                    content: `这里详见ReadMe.md。`,
                },
            ],
            initProjectList: {
                listTitle: '初始化项目时所需要填写的内容：',
                routeList: [
                    {
                        data: 'Project Name：项目名称，默认直接回车',
                    },
                    {
                        data: 'Project description：项目描述',
                    },
                    {
                        data: 'Author：作者，默认git账号绑定的开发者',
                    },
                    {
                        data: 'Vue build：编译方式',
                    },
                    {
                        data: 'Install vue-router：是否安装vue-router',
                    },
                    {
                        data: 'Use ESLint to lint your code：是否引入ESLint',
                    },
                    {
                        data: 'Pick an ESLint preset：选择一个ESLint预设',
                    },
                    {
                        data: 'Setup unit tests：是否引入单元测试',
                    },
                    {
                        data:
                            'Setup e2e tests with Nightwatch：是否引入e2e测试',
                    },
                ],
            },
        };
    },
};
</script>

<style>
</style>
