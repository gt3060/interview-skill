<template>
    <div class="fontStyle">
        <template>
            <p :class="fontSize"
               v-if="title">{{title}}</p>
            <p class="fontIndent"
               v-if="content">
                {{content}}
            </p>
            <div v-if="list">
                <div class="fontLineHeight">{{list.listTitle}}</div>
                <ul>
                    <li v-for="(item, index) in list.routeList"
                        :key="index">{{item.data}}</li>
                </ul>
            </div>
        </template>
        <template v-if="onlyContent">
            <p class="fontIndent">{{onlyContent}}</p>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        title: String, // 标题
        content: String, // 内容
        onlyContent: String, // 用于没有标题的内容
        fontSizeType: String, // 用于定义不同字体的标题（middle、small、nomall），默认nomall
        list: Object, // 用于生成列表，其中listTitle为介绍列表信息，routeList为具体列表
    },
    watch: {
        title: {
            handler(newVal, oldVal) {
                console.log(newVal, oldVal);
            },
            deep: true,
        },
    },
    created() {
        if (this.fontSizeType === 'middle') {
            this.fontSize = 'fontSizeMiddle';
        } else if (this.fontSizeType === 'small') {
            this.fontSize = 'fontSizeSmall';
        } else if (this.fontSizeType === 'nomall') {
            this.fontSize = 'fontSize';
        }
    },
    data() {
        return {
            fontSize: 'fontSize',
        };
    },
};
</script>

<style scoped>
.fontSize {
    font-size: 25px;
}

.fontSizeMiddle {
    font-size: 21px;
}

.fontSizeSmall {
    font-size: 18px;
}

.fontLineHeight {
    line-height: 24px;
}
</style>
