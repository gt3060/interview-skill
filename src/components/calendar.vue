<template>
    <div style="display:flex;">
        <div class="main">
            <div class="changeMonths">
                <div style="width:75%">{{currYear}}年{{currMonth+1}}月</div>
                <div style="width:25%">
                    <el-button-group>
                        <el-button type="primary"
                                   size="small"
                                   plain
                                   @click="jumpBeforeMonth">上个月</el-button>
                        <el-button type="primary"
                                   size="small"
                                   plain
                                   @click="jumpToday">今天</el-button>
                        <el-button type="primary"
                                   size="small"
                                   plain
                                   @click="jumpNextMonth">下个月</el-button>
                    </el-button-group>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="tableStyle">
                <table border=1>
                    <thead>
                        <tr>
                            <th id="sunday">日</th>
                            <th id="monday">一</th>
                            <th id="tuesday">二</th>
                            <th id="wednesday">三</th>
                            <th id="thursday">四</th>
                            <th id="firdy">五</th>
                            <th id="saturday">六</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in dayArray"
                            :key="index">
                            <th v-for="(item1,index1) in item"
                                class="dateStyle"
                                :class="[ isActived === index1&& lineIndex === index?'dateStyleActived':'',
                                        item1 === currDate && isCurrDate ?'currDateStyle':'']"
                                :key="index1"
                                @click="handleIsActived(index,index1,item1)"
                                :id="index1">
                                <span :class="numArr.indexOf(item1.toString())!==-1?'redStyle':''">
                                    {{item1}}
                                </span>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="main_right">
            <div v-for="(item,index) in mainRight"
                 style="display:flex"
                 :key="index">
                <div class="square"
                     :style="{'background':item.color}"></div>
                <div class="fontContain">{{item.contain}}</div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'calendar',
    data() {
        return {
            currYear: 0,
            currMonth: 0,
            currDate: 0,
            dayArray: [],
            isActived: 0,
            lineIndex: 0,
            isCurrDate: true,
            changeDayColor: '',
            completeArr: [],
            numArr: [],
            mainRight: [
                {
                    color: '#FF9900',
                    contain: '未完善',
                },
                {
                    color: '#1989fa',
                    contain: '选定日期',
                },
                {
                    color: '#83c1ff',
                    contain: '当前日期',
                },
            ],
        };
    },
    props: {
        selectDate: {
            type: Function,
            default: () => {},
        },
        notComplete: {
            type: Array,
            default: () => [],
        },
    },
    watch: {
        notComplete: {
            handler(newObj) {
                this.completeArr = newObj;
                this.initCalendar();
            },
            deep: true,
        },
    },
    created() {
        let date = new Date();
        // getFullYear是获取4位完整年份，gerYear是当年份位1900-1999时候返回两位数字，否则，等同于getFullYear
        this.currYear = date.getFullYear();
        this.currMonth = date.getMonth();
        this.currDate = date.getDate();
    },
    methods: {
        initCalendar() {
            let date = new Date();
            let totalDay = new Date(
                this.currYear,
                this.currMonth + 1,
                0
            ).getDate();
            if (this.completeArr.length > 0) {
                let month = this.currMonth + 1;
                let yearAndMonth =
                    month < 10
                        ? this.currYear + '' + 0 + '' + month
                        : this.currYear + month + '';
                let arr = this.completeArr.filter((item) => {
                    return item.date.indexOf(yearAndMonth) !== -1;
                });
                let numArr = [];
                arr.map((item) => {
                    let str = item.date.substring(6);
                    if (str.substring(0, 1) === '0') {
                        numArr.push(str.substring(1));
                    } else {
                        numArr.push(str);
                    }
                });
                this.numArr = numArr;
            }
            date.setYear(this.currYear);
            date.setMonth(this.currMonth);
            date.setDate(1);
            let firstWeek = date.getDay() === 0 ? 7 : date.getDay();
            let weekTimes = 0;
            let dayArray = [];
            let i = 1;
            while (i <= totalDay) {
                dayArray[weekTimes] = {};
                if (weekTimes === 0) {
                    for (let j = 0; j < 7; j++) {
                        if (j < firstWeek) {
                            dayArray[weekTimes][j] = '';
                        } else {
                            dayArray[weekTimes][j] = i;
                            i++;
                        }
                    }
                    weekTimes++;
                } else {
                    for (let j = 0; j < 7; j++) {
                        if (i <= totalDay) {
                            dayArray[weekTimes][j] = i;
                            i++;
                        } else {
                            dayArray[weekTimes][j] = '';
                        }
                    }
                    weekTimes++;
                }
            }
            let isSunday = Object.values(dayArray[0]).find(
                (item) => item !== ''
            );
            if (isSunday === undefined) {
                dayArray.shift();
            }
            this.dayArray = dayArray;
        },
        async jumpBeforeMonth() {
            if (this.currMonth !== 0) {
                this.currMonth--;
            } else {
                this.currYear--;
                this.currMonth = 11;
            }
            this.isCurrDate = await this.handleIsCurrDate(
                this.currMonth,
                this.currYear
            );
            this.initCalendar();
        },
        handleIsCurrDate(month, year) {
            let date = new Date();
            if (date.getFullYear() === year && date.getMonth() === month) {
                return true;
            }
            return false;
        },
        jumpToday() {
            let date = new Date();
            this.currYear = date.getFullYear();
            this.currMonth = date.getMonth();
            this.currDate = date.getDate();
            this.isCurrDate = true;
            this.initCalendar();
        },
        async jumpNextMonth() {
            if (this.currMonth !== 11) {
                this.currMonth++;
            } else {
                this.currYear++;
                this.currMonth = 0;
            }
            this.isCurrDate = await this.handleIsCurrDate(
                this.currMonth,
                this.currYear
            );
            this.initCalendar();
        },
        handleIsActived(index, index1, item) {
            this.lineIndex = index;
            this.isActived = index1;
            this.selectDate(this.currYear, this.currMonth + 1, item);
        },
    },
};
</script>

<style lang="less" scoped>
.main {
    width: 840px;
    height: 520px;
    .changeMonths {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        // div {
        //     &:first-child {
        //         width: 70%;
        //     }
        // }
    }
    table {
        width: 100%;
        border: 1px solid #ccc;
        border-collapse: collapse;
    }
    th,
    td {
        padding: 15px;
    }
    .currDateStyle {
        color: #83c1ff;
    }
    .dateStyle:hover {
        background-color: #f2f8fe;
    }
    .dateStyleActived {
        background-color: #f2f8fe;
        color: #1989fa;
    }
    .redStyle {
        color: #ff9900;
    }
}
.main_right {
    margin-left: 6%;
    flex: 1;
    .square {
        margin-top: 15px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
    .fontContain {
        margin-left: 11px;
        margin-top: 2px;
    }
}
</style>
