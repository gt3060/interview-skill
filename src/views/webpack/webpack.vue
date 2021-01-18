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
                                content="先说下，热更新：即所见即所得，怎么实现呢，通过配置webpack.config.js文件，这个文件的作用是配置webpack的，是需要自己手动创建的，下面这个就是webpack.cofig.js文件初始化的结构："
                                fontSizeType="small">
                    </text-field>
                    <text-field content="首先安装webpack服务，npm install webpack-dev-server --save-dev，下载好后，需要进行配置，
                                        仍然在webpack.config.js文件中配置，如下："></text-field>
                    <div class="codeBorder fontCodeStyle">
                        <pre class="codeBorder">
            devServer: {<br/>
                // 设置基本目录结构，配置服务器基本运行路径，用于找到程序打包地址<br/>
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
                    <text-field content="此外需要在package.json字段下要配置，引入webpack-dev-server，如下："></text-field>
                    <div class="codeBorder fontCodeStyle">
                        <pre class="codeBorder">
            'scripts':{<br/>
                'server':"webpack-dev-server"<br/>
            }
                        </pre>
                    </div>
                    <text-field content="因此，只需要使用npm run server命令，即可打开服务器，然后用已经配置好的http://ip:host打开，
                                        这里说一个在执行时候或者是安装时候出现一个问题，就是会出现webpack-dev-server不是内部命令或者外部命令这类问题，
                                        当你重新卸载再安装发现无法解决时，应该关注一下，wepack、webpack-cli、webpack-dev-server三个插件的版本，
                                        这对版本号要求十分重要，会产生不兼容问题，在本项目中就是因为最开始安装webpack-cli时4.x版本而webpack-dev-server是3.x版本导致。"></text-field>
                    <text-field content="下面我来记录一个小知识点：就是ip中0.0.0.0和localhost区别："></text-field>
                    <text-field content="首先知道localhost是127.0.0.1的别名，127.0.0.1是回送地址（环回地址），协议立即返回不进行任何网络传输。
                                        在服务器中，0.0.0.0指的是本机上的所有IPV4地址，如果我绑定的端口指定了0.0.0.0，那么通过内网地址或外网地址都可以访问我的应用。
                                        对于只需要内网访问的服务，可以只绑定内网地址。"></text-field>
                    <text-field content="那么什么是公网和内网呢，一般我们会将网络划分公网（连Internet的）与内网，公网中的IP地址为公有地址。注册申请由Inter NIC（因特网信息中心）负责。公有地址是全球唯一的。
                                        内网（即局域网）中的IP地址为私有地址。私有地址是非注册地址，用于组织机构内部使用。私有地址的范围有三类：A类（10.0.0.0--10.255.255.255），B类（172.16.0.0--172.31.255.255），C类（192.168.0.0--192.168.255.255）；
                                        凡是以127开头的IP地址，都是回环地址，本机IP通常仅指在同一个局域网内，能同时被外部设备访问和本机访问的那些IP地址；
                                        本机IP是与具体的网络接口绑定的，比如以太网卡、无线网卡或者PPP/PPPoE拨号网络的虚拟网卡，想要正常工作都要绑定一个地址，否则其他设备就不知道如何访问它；
                                        "></text-field>
                    <text-field content="随手记录一下：在安装webpack前，使用项目你会发现，这个项目应景是热更新状态，然后我通过网上了解到，利用vuecli3.x脚手架创建项目，
                                        已经是出现热更新状态的，当然，如果没有出现，可以自己配置，之前提过新建一个webpack.config.js文件，这个主要是针对利用vueCli2.x版本来说；
                                        我查了资料手利用vueCli3.x版本内嵌了webpack基本配置，只需要新建一个vue.config.js文件，依旧可以对我们的webpack进行配置。"></text-field>
                    <el-button @click="jumpVueConfigJS"
                               type="text">具体配置参数详见：</el-button>
                    <text-field catalog
                                title="loader"
                                content="webpack自身只支持加载js和json模块，不同的loader可以对不同文件有不同的处理；例如:
                                        可以把sass文件的写法转为css；可以把es6或者es7语法转化成大多数浏览器兼容的js代码；
                                        可以把react中的jsx语法转化为js代码；值得注意的是所有的loader都需要独立安装，
                                        并在webpack.config.js里面配置，如下："
                                fontSizeType="small">
                    </text-field>
                    <div class="codeBorder fontCodeStyle"
                         style="width:100%">
                        <pre class="codeBorder">
        module: {<br/>
            rules: [{<br/>
                // 用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的<br/>
                test: /\.css$/, <br/>
                // loader名称，就是你要使用模块的名称，这个选项也必须进行配置<br/>
                use: ['style-loader', 'css-loader'], <br/>
                include: [<br/>
                    path.resolve(__dirname, '../src/svgFolder')<br/>
                ], // 手动添加必须处理的文件（文件夹）<br/>
                exclude: [<br/>
                    path.resolve(__dirname, '../src/svgFolder')<br/>
                ], // 屏蔽不需要处理的文件（文件夹）,<br/>
                query: [] //为loaders提供额外的设置选项（可选）<br/>
            }]<br/>
        },
                        </pre>
                    </div>
                    <text-field content="下面我们以打包css为例，首先定义一个css文件，包含一些样式，然后在js文件去引入，
                                        接着我们配置webpack，将所有css文件用style-loader/css-loader模板进行处理，
                                        最后执行webpack打包命令，你就可以发现css文件已经进行打包到js文件中，运行index.html即可发现："></text-field>
                    <div class="codeBorder fontCodeStyle"
                         style="width:100%">
                        <pre class="codeBorder">
        webpack.config.js<br/>
            module: {<br/>
                rules: [{<br/>
                    test: /\.css$/, <br/>
                    use: ['style-loader', 'css-loader'], <br/>
                }]<br/>
            },<br/>
        entry.js <br/>
            import './static/css/index.css'<br/>
        index.css<br/>
            body{<br/>
                background-color: red;<br/>
                color: white;<br/>
            }<br/>
        cmd<br/>
            node_modules\.bin\webpack
                        </pre>
                    </div>
                    <text-field content="loader一共有三种写法，其实就是use可以直接用loader替换，或者use+loader也不错，如下："></text-field>
                    <div class="codeBorder fontCodeStyle"
                         style="width:100%">
                        <pre class="codeBorder">
        module: {<br/>
            rules: [{<br/>
                test: /\.css$/, <br/>
                // 第一种只用use<br/>
                use: ['style-loader', 'css-loader'], <br/>
                // 第二种只用loader<br/>
                loader: ['style-loader', 'css-loader'], <br/>
                // 第三种use+loader<br/>
                use: [{<br/>
                    loader:"style-loader"<br/>
                }, {<br/>
                    loader:"css-loader"<br/>
                }], <br/>
            }]<br/>
        }
                        </pre>
                    </div>
                    <text-field catalog
                                title="plugins"
                                content="如果要使用插件，只需要两步，引入和声明："
                                fontSizeType="small">
                    </text-field>
                    <div class="codeBorder fontCodeStyle"
                         style="width:100%">
                        <pre class="codeBorder">
        const VueLoaderPlugin = require('vue-loader/lib/plugin');<br/>
        module: {<br/>
            rules: [{<br/>
                test: /\.css$/, <br/>
                use: ['style-loader', 'css-loader'], <br/>
                plugins:[new VueLoaderPlugin(),...]<br/>
            }]<br/>
        }
                        </pre>
                    </div>
                    <text-field content="我们在最初的项目结构中先创建了dist文件夹，然后手动创建了index.html文件，那么这个在
                                        实际项目中是不存在的，我们希望的是，通过webpack直接打包将index.html打包到dist文件中，
                                        我们只需要引入一个插件（html-webpack-plugin'）"></text-field>
                    <div class="codeBorder fontCodeStyle"
                         style="width:100%">
                        <pre class="codeBorder">
        const htmlPlugin= `require`('html-webpack-plugin');<br/>
        plugins: [<br/>
            new htmlPlugin({<br/>
                minify: {<br/>
                    removeAttributeQuotes: true<br/>
                },// minify是对html文件进行压缩<br/>
                hash: true,// hash：为了开发中js有缓存效果<br/>
                // template：是要打包的html模版路径和文件名称<br/>
                template: './src/index.html'<br/>
            })<br/>
        ],
                        </pre>
                    </div>
                    <el-button @click="toHtmlWebpackPlugin"
                               type="text">跳转到html-webpack-plugin详解</el-button>
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
    methods: {
        jumpVueConfigJS() {
            window.open('https://cli.vuejs.org/zh/config/#vue-config-js');
        },
        toHtmlWebpackPlugin() {
            window.open('https://www.cnblogs.com/wonyun/p/6030090.html');
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

<style scoped>
.learnExecution {
    background-image: linear-gradient(#fff8e8, white);
}
</style>
