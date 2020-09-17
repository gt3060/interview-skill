<template>
  <div class="home">
    <div class="contain-top"></div>
    <div class="contain-mid">
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
              <vueCard
                img="./picture/cssLogo.jpeg"
                :columnNum="cardData[0].columnNum"
                :chapterNum="cardData[0].chapterNum"
              ></vueCard>
              <div>
                <div class="main-mid-card-font">{{cardData[0].title}}</div>
              </div>
            </router-link>
          </div>

          <div class="main-mid-card1">
            <router-link :to="cardData[1].cardRoute">
              <vueCard
                img="./picture/html.jpeg"
                :columnNum="cardData[1].columnNum"
                :chapterNum="cardData[1].chapterNum"
              ></vueCard>
              <div class="width:100%">
                <div class="main-mid-card-font">{{cardData[1].title}}</div>
              </div>
            </router-link>
          </div>
          <div class="main-mid-card1">
            <router-link :to="cardData[2].cardRoute">
              <vueCard
                img="./picture/javascript1.jpeg"
                :columnNum="cardData[2].columnNum"
                :chapterNum="cardData[2].chapterNum"
              ></vueCard>
              <div>
                <div class="main-mid-card-font">{{cardData[2].title}}</div>
              </div>
            </router-link>
          </div>
          <div class="main-mid-card1">
            <router-link :to="cardData[3].cardRoute">
              <vueCard
                img="./picture/javascript2.jpeg"
                :columnNum="cardData[3].columnNum"
                :chapterNum="cardData[3].chapterNum"
              ></vueCard>
              <div>
                <div class="main-mid-card-font">{{cardData[3].title}}</div>
              </div>
            </router-link>
          </div>
          <div class="main-mid-card1">
            <router-link :to="cardData[4].cardRoute">
              <vueCard
                img="./picture/javascript3.jpeg"
                :columnNum="cardData[4].columnNum"
                :chapterNum="cardData[4].chapterNum"
              ></vueCard>
              <div>
                <div class="main-mid-card-font">{{cardData[4].title}}</div>
              </div>
            </router-link>
          </div>
          <div class="main-mid-card1">
            <router-link :to="cardData[5].cardRoute">
              <vueCard
                img="./picture/javascript4.jpeg"
                :columnNum="cardData[5].columnNum"
                :chapterNum="cardData[5].chapterNum"
              ></vueCard>
              <div>
                <div class="main-mid-card-font">{{cardData[5].title}}</div>
              </div>
            </router-link>
          </div>
          <div class="main-mid-card1">
            <router-link :to="cardData[2].cardRoute">
              <vueCard
                img="./picture/javascript1.jpeg"
                :columnNum="cardData[2].columnNum"
                :chapterNum="cardData[2].chapterNum"
              ></vueCard>
              <div>
                <div class="main-mid-card-font">{{cardData[2].title}}</div>
              </div>
            </router-link>
          </div>
          <div class="main-mid-card1">
            <router-link :to="cardData[2].cardRoute">
              <vueCard
                img="./picture/javascript1.jpeg"
                :columnNum="cardData[2].columnNum"
                :chapterNum="cardData[2].chapterNum"
              ></vueCard>
              <div>
                <div class="main-mid-card-font">{{cardData[2].title}}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueCard from "../components/vueCard";

export default {
  name: "Home",
  data() {
    return {
      cardData: [
        {
          title: "面试考点之CSS3",
          columnNum: 6,
          chapterNum: 22,
          cardRoute: "/learncss",
        },
        {
          title: "面试考点之HTML",
          columnNum: 1,
          chapterNum: 20,
          cardRoute: "/htmlAndCssInterview",
        },
        {
          title: "面试考点之js基本语法",
          columnNum: 1,
          chapterNum: 17,
          cardRoute: "/jsBasicsInterview",
        },
        {
          title: "js进阶",
          columnNum: 1,
          chapterNum: 20,
          cardRoute: "/jsAdvanced",
        },
        {
          title: "前端常见的设计模式",
          columnNum: 1,
          chapterNum: 7,
          cardRoute: "/designPatterns",
        },
        {
          title: "javascript的执行机制",
          columnNum: 1,
          chapterNum: 3,
          cardRoute: "/executionMechanism",
        },
        {
          title: "数组与字符串",
          columnNum: 1,
          chapterNum: 7,
          cardRoute: "/arrayMethods",
        },
      ],
    };
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
  padding-left: 7%;
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

/* a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
} */
</style>
