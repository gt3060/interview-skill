<template>
    <div>
        <text-field catalog
                    title="React-React声明周期"
                    content="这里主要分三个部分进行记录：挂载/卸载；更新；react新增和去除的生命周期"
                    fontSizeType="middle">
        </text-field>
        <text-field content="①挂载/卸载"
                    style="margin-bottom:10px;"></text-field>
        <text-field content="constructor()中完成数据的初始化，它接受两个参数props/context，当想在函数内部
                            使用这两个参数需要用super来继承传入这两个参数，只要使用了constructor就必需用super；"></text-field>
        <text-field content="componentWillMount()代表组件已经经历了constructor但是dom还没有渲染的阶段；"></text-field>
        <text-field content="componentDidMount()代表组件第一次渲染已经完成，dom已经挂载，一般ajax请求会在这个阶段；"></text-field>
        <text-field content="componentWillUnmount()在此处完成组件的卸载和数据销毁，"></text-field>
        <text-field content="②更新"
                    style="margin-bottom:10px;"></text-field>
        <text-field content="componentWillReceiveProps()在接受父组件改变props需要重新渲染组件时会触发，参数只有一个nextProps；
                            "></text-field>
        <text-field content="shouldComponentUpdate()用于性能优化，一般情况父组件数据更新会导致需要此数据的所有子组件更新，
                            故用到此钩子函数用来进行判断，某一个子组件是否更新渲染，包含两个参数（nextProps,nextStates）；"></text-field>
        <text-field content="componentWillUpdate()，shouldComponentUpdate()返回为true时进行此生命周期函数方法内
                            ，同样包含两个参数（nextProps,nextStates），此时组件状态并未更新；"></text-field>
        <text-field content="componentDidUpdate()组件更新完毕会进入此生命周期，这里可以拿到更新前的props/state；"></text-field>
        <text-field content="render(),在数据更新后，react会生成新的Vdom树，并根据diff算法和原有Vdom树进行对比，找到差异节点；
                            并重新渲染；"></text-field>
        <text-field content="③react新增生命周期"
                    style="margin-bottom:10px;"></text-field>
        <text-field content="getDerivedStateFromProps()代替原有的compoentWillReceiveProps()，会在调用render方法之前调用，
                            并且在初始挂在和后续更新挂载前都会调用，返回一个对象来更新state，返回null则不更新。
                            使用写：static getDerivedStateFromProps(nextProps, prevState)"></text-field>
        <text-field content="getSnapShotBeforeUpdate()代替原有的componentWillUpdate()"></text-field>
        <text-field style="margin-bottom:10px;"
                    content="④即将过时的几个生命周期：componentWillMount,componentWillReceiptProps,componentWillUpdate"></text-field>
        <text-field style="margin-bottom:10px;"
                    content="⑤错误处理：当渲染过程、生命周期、或子组件的构造函数中抛出错误时，会调用componentDidcatch,
                            static getDerivedStateFromError；"></text-field>
        <el-divider></el-divider>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210426',
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
