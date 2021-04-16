const path = require('path')
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',//模式：默认有两种，一种是production（生产模式）一种是development（开发模式）

    // 入口文件的配置项
    entry: {
        entry: './src/entry.js'
    },

    // 出口文件的配置项
    output: {
        filename: 'bundle.js',//打包后的文件名
        path: path.resolve(__dirname, 'dist'), //__dirname是表示以当前文件目录进行解析打包，dist为文件夹
    },

    // 模块，例如解读css，图片如何转换/压缩
    module: {
        rules: [
            {
                test: /\.css$/, // 用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的
                // use数组中执行顺序是从后往前进行处理
                use: ['style-loader', 'css-loader'], // loader名称，就是你要使用模块的名称，这个选项也必须进行配置
                // include: [
                //     path.resolve(__dirname, '../src/svgFolder')
                // ], // 手动添加必须处理的文件（文件夹）
                // exclude: [
                //     path.resolve(__dirname, '../src/svgFolder')
                // ], // 屏蔽不需要处理的文件（文件夹）,
                // query: [] //为loaders提供额外的设置选项（可选）
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                // 使用多个loader用use，使用一个loader可以用use也可以直接使用loader
                // use: ['url-loader', 'file-loader'],
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb就会被base64处理，
                    // base64处理的优点就是减少请求数量，减轻服务器压力，缺点就是体积会更大，
                    limit: 8 * 1024,
                    // fallback: require.resolve('file-loader'),
                    // 解决关闭url-loader的es6模块话，使用commonJs解析
                    // esModule: false
                    // 给图片重命名
                    // [hash:10]：取哈希值前10位
                    // [ext]：取文件原来扩展名
                    name: '[hash:10].[ext]',
                    // 将打包后的所有图片放到imgs文件夹下
                    outputPath: 'imgs'
                }
            },
            // {
            //     test: /\.html$/,
            //     // 处理html文件的img标签里面的图片，负责引入img进而被url-loader识别
            //     loader: 'html-loader'
            // },
            {
                // 打包其他资源（除了css/js/html）
                exclude: /\.(css|js|html|jpg|png|gif|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            },
            // {
            //     // vuecli也包括这个eslint校验
            //     // 在package.json文件中有配置，
            //     test: /\.js$/,
            //     // 排除node_modules中的js代码
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {
            //         // 自动修复eslint错误
            //         fix: true
            //     }

            // }
        ]
    },

    // 插件，用于生产模板和各项功能
    plugins: [
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },// minify是对html文件进行压缩
            hash: true,// hash：为了开发中js有缓存效果
            template: './src/index.html'// template：是要打包的html模版路径和文件名称
        })
    ],

    // 配置webpack开发服务功能
    // 自动编译，自动打开浏览器，自动刷新浏览器
    // 特点：只会在内存编译打包，不会有任何输出
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),

        // 服务器的ip地址，可以使用ip也可以使用localhost
        // host: '0.0.0.0',

        // 服务端压缩(gzip)是否开启
        compress: true,

        // 配置服务端口号
        port: 8081,

        // 自动打开默认浏览器
        open: true,
    }
}
