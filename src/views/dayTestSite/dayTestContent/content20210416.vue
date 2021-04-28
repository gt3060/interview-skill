<template>
    <div>
        <text-field catalog
                    title="VUE-vuex的五个属性"
                    content="vuex的五个属性主要包括state、getters、mutations、actions、modules，主要针对官方文档进行记录"
                    fontSizeType="middle">
        </text-field>
        <text-field content="①state"></text-field>
        <text-field content="在vue组件中如何获取state状态：this.$store.state.count"></text-field>
        <text-field content="当一个组件需要获取多个状态时候，可以通过mapState获取状态，mapStates可以用来帮助我们生成
                            计算属性，所以放到computed中。"></text-field>
        <text-field content="②getters"></text-field>
        <text-field content="其实getters就可以想象成时store中的计算属性，就是，将从store获取的state再进行数据逻辑处理，‘
                            并可在其他组件有相同处理时，我们可以将这个处理后的state放到getters中，"></text-field>
        <text-field content="那么访问一个getters方法：this.$ .getters.author"></text-field>
        <text-field content="同样如果想要获取多个计算属性的方法就是利用mapGetters，mapGetters
                            同样生成的是计算属性，故需要放到computed中"></text-field>
        <text-field content="③mutations"></text-field>
        <text-field content="更改vuex中的store的方法就是通过mutations，那么如何进行修改状态呢？this.$store.commit('method',newState)"></text-field>
        <text-field content="仍然可以使用辅助函数mapMutations，这个是方法所以需要放到methods中。"></text-field>
        <text-field content="④actions"></text-field>
        <text-field content="Action 类似于 mutation，不同在于：Action 可以包含任意异步操作，但是mutation不可以；Action 提交的是 mutation，而不是直接变更状态。"></text-field>
        <text-field content="action接收的是一个与store相同的context对象，所以他中包括state、getters来获取state和getters，
                            调用action中的方法的步骤叫做分发，通过store.dispatch('method')，同样可以使用mapActions的辅助函数
                            将组件的方法映射为store.dispatch"></text-field>
        <text-field content="仍然可以使用辅助函数mapActions，这个仍然是方法所以需要放到methods中。"></text-field>
        <text-field content="⑤modules"></text-field>
        <!-- <el-button @click="testActionData">add</el-button> -->
        <!-- <div>{{$store.state.count}}</div> -->
        <el-divider></el-divider>
        <text-field catalog
                    title="VUE-action触发方式"
                    content="根据上面记录可知，触发action方式有this.$store.dispatch；mapActions"
                    fontSizeType="middle">
        </text-field>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';
import { mapActions } from 'vuex';

export default {
    name: 'content20210416',
    data() {
        return {
            cssList: {
                listTitle: '',
                routeList: [
                    {
                        data: '',
                    },
                ],
            },
        };
    },
    methods: {
        ...mapActions(['testActionData']),
        jumpTo() {},
    },
    components: {
        TextField,
    },
    mounted() {
        highlightCode();
    },
};
</script>

<style scoped lang='less'>
.codeBorder {
    width: 100%;
    border-radius: 10px;
}
.commonStyle {
    margin-top: 20px;
}
</style>
