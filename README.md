# interview-skill

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 备注
只用于自己学习，记录笔记而已。内容都是借鉴各位大佬，前面很多内容的参考链接忘记贴出，如遇到，另贴。

### 项目结构
.
|-- node_modules                      // 依赖文件
|-- public                            // 入口文件
|   |-- favicon.ico
|   |-- index.html                       // 入口页面
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- assets                          //公共资源文件包括公共js，图片
|   |-- data                            //抽离数据文件
|   |-- store                          // vuex的状态管理
|   |-- router                          // 路由管理
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|   |-- static                          // 公共样式文件
|   |-- views                           // 视图组件
|   |-- App.vue
|   |-- main.js
|   |-- main.less
|-- .babel.config.js                         // ES6语法编译配置
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- package.json                     // 项目基本信息
|-- package-lock.json                // 项目依赖详细信息

### 参考链接：

vue官方文档；

技术胖关于vue2.x的教程；

时间复杂度/空间复杂度：https://zhuanlan.zhihu.com/p/50479555

希尔排序图片来源：https://www.cnblogs.com/cc-freiheit/p/10983821.html
