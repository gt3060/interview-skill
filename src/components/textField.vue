// 此组件用于封装段落，其中具体参数如下：
// catalog：判断是否是含有标题（主要包含一个img）
    // ----title：标题
    // ----content：内容
    // ----id：此标题的id，用于和右边有模块时的联动
// 是否存在isInput属性
// 在没有上面两个情况时：
    //----bold：是否加粗
    // ----fontSize：定义标题字体大小，取值有：nomall、middle、small，默认值nomall
    // ----title：标题
    // ----content：内容
    // ----list：列表：
        // ----listTitle：列表标题
        // ----routeList：列表数据
    // ----isBtn：判断是否是按钮，若是则类型为tet
        //----btnMethod：按钮click
        //----btnText：按钮文字
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
        <template v-else-if="isInput">
            <div class="randomStyle"
                 v-for="(item,index) in inputList"
                 :key="index">
                <span>{{item.title}}：</span>
                <el-input v-model="inputValue[item.key]"
                          class="inputStyle"
                          placeholder="请输入"></el-input>
            </div>
            <el-button @click="handleInput"
                       type="primary">确认</el-button>
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
                    <el-button :type="btnType"
                               @click="btnMethod">
                        {{btnText}}
                    </el-button>
                </div>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        isInput: {
            type: Boolean,
            default: false,
        },
        isInitInput: {
            type: Boolean,
            default: false,
        },
        inputList: {
            type: Array,
            default: () => [],
        },
        title: String, // 标题
        content: String, // 内容
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
        btnType: {
            type: String,
            default: 'text',
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
        this.inputValue = {};
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
            inputValue: {},
        };
    },
    methods: {
        handleInput() {
            this.$emit('callback', this.inputValue);
            this.inputValue = this.isInitInput ? {} : this.inputValue;
        },
    },
};
</script>

<style scoped lang="less">
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
.randomStyle {
    display: flex;
    margin: 20px 20px 0px 0px;
    span {
        &:first-child {
            margin-right: 15px;
        }
    }
    .inputStyle {
        width: 30%;
    }
}
</style>
