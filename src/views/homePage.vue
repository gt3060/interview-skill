<template>
    <div>
        <template v-if="isShowLoading">
            <loadingPage></loadingPage>
        </template>
        <template v-else>
            <div class="home">
                <div class="contain-top"></div>
                <div class="contain-mid">
                    <div class="homePageTopStyle">
                        <el-avatar> LL </el-avatar>
                    </div>
                    <el-divider></el-divider>
                    <div>
                        <div class="main-top">欢迎来到</div>
                        <div class="main-topContain">Interview-SKILL</div>
                    </div>
                    <div>
                        <div class="main-mid-text">
                            <i class="el-icon-video-play"></i>
                            <span>&nbsp;&nbsp;学习卡片</span>
                        </div>
                        <div class="main-mid-card">
                            <div class="main-mid-card1">
                                <router-link :to="cardData[0].cardRoute">
                                    <vueCard img="./picture/cssLogo.jpeg"
                                             :columnNum="cardData[0].columnNum"
                                             :chapterNum="cardData[0].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[0].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[1].cardRoute">
                                    <vueCard img="./picture/html.jpeg"
                                             :columnNum="cardData[1].columnNum"
                                             :chapterNum="cardData[1].chapterNum"></vueCard>
                                    <div class="width:100%">
                                        <div class="main-mid-card-font">{{ cardData[1].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[2].cardRoute">
                                    <vueCard img="./picture/javascript1.jpeg"
                                             :columnNum="cardData[2].columnNum"
                                             :chapterNum="cardData[2].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[2].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[3].cardRoute">
                                    <vueCard img="./picture/javascript2.jpeg"
                                             :columnNum="cardData[3].columnNum"
                                             :chapterNum="cardData[3].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[3].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[4].cardRoute">
                                    <vueCard img="./picture/javascript3.jpeg"
                                             :columnNum="cardData[4].columnNum"
                                             :chapterNum="cardData[4].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[4].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[5].cardRoute">
                                    <vueCard img="./picture/javascript4.jpeg"
                                             :columnNum="cardData[5].columnNum"
                                             :chapterNum="cardData[5].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[5].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[6].cardRoute">
                                    <vueCard img="./picture/javascript5.jpeg"
                                             :columnNum="cardData[6].columnNum"
                                             :chapterNum="cardData[6].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[6].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[7].cardRoute">
                                    <vueCard img="./picture/javascript6.jpeg"
                                             :columnNum="cardData[7].columnNum"
                                             :chapterNum="cardData[7].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[7].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[8].cardRoute">
                                    <vueCard img="./picture/javascript7.jpeg"
                                             :columnNum="cardData[8].columnNum"
                                             :chapterNum="cardData[8].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[8].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[9].cardRoute">
                                    <vueCard img="./picture/javascript8.jpeg"
                                             :columnNum="cardData[9].columnNum"
                                             :chapterNum="cardData[9].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[9].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[10].cardRoute">
                                    <vueCard img="./picture/vue.jpeg"
                                             :columnNum="cardData[10].columnNum"
                                             :chapterNum="cardData[10].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[10].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[11].cardRoute">
                                    <vueCard img="./picture/test.jpeg"
                                             :columnNum="cardData[11].columnNum"
                                             :chapterNum="cardData[11].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[11].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[12].cardRoute">
                                    <vueCard img="./picture/test_two.jpeg"
                                             :columnNum="cardData[12].columnNum"
                                             :chapterNum="cardData[12].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[12].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[13].cardRoute">
                                    <vueCard img="./picture/webpackBg.jpg"
                                             :columnNum="cardData[13].columnNum"
                                             :chapterNum="cardData[13].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[13].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[14].cardRoute">
                                    <vueCard img="./picture/token.png"
                                             :columnNum="cardData[14].columnNum"
                                             :chapterNum="cardData[14].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[14].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="main-mid-card1">
                                <router-link :to="cardData[15].cardRoute">
                                    <vueCard img="./picture/dayTestSite.jpeg"
                                             :columnNum="cardData[15].columnNum"
                                             :chapterNum="cardData[15].chapterNum"></vueCard>
                                    <div>
                                        <div class="main-mid-card-font">{{ cardData[15].title }}</div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>

</template>

<script>
import vueCard from '../components/vueCard';
import loadingPage from '../components/loadingPage';

export default {
    name: 'Home',
    data() {
        return {
            cardData: [
                {
                    title: '面试考点之CSS3',
                    columnNum: 6,
                    chapterNum: 22,
                    cardRoute: '/learncss',
                },
                {
                    title: '面试考点之HTML',
                    columnNum: 1,
                    chapterNum: 20,
                    cardRoute: '/htmlAndCssInterview',
                },
                {
                    title: '面试考点之js基本语法',
                    columnNum: 1,
                    chapterNum: 17,
                    cardRoute: '/jsBasicsInterview',
                },

                {
                    title: '前端常见的设计模式',
                    columnNum: 1,
                    chapterNum: 7,
                    cardRoute: '/designPatterns',
                },
                {
                    title: 'javascript的执行机制',
                    columnNum: 1,
                    chapterNum: 3,
                    cardRoute: '/executionMechanism',
                },
                {
                    title: '数组与字符串及对象',
                    columnNum: 3,
                    chapterNum: 33,
                    cardRoute: '/arrayMethods',
                },
                {
                    title: 'js进阶',
                    columnNum: 2,
                    chapterNum: 2,
                    cardRoute: '/jsAdvanced',
                },
                {
                    title: '原型及原型链',
                    columnNum: 1,
                    chapterNum: 6,
                    cardRoute: '/jsPrototype',
                },
                {
                    title: '作用域及闭包',
                    columnNum: 1,
                    chapterNum: 6,
                    cardRoute: '/jsClosure',
                },
                {
                    title: '继承',
                    columnNum: 1,
                    chapterNum: 6,
                    cardRoute: '/jsInherit',
                },
                {
                    title: 'vue',
                    columnNum: 1,
                    chapterNum: 22,
                    cardRoute: '/vueInterview',
                },
                {
                    title: 'react',
                    columnNum: 1,
                    chapterNum: 6,
                    cardRoute: '/reactInterview',
                },
                {
                    title: '十大排序算法',
                    columnNum: 1,
                    chapterNum: 10,
                    cardRoute: '/jsSort',
                },
                {
                    title: 'webpack详解',
                    columnNum: 1,
                    chapterNum: 10,
                    cardRoute: '/webpack',
                },
                {
                    title: 'token',
                    columnNum: 1,
                    chapterNum: 10,
                    cardRoute: '/token',
                },
                {
                    title: '每日试题',
                    columnNum: 1,
                    chapterNum: 10,
                    cardRoute: '/dayTestSite',
                },
            ],
            isShowLoading: true,
        };
    },
    // vue 实现预加载（方法一）；
    beforeCreate() {
        let count = 0;
        let img = [
            require('../components/picture/cssLogo.jpeg'),
            require('../components/picture/html.jpeg'),
            require('../components/picture/javascript1.jpeg'),
            require('../components/picture/javascript2.jpeg'),
            require('../components/picture/javascript3.jpeg'),
            require('../components/picture/javascript4.jpeg'),
            require('../components/picture/javascript5.jpeg'),
            require('../components/picture/javascript6.jpeg'),
            require('../components/picture/javascript7.jpeg'),
            require('../components/picture/javascript8.jpeg'),
            require('../components/picture/test_two.jpeg'),
            require('../components/picture/test.jpeg'),
            require('../components/picture/vue.jpeg'),
            require('../components/picture/webpackBg.jpg'),
            require('../components/picture/token.png'),
        ];
        for (let i of img) {
            let image = new Image();
            image.src = i;
            image.onload = () => {
                count++;
                if (count === img.length) {
                    this.isShowLoading = false;
                }
            };
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    components: {
        vueCard,
        loadingPage,
    },
};
</script>
<style>
.contain-top {
    height: 40px;
}
.contain-mid {
    margin: auto;
    min-width: 992px;
    max-width: 1200px;
    padding-left: 3%;
}

.main-top,
.main-mid-text {
    color: #c7c1c1;
    padding-bottom: 15px;
}

.main-topContain {
    color: rgb(71, 70, 70);
    font-size: 30px;
}
.main-mid-text {
    margin-top: 30px;
}

.main-mid-card {
    display: flex;
    flex-wrap: wrap;
}

.main-mid-card1 {
    margin-right: 5%;
    /* width: 100%; */
    height: 280px;
}

.main-mid-card-font {
    padding: 10px 0px 0px 0px;
    min-width: 165px;
}

.homePageTopStyle {
    display: flex;
}
</style>
