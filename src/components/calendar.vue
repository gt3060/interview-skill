<template>
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
                            :class=" isActived === index1&& lineIndex === index?'dateStyleActived':''"
                            :key="index1"
                            @click="handleIsActived(index,index1,item1)"
                            :id="index1">
                            <span :class="item1 === currDate ?'currDateStyle':''">{{item1}}
                            </span>
                        </th>
                    </tr>
                </tbody>
            </table>
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
        };
    },
    props: {
        selectDate: {
            type: Function,
            default: () => {},
        },
    },
    created() {
        let date = new Date();
        // getFullYear是获取4位完整年份，gerYear是当年份位1900-1999时候返回两位数字，否则，等同于getFullYear
        this.currYear = date.getFullYear();
        this.currMonth = date.getMonth();
        this.currDate = date.getDate();
        this.initCalendar();
    },
    methods: {
        initCalendar() {
            let date = new Date();
            let totalDay = new Date(
                this.currYear,
                this.currMonth + 1,
                0
            ).getDate();
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
        jumpBeforeMonth() {
            if (this.currMonth !== 0) {
                this.currMonth--;
            } else {
                this.currYear--;
                this.currMonth = 11;
            }
            this.initCalendar();
        },
        jumpToday() {
            let date = new Date();
            this.currYear = date.getFullYear();
            this.currMonth = date.getMonth();
            this.currDate = date.getDate();
            this.initCalendar();
        },
        jumpNextMonth() {
            if (this.currMonth !== 11) {
                this.currMonth++;
            } else {
                this.currYear++;
                this.currMonth = 0;
            }
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
        color: #409eff;
    }
    .dateStyle:hover {
        background-color: #f2f8fe;
    }
    .dateStyleActived {
        background-color: #f2f8fe;
        color: #1989fa;
    }
}
</style>
