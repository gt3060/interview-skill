<template>
    <div>
        <text-field catalog
                    title="JS-new一个对象具体发生了什么"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="①：创造一个简单的空对象："></text-field>
        <div class="code codecommonStyle">let obj = {}</div>
        <text-field content="②：将该对象的内置原型对象，_proto_设置为构造函数的原型对象；"></text-field>
        <div class="code codecommonStyle">obj._proto_ = Person.prototype</div>
        <text-field content="③：将创建的简单对象作为this参数调用构造函数，完成初始化工作；"></text-field>
        <div class="code codecommonStyle">obj.name = name; </div>
        <div class="code codecommonStyle">obj.sex = sex;</div>
        <text-field content="若函数有返回对象，则返回该对象，否则返回this；"></text-field>
        <div class="code codecommonStyle">return obj</div>
        <text-field content="具体如下："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        function Person(name,sex){<br/>
            let that = {<br/>
                _proto_: Person.prototype<br/>
            }<br/>
            that.name = name;<br/>
            that.sex = sex;<br/>
            return that;<br/>
        }<br/>
        let person = new Person('耿','male')
            </pre>
        </div>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-自己定义一个new方法"
                    content="当了解了new创建对象中都经历了什么之后，如何自定义一个new方法，也随之简单起来："
                    fontSizeType="middle">
        </text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 构造器函数<br/>
        function Person(name,sex){<br/>
            this.name = name;<br/>
            this.sex = sex;<br/>
        }<br/>
        // 自定义的new方法<br/>
        let newMethod =  function (Person, ...rest){<br/>
            // 1.以构造器的原型创建对象<br/>
            let child = Object.create(Person.prototype);<br/>
            // 2.将this和调用参数传给构造器执行<br/>
            let result = Person.apply(child, rest)<br/>
            // 3.如果构造器没有手动返回对象，则返回第一步对象<br/>
            return typeof result === 'object' ? result : child<br/>
        }<br/>
        // 实例化<br/>
        let person = newMethod(Person, '耿','male');<br/><br/><br/>
        // 除了上述方法，也可以通过arguments获取构造函数和传参<br/>
        let newMethod = function(){<br/>
            let obj = {};<br/>
            let constructor = [].shift.apply(arguments);<br/>
            obj._proto_ = constructor.prototype;<br/>
            let result = constructor.apply(obj,arguments);<br/>
            return typeof result === 'object' ? result : obj<br/>
        }<br/>
        // 实例化<br/>
        let person = newMethod(Person, '耿','male')
            </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    data() {
        return {};
    },
    methods: {},
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
.codecommonStyle {
    width: 85%;
    margin-left: 3%;
}
</style>
