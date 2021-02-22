<template>
    <div class="learnExecution">
        <el-backtop></el-backtop>
        <div class="learnCardContain">
            <router-link to="/">
                <div class="learn-back">
                    <div>
                        <i class="el-icon-arrow-left arrow-leftStyle"></i>
                    </div>
                    <div class="goBack">&nbsp;&nbsp;&nbsp;返回主页</div>
                </div>
            </router-link>
            <div class="titleStyle">
                <div class="titleIconStyle">
                    <img src="@/components/picture/dayTestSite.jpeg"
                         class="imgStyle"
                         alt="" />
                </div>
                <div class="titleFontStyle">
                    <span style="font-size:25px">每日试题</span>
                    <el-divider></el-divider>
                    <p></p>
                </div>
            </div>
            <div style=" width:75%;">
                <div class="catalogStyle fontStyle">
                    <calendar></calendar>
                    <text-field></text-field>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../utils/common';
import calendar from '../../components/calendar.vue';
import TextField from '../../components/textField.vue';
export default {
    data() {
        return {};
    },
    methods: {},
    components: {
        TextField,
        calendar,
    },
    mounted() {
        highlightCode();
    },
};
</script>

<style scoped>
.learnExecution {
    background-image: linear-gradient(#feefe8, white);
}
</style>
