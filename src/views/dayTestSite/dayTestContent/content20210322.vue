<template>
    <div>
        <text-field catalog
                    title="不同浏览器之间存在哪些兼容问题，又如何解决。"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="①不同浏览器会出现标签外边距和内边距大小不同，解决办法："></text-field>
        <p class="code codeHeight"><code>*{margin:0px; padding:0px}</code></p>
        <text-field content="②标签设置较小的高度（一般小于10px），在IE6、IE7、遨游浏览器会遇到，
                            标签高度不受控制，超过自身设置的高度。原因是在IE８之前浏览器会给标签设置一个最小高度。"></text-field>
        <p class="code codeHeight"><code>给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。</code></p>
        <text-field content="③块属性标签float后,又有横向的margin设置,在ie6中显示margin比实际大."></text-field>
        <p class="code codeHeight"><code>在float标签样式中加入display:inline将其转化为行内属性.</code></p>
        <text-field content="④图片默认有间距:几个img标签放在一起的时候，有些浏览器会有默认的间距，加上问题一中提到的通配符也不起作用.
                            "></text-field>
        <p class="code codeHeight"><code>使用float属性为img布局</code></p>
        <text-field content="⑤标签最低高度设置min-height不兼容.
                            "></text-field>
        <p class="code codeHeight"><code>如果我们要设置一个标签的最小高度200px，需要进行的设置为</code></p>
        <p class="code codeHeight"><code>{min-height:200px; height:auto !important; height:200px; overflow:visible;}</code></p>
        <text-field content="⑥光标手形:firefox/Chrome不支持hand，但ie支持pointer"></text-field>
        <p class="code codeHeight"><code>统一使用cursor:pointer;</code></p>
        <text-field content="⑦对字体大小small定义不同，Firefox为13px，而IE为16px，差别比较大"></text-field>
        <p class="code codeHeight"><code>使用指定的字体大小如14px或者使用em</code></p>
        <text-field content="⑧一个标签浮动，另一个不浮动的元素自然上浮与之靠近出现3px间距"></text-field>
        <p class="code codeHeight"><code>对浮动的标签设置_margin-right: -3px;</code></p>
        <text-field content="除了上面的,还需要注意的有:如果要做到兼容ie较低版本,那么就尽量减少使用h5标签."></text-field>
        <el-divider></el-divider>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210322',
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
.codeHeight {
    margin-top: 7px;
    margin-bottom: 7px;
}
</style>
