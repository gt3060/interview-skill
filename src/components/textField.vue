<template>
    <div class="fontStyle">
        <template v-if="catalog">
            <div :id="id"
                 style="margin: 20px 0px">
                <template v-if="title">
                    <div style="display: flex">
                        <div style="margin: 6px 7px 0px 0px">
                            <img src="@/assets/light.png" />
                        </div>
                        <h4>{{title}}</h4>
                    </div>
                </template>
                <template v-if="content">
                    <div class="fontIndent">
                        <p>
                            {{content}}
                        </p>
                    </div>
                </template>
            </div>
        </template>
        <template v-else>
            <template>
                <p :class="bold?`${fontSize} fontBold`:fontSize"
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
                <div v-if="isBtn"
                     class="fontIndent">
                    <el-button type="text"
                               @click="btnMethod">
                        {{btnText}}
                    </el-button>
                </div>
            </template>
            <template v-if="onlyContent">
                <p class="fontIndent">{{onlyContent}}</p>
            </template>
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
        catalog: Boolean,
        id: String,
        bold: Boolean,
        isBtn: Boolean,
        btnText: String,
        btnMethod: {
            type: Function,
            default: () => {},
        },
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
    margin-top: 10px;
    line-height: 24px;
}

.fontBold {
    font-weight: bold;
}
</style>
