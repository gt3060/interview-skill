<template>
    <div>
        <text-field catalog
                    title="VUE-Vue3.x如何实现响应式数据的"
                    content="之前写过关于Vue2.x版本实现响应式数据的方式是通过Object.defineProperty()，下面来介绍Vue3.x版本
                            想应式数据的方式："
                    fontSizeType="middle">
        </text-field>
        <text-field content="Vue3.x响应式数据是通过Proxy来实现的，那么什么是Proxy呢，Proxy也就是代理，可以实现对数据的处理，
                            对构造函数的处理，对数据的验证，就是在访问对象前添加一层拦截，可以过滤多个操作，而这些过滤由开发者自定义。"></text-field>
        <text-field content="语法就是：let proxy = new Proxy(target, handler);有两个参数，target需要使用Proxy包装的目标对象，可以是任何类型的对象；
                            handler是一个对象，其属性是当执行一个操作时定义代理的行为的函数，可以理解为某种触发器。具体看下面这个例子："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        proxyTest() {<br/>
            const target = {}; // 要被代理的原对象<br/>
            // 用于描述代理过程的handler<br/>
            const handler = {<br/>
                get: function (tar, key, receiver) {<br/>
                    console.log(`getting ${key}!`);<br/>
                    return Reflect.get(tar, key, receiver);<br/>
                },<br/>
                set: function (tar, key, value, receiver) {<br/>
                    console.log(`setting ${key}!`);<br/>
                    return Reflect.set(tar, key, value, receiver);<br/>
                },<br/>
            };<br/>
            // obj就是一个被新的代理对象<br/>
            const obj = new Proxy(target, handler);<br/>
            obj.a = 1; // setting a!<br/>
            console.log(obj.a); // getting a!<br/>
        },<br/>
        // 也可以将代理对象和被代理对象设置为同一个：<br/>
        proxyTest() {<br/>
            const target = {}; // 要被代理的原对象<br/>
            // 用于描述代理过程的handler<br/>
            const handler = {<br/>
                get: function (tar, key, receiver) {<br/>
                    console.log(`getting ${key}!`);<br/>
                    return Reflect.get(tar, key, receiver);<br/>
                },<br/>
                set: function (tar, key, value, receiver) {<br/>
                    console.log(`setting ${key}!`);<br/>
                    return Reflect.set(tar, key, value, receiver);<br/>
                },<br/>
            };<br/>
            // obj就是一个被新的代理对象<br/>
            const target = new Proxy(target, handler);<br/>
            target.a = 1; // setting a!<br/>
            console.log(target.a); // getting a!<br/>
        },
            </pre>
        </div>
        <text-field content="上面就是简单的Proxy的构造过程和具体参数写法，值得注意的是，get/set是需要返回布尔值的，此外
                            就是关于Reflect这个对象，这个是做什么的呢？"></text-field>
        <text-field content="Reflect是Es6新增的API，他设计的目的有：一是将Object对象内部一些很明显属于语言内部的方法（比如：Object.defineProperty），
                            放到Reflect那么我们以后就可以直接通过Reflect对象直接获取，二是在使用Object.defineProperty时，如果出现异常的话，会抛出错误，
                            需要用try...catch去捕获，但是使用Reflect.defineProperty则会返回true/false。"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 利用Object.defineProperty<br/>
        try{<br/>
            Object.defineProperty(target, property, attributes);<br/>
        }catch(e){<br/>
            console.log(e);<br/>
        }<br/>
        // 利用Reflect<br/>
        if(Reflect.defineProperty(target, property, attributes)){<br/>
            console.log('成功')<br/>
        }else{<br/>
            console.log('失败')<br/>
        }
            </pre>
        </div>
        <el-button type="text"
                   @click="jumpTo">Reflect参数详情跳转</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210320',
    data() {
        return {};
    },
    methods: {
        jumpTo() {
            window.open('https://www.cnblogs.com/tugenhua0707/p/10291909.html');
        },
        proxyTest() {
            const target = {}; // 要被代理的原对象
            // 用于描述代理过程的handler
            const handler = {
                get: function (tar, key, receiver) {
                    console.log(`getting ${key}!`);
                    return Reflect.get(tar, key, receiver);
                },
                set: function (tar, key, value, receiver) {
                    console.log(`setting ${key}!`);
                    return Reflect.set(tar, key, value, receiver);
                },
            };
            // obj就是一个被新的代理对象
            const obj = new Proxy(target, handler);
            obj.a = 1; // setting a!
            console.log(obj.a); // getting a!
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
