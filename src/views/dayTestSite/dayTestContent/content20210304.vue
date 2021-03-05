<template>
    <div>
        <text-field catalog
                    title="HTML-介绍下浏览器内核"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="浏览器最重要的部分是浏览器内核，也称“渲染引擎”，用来解释网页语法并渲染到浏览器中，
                            不同的浏览器内核对网页的语法解释也不同。"></text-field>
        <text-field content="浏览器内核又分为：渲染引擎和JS引擎，最开始二者并无太大区分，由于后期js引擎越来越独立，
                            所以很多情况说内核也单指渲染引擎。常见的浏览器有：google chrome、IE、Opera、Safari、FireFox；
                            常用的浏览器内核有:Trident、Gecko、Blink、Webkit，下面具体针对浏览器展开渲染引擎。"></text-field>
        <text-field content="IE浏览器内核：Trident内核，也是俗称的IE内核；"></text-field>
        <text-field content="googleChrome内核：以前是webkit内核，现在是blink内核；"></text-field>
        <text-field content="FireFox浏览器内核：Gecko内核，俗称火狐内核；"></text-field>
        <text-field content="Safari内核：webkit内核"></text-field>
        <text-field content="Opera内核：最初是自己的Presto内核，后来是webkit内核，现在是blink内核；"></text-field>
        <text-field content="360/猎豹浏览器内核：IE+chrome双内核；"></text-field>
        <text-field content="搜狗/qq浏览器内核：Trident（兼容模式）+webkit（高速模式）"></text-field>
        <text-field content="2345浏览器内核：IE+chrome双内核"></text-field>
        <text-field content="百度浏览器内核：IE内核"></text-field>
        <text-field content="五大浏览器采用的都是单内核，而随着浏览器的发展现在也出现了双内核，具体看上面的介绍。"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="CSS-盒子模型"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="主要分为两种盒子模型，ie盒子模型和标准盒子模型；盒子模型主要是由margin、border、padding、content
                            构成，不同点在于盒子模型的宽高的取值："></text-field>
        <text-field content="ie盒子模型（怪异盒子模型）：width=content+padding+border的宽度;height=content+padding+border的高度"></text-field>
        <text-field content="标准盒子模型（w3c盒子模型）：width=contentWidth，height=contentHeight"></text-field>
        <text-field content="利用css设置这两种盒子模型，通过box-sizing进行设置：box-sizing:content-box(标准)/border-box(ie)"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="网页应用从服务器主动推送到客户端有哪些方式"
                    content=""
                    fontSizeType="middle">
        </text-field>
        <text-field content="1.Ajax轮询：就是客户端每隔一定的时间内就向服务器发送请求，实现功能，这种方法优点就是实现简单，
                            但缺点是很容易造成网络负载、服务器资源浪费。"></text-field>
        <text-field content="2.Comet：是一种用于web的推送技术，能使服务器实时更新信息传送到客户端，而无需客户端发送请求，目前
                            有两种实现方式，长轮询和iframe："></text-field>
        <text-field content="使用最多的长轮询方式是XHR轮询方式，客户端发送请求到服务器等待响应，服务器将其挂起，只要一有事件发生，
                            服务端就会在挂起的请求中返回响应并关闭请求，客户端js响应处理函数会在处理完服务器返回信息后，再次发送
                            请求，重新建立连接，进而循环。采用长轮询方式的优点就是客户端很容易实现良好的错误处理系统和超时管理，
                            缺点是：当客户端发起的连接较多时，服务器端会长期保持多个连接，具有一定的风险。"></text-field>
        <text-field content="iframe 是很早就存在的一种 HTML 标记， 通过在 HTML 页面里嵌入一个隐蔵帧，然后将这个隐蔵帧的 SRC 属性设为对一个长连接的请求，服务器端就能源源不断地往客户端输入数据。
                            "></text-field>
        <text-field content="3.webSocket:webSocket是html5开始提供的一种在单个TCP上进行的全双工通讯协议，WebSocketAPI被W3C定为标准。在WebSocket API中，浏览器和服务器只需要做一个握手的动作，
                            然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。"></text-field>
        <text-field content="轮询和websocket区别:"></text-field>
        <text-field content="轮询是一次又一次的建立TCP/IP连接，websocket只需要建立一次tcp/ip 连接"></text-field>
        <text-field content="WebSockets 通常不使用 XMLHttpRequest，因此，当我们每次需要从服务器获取更多的信息时，无需发送头部数据。反过来说，这又减少了数据发送到服务器时需要付出的高昂的数据负载代价。"></text-field>
        <text-field content="性能上 webscoket 更好，兼容性上轮询更好"></text-field>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210224',
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

<style scoped lang='less'>
.codeBorder {
    width: 100%;
    border-radius: 10px;
}
.commonStyle {
    margin-top: 20px;
}
</style>
