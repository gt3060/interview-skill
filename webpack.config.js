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
        rules: [{
            test: /\.css$/, // 用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的
            use: ['style-loader', 'css-loader'], // loader名称，就是你要使用模块的名称，这个选项也必须进行配置
            // include: [
            //     path.resolve(__dirname, '../src/svgFolder')
            // ], // 手动添加必须处理的文件（文件夹）
            // exclude: [
            //     path.resolve(__dirname, '../src/svgFolder')
            // ], // 屏蔽不需要处理的文件（文件夹）,
            // query: [] //为loaders提供额外的设置选项（可选）
        }]
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
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),

        // 服务器的ip地址，可以使用ip也可以使用localhost
        host: '0.0.0.0',

        // 服务端压缩是否开启
        compress: true,

        // 配置服务端口号
        port: 8081
    }
}
