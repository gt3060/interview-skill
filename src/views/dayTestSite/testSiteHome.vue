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
                    <p>第一天：2021年2月21日</p>
                </div>
            </div>
            <div style=" width:90%;">
                <div class="catalogStyle fontStyle">
                    <calendar :selectDate="siteCatalog"
                              :notComplete="notComplete"></calendar>
                </div>
                <el-divider></el-divider>
                <el-card v-if="catalog.length > 0"
                         style="padding:20px">
                    <div v-for="(item,index) in catalog"
                         :key="index"
                         @click="openCatalogDetail(index)"
                         class="catalogContent">
                        <div class="dot"></div>
                        <div v-if="Object.keys(item)[0] === 'js'"
                             style="color:#af52de"
                             class="catalogTag">[&nbsp;js&nbsp;]</div>
                        <div v-else-if="Object.keys(item)[0] === 'html'"
                             style="color:#F3682F"
                             class="catalogTag">[&nbsp;html&nbsp;]</div>
                        <div v-else-if="Object.keys(item)[0] === 'css'"
                             style="color:#F0C227"
                             class="catalogTag">[&nbsp;css&nbsp;]</div>
                        <div v-else-if="Object.keys(item)[0] === 'vue'"
                             style="color:#2db55d"
                             class="catalogTag">[&nbsp;vue&nbsp;]</div>
                        <div v-else-if="Object.keys(item)[0] === 'react'"
                             style="color:#F56C6C"
                             class="catalogTag">[&nbsp;react&nbsp;]</div>
                        <div v-else
                             style="color:#2d8cf0"
                             class="catalogTag">[&nbsp;{{Object.keys(item).toString()}}&nbsp;]</div>
                        <span class="catalogDetail">{{Object.values(item)[0]}}</span>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../utils/common';
import calendar from '../../components/calendar.vue';
import { mapActions } from 'vuex';

export default {
    name: 'dayTestSite',
    data() {
        return {
            catalog: [],
            date: '',
            isHasContain: '',
            notComplete: [],
        };
    },
    mounted() {
        highlightCode();
        this.initColor();
    },
    methods: {
        ...mapActions(['promiseTestSiteCatalog']),
        initColor() {
            let params = {
                date: '',
            };
            const loading = this.$loading({
                lock: true,
                text: '加载中......',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)',
            });
            this.promiseTestSiteCatalog(params).then((res) => {
                // let obj = {};
                res.data.content.map((item) => {
                    if (item.isHasContain) {
                        this.notComplete.push(item);
                    }
                });
                let date = new Date();
                let currYear = date.getFullYear();
                let currMonth = date.getMonth();
                let currDay = date.getDate();
                this.siteCatalog(currYear, currMonth + 1, currDay);
                loading.close();
            });
        },
        siteCatalog(year, month, day) {
            const loading = this.$loading({
                lock: true,
                text: '加载中......',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)',
            });
            month = month < 10 ? 0 + '' + month : month;
            day = day < 10 ? 0 + '' + day : day;
            this.date = year + '' + month + '' + day;
            let params = {
                date: this.date,
            };
            this.promiseTestSiteCatalog(params)
                .then((res) => {
                    this.catalog = [];
                    if (res.data.content.length > 0) {
                        this.catalog = res.data.content[0].catalog
                            ? res.data.content[0].catalog
                            : [];
                    }
                    loading.close();
                })
                .catch((err) => {
                    console.log('目录接口加载失败：', err);
                    loading.close();
                });
        },
        openCatalogDetail(index) {
            let id = this.catalog[index].id;
            this.$router.push({
                name: 'testSiteDetail',
                params: {
                    id,
                    date: this.date,
                },
            });
        },
    },
    components: {
        calendar,
    },
};
</script>

<style scoped lang='less'>
.learnExecution {
    background-image: linear-gradient(#feefe8, white);
}
.catalogContent {
    cursor: pointer;
    display: flex;
    height: 35px;
    span {
        &:first-child {
            font-size: 46px;
            color: aliceblue;
        }
    }
    .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #878f98;
        margin-top: 9px;
    }
    .catalogTag,
    .dot {
        margin-right: 10px;
    }
}
</style>
