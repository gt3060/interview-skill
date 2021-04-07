<template>
    <div>
        <text-field catalog
                    title="VUE-什么是异步渲染"
                    content="举个例子就是，在方法里面给相同变量赋不同的值，在最后渲染时，渲染的数据为最后赋值的那一个，
                            这是因为在做数据处理时候，会将两次赋值进行合并。"
                    fontSizeType="middle">
        </text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="VUE-vue为什么采用异步渲染"
                    content="可以从用户和性能两个方面来进行探讨，用户体验上来看，渲染两次中间会有短暂闪烁更换值得画面，故体验感很不好；
                            从性能上来看，最终呈现得自然是第二次渲染得，那么无疑第一次渲染是无用得，是增加性能得消耗。
                            vue异步渲染的核心思想是nextTick"
                    fontSizeType="middle">
        </text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="VUE-nextTick"
                    content="就是在下次dom更新循环结束后执行回调，详细点击下面按钮跳转"
                    fontSizeType="middle">
        </text-field>
        <el-button type="text"
                   @click="jumpTo">详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210323',
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
        jumpTo() {
            this.$router.push({
                name: 'vueInterview',
                params: {
                    id: 'c19',
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

<style scoped lang='less'>
.codeBorder {
    width: 100%;
    border-radius: 10px;
}
.commonStyle {
    margin-top: 20px;
}
</style>
