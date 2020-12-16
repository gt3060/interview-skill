<template>
    <div class="vueDirective">
        <div class="fontStyle">
            <p class="fontSize">1.什么是Vue.set?</p>
            <p class="fontIndent">
                Vue.set 的作用就是在构造器外部操作构造器内部的数据、属性或者方法。
            </p>
        </div>
        <div class="fontStyle">
            <p class="fontSize">2.引用构造器外部数据</p>
            <p class="fontIndent">引用构造器外部数据count：{{ count }}，代码如下：</p>
        </div>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;script&gt;<br/>
        let outData = {<br/>
          count: 1,<br/>
          goods: 'car',<br/>
        }<br/>
        let app = new Vue({<br/>
          el: '#app',<br/>
          data: outData,<br/>
        })<br/>
        &lt;/script&gt;<br/>
        &lt;p&gt;{ { count } } &lt;/p&gt;
      </pre>
        </div>
        <div class="fontStyle">
            <p class="fontSize">3.改变构造器外部数据</p>
            <p class="fontIndent">
                每次点击按钮，构造器外部数据count加1：{{ count }} &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;
                <el-button type="text"
                           @click="changeCount">添加</el-button>
                代码如下：
            </p>
        </div>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 方法一：利用Vue.set <br/>
        Vue.set(outData, "count", this.count + 1); <br/>
        // 方法二：利用this <br/>
        // this.count++; <br/>
        // 方法三： 直接操作外部数据(原生方法) <br/>
        // outData.count++;
      </pre>
        </div>
        <div class="fontStyle">
            <p class="fontSize">4.为什么采用Vue.set</p>
            <p class="fontIndent">
                由于Javascript的限制，Vue不能自动检测以下变动的数组。
            </p>
            <div class="labelMarginLeft">
                <ol type="a">
                    <li>当你利用索引直接设置一个项时，vue不会为我们自动更新。</li>
                    <li>当你修改数组长度时，vue不会自动更新。</li>
                </ol>
                <p>例如:</p>
                <ul>
                    <li v-for="(item, index) in arr"
                        :key="index">{{ item }}</li>
                </ul>
                <el-button @click="changeArr"
                           type="text">changeArr</el-button>
                <p>问题：点击按钮发现视图并没有变，解决办法就是利用Vue.set</p>
                <p>代码如下：</p>
            </div>
        </div>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        changeArr() {<br/>
          //问题:点击不更新视图<br/>
          outData.arr[1] = "ddd";<br/>
          //解决办法：Vue.set<br/>
          // Vue.set(outData.arr, 1, "eee");<br/>
        },
      </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../assets/js/common';
import Vue from 'vue';

let outData = {
    count: 1,
    arr: ['aaa', 'bbb', 'ccc'],
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
        changeCount() {
            // 方法一：利用Vue.set
            Vue.set(outData, 'count', this.count + 1);
            // 方法二：利用this
            // this.count++;
            // 方法三： 直接操作外部数据(原生方法)
            // outData.count++;
        },

        changeArr() {
            outData.arr[1] = 'ddd';
            // Vue.set(outData.arr, 1, "eee");
        },
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
