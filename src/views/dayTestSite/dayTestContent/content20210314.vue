<template>
    <div>
        <text-field catalog
                    title="JS-写一个判断设备类型的方法"
                    content="通过navigator.userAgent来进行判断"
                    fontSizeType="middle">
        </text-field>
        <text-field content=""></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        var u = navigator.userAgent;<br/>
        var app = navigator.appVersion;// appVersion 可返回浏览器的平台和版本信息。该属性是一个只读的字符串。<br/>
        var browserLang = (navigator.browserLanguage || navigator.language).toLowerCase();    //获取浏览器语言<br/>
        var deviceBrowser = function(){<br/>
            return{<br/>
                trident: u.indexOf('Trident') > -1,  //IE内核<br/>
                presto: u.indexOf('Presto') > -1,  //opera内核<br/>
                webKit: u.indexOf('AppleWebKit') > -1,  //苹果、谷歌内核<br/>
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,  //火狐内核<br/>
                mobile: !!u.match(/AppleWebKit.*Mobile.*/),  //是否为移动终端<br/>
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.Mac OS X/),  //ios终端<br/>
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,  //android终端或者uc浏览器<br/>
                iPhone: u.indexOf('iPhone') > -1,  //是否为iPhone或者QQHD浏览器<br/>
                iPad: u.indexOf('iPad') > -1,  //是否iPad<br/>
                webApp: u.indexOf('Safari') == -1,  //是否web应用程序，没有头部和底部<br/>
                weixin: u.indexOf('MicroMessenger') > -1,  //是否微信<br/>
                qq: u.match(/\sQQ/i) == " qq",  //是否QQ<br/>
            }<br/>
        }();<br/><br/>

        // 系统区分<br/>
        function getOS() {<br/>
            var u = navigator.userAgent;<br/>
            if (!!u.match(/compatible/i) || u.match(/Windows/i)) {<br/>
                return 'windows';<br/>
            } else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {<br/>
                return 'macOS';<br/>
            } else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {<br/>
                return 'ios';<br/>
            } else if (!!u.match(/android/i)) {<br/>
                return 'android';<br/>
            } else {<br/>
                return 'other';<br/>
            }<br/>
        }
            </pre>
        </div>
        <el-divider></el-divider>
        <text-field catalog
                    title="VUE-vue/react/angular区别"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field :list="vueList" />
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210314',
    data() {
        return {
            vueList: {
                listTitle: '',
                routeList: [
                    {
                        data:
                            '1.vue借鉴了angular的数据绑定和模板技术；同时也借鉴了react的组件化和虚拟DOM技术；',
                    },
                    {
                        data:
                            '2.vue更易上手，学习曲线平稳，而angular入门比较难，概念较多，react同样需要学习很多，包括react全家桶',
                    },
                    {
                        data:
                            '3.vue更轻量级，压缩后只有20k+；react有44k，angular有56k，所以对于移动端来说vue更适合',
                    },
                    {
                        data: `4.响应式原理有所不同：Vue依赖收集，自动优化，数据可变，Vue递归监听data的所有属性,直接修改，当数据改变时，自动找到引用组件重新渲染；
                                React基于状态机，手动优化，数据不可变，需要setState驱动新的State替换老的State，当数据改变时，以组件为根目录，默认全部重新渲染`,
                    },
                ],
            },
        };
    },
    methods: {
        jumpTo() {},
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
