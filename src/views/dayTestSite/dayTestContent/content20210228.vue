<template>
    <div>
        <text-field catalog
                    title="HTML-iframe框架的优缺点"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-button type="text"
                   @click="jumpToIframe">详情跳转</el-button>
        <el-divider></el-divider>
        <text-field catalog
                    title="CSS-创建一个三角形"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-button type="text"
                   @click="jumpToTriangle">详情跳转</el-button>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-统计某个字符或字符串在另一个字符串中所出现的次数。"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="以‘week,eat teeletter’字符串为例，查询ee出现次数"></text-field>
        <el-button class="commonStyle"
                   type="primary"
                   @click="handleSelectTimes">查询</el-button>
        <div class="codeBorder fontCodeStyle commonStyle">
            <pre class="codeBorder">
        // 正则表达式<br/>
        let oldStr = this.oldStr;// oldStr:week,eat teeletter<br/>
        let length = oldStr.match(/ee/g).length;<br/>
        console.log(length);//2<br/>
        // 传统js<br/>
        // split<br/>
        let length = oldStr.split('ee').length - 1;<br/>
        // indexOf<br/>
        let length = 0;<br/>
        while (oldStr.indexOf('ee') !== -1) {<br/>
            length++;<br/>
            oldStr = oldStr.substring(<br/>
                oldStr.indexOf('ee') + 2,<br/>
                oldStr.length<br/>
            );<br/>
        }
            </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210228',
    data() {
        return {
            oldStr: 'week,eat teeletter',
        };
    },
    methods: {
        jumpToIframe() {
            this.$router.push({
                name: 'htmlAndCssInterview',
                params: {
                    id: 'c10',
                },
            });
        },
        jumpToTriangle() {
            window.open('https://www.cnblogs.com/chengxs/p/11406278.html');
        },
        handleSelectTimes() {
            let oldStr = this.oldStr;
            let length = oldStr.match(/ee/g).length;
            // let length = oldStr.split('ee').length - 1;
            // let length = 0;
            // while (oldStr.indexOf('ee') !== -1) {
            //     length++;
            //     oldStr = oldStr.substring(
            //         oldStr.indexOf('ee') + 2,
            //         oldStr.length
            //     );
            // }
            this.$message({
                showClose: true,
                message: `一共查询出${length}条`,
                type: 'success',
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
