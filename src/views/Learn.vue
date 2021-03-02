
<template>
    <div class="learn">
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
                        <img src="../components/picture/cssLogo.jpeg"
                             alt=""
                             class="imgStyle" />
                    </div>
                    <div class="titleFontStyle">
                        <span style="font-size:25px">CSS篇</span>
                        <el-divider></el-divider>
                        <p>此篇主要包含，行内元素、块级元素、行内块级元素区别及种类；Css布局；BFC；Flex；CSS3增加的属性</p>
                    </div>
                </div>
                <div style="display:flex">
                    <div style="width:40%;">
                        <div class="catalogStyle">
                            <div style="display:flex;">
                                <img src="../assets/catalog.png"
                                     style="width:24px;height:24px; margin-top:3px" />
                                <span style="font-size:22px; font-weight: bold; margin-left:10px">目录</span>
                            </div>
                            <el-divider></el-divider>
                        </div>
                        <div>
                            <card catalogTitle="概述"
                                  catalogNum="01"
                                  isShowTable="false"
                                  @clickNum="clickNum"
                                  srcData="./picture/summary.png"></card>
                        </div>
                        <div style="margin-top:50px">
                            <card catalogTitle="CSS布局"
                                  catalogNum="02"
                                  isShowTable="true"
                                  @clickNum="clickNum"
                                  :tableData="tableData"
                                  @childNum="childNum"
                                  srcData="./picture/layout.png"></card>
                        </div>
                        <div style="margin-top:50px">
                            <card catalogTitle="BFC"
                                  catalogNum="03"
                                  isShowTable="true"
                                  @clickNum="clickNum"
                                  :tableData="tableBFCData"
                                  @childNum="childNum"
                                  srcData="./picture/bfc.png"></card>
                        </div>
                        <div style="margin-top:50px">
                            <card catalogTitle="Flex"
                                  catalogNum="04"
                                  isShowTable="true"
                                  @clickNum="clickNum"
                                  :tableData="tableFlexData"
                                  @childNum="childNum"
                                  srcData="./picture/flex.png"></card>
                        </div>
                        <div style="margin-top:50px">
                            <card catalogTitle="CSS3"
                                  catalogNum="05"
                                  isShowTable="true"
                                  @clickNum="clickNum"
                                  :tableData="tableCSS3Data"
                                  @childNum="childNum"
                                  srcData="./picture/CSS.png"></card>
                        </div>
                        <div style="margin-top:50px">
                            <card catalogTitle="常见面试考点"
                                  catalogNum="06"
                                  isShowTable="false"
                                  @clickNum="clickNum"
                                  :tableData="tableCSS3Data"
                                  @childNum="childNum"
                                  srcData="./picture/CSS.png"></card>
                        </div>
                    </div>
                    <div style="width:55%; margin-left:5%; margin-top:-100px">
                        <div class="catalogStyle">
                            <div style="display:flex;">
                                <img src="../assets/CONTENT DELIVERY.png"
                                     style="width:24px;height:24px; margin-top:6px" />
                                <span style="font-size:22px; font-weight: bold; margin-left:10px">内容</span>
                            </div>
                            <el-divider></el-divider>
                        </div>
                        <div v-if="containNum === '01'">
                            <cssSummary></cssSummary>
                        </div>
                        <div v-if="containNum === '02'">
                            <div style="margin-bottom:10px">
                                <el-breadcrumb separator-class="el-icon-arrow-right">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>02-CSS布局</el-breadcrumb-item>
                                    <el-breadcrumb-item>{{containChildNum}}{{tableTitle}}</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div v-if="containChildNum === '02-1'">
                                <levelLayout></levelLayout>
                            </div>
                            <div v-if="containChildNum === '02-2'">
                                <verticalLayout></verticalLayout>
                            </div>
                            <div v-if="containChildNum === '02-3'">
                                <levelVerticalLayout></levelVerticalLayout>
                            </div>
                            <div v-if="containChildNum === '02-4'">
                                <twoColumnLayout></twoColumnLayout>
                            </div>
                            <div v-if="containChildNum === '02-5'">
                                <threeColumnLayout></threeColumnLayout>
                            </div>
                            <div v-if="containChildNum === '02-6'">
                                <columnsLayout></columnsLayout>
                            </div>
                        </div>
                        <div v-if="containNum === '03'">
                            <div style="margin-bottom:20px">
                                <el-breadcrumb separator-class="el-icon-arrow-right">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>03-BFC</el-breadcrumb-item>
                                    <el-breadcrumb-item>{{containChildNum}}{{tableTitle}}</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div v-if="containChildNum === '03-1'">
                                <viewBFCModal></viewBFCModal>
                            </div>
                            <div v-if="containChildNum === '03-2'">
                                <bfcPosionCase></bfcPosionCase>
                            </div>
                            <div v-if="containChildNum === '03-3'">
                                <bfcIntroduce></bfcIntroduce>
                            </div>
                            <div v-if="containChildNum === '03-4'">
                                <bfcExample></bfcExample>
                            </div>
                        </div>
                        <div v-if="containNum === '04'">
                            <div style="margin-bottom:20px;">
                                <el-breadcrumb separator-class="el-icon-arrow-right">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>04-弹性布局</el-breadcrumb-item>
                                    <el-breadcrumb-item>{{containChildNum}}{{tableTitle}}</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div v-if="containChildNum === '04-1'">
                                <flexIntroduce></flexIntroduce>
                            </div>
                            <div v-if="containChildNum === '04-2'">
                                <flexAttribute></flexAttribute>
                            </div>
                            <div v-if="containChildNum === '04-3'">
                                <flexProgressAttribute></flexProgressAttribute>
                            </div>
                        </div>
                        <div v-if="containNum === '05'">
                            <div style="margin-bottom:20px">
                                <el-breadcrumb separator-class="el-icon-arrow-right">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>05-CSS3新特性</el-breadcrumb-item>
                                    <el-breadcrumb-item>{{containChildNum}}{{tableTitle}}</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div v-if="containChildNum === '05-1'">
                                <transitionCSS3></transitionCSS3>
                            </div>
                            <div v-if="containChildNum === '05-2'">
                                <animationCSS3></animationCSS3>
                            </div>
                            <div v-if="containChildNum === '05-3'">
                                <transformCSS3></transformCSS3>
                            </div>
                            <div v-if="containChildNum === '05-4'">
                                <shadowCSS3></shadowCSS3>
                            </div>
                            <div v-if="containChildNum === '05-5'">
                                <borderCSS3></borderCSS3>
                            </div>
                            <div v-if="containChildNum === '05-6'">
                                <backgroundCSS3></backgroundCSS3>
                            </div>
                            <div v-if="containChildNum === '05-7'">
                                <otherPropCSS3></otherPropCSS3>
                            </div>
                        </div>
                        <div v-if="containNum === '06'">
                            <div style="margin-bottom:20px">
                                <el-breadcrumb separator-class="el-icon-arrow-right">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>06-CSS常见考点</el-breadcrumb-item>
                                    <!-- <el-breadcrumb-item>{{containChildNum}}{{tableTitle}}</el-breadcrumb-item> -->
                                </el-breadcrumb>
                            </div>
                            <commonInterviewCss @transValue="childNum"></commonInterviewCss>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import card from '../components/Card';
import cssSummary from './Learncss/Summary/summary';
import levelLayout from './Learncss/cssLayout/levelLayout';
import verticalLayout from './Learncss/cssLayout/verticalLayout';
import levelVerticalLayout from './Learncss/cssLayout/levelVerticalLayout';
import twoColumnLayout from './Learncss/cssLayout/twoColumnLayout';
import threeColumnLayout from './Learncss/cssLayout/threeColumnLayout';
import columnsLayout from './Learncss/cssLayout/columnsLayout';
import viewBFCModal from './Learncss/BFC/viewBFCModal';
import bfcPosionCase from './Learncss/BFC/bfcPosionCase';
import bfcIntroduce from './Learncss/BFC/bfcIntroduce';
import bfcExample from './Learncss/BFC/bfcExample';
import flexIntroduce from './Learncss/Flex/flexIntroduce';
import flexAttribute from './Learncss/Flex/flexAttribute';
import flexProgressAttribute from './Learncss/Flex/flexProgressAttribute';
import transitionCSS3 from './Learncss/CSS3/transitionCSS3';
import animationCSS3 from './Learncss/CSS3/animationCSS3';
import transformCSS3 from './Learncss/CSS3/transformCSS3';
import shadowCSS3 from './Learncss/CSS3/shadowCSS3';
import borderCSS3 from './Learncss/CSS3/borderCSS3';
import backgroundCSS3 from './Learncss/CSS3/backgroundCSS3';
import otherPropCSS3 from './Learncss/CSS3/otherPropCSS3';
import commonInterviewCss from './Learncss/commonInterviewCss';
import { cssData, cssBFCData, cssFlexData, css3Data } from '../data/index.js';
export default {
    data() {
        return {
            containNum: '01',
            tableData: cssData(),
            tableBFCData: cssBFCData(),
            containChildNum: '',
            tableTitle: '',
            tableFlexData: cssFlexData(),
            tableCSS3Data: css3Data(),
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            let id = vm.$route.params.id;
            if (id) {
                vm.containNum = '06';
                document.getElementById(id).scrollIntoView();
            }
        });
    },
    created() {
        if (JSON.parse(localStorage.getItem('currentTableRow')).catalogNum) {
            this.containNum = JSON.parse(
                localStorage.getItem('currentTableRow')
            ).catalogNum;
        }
        if (JSON.parse(localStorage.getItem('currentTableRow')).index) {
            this.containChildNum = JSON.parse(
                localStorage.getItem('currentTableRow')
            ).index;
        }
        if (JSON.parse(localStorage.getItem('currentTableRow')).title) {
            this.tableTitle = JSON.parse(
                localStorage.getItem('currentTableRow')
            ).title;
        }
    },
    methods: {
        clickNum(data) {
            this.containNum = data.catalogNum;
        },
        childNum(data) {
            this.containChildNum = data.index;
            this.containNum = data.catalogNum;
            this.tableTitle = data.title;
        },
    },
    components: {
        card,
        levelLayout,
        verticalLayout,
        levelVerticalLayout,
        twoColumnLayout,
        threeColumnLayout,
        columnsLayout,
        cssSummary,
        viewBFCModal,
        bfcPosionCase,
        bfcIntroduce,
        bfcExample,
        flexIntroduce,
        flexAttribute,
        flexProgressAttribute,
        transitionCSS3,
        animationCSS3,
        transformCSS3,
        shadowCSS3,
        borderCSS3,
        backgroundCSS3,
        otherPropCSS3,
        commonInterviewCss,
    },
};
</script>

<style>
.learn {
    background-image: linear-gradient(#fff2e9, white);
}
.learnCard {
    /* text-align: center; */
    display: flex;
}
.learnCardContain {
    margin: 0 auto;
    /* display: flex; */
    width: 75%;
    padding-left: 50px;
    padding-bottom: 30px;
}

.learn-back {
    padding-top: 40px;
    display: flex;
    color: rgb(156, 147, 147);
}

.goBack:hover {
    color: rgb(59, 55, 55);
}

.titleStyle {
    display: flex;
}

.titleIconStyle {
    height: 200px;
    margin-top: 35px;
    width: 150px;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    transition: all 0.25s;
}

.titleIconStyle :hover {
    /* margin-top: 30px; */
    /* border: 1px solid blue; */
    margin-top: -5px;
    /* div四周加阴影 */
    box-shadow: #778899 0px 0px 10px;
}

.titleFontStyle {
    margin-left: 35px;
    margin-top: 35px;
}

/* img图片等比例缩放 */
.imgStyle {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}

.catalogStyle {
    margin-top: 40px;
}

.catalogStyle :hover {
    /* margin-top: -5px; */
}

.fontStyle {
    line-height: 40px;
}
.fontIndent {
    /* 首行缩进 */
    text-indent: 2em;
}

a {
    text-decoration: none;
}

.router-link-active {
    text-decoration: none;
}
</style>
