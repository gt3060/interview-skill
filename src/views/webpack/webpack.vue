<template>
    <div class="learnExecution">
        <el-backtop></el-backtop>
        <div class="learnCard">
            <div class="learnCardContain">
                <div>
                    <router-link to="/">
                        <div class="learn-back">
                            <div>
                                <i class="el-icon-arrow-left arrow-leftStyle"></i>
                            </div>
                            <div class="goBack">&nbsp;&nbsp;&nbsp;返回主页</div>
                        </div>
                    </router-link>
                </div>
                <div class="titleStyle">
                    <div class="titleIconStyle">
                        <img src="@/components/picture/webpackBg.jpg"
                             class="imgStyle"
                             alt="" />
                    </div>
                    <div class="titleFontStyle">
                        <span style="font-size:25px">webpack</span>
                        <el-divider></el-divider>
                        <p>此篇主要记录webpack的理解和使用</p>
                    </div>
                </div>
                <div style="display:flex">
                    <div style="width:75%;">
                        <div class="catalogStyle fontStyle">
                            <div style="display:flex;">
                                <img src="@/assets/CONTENT DELIVERY.png"
                                     alt=""
                                     style="width:24px;height:24px; margin-top:6px" />
                                <span style="font-size:22px; font-weight: bold; margin-left:10px">内容</span>
                            </div>
                            <el-divider></el-divider>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped>
.learnExecution {
    background-image: linear-gradient(#fff8e8, white);
}
</style>
