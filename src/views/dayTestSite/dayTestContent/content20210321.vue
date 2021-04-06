<template>
    <div>
        <text-field catalog
                    title="JS-创建对象的方法有哪些"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="①new+Object创建对象：let obj = new Object();"></text-field>
        <text-field content="②字面式创建对象：let obj = { name: 'gengtian', age:24 };"></text-field>
        <text-field content="③工厂模式：解决采用上述方法同时生成过多对象产生冗余现象；"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        factoryMethod() {<br/>
            let obj1 = this.createObject('geng', 24);<br/>
            let obj2 = this.createObject('chen', 25);<br/>
            console.log(obj1, obj2);<br/>
        },<br/>
        createObject(name, age) {<br/>
            let obj = {};<br/>
            obj.name = name;<br/>
            obj.age = age;<br/>
            return obj;<br/>
        },
            </pre>
        </div>
        <el-button type="text"
                   @click="obj1">obj1 instanceof Object</el-button>
        <el-button type="text"
                   @click="obj2">obj1 instanceof this.createObject</el-button>
        <text-field content="④构造函数模式:上述方法，无法识别具体哪个对象，因为本例中都得到的式obj，也就是，Object，故
                            产生了构造函数，没有显式的创造对象，直接将属性和方法赋给了this，没有return语句。"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        constructorMethod() {<br/>
            let obj3 = new this.constructorCreateObject('geng', 24);<br/>
            let obj4 = new this.constructorCreateObject('chen', 25);<br/>
            console.log(obj3, obj4);<br/>
        },<br/>
        constructorCreateObject(name, age) {<br/>
            this.name = name;<br/>
            this.age = age;<br/>
        },
            </pre>
        </div>
        <el-button type="text"
                   @click="obj3">obj3 instanceof Object</el-button>
        <el-button type="text"
                   @click="obj4">obj4 instanceof this.constructorCreateObject</el-button>
        <text-field content="⑤原型模式：构造函数模式，虽然写起来方便，但是，对于上述创建得每个实例，都包含不同得实例对象。
                            那么为了解决这个问题，原型模式就出现了："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        function Person() { }<br/>
        Person.prototype.name = "lisi";<br/>
        Person.prototype.age = 21;<br/>
        Person.prototype.family = ["lida","lier","wangwu"];<br/>
        Person.prototype.say = function(){<br/>
            alert(this.name);<br/>
        };<br/>
        console.log(Person.prototype);   //Object{name: 'lisi', age: 21, family: Array[3]}<br/>
        var person1 = new Person();        //创建一个实例person1<br/>
        console.log(person1.name);        //lisi<br/>
        var person2 = new Person();        //创建实例person2<br/>
        person2.name = "wangwu";<br/>
        person2.family = ["lida","lier","lisi"];<br/>
        console.log(person2);            //Person {name: "wangwu", family: Array[3]}<br/>
        console.log(person2.age);              //21
            </pre>
        </div>
        <text-field content="⑥原型模式+构造模式：这是最后一种方式，是为了即解决了构造函数模式浪费内存方式，又可以解决创建对象
                            时可以创建共有/私有属性。"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        function Person(name, age) {<br/>
            this.name = name;<br/>
            this.age = age;<br/>
        }<br/>
        Person.prototype = {<br/>
            constructor: Person,<br/>
            say: function () {<br/>
                console.log('公共参数');<br/>
            },<br/>
        };<br/>
        let obj = new Person();<br/>
        console.log(obj);
            </pre>
        </div>
        <el-divider></el-divider>
        <text-field catalog
                    title="CSS-谈一谈媒体查询的理解"
                    content="媒体查询常用于响应式布局，会根据不同得窗口大小设置不同尺寸、不同布局等。
                            用法就是@media screen and (max-width:600px){...style}"
                    fontSizeType="middle">
        </text-field>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210321',
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
        factoryMethod() {
            let obj1 = this.createObject('geng', 24);
            let obj2 = this.createObject('chen', 25);
            console.log(obj1, obj2);
        },
        createObject(name, age) {
            let obj = {};
            obj.name = name;
            obj.age = age;
            return obj;
        },
        obj1() {
            let obj1 = this.createObject('geng', 24);
            let str = obj1 instanceof Object;
            this.$message({
                message: `${str}`,
                type: 'success',
            });
        },
        obj2() {
            let obj1 = this.createObject('geng', 24);
            let str2 = obj1 instanceof this.createObject;
            this.$message({
                message: `${str2}`,
                type: 'success',
            });
        },
        constructorMethod() {
            let obj3 = new this.constructorCreateObject('geng', 24);
            let obj4 = new this.constructorCreateObject('chen', 25);
            console.log(obj3, obj4);
        },
        constructorCreateObject(name, age) {
            this.name = name;
            this.age = age;
        },
        obj3() {
            let obj3 = new this.constructorCreateObject('geng', 24);
            let str = obj3 instanceof Object;
            this.$message({
                message: `${str}`,
                type: 'success',
            });
        },
        obj4() {
            let obj3 = new this.constructorCreateObject('geng', 24);
            let str2 = obj3 instanceof this.constructorCreateObject;
            this.$message({
                message: `${str2}`,
                type: 'success',
            });
        },
        constructorPrototypeMethod() {
            function Person(name, age) {
                this.name = name;
                this.age = age;
            }
            Person.prototype = {
                constructor: Person,
                say: function () {
                    console.log('公共参数');
                },
            };
            let obj = new Person();
            console.log(obj);
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
