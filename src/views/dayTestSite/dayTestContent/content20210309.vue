<template>
    <div>
        <text-field catalog
                    title="CSS-解释下，css中Sprites的原理及优缺点"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="sprites就是常说的精灵图，他就是将很多个小图片拼接到一个图片中，通过background-position和元素
                            尺寸调节需要显示的背景图案。"></text-field>
        <text-field content="优点：减少http请求次数；减少图片字节大小；这也是选用精灵图的最大原因。"></text-field>
        <text-field content='缺点：图片合并麻烦；维护麻烦，修改一个图片就有可能重新布局整个图片和样式。'></text-field>
        <text-field content="具体使用如下："></text-field>
        <el-card>
            <p class="commonStyle">首先有这样的一个精灵图：</p>
            <img src="@/assets/sprites.png"
                 class="commonStyle"
                 alt="" />
            <p class="commonStyle">下面我们想在下面中的每个数据前插入精灵图的图片</p>
            <p v-for="(item,index) in list"
               class="commonStyle"
               :key="index">{{item.content}}</p>
            <p class="commonStyle"> ---------------结果为:------------------</p>
            <div v-for="(item) in list"
                 class="commonStyle"
                 style="display:flex"
                 :key="item.class">
                <div :class="item.class"></div>
                <div>{{item.content}}</div>
            </div>
            <p class="commonStyle">----------------代码为:-------------------</p>
            <div class="codeBorder fontCodeStyle">
                <pre class="codeBorder">
        .a1,<br/>
        .a2,<br/>
        .a3,<br/>
        .a4,<br/>
        .a5 {<br/>
            width: 30px;<br/>
            height: 23px;<br/>
            background: url(../../../assets/sprites.png);<br/>
        }<br/>
        .a1 {<br/>
            background-position: -5px 0px;<br/>
        }<br/>
        .a2 {<br/>
            background-position: -5px -22px;<br/>
        }<br/>
        .a3 {<br/>
            background-position: -5px -66px;<br/>
        }<br/>
        .a4 {<br/>
            background-position: -5px -95px;<br/>
        }<br/>
        .a5 {<br/>
            background-position: -5px -120px;<br/>
        }
                </pre>
            </div>
        </el-card>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-返回到顶部的方法有哪些"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="①锚标记：这种方式是重新在当前页签内跳转到这个name为top的页面。"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 顶部<br/>
        &lt;p name="top" id="top">顶部&lt;/p><br/>
        // 底部<br/>
        &lt;a href="#top" target="_self">返回顶部&lt;/p>
            </pre>
        </div>
        <text-field content="②JS-scroll函数：主要有两种，一种是scrollBy(xnum,ynum)指向水平/垂直滚动多少像素；另一种是scrollTo
                            (xpos，ypos)指移动到水平/垂直的坐标。"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt; href="javascript:scrollTo(0,0);">返回顶部&lt;/p>
            </pre>
        </div>
        <text-field content="③利用scrollIntoView：document.getElementById(id).scrollIntoView();"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="GIT/SVN:说说二者区别。"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="gitList" />
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210309',
    data() {
        return {
            gitList: {
                listTitle: '',
                routeList: [
                    {
                        data: `Git是分布式的，SVN是集中式的，SVN必须有一个服务器版本库就放在一个中央服务器。所有开发人员都是与服务器进行交互的
                                Git更倾向于分布式开发，每台计算机上都有一个完整的本地版本库。和服务器上的一模一样。;`,
                    },
                    {
                        data:
                            'Git分支廉价，SVN分支昂贵，Git 分支是指针指向某次提交，而 SVN 分支是拷贝的目录。',
                    },
                    {
                        data:
                            'Git具开发代码审核功能，也就是说管理员有权拒绝合并开发代码到稳定版本上。',
                    },
                ],
            },
            list: [
                {
                    class: 'a1',
                    content: '测试一',
                },
                {
                    class: 'a2',
                    content: '测试二',
                },
                {
                    class: 'a3',
                    content: '测试三',
                },
                {
                    class: 'a4',
                    content: '测试四',
                },
                {
                    class: 'a5',
                    content: '测试五',
                },
            ],
        };
    },
    methods: {
        jumpTo() {},
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
.a1,
.a2,
.a3,
.a4,
.a5 {
    width: 30px;
    height: 23px;
    background: url(../../../assets/sprites.png);
}
.a1 {
    background-position: -5px 0px;
}
.a2 {
    background-position: -5px -22px;
}
.a3 {
    background-position: -5px -66px;
}
.a4 {
    background-position: -5px -95px;
}
.a5 {
    background-position: -5px -120px;
}
</style>
