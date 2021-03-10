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
                <content20210222 v-if="date === '20210222'"></content20210222>
                <content20210223 v-else-if="date === '20210223'"></content20210223>
                <content20210224 v-else-if="date === '20210224'"></content20210224>
                <content20210225 v-else-if="date === '20210225'"></content20210225>
                <content20210226 v-else-if="date === '20210226'"></content20210226>
                <content20210227 v-else-if="date === '20210227'"></content20210227>
                <content20210228 v-else-if="date === '20210228'"></content20210228>
                <content20210301 v-else-if="date === '20210301'"></content20210301>
                <content20210302 v-else-if="date === '20210302'"></content20210302>
                <content20210303 v-else-if="date === '20210303'"></content20210303>
                <content20210304 v-else-if="date === '20210304'"></content20210304>
                <content20210305 v-else-if="date === '20210305'"></content20210305>
                <content20210307 v-else-if="date === '20210307'"></content20210307>
                <content20210308 v-else-if="date === '20210308'"></content20210308>
                <content20210309 v-else-if="date === '20210309'"></content20210309>
                <content20210310 v-else-if="date === '20210310'"></content20210310>
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
    },
    data() {
        return {
            date: '',
            currYear: '',
            currMonth: '',
            currDay: '',
        };
    },
    created() {
        let date = this.$route.params.date;
        if (date) {
            this.date = date;
            this.currYear = date.substring(0, 4);
            this.currMonth = date.substring(4, 6);
            this.currDay = date.substring(6, 8);
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
.learnExecution {
    background-image: linear-gradient(#feefe8, white);
}
</style>
