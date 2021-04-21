<template>
    <div class="learnExecution">
        <el-backtop></el-backtop>
        <div class="learnCardContain">
            <div style="display:flex">
                <router-link to="/">
                    <div class="learn-back">
                        <div>
                            <i class="el-icon-arrow-left arrow-leftStyle"></i>
                        </div>
                        <div class="goBack">&nbsp;&nbsp;&nbsp;返回主页</div>
                    </div>
                </router-link>
                <div class="learn-back"
                     style="margin-left:15px; width:70%">
                    <span>&nbsp;|&nbsp;</span>
                    <div class="goBack"
                         style="margin-left:15px"
                         @click="goBack">返回上一页</div>
                </div>
                <div class="learn-back"
                     v-if="currYear!=''">{{currYear}}年{{currMonth}}月{{currDay}}日</div>
            </div>
            <el-divider></el-divider>
            <div style=" width:90%;">
                <component :is="dateComp"
                           :testData.sync='testData'></component>
            </div>
        </div>
    </div>
</template>

<script>
import content20210222 from './dayTestContent/content20210222';
import content20210223 from './dayTestContent/content20210223';
import content20210224 from './dayTestContent/content20210224';
import content20210225 from './dayTestContent/content20210225';
import content20210226 from './dayTestContent/content20210226';
import content20210227 from './dayTestContent/content20210227';
import content20210228 from './dayTestContent/content20210228';
import content20210301 from './dayTestContent/content20210301';
import content20210302 from './dayTestContent/content20210302';
import content20210303 from './dayTestContent/content20210303';
import content20210304 from './dayTestContent/content20210304';
import content20210305 from './dayTestContent/content20210305';
import content20210307 from './dayTestContent/content20210307';
import content20210308 from './dayTestContent/content20210308';
import content20210309 from './dayTestContent/content20210309';
import content20210310 from './dayTestContent/content20210310';
import content20210311 from './dayTestContent/content20210311';
import content20210312 from './dayTestContent/content20210312';
import content20210313 from './dayTestContent/content20210313';
import content20210314 from './dayTestContent/content20210314';
import content20210315 from './dayTestContent/content20210315';
import content20210316 from './dayTestContent/content20210316';
import content20210317 from './dayTestContent/content20210317';
import content20210318 from './dayTestContent/content20210318';
import content20210320 from './dayTestContent/content20210320';
import content20210321 from './dayTestContent/content20210321';
import content20210322 from './dayTestContent/content20210322';
import content20210323 from './dayTestContent/content20210323';
import content20210324 from './dayTestContent/content20210324';
import content20210408 from './dayTestContent/content20210408';
import content20210409 from './dayTestContent/content20210409';
import content20210412 from './dayTestContent/content20210412';
import content20210413 from './dayTestContent/content20210413';
import content20210414 from './dayTestContent/content20210414';
import content20210415 from './dayTestContent/content20210415';

export default {
    name: 'testSiteDetail',
    components: {
        content20210222,
        content20210223,
        content20210224,
        content20210225,
        content20210226,
        content20210227,
        content20210228,
        content20210301,
        content20210302,
        content20210303,
        content20210304,
        content20210305,
        content20210307,
        content20210308,
        content20210309,
        content20210310,
        content20210311,
        content20210312,
        content20210313,
        content20210314,
        content20210315,
        content20210316,
        content20210317,
        content20210318,
        content20210320,
        content20210321,
        content20210322,
        content20210323,
        content20210324,
        content20210408,
        content20210409,
        content20210412,
        content20210413,
        content20210414,
        content20210415,
    },
    data() {
        return {
            date: '',
            currYear: '',
            currMonth: '',
            currDay: '',
            dateComp: '',
            testData: 0,
        };
    },
    created() {
        let date = this.$route.params.date;
        if (date) {
            this.date = date;
            this.currYear = date.substring(0, 4);
            this.currMonth = date.substring(4, 6);
            this.currDay = date.substring(6, 8);
            this.dateComp = `content${date}`;
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        changeData(data) {
            this.testData = data;
        },
    },
};
</script>

<style scoped>
.learnExecution {
    background-image: linear-gradient(#feefe8, white);
}
</style>
