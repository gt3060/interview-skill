// 此组件用于封装首页每个小模块
<template>
    <div class="homePageCard"
         :style="style"
         @mouseenter="handleEnter"
         @mouseleave="handleEnter">
        <div v-if="isChangeTriangle === true"
             class="shadowStyle">
            <div class="homePageCardfont">
                <p>{{chapterNum}}章&nbsp;/&nbsp;{{columnNum}}节</p>
                <p style="margin-top:15px">{{chapterNum}}&nbsp;人阅读</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        columnNum: Number,
        chapterNum: Number,
        img: String,
    },
    data() {
        return {
            isChangeTriangle: false,
            style: {
                backgroundImage:
                    'url(' + "'" + require(`${this.img}`) + "'" + ')',
                backgroundSize: 'contain',
            },
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
.homePageCard {
    border-radius: 7px;
    height: 220px;
    flex: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.25s;
    margin-top: 10px;
}
.homePageCard:hover {
    margin-top: 0px;
    box-shadow: 5px 8px 5px #778899;
    margin-bottom: 10px;
    color: black;
}
.imgUrl {
    background-image: url('./picture/cssLogo.jpeg');
    background-size: contain;
}

.shadowStyle {
    width: 100%;
    border-radius: 7px;
    height: 100%;
    background-color: black;
    /* 若想背景透明，文字不透明，应使用css3属性rgba */
    background-color: rgba(0, 0, 0, 0.2);
    /* 背景透明，文字也透明 */
    /* opacity: 0.5; */
}

.homePageCardfont {
    color: white;
    padding: 30px 20px;
    line-height: 20px;
    font-size: 13px;
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
