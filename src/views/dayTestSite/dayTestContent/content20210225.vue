<template>
    <div>
        <text-field catalog
                    title="CSS-样式导入，使用link和@import的区别"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="cssList" />
        <text-field catalog
                    title="JS-用递归实现，数组长度为5且随机数在0-30间不重复的值"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        function sjsz(num){<br/>
            var ary = [];*//创建一个空数组用来保存随机数组*<br/>
            for(var i=0; i&lt;num; i++){*//按照正常排序填充数组*<br/>
                    ary[i] = i+1;<br/>
            }<br/>
            ary.sort(function(){<br/>
                return 0.5-Math.random();*//返回随机正负值*<br/>
            });<br/>
            return ary;*//返回数组*<br/>
        }
            </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210225',
    data() {
        return {
            cssList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            'link方式是html标签，除了可以引入css样式以外，还可以定义rss等其他事务，而@import是css提供的，只能引入css；',
                    },
                    {
                        data:
                            'link在页面加载时候就一同加载，@import是在页面加载结束之后加载；',
                    },
                    {
                        data:
                            'link是html标签，不需要兼容；@import需要ie5以上才可以使用。',
                    },
                    {
                        data:
                            'link可以通过js操作DOM动态引入样式表改变样式，而@import不可以',
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

<style scoped lang='less'>
.codeBorder {
    width: 100%;
    border-radius: 10px;
}
.randomStyle {
    display: flex;
    margin: 20px;
    span {
        &:first-child {
            margin-top: 7px;
        }
    }
    .spanStyle {
        margin: 0px 15px;
        margin-top: 7px;
    }
}
.inputStyle {
    width: 20%;
}
</style>
