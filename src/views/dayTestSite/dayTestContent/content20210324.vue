<template>
    <div>
        <text-field catalog
                    title="VUE-生命周期"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <el-button type="text"
                   @click="jumpToHooks">详情跳转</el-button>
        <el-divider></el-divider>
        <text-field catalog
                    title="VUE-生命周期调用顺序"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="vueList" />
        <el-divider></el-divider>
        <text-field catalog
                    title="VUE-组件通信"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="vueTransList" />
        <div>
            {{testData}}
        </div>
        <el-button type="text"
                   @click="changeData">改变</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210324',
    props: {
        testData: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            vueList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            '加载渲染顺序：父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted',
                    },
                    {
                        data:
                            '子组件更新过程：父beforeUpdate->子beforeUpdate->子updated->父updated',
                    },
                    {
                        data: '父组件更新过程：父beforeUpdate->父updated',
                    },
                    {
                        data:
                            '销毁过程：父beforeDestroy->子beforeDestroy->子destroyed->父destroyed',
                    },
                ],
            },
            vueTransList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            '通过props向子组件传递数据，这是最常用父组件传递给子组件参数的方式；',
                    },
                    {
                        data:
                            '通过$emit子组件向父组件传递数据，这也是常用的逆向传参的方式；',
                    },
                    {
                        data: `.sync修饰符：这是一个语法糖（:data.sync="data"），也就是利用$emit进行子组件到父组件通信，将数据改变，然后将数据再同步到子组件，
                            既然是语法糖，他的完全写法：（:data="data" @update:data="val => data = val"）`,
                    },
                    {
                        data: `$attr/$listeners：这是用来获取父组件的方法和属性，具体是，$attr获取子组件中没有通过props获取父组件属性的属性，
                                $listeners获取父作用域中不含.native的v-on的事件监听器，二者都是以对象的形式进行收纳。`,
                    },
                    {
                        data: `vuex`,
                    },
                    {
                        data: `EventBus：这是我今天刚知道的一种方式，思路就是声明一个全局Vue实例变量EventBus，把所有的通信数据，事件监听都存储到这个变量上，这样就到达在组件间实现数据共享，有点类似Vuex。
                                用法就是：定义一个空组件 let busComp = new Vue();子组件仍通过this.$emit传参，父组件在created中通过this.$on('name',funtion(){})进行监听。`,
                    },
                ],
            },
        };
    },
    methods: {
        jumpToHooks() {
            this.$router.push({
                name: 'vueInterview',
                params: {
                    id: 'c1',
                },
            });
        },
        changeData() {
            this.$emit('update:testData', 3);
        },
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
