<template>
    <div>
        <text-field content="这个内容其实说简单也简单，就是熟悉Date对象的属性，
                            例如，获取当前时间、获取当天星期几，更改当前日期等等API，详细内容可以参考，
                            下面附上MDN链接："></text-field>
        <text-field btnText="点击跳转"
                    isBtn
                    :btnMethod="jumpMDNDate"></text-field>
        <text-field content="主要思路如下："></text-field>
        <text-field content="先找到每个月的第一天是星期几，然后，遍历每一行数据进行渲染，最特别的是第一行和最后一行，
                            因为第一行并不一定都是从第一个位置开始，最后一行也不一定到最后一个位置结束："></text-field>
        <text-field content="于是我定义了一个二维数组，也可以定义一个一维数组，然后每个数组中存放一个对象，对象中放每个值。"></text-field>
        <text-field content="最终渲染的结果就是日历结果，但是这里要注意一个问题，就是假如，这个月的第一天刚好是周日，
                            那么，遍历第一行渲染数据时，由于每天都小于周日，所以第一行为空，故再渲染最后要加以判断。"></text-field>
        <text-field content="下面附上代码："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        created() {<br/>
            let date = new Date();<br/>
            // getFullYear是获取4位完整年份，gerYear是当年份位1900-1999时候返回两位数字，否则，等同于getFullYear<br/>
            this.currYear = date.getFullYear();<br/>
            // getMonth方法返回值为:0-11，分别代表1-12月<br/>
            this.currMonth = date.getMonth();<br/>
            this.currDate = date.getDate();<br/>
            this.initCalendar();<br/>
        },<br/>
        initCalendar() {<br/>
            let date = new Date();<br/>
            let totalDay = new Date(<br/>
                this.currYear,<br/>
                this.currMonth + 1,<br/>
                0<br/>
            ).getDate();<br/>
            date.setYear(this.currYear);<br/>
            date.setMonth(this.currMonth);<br/>
            date.setDate(1);<br/>
            let firstWeek = date.getDay() === 0 ? 7 : date.getDay();<br/>
            let weekTimes = 0;<br/>
            let dayArray = [];<br/>
            let i = 1;<br/>
            while (i &lt;= totalDay) {<br/>
                dayArray[weekTimes] = {};<br/>
                if (weekTimes === 0) {<br/>
                    for (let j = 0; j &lt; 7; j++) {<br/>
                        if (j &lt; firstWeek) {<br/>
                            dayArray[weekTimes][j] = '';<br/>
                        } else {<br/>
                            dayArray[weekTimes][j] = i;<br/>
                            i++;<br/>
                        }<br/>
                    }<br/>
                    weekTimes++;<br/>
                } else {<br/>
                    for (let j = 0; j &lt; 7; j++) {<br/>
                        if (i &lt;= totalDay) {<br/>
                            dayArray[weekTimes][j] = i;<br/>
                            i++;<br/>
                        } else {<br/>
                            dayArray[weekTimes][j] = '';<br/>
                        }<br/>
                    }<br/>
                    weekTimes++;<br/>
                }<br/>
            }<br/>
            let isSunday = Object.values(dayArray[0]).find(<br/>
                (item) => item !== ''<br/>
            );<br/>
            if (isSunday === undefined) {<br/>
                dayArray.shift();<br/>
            }<br/>
            this.dayArray = dayArray;<br/>
        }
            </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210222',
    data() {
        return {};
    },
    methods: {
        jumpMDNDate() {
            window.open(
                'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date'
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
</style>
