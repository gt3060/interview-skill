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
                    <p>此篇主要记录webpack的理解和使用，这张也许篇幅有点长，是因为，还是要从上面往下面慢慢读吧。</p>
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
                                        更容易分别升级项目，代码：npm install webpack webpack-cli --save--dev，其中webpack是核心模块，webpack-cli是命令行工具"></text-field>
                    <text-field content="安装好之后可以通过webpack -v进行查看安装好的webpack版本，这里需要注意的是:
                                        如果安装webpack并灭有采用全局安装，则在终端使用此命令时，需要额外指定其在node_modules
                                        中的地址，例如本项目，需要这么写：node_modules/.bin/webpack -v"></text-field>
                    <text-field catalog
                                title="快速上手一个webpack的小demo"
                                content="首先，创建两个文件夹src(用来存放编写的javascript代码)、dist(用来存放供浏览器读取的文件，也就是通过webpack打包成的文件)"
                                fontSizeType="small">
                    </text-field>
                    <text-field content="接着在dist文件夹下手动创建一个index.html文件，并在src目录下创建一个entry.js文件用于编写我们的javascript，也是入口文件，如下："></text-field>
                    <img alt=""
                         src="@/assets/webpackDemoHtml.jpg"
                         width="90%" />
                    <text-field content="接下来，我们就开始利用webpack命令第一次打包试试看："></text-field>
                    <img alt=""
                         src="@/assets/webpackDemoCode.png"
                         width="90%" />
                    <text-field content="可以看到在dist文件夹下自动生成一个main.js文件，即为打包后的文件，然后运行index.html如下："></text-field>
                    <img alt=""
                         src="@/assets/webpackDemoRes.png"
                         width="90%" />
                    <div style="display:flex;">
                        <img src="@/assets/CONTENT DELIVERY.png"
                             alt=""
                             style="width:24px;height:24px; margin-top:6px" />
                        <span style="font-size:22px; font-weight: bold; margin-left:10px">详细介绍</span>
                    </div>
                    <el-divider></el-divider>
                    <text-field catalog
                                title="入口和出口"
                                content="首先需要配置webpack.config.js文件，这个文件的作用是配置webpack的，是需要自己手动创建的，下面这个就是webpack.cofig.js文件初始化的结构："
                                fontSizeType="small">
                    </text-field>
                    <div class="codeBorder fontCodeStyle">
                        <pre class="codeBorder">
        module.exports = {<br/>
            // 入口文件的配置项，可以是单一入口，也可以是多入口<br/>
            entry: {},<br/>
            // 出口文件的配置项，在webpack2.X版本后，支持多出口配置<br/>
            output: {},<br/>
            // 模块，例如解读css，图片如何转换、压缩<br/>
            module: {},<br/>
            // 插件，用于生产模板和各项功能<br/>
            plugins: [],<br/>
            // 配置webpack开发服务功能<br/>
            devServer: {}<br/>
        }
                        </pre>
                    </div>
                    <text-field content="entry（入口配置)，这个选项就是配置我们要压缩的文件，包括js、css等，也就是将上面demo中./src/entry.js写入其中："></text-field>
                    <div class="codeBorder fontCodeStyle">
                        <pre class="codeBorder">
            entry: {<br/>
                entryName:'./src/entry.js', // 这个entryName自定义的，<br/>
            },
                        </pre>
                    </div>
                    <text-field content="output（出口配置），这是配置我们最后打包文件的位置和文件名，也就是上面的打包到dist文件下，默认文件名main："></text-field>
                    <div class="codeBorder fontCodeStyle">
                        <pre class="codeBorder">
            const  path  =  `require`('path');<br/>
            output: {<br/>
                // 打包路径path<br/>
                path: path.resolve(__dirname,'dist'),<br/>
                //打包的文件名称<br/>
                filename:'bundle.js'<br/>
            },
                        </pre>
                    </div>
                    <text-field content="此时，如果你不进行其他配置，则可以直接输入webpack打包即可，有时会遇到多入口，多出口这种配置，其设置为："></text-field>
                    <div class="codeBorder fontCodeStyle">
                        <pre class="codeBorder">
            entry: {<br/>
                entryName:'./src/entry.js',<br/>
                entryName1:'./src/entry1.js',<br/>
            },
            output: {<br/>
                // 打包路径path<br/>
                path: path.resolve(__dirname,'dist'),<br/>
                //打包的文件名称<br/>
                filename:'[name].js'<br/>
            },
                        </pre>
                    </div>
                    <text-field content="[name]的意思是根据入口文件的名称打包成相同的名称，即：有几个入口文件就有几个出口文件。"></text-field>
                    <text-field catalog
                                title="服务及热更新"
                                content="首先需要配置webpack.config.js文件，这个文件的作用是配置webpack的，是需要自己手动创建的，下面这个就是webpack.cofig.js文件初始化的结构："
                                fontSizeType="small">
                    </text-field>
                    <text-field content="首先安装webpack服务，npm install webpack-dev-server --save-dev，下载好后，需要进行配置，
                                        仍然在webpack.config.js文件中配置，如下："></text-field>
                    <div class="codeBorder fontCodeStyle">
                        <pre class="codeBorder">
            devServer: {<br/>
                // 设置基本目录结构<br/>
                contentBase: path.resolve(__dirname, 'dist'),<br/>
                // 服务器的ip地址，可以使用ip也可以使用localhost<br/>
                host: '0.0.0.0',<br/>
                // 服务端压缩是否开启<br/>
                compress: true,<br/>
                // 配置服务端口号<br/>
                port: 8081<br/>
            }
                        </pre>
                    </div>

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
