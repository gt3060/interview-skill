<template>
    <div class="vueDirective">
        <text-field :title="titleContent[0].title"
                    :content="titleContent[0].content"></text-field>
        <div>看下面这个例子：点击按钮触发数据data的改变，与此同时再watch中监听数据的变化：</div>
        <el-button type="text"
                   @click="handleChangeData">改变</el-button>
    </div>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-eighties.css';
import TextField from '../../components/textField.vue';

const highlightCode = () => {
    const block = document.querySelectorAll('pre');
    hljs.configure({ useBR: true });
    block.forEach((el) => {
        hljs.highlightBlock(el);
    });
};

let outData = {
    titleContent: [
        {
            title: '1.Vue中Watch的作用？',
            content:
                'watch作用可以监控一个值的变化，并调用因为变化执行的方法，可以通过watch动态改变关联状态',
        },
    ],
    a: 1,
    b: {
        c: 1,
    },
};

export default {
    data() {
        return outData;
    },
    mounted() {
        highlightCode();
    },

    created() {},
    methods: {
        handleChangeData() {
            this.a = 2;
        },
    },
    components: {
        TextField,
    },
};
</script>

<style scoped>
.fontSize {
    font-size: 25px;
}

.codeBorder {
    width: 80%;
    border-radius: 10px;
}

.fontCodeStyle {
    line-height: 24px;
}

.labelMarginLeft {
    margin-left: 50px;
}

.vueDirective {
    padding: 50px;
    background-color: #ecfafe;
}
</style>
