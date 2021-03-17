<template>
    <div>
        <text-field catalog
                    title="CSS-样式导入，使用link和@import的区别"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-用递归实现，数组长度为5且随机数在0-30间不重复的值"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-用递归实现，数组长度为5且随机数在0-30间不重复的值"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
            </pre>
        </div>
        <text-field :list="cssList" />
        <el-button type="text"
                   @click="jumpTo">详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
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
</style>
