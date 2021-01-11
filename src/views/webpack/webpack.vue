<template>
    <div class="learnExecution">
        <el-backtop></el-backtop>
        <div class="learnCardContain">
            <router-link to="/">
                <div class="learn-back">
                    <div>
                        <i class="el-icon-arrow-left arrow-leftStyle"></i>
                    </div>
                    <div class="goBack">&nbsp;&nbsp;&nbsp;返回主页</div>
                </div>
            </router-link>
            <div class="titleStyle">
                <div class="titleIconStyle">
                    <img src="@/components/picture/webpackBg.jpg"
                         class="imgStyle"
                         alt="" />
                </div>
                <div class="titleFontStyle">
                    <span style="font-size:25px">webpack</span>
                    <el-divider></el-divider>
                    <p>此篇主要记录webpack的理解和使用</p>
                </div>
            </div>
            <div style=" width:75%;">
                <div class="catalogStyle fontStyle">
                    <div style="display:flex;">
                        <img src="@/assets/CONTENT DELIVERY.png"
                             alt=""
                             style="width:24px;height:24px; margin-top:6px" />
                        <span style="font-size:22px; font-weight: bold; margin-left:10px">简介</span>
                    </div>
                    <el-divider></el-divider>
                    <text-field catalog
                                title="前言"
                                content="javascript刚开始设计时候，是没有模块化概念，这样将会面临几个问题：
                                        首先是，需要手动维护javascript加载顺序，其次，每一个script标签意味着都需要向服务器
                                        请求一次静态资源，这样，过多标签会影响页面加载速度；此外，每一个script标签的顶层
                                        的作用域为全局作用域，这样，如果变量没有加以处理，则很容易发生作用域污染情况。"
                                fontSizeType="small">
                    </text-field>
                    <text-field content="随着AMD,CMD,CommonJs,ES6模块化标准出现，解决了一部分问题：模块之间不会存在命名冲突；
                                        导入和导出清晰的分辨模块之间的依赖；但也同时出现了新的问题：.无法使用code splitting和tree shaking
                                        （这两个特性后来再补充认识）；大多数的npm模块还是CommonJS的形式，而浏览器不支持其语。">
                    </text-field>
                    <text-field content="因此，打包工具的出现，将存在依赖关系的模块按照特定的规则合并成为单个JS文件，一次全部加载到页面；
                    于此同时，在页面初始是加载一个入口模块，其他模块异步的进行加载。"></text-field>
                    <text-field :list="webpackList"></text-field>
                    <text-field content="总结：什么是webpack，Webpack是一个开源的JavaScript模块打包工具，其最核心的功能是解决模块之间的依赖，
                                        把个模块按照特定的规则和顺序组织在一起，最终合并为一个或多个JS文件，这个过程叫作模块打包。">
                    </text-field>
                    <text-field catalog
                                title="安装"
                                content="前提，确保安装了Node.js最新版，其意义在于免去由于版本问题所带来的兼容等各类问题；"
                                fontSizeType="small">
                    </text-field>
                    <text-field content="webpack安装分为全局安装和本地安装，全局安装：npm install --global webpack；
                                        但是建议的是采用本地安装，可以使我们在引入破坏式变更(breaking change)的依赖时，
                                        更容易分别升级项目，代码：npm install --save-dev webpack"></text-field>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../utils/common';
import TextField from '../../components/textField.vue';
export default {
    data() {
        return {
            webpackList: {
                listTitle:
                    '最后，webpack在众多打包工具中脱颖而出，其原因归纳为：',
                routeList: [
                    {
                        data: `Webpack默认支持多种模块标准;`,
                    },
                    {
                        data: `Webpack有完备的代码分割解决方案（code splitting）;`,
                    },
                    {
                        data: `Webpack可以出来各种类型的资源;`,
                    },
                    {
                        data: `Webpack使用的人多，有庞大的社区支持.`,
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

<style scoped>
.learnExecution {
    background-image: linear-gradient(#fff8e8, white);
}
</style>
