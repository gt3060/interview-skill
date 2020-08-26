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
            <vueCard img="./picture/html.jpeg"></vueCard>
          </div>
          <div class="main-mid-card1">
            <vueCard img="./picture/cssLogo.jpeg"></vueCard>
          </div>
          <div class="main-mid-card1">
            <vueCard img="./picture/cssLogo.jpeg"></vueCard>
          </div>
          <div class="main-mid-card1">
            <vueCard img="./picture/cssLogo.jpeg"></vueCard>
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
          title: "基本语言之CSS3",
          columnNum: 5,
          chapterNum: 21,
          cardRoute: "/learncss",
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
  margin-left: 15%;
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
  padding-right: 10%;
}

.main-mid-card1 {
  margin-right: 5%;
  width: 100%;
  height: 280px;
}

.main-mid-card-font {
  padding: 10px 0px 0px 0px;
}

/* a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
} */
</style>
