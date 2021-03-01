<template>
    <div>
        <text-field catalog
                    title="CSS-页面隐藏元素的方法有哪些"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="cssList" />
        <text-field content="虽然，利用visibility方式和opacity方式都只会导致浏览器重绘而不导致重排，但是，还是有
                            一定的差异性：例如在事件绑定上，opacity方式仍会触发绑定事件，但是visibility方式则不会，
                            通过下面这个例子，就能看出：">
        </text-field>
        <el-card style="margin-top:20px">
            <el-button @click="handleReset"
                       type="primary">重置</el-button>
            <div style="display:flex; margin-top:20px;">
                <div class="moduleStyle">
                    <div class="isShowStyle"
                         @click="handleVisibilityDiv('display')"
                         :class="isDisplay?'displayStyle':''">1</div>
                    <el-button type="primary"
                               style="margin-top:20px"
                               @click="handleDisplay">display:none</el-button>
                </div>
                <div class="moduleStyle">
                    <div class="isShowStyle"
                         @click="handleVisibilityDiv('visibility')"
                         :class="isvisibility?'visibilityStyle':''">2</div>
                    <el-button type="primary"
                               style="margin-top:20px"
                               @click="handleVisibility">visibility:hidden</el-button>
                </div>
                <div class="moduleStyle">
                    <div class="isShowStyle"
                         @click="handleVisibilityDiv('opacity')"
                         :class="isOpacity?'opacityStyle':''">3</div>
                    <el-button type="primary"
                               style="margin-top:20px"
                               @click="handleOpacity">opacity:0</el-button>
                </div>
            </div>
        </el-card>
        <el-divider></el-divider>
        <text-field catalog
                    title="JS-写一个方法去掉字符串中的空格"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="以下面这个字符串为例：‘Welcome To Chin！ ’,注意:！后面也有个空格。"></text-field>
        <p class="commonStyle">
            <span>原字符串：</span>
            <span>{{oldString}}</span>
        </p>
        <el-button type="primary"
                   class="commonStyle"
                   @click="handleRemoveNull">消除</el-button>
        <el-button type="primary"
                   @click="handleRemoveReg"
                   class="commonStyle">正则消除</el-button>
        <p class="commonStyle">
            <span>新字符串：</span>
            <span>{{newString}}</span>
        </p>
        <div class="codeBorder fontCodeStyle commonStyle">
            <pre class="codeBorder">
        handleRemoveNull() {<br/>
            let oldString = 'Welcome To Chin！';<br/>
            // 字符串转数组：<br/>
            let splitArr = oldString.split('');<br/>
            let filterArr = splitArr.filter((item) => {<br/>
                return item !== ' ';<br/>
            });<br/>
            // 将数组转为字符串，也可以使用：toString()/toLocalString()<br/>
            let newString = filterArr.join('');<br/>
            this.newString = `'${newString}'`;<br/>
        },<br/>

        // 除了上面方法利用js处理外，也可以使用正则：<br/>
        handleRemoveReg() {<br/>
            let oldString = 'Welcome To Chin! ';<br/>
            this.newString = `'${oldString.replace(/\s*/g, '')}'`;<br/>
        },
            </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210225',
    data() {
        return {
            cssList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            'display:none;------简单粗暴，就是讲元素从页面移除，不会占用页面空间，造成浏览器的重排和重绘；',
                    },
                    {
                        data:
                            'visibility:hidden;------隐藏元素，但仍占用空间，只会导致浏览器重绘而不导致重排；',
                    },
                    {
                        data:
                            'opacity:0;------设置元素透明度为0，只会导致浏览器重绘而不导致重排。',
                    },
                ],
            },
            isDisplay: false,
            isvisibility: false,
            isOpacity: false,
            oldString: "'Welcome To Chin! '",
            newString: '',
        };
    },
    methods: {
        handleDisplay() {
            this.isDisplay = true;
        },
        handleVisibility() {
            this.isvisibility = true;
        },
        handleOpacity() {
            this.isOpacity = true;
        },
        handleVisibilityDiv(item) {
            switch (item) {
                case 'visibility':
                    console.log('-----点击了visibility:hidden');
                    break;
                case 'display':
                    console.log('点击了display:none');
                    break;
                case 'opacity':
                    console.log('---点击了opacity:0');
                    break;
            }
        },
        handleReset() {
            this.isDisplay = false;
        },
        handleRemoveNull() {
            let oldString = 'Welcome To Chin! ';
            let splitArr = oldString.split('');
            let filterArr = splitArr.filter((item) => {
                return item !== ' ';
            });
            // 也可以使用：toString()/toLocalString()
            let newString = filterArr.join('');
            this.newString = `'${newString}'`;
        },
        handleRemoveReg() {
            let oldString = 'Welcome To Chin! ';
            this.newString = `'${oldString.replace(/\s*/g, '')}'`;
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
.isShowStyle {
    border: 1px solid black;
    padding: 53px;
}
.displayStyle {
    display: none;
}
.visibilityStyle {
    visibility: hidden;
}
.opacityStyle {
    opacity: 0;
}
.moduleStyle {
    margin-right: 20px;
}
.commonStyle {
    margin-top: 20px;
}
</style>
