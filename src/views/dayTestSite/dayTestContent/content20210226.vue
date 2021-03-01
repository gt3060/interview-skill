<template>
    <div>
        <text-field catalog
                    title="HTML-html5离线存储"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="HTML5提出了两大离线存储技术：localstorage与Application Cache；localStorage以后会专门记录，
                            下面主要针对，Application Cache："></text-field>
        <text-field content="通过把需要离线存储在本地的文件列在一个manifest配置文件中，
                            这样即使在离线的情况下，用户也可以正常使用App。"></text-field>
        <text-field content="他的主要优势：离线浏览；提升页面载入速度；降低服务器压力。"></text-field>
        <text-field content="检测网络是否在线：navigator.onLine，返回为true则网络在线，返回为false为断网状态。"></text-field>
        <text-field content="使用如下："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        html标签：<br/>
        &lt;html manifest="demo.appcache"&gt;<br/>
        后缀名也可以是：demo.manifest<br/>
        demo.appcache文件:<br/>
        CACHE MANIFEST<br/>

        CACHE:<br/>
        # 需要缓存的文件列表<br/>
        style1.css<br/>
        1.jpg<br/>
        01.js<br/>
        http://localhost/applicationcache/02.js<br/>
        http://localhost/applicationcache/zepto.js<br/>

        NETWORK:<br/>
        # 不需要缓存的<br/>
        4.jpg<br/>

        FALLBACK:<br/>
        # 访问缓存失败后，备用访问的资源，第一个是访问源，第二个是替换文件*.html /offline.html<br/>
        2.jpg/3.jpg
            </pre>
        </div>
        <el-divider></el-divider>
        <text-field catalog
                    title="CSS-css选择器有哪些，哪些属性可以继承"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="cssList" />
        <text-field content="上面选择器有几点需要注意："></text-field>
        <text-field content="一是后代选择器和子选择器的区别，看下图："></text-field>
        <el-card>
            <span>示例一(后代选择器)：</span>
            <div class="demoSelector">
                <div>
                    <span>1111111</span>
                    <span>2222222</span>
                    <div>
                        <p>
                            <span>3333333</span>
                            <span>4444444</span>
                        </p>
                    </div>
                </div>
            </div>
            <span style="margin-top:20px">示例二(子选择器)：</span>
            <div class="demoSelectorTwo">
                <div>
                    <span>1111111</span>
                    <span>2222222</span>
                    <div>
                        <p>
                            <span>3333333</span>
                            <span>4444444</span>
                        </p>
                    </div>
                </div>
            </div>
        </el-card>
        <text-field content='可知，后代选择器是针对div的所有后代p标签，无论他有多少层，子类选择器是仅针对于父元素是div的p标签；'></text-field>
        <text-field content="二是，相邻选择器，如下例子，div+p"></text-field>
        <el-card>
            <div class="demoSelectorThree">
                <p>p标签</p>
                <div>div标签</div>
                <p>p标签</p>
                <p>p标签</p>
                <p>p标签</p>
                <p>p标签</p>
                <p>p标签</p>
            </div>
        </el-card>
        <text-field content="可见，满足：首先div和p有相同的父元素，其次：div和p相邻（也就是紧挨着div的那个p标签）"></text-field>
        <text-field content='只能把自己的样式继承给后代节点，但是不影响自己的父节点和兄弟节点，可继承：color, text-, font- , line-，
                            不可继承：盒子模型的属性，定位的属性，背景属性'></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-去除字符串中最后一个指定字符"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <p class="commonStyle">
            <span>原字符串：</span>
            <span>{{oldString}}</span>
        </p>
        <div class="randomStyle">
            <span>去除字母：</span>
            <el-input v-model="removeLetter"
                      class="inputStyle"
                      placeholder="请输入随机数"></el-input>
        </div>
        <el-button type="primary"
                   class="commonStyle"
                   @click="handleRemoveNull">去除</el-button>
        <p class="commonStyle">
            <span>新字符串：</span>
            <span>{{newString}}</span>
        </p>
        <div class="codeBorder fontCodeStyle commonStyle">
            <pre class="codeBorder">
        handleRemoveNull() {<br/>
            let oldString = this.oldString;<br/>
            let lastIndex = oldString.lastIndexOf(this.removeLetter);<br/>
            // 采用subString(开始下标，结束下标)<br/>
            // let newString =<br/>
            //     oldString.substring(0, lastIndex) +<br/>
            //     oldString.substring(lastIndex + 1);<br/>
            // 采用substr(开始下标，截取长度)<br/>
            let newString = oldString.substr(0, lastIndex) + oldString.substr(lastIndex + 1);<br/>
            // 采用slice，和subString相似，只是可以填入负数<br/>
            this.newString = newString;<br/>
        },
            </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210226',
    data() {
        return {
            cssList: {
                listTitle: 'css选择器',
                routeList: [
                    {
                        data: '通用选择器：*',
                    },
                    {
                        data: 'class类选择器：.demo',
                    },
                    {
                        data: 'id选择器：#demo',
                    },
                    {
                        data: '标签选择器：div',
                    },
                    {
                        data: '后代选择器：div p（选择div元素内所有的p元素）',
                    },
                    {
                        data: '子选择器：div > p（选择父元素为div的所有p元素）',
                    },
                    {
                        data: '群组选择器：div , p（选择所有div和p元素）',
                    },
                    {
                        data:
                            '相邻选择器：div+p（div和p有相同的父元素，且两个元素紧挨着，只适用于与div紧挨着的p标签内容）',
                    },
                    {
                        data:
                            '伪类选择器：a:link, a:visited, a:active, a:hover, input:focus, p:first-child,...',
                    },
                    {
                        data:
                            '伪元素选择器：p:first-letter, p:first-line, p:before, p:after,...（选择每个元素的首字母/首行，在每个元素内容前/后插入内容）',
                    },
                ],
            },
            oldString: 'fontCodeStyle Border',
            newString: '',
            removeLetter: '',
        };
    },
    methods: {
        handleRemoveNull() {
            let oldString = this.oldString;
            let lastIndex = oldString.lastIndexOf(this.removeLetter);
            // 采用subString(开始下标，结束下标)
            // let newString =
            //     oldString.substring(0, lastIndex) +
            //     oldString.substring(lastIndex + 1);
            // 采用substr(开始下标，截取长度)
            let newString =
                oldString.substr(0, lastIndex) +
                oldString.substr(lastIndex + 1);
            // 采用slice，和subString相似，只是可以填入负数
            this.newString = newString;
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
.demoSelector {
    margin-top: 20px;
    width: 50%;
    div span {
        border: 1px solid black;
    }
}
.demoSelectorTwo {
    margin-top: 20px;
    width: 50%;
    div > span {
        border: 1px solid black;
    }
}
.demoSelectorThree {
    margin-top: 20px;
    width: 50%;
    div + p {
        border: 1px solid black;
    }
}
.randomStyle {
    display: flex;
    margin: 20px 20px 0px 0px;
    span {
        &:first-child {
            margin-top: 7px;
            margin-right: 15px;
        }
    }
}
.inputStyle {
    width: 20%;
}
.commonStyle {
    margin-top: 20px;
}
</style>
