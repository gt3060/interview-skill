<template>
    <div class="learnExecution">
        <el-backtop></el-backtop>
        <div class="learnCardContain">
            <router-link to="/">
                <div class="learn-back">
                    <div>
                        <i class="el-icon-arrow-left arrow-leftStyle"></i>
                    </div>
                    <div class="goBack">&nbsp;&nbsp;&nbsp;返回主页</div>
                </div>
            </router-link>
            <div class="titleStyle">
                <div class="titleIconStyle">
                    <img src="@/components/picture/token.png"
                         class="imgStyle"
                         alt="" />
                </div>
                <div class="titleFontStyle">
                    <span style="font-size:25px">token</span>
                    <el-divider></el-divider>
                    <p>此篇主要对token的简单记录。</p>
                </div>
            </div>
            <div style=" width:75%;">
                <div class="catalogStyle fontStyle">
                    <div style="display:flex;">
                        <img src="@/assets/CONTENT DELIVERY.png"
                             alt=""
                             style="width:24px;height:24px; margin-top:6px" />
                        <span style="font-size:22px; font-weight: bold; margin-left:10px">简介</span>
                    </div>
                    <el-divider></el-divider>
                    <text-field catalog
                                title="前言"
                                content="Token是在服务端产生的，通常用来检验每次调用接口的合法性，例如再登录时候如果账户/密码正确，
                                        服务端会返回token给前端，因此接下来的每次调用接口都需要传token来证明是否合法。"
                                fontSizeType="small">
                    </text-field>
                    <text-field catalog
                                title="token有效期"
                                content="无论是登录验证，还是安全证书的验证。token自然需要设置一个有效期，那么，设置的有效期多长为好呢，答案是
                                        在合理范围内，尽可能短。"
                                fontSizeType="small">
                    </text-field>
                    <text-field catalog
                                title="如何使用token"
                                content="常用的有两种方式，一种是用设备号/设备mac地址作为Token；还有一种是用session作为token。"
                                fontSizeType="small">
                    </text-field>
                    <text-field content="首先，利用设备号/mac地址：客户端在登陆时候获取设备的设备号/mac地址，并将其作为参数传递给服务端；
                                        而服务端，接收到这个参数后，将其作为token存放在数据库，并将其放到session中，客户端每次再发送请求时进行拦截，
                                        比较发送请求中的token与session中的token，相同放行，否则拒绝。"></text-field>
                    <text-field content="这种方式的缺点：客户端需要携带设备号/mac号作为参数传递，服务端还要进行保存；"></text-field>
                    <text-field content="优点：不需要重新登录获取，超时问题由服务器处理。"></text-field>
                    <text-field content="其次，利用session值作为token，客户都安只需要携带账号密码即可；
                                        服务端接受判断，如果正确，就将本地获取sessionID作为token返回给客户端；
                                        接下来每次访问，只需要带上请求数据即可。"></text-field>
                    <text-field content="优点：方便，不用存储数据；"></text-field>
                    <text-field content="缺点：当session过期后，客户端必须重新登录才能进行访问数据。"></text-field>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../utils/common';
import TextField from '../../components/textField.vue';
export default {
    data() {
        return {};
    },
    methods: {},
    components: {
        TextField,
    },
    mounted() {
        highlightCode();
    },
};
</script>

<style scoped>
.learnExecution {
    background-image: linear-gradient(#b3e0f5, white);
}
</style>
