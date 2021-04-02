<template>
    <div>
        <text-field catalog
                    title="VUE-如何实现响应式数据的"
                    content="vue2.x实现数据绑定的基本原理是通过Object.definedProperty监听数据修改实现数据劫持的过程，具体如下:"
                    fontSizeType="middle">
        </text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;div id="objValue">&lt;/div><br/>
        let obj = {};<br/>
        let name = '';<br/>
        Object.defineProperty(obj, 'name', {<br/>
            set: function (value) {<br/>
                console.log('---设置值:', value);<br/>
                document.getElementById('objValue').innerHTML = value;<br/>
                name = value;<br/>
            },<br/>
            get: function () {<br/>
                console.log('---获取值：');<br/>
                return '---' + name + '----';<br/>
            },<br/>
        });<br/>
        jumpTo() {<br/>
            obj.name = '***新值***';<br/>
            console.log(obj.name);<br/>
        },
            </pre>
        </div>
        <text-field content="上面代码中，呈现了，点击jumpTo方法改变name值，并实现在视图发生改变(set方法)，这就是数据的单向绑定（数据变->视图变）；
                            接下来实现数据的反向绑定（视图变->数据变），这里简单一些，就是时刻监听input内容，然后修改值。"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;input type="text">&lt;/input><br/>
        let obj = {};<br/>
        let name = '';<br/>
        Object.defineProperty(obj, 'name', {<br/>
            set: function (value) {<br/>
                console.log('---设置值:', value);<br/>
                document.getElementById('objValue').innerHTML = value;<br/>
                name = value;<br/>
            },<br/>
            get: function () {<br/>
                console.log('---获取值：');<br/>
                return '---' + name + '----';<br/>
            },<br/>
        });<br/>
        jumpTo() {<br/>
            obj.name = '***新值***';<br/>
            console.log(obj.name);<br/>
        },<br/>
        $('input').on('input',function(){<br/>
            obj.name = $(this).val()<br/>
        })
            </pre>
        </div>
        <text-field content="上面就实现了一个简单的双向数据绑定模式，但是在实际vue中，一个data会在不同的视图中都会用到，那么此时就引入了一个新的概念：
                            发布-订阅者设计模式。发布者只有一个，订阅者可能有多个，也被称观察者模式。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="CSS-浏览器是如何判断一个元素和某个css选择器匹配"
                    content="先产生一个元素集合，然后从后向前判断，例如下面这个例子：body.test #testId > .testChild"
                    fontSizeType="middle">
        </text-field>
        <text-field content="浏览器会先遍历把所有class为testChild找出来组成一个集合，然后上一层，查找元素每个父级的id是否为testId，
                            如果不是，则将该元素从集合中删除，再向上，查找标签为body并且class为test的元素，不满足删除，循环这个规则，
                            最后剩下的集合中每个元素，即为最终要匹配的元素。"></text-field>
        <text-field content="之所以从后往前找是因为这种方式更高效，寻找元素的父级比寻找元素的兄弟及儿子节点更高效。"></text-field>
        <el-divider></el-divider>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';
let obj = {};
let name = '';
Object.defineProperty(obj, 'name', {
    set: function (value) {
        console.log('---设置值:', value);
        name = value;
    },
    get: function () {
        console.log('---获取值：');
        return '---' + name + '----';
    },
});
export default {
    name: 'content20210316',
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
            obj.name = '***新值***';
            console.log(obj.name);
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
