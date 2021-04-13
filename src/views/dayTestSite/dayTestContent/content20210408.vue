<template>
    <div>
        <text-field catalog
                    title="JS-作用域链"
                    content="提到作用域，我承认，我是懵逼状态，什么是作用域？什么又是作用域链，当看到答案恍然大悟，原来这个就是作用域链。
                            因此我还是记下来，省着以后忘记埋怨自己没有做好笔记。"
                    fontSizeType="middle">
        </text-field>
        <text-field content="在js中作用域分为全局作用域和函数作用域，其中全局作用域就是代码在程序任何一个地方都能被访问，
                            window对象的内置属性都拥有全局作用域；函数作用域是指在固定的代码中才能被访问，作用域有上下级关系，
                            上下级关系的确定就是看函数是在哪个作用域下创建的。作用域最大的用处就是隔离变量，不同作用域下的同名变量不冲突。"></text-field>
        <text-field content="作用域链"></text-field>
        <text-field content="一般变量取值都是到这个变量的函数作用域中获取，如果在当前作用域中没有查到，就会向上级查询直到查询到全局作用域，
                            这样的一个查找链条就是作用域链。"></text-field>
        <text-field content="说到作用域链，不得不说with语句。with语句主要用来临时扩展作用域链，将语句中的对象添加到作用域的头部。"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        person={name:"yhb",age:22,height:175,wife:{name:"lwy",age:21}};<br/>
        with(person.wife){<br/>
            console.log(name);<br/>
        }
            </pre>
        </div>
        <text-field content="with语句将person.wife添加到当前作用域链的头部，所以输出的就是：'lwy',with语句结束后，作用域链恢复正常。 q  "></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-sql注入，如何防范"
                    content="sql注入：它不是利用操作系统的BUG来实现攻击，而是针对程序员编写时的疏忽，通过SQL语句，实现无账号登录，甚至篡改数据库。尤其是将sql语句作用于表单之中。"
                    fontSizeType="middle">
        </text-field>
        <text-field content="总体上来看就是从变量的检测、过滤和验证下手，确保变量是开发者所预想所安全的。其大概防范措施有：
                            ①检测变量的数据类型和格式：只要在固定格式的变量在sql语句执行前先进行初步校验。②过滤特殊符号；
                            ③绑定变量使用预编译语句，这是现如今防止sql注入最常用的防范措施。④此外还可以通过正则表达式来进行过滤"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-export和export default区别"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="jsList" />
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 通过export导入：<br/>
        import { highlightCode } from '../../../utils/common';<br/>
        // 通过export default导入：<br/>
        import name from '../../../utils/common'
            </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import testName from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210408',
    data() {
        return {
            jsList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            '①export在一个模块可以有多个，但是export default只能有一个；',
                    },
                    {
                        data:
                            '②export可以直接导出或者先定义后导出，export default只允许先定义后导出；',
                    },
                    {
                        data:
                            '③export导入时写法：import {i, myFun}，export default导入时的写法：import 变量名 from 模块名',
                    },
                ],
            },
            obj: {
                sex: 'male',
                obj1: { name: 'chen', id: 123 },
                obj2: { name: 'liu', obj3: { name: 'lin' } },
            },
        };
    },
    methods: {
        jumpTo() {},
        repeatObj(obj) {
            for (let i in obj) {
                console.log(i, obj[i], i === 'id');
                debugger;
                if (i === 'id') {
                    break;
                }
                if (obj[i] instanceof Object) {
                    this.repeatObj(obj[i]);
                }
            }
        },
        handleTest() {
            console.log('+++++', testName);
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
