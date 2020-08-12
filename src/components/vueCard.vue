<template>
  <div class="cardStyle">
    <div class="card-top">
      <div class="cardTopText">{{title}}</div>
      <div class="cardTopContain">{{titleContain}}</div>
    </div>
    <div class="card-bottom">
      <div class="card-bottomItem">
        <div>{{columnNum}}</div>
        <div class="fixText">章节</div>
      </div>
      <div class="card-bottomItem">
        <div>{{chapterNum}}</div>
        <div class="fixText">栏目</div>
      </div>
      <div class="card-bottomItem card-bottomCircle">
        <router-link :to="cardRoute">
          <div
            :class="isChangeTriangle ? 'runExtraCircle' : ''"
            class="extraCircle"
            @mouseenter="handleEnter"
            @mouseleave="handleEnter"
          >
            <div class="inCircle">
              <div
                :class="isChangeTriangle? 'runplayIconStyle' : 'playiconStyle'"
                class="commoniconSyle"
              ></div>
            </div>
          </div>
        </router-link>
        <div class="fixText fixTextCircle">6%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    titleContain: String,
    columnNum: Number,
    chapterNum: Number,
    cardRoute: String,
  },
  data() {
    return {
      isChangeTriangle: false,
    };
  },
  methods: {
    handleEnter() {
      this.isChangeTriangle = !this.isChangeTriangle;
    },
  },
};
</script>

<style>
/* 利用css实现card */
.cardStyle {
  cursor: pointer;
  margin-top: 10px;
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.25s;
  margin-top: 10px;
  width: 25%;
  height: 330px;
}

.cardStyle:hover {
  margin-top: 0px;
  box-shadow: 5px 8px 5px #778899;
}

.card {
  height: 100%;
}

.card-top {
  width: 100%;
  height: 66%;
  background-image: url("../assets/img.png");
  /* background-size: 100% 100%; */
  background-size: cover;
  background-repeat: no-repeat;
}

.cardTopText {
  padding: 20px;
  color: rgb(247, 250, 253);
}

.cardTopContain {
  color: rgb(247, 250, 253);
  padding-left: 20px;
  padding-top: -10px;
  font-size: 25px;
}

.card-bottom {
  display: flex;
}

.card-bottomItem {
  width: 30%;
  padding-top: 30px;
  height: 100%;
  text-align: center;
  font-size: 20px;
}

.card-bottomCircle {
  margin: -80px 0px 0px 10px;
}

.fixText {
  margin-top: 10px;
}
.fixTextCircle {
  margin-top: 17px;
}

/* 三角形 */
.commoniconSyle {
  margin-top: 42%;
  margin-left: 44%;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
}

.playiconStyle {
  border-left: 14px solid grey;
}

.runplayIconStyle {
  border-left: 14px solid rgb(24, 116, 24);
}

/* 同心圆style */
.extraCircle {
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: rgb(206, 204, 204);
  /* css3渐变 */
  /* background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); */
}

.runExtraCircle {
  /* 加阴影：前两个值分别代表x、y偏移量，如果想div四周都加，则前两个值均为0， */
  box-shadow: 0 0 5px rgb(155, 153, 153);
}

.inCircle {
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: white;
}
</style>