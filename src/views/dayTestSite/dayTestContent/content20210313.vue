<template>
    <div>
        <text-field catalog
                    title="CSS-浏览器解析CSS过程"
                    content="cssom树构造：当浏览器接受到css代码后，浏览器首先构造节点并生成cssom，在这一过程中浏览器会确定
                            每一个节点的样式是怎么样的，这一过程很消耗资源。因为这一过程浏览器需要递归cssom树，来确定设置节点位置。
                            因此，dom树要尽量小，css尽量使用id或者class，减少过渡层叠。"
                    fontSizeType="middle">
        </text-field>
        <text-field content="构造dom树和cssom树后需要合并构成渲染树，渲染树只会包括需要显示的节点和这样节点的样式，如果某个节点
                            是display:none那么就不会在渲染树中显示。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-如何快速让一个数组乱序"
                    content="最简单的实现方式就是利用sort方法，通过sort方法传入一个随机函数，随机返回1/-1，
                            进而达到排列数组的目的。代码如下："
                    fontSizeType="middle">
        </text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        arr.sort((a,b)=>{<br/>
            return 0.5 - Math.random()<br/>
        })
            </pre>
        </div>
        <text-field content="除了上面这个方法外，还可以这么做，这就是随机产生一个数据，进行位置交换："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        let arraySort  = function(arr){<br/>
            for (<br/>
                let i, temp, length =  arr.length;<br/>
                length;<br/>
                i = parseInt(Math.random() * length),<br/>
                    temp = arr[--length],<br/>
                    arr[length] = arr[i],<br/>
                    arr[i] = temp<br/>
            );<br/>
            return arr<br/>
        }<br/>
        let oldArr = [1,2,3,4,5,6,7,8,9];<br/>
        arraySort(oldArr);<br/>
        // Array.prototype<br/>
        if (!Array.prototype.shuffle) {<br/>
            Array.prototype.shuffle = function() {<br/>
                for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);<br/>
                return this;<br/>
            };<br/>
        }
            </pre>
        </div>
        <text-field content="也可以将这个方法，放在js-Array方法的原型中，便于访问获取。"></text-field>
        <text-field :list="cssList" />
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210313',
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
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        };
    },
    methods: {
        jumpTo() {
            for (
                let i, temp, length = this.arr.length;
                length;
                i = parseInt(Math.random() * length),
                    temp = this.arr[--length],
                    this.arr[length] = this.arr[i],
                    this.arr[i] = temp
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
