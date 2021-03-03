<template>
    <div>
        <text-field catalog
                    title="HTML-简述语义化标签"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-button type="text"
                   @click="jumpToTag">详情跳转</el-button>
        <el-divider></el-divider>
        <!-- <text-field :list="cssList" /> -->
        <text-field catalog
                    title="CSS-常用的布局方式"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="table布局："></text-field>
        <el-card>
            <div class="tableLayout">
                <div class="tableLeft">left</div>
                <div class="tableRight">right</div>
            </div>
        </el-card>
        <div class="codeBorder fontCodeStyle commonStyle">
            <pre class="codeBorder">
        &lt;div class="tableLayout"><br/>
        &lt;div class="tableLeft">left&lt;/div><br/>
            &lt;div class="tableRight">right&lt;/div><br/>
        &lt;/div><br/>
        .tableLayout {<br/>
            display: table;<br/>
            height: 100px;<br/>
        }<br/>
        .tableLeft, .tableRight {<br/>
            display: table-cell;<br/>
            border: 1px solid black;<br/>
        }<br/>
        .tableLeft {<br/>
            width: 200px;<br/>
        }
            </pre>
        </div>
        <text-field content="flex布局："></text-field>
        <el-card>
            <div class="flexLayout">
                <div class="flexLeft">left</div>
                <div class="flexRight">right</div>
            </div>
        </el-card>
        <div class="codeBorder fontCodeStyle commonStyle">
            <pre class="codeBorder">
        &lt;div class="flexLayout"><br/>
        &lt;div class="flexLeft">left&lt;/div><br/>
            &lt;div class="flexRight">right&lt;/div><br/>
        &lt;/div><br/>
        .flexLayout {<br/>
            display: flex;<br/>
            height: 100px;<br/>
        }<br/>
        .flexLeft, .flexRight {<br/>
            flex:1;<br/>
            border: 1px solid black;<br/>
        }
            </pre>
        </div>
        <text-field content="float布局："></text-field>
        <el-card>
            <div class="floatLayout">
                <div class="floatLeft">left</div>
                <div>文字文字文字</div>
                <div class="floatRight">right</div>
            </div>
        </el-card>
        <div class="codeBorder fontCodeStyle commonStyle">
            <pre class="codeBorder">
        .floatLeft {<br/>
            float: left;<br/>
        }
            </pre>
        </div>
        <text-field content="响应式布局："></text-field>
        <text-field content="通过响应式设计能使网站在手机和平板电脑上有更好的浏览阅读体验。屏幕尺寸不一样展示给用户的网页内容也不一样.利用媒体查询可以检测到屏幕的尺寸(主要检测宽度)，
                            并设置不同的CSS样式，就可以实现响应式的布局。主要依靠是css的媒体查询。"></text-field>
        <text-field content="主要通过以下几点实现："></text-field>
        <text-field content="meta标签:"></text-field>
        <div class="code">
            <br />&lt;meta name='viewport' content="width=device-width, initial-scale=1">
            <div style="height:15px"></div>
        </div>
        <text-field content="rem:之前有提过，rem是根据html标签的font-size来设置的，可以配合media query来使用。"></text-field>
        <text-field content="media query"></text-field>
        <div class="codeBorder fontCodeStyle commonStyle">
            <pre class="codeBorder">
        .mediaDemo {<br/>
            background-color: pink;<br/>
        }<br/>
        @media screen and (max-width: 960px) {<br/>
            .mediaDemo {<br/>
                background-color: darkgoldenrod;<br/>
            }<br/>
        }<br/>
        @media screen and (max-width: 480px) {<br/>
            .mediaDemo {<br/>
                background-color: lightgreen;<br/>
            }<br/>
        }
            </pre>
        </div>
        <text-field content="需要注意的是，在组件里面设置组件外的样式，如果在scoped中是无法
                            设置的，需要额外写一个style标签"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-js内置对象"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-button type="text"
                   @click="jumpToInObject">详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210224',
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
        jumpToTag() {
            this.$router.push({
                name: 'htmlAndCssInterview',
                params: {
                    id: 'c8',
                },
            });
        },
        jumpToInObject() {
            this.$router.push({
                name: 'jsBasicsInterview',
                params: {
                    id: 'c3',
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
<style>
/* @media screen and (max-width: 2000px) {
    html {
        font-size: 100px;
    }
}

@media screen and (max-width: 1000px) {
    html {
        font-size: 10px;
    }
} */
</style>

<style scoped lang='less'>
.codeBorder {
    width: 100%;
    border-radius: 10px;
}
.commonStyle {
    margin-top: 20px;
}
.tableLayout {
    display: table;
    height: 100px;
}
.tableLeft,
.tableRight {
    display: table-cell;
    border: 1px solid black;
}
.tableLeft {
    width: 200px;
}
.flexLayout {
    display: flex;
    height: 100px;
}
.flexLeft,
.flexRight {
    flex: 1;
    border: 1px solid black;
}
.floatLayout {
    height: 100px;
}
.floatLeft,
.floatRight {
    width: 50px;
    height: 50px;
    border: 1px solid black;
}
.floatLeft {
    float: left;
}
.floatRight {
    float: right;
}
.testRemSize {
    border: 1px solid black;
    width: 1rem;
    height: 1rem;
}
.mediaDemo {
    background-color: pink;
}

@media screen and (max-width: 960px) {
    .mediaDemo {
        background-color: darkgoldenrod;
    }
}

@media screen and (max-width: 480px) {
    .mediaDemo {
        background-color: lightgreen;
    }
}
</style>
