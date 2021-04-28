<template>
    <div>
        <text-field catalog
                    title="React-什么是受控组件、非受控组件"
                    content="简单的讲受控组件就是可以被react状态控制的组件；在react中input等输入框内的数据是由用户自己输入，
                            并属于非受控组件，故如果想要变成受控组件可以使用onChange事件来获取输入内的数据，并将其作为value
                            传入，换句话说数据的双向绑定就是一个封装好的受控组件。"
                    fontSizeType="middle">
        </text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="React-创建组件的方式都有哪些"
                    content="主要包含三种：无状态组件、es5原生方式React.creatClass定义组件、es6中继承extends React.Component
                            定义组件；"
                    fontSizeType="middle">
        </text-field>
        <!-- <text-field catalog
                    title="React-描述下redux"
                    content="什么情况更应该使用redux呢，那就是多交互、多数据源的情况，如果简单的UI层数据传输、没有协作，使用
                            redux反而会增加了项目的复杂性；"
                    fontSizeType="middle">
        </text-field>
        <text-field content="redux主要由三部分组成：store、reducer、action"></text-field>
        <text-field content="store是一个对象，他有四个方法，dispatch"></text-field> -->
        <text-field content="无状态组件：只根据传入的props进行展示，不涉及到state状态的操作，无状态组件的特点包括：
                            组件不能访问this对象，组件无法访问生命周期方法，只能访问props而不能访问state，用无状态组件
                            用来分隔大型项目某一个复杂模块，"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        function HelloComponent(props){<br/>
            return &lt;div>Hello World&lt;/div><br/>
        }
            </pre>
        </div>
        <text-field content="React.createClass，不重要，随着es6的广泛使用和react的发展，尽量减少使用此方法。"></text-field>
        <text-field content="React.component:是以ES6的形式来创建react的组件的，是React目前极为推荐的创建有状态组件的方式，
                            与React.createClass区别在于，createClass的this自绑定，而React.component的this需要自己指向；
                            指向方式有：bind/箭头函数/构造函数中指定。除了this指向的区别外还有组件初始状态state的配置不同。"></text-field>
        <el-divider></el-divider>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
            </pre>
        </div>
        <text-field :list="cssList" />
        <el-button type="text"
                   @click="jumpTo">详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210423',
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
        jumpTo() {
            window.open(
                'http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html'
            );
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
