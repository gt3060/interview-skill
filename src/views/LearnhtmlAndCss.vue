<template>
    <div class="learnhtml">
        <el-backtop></el-backtop>
        <div class="learnCard">
            <div class="learnCardContain">
                <div>
                    <router-link to="/">
                        <div class="learn-back">
                            <div>
                                <i class="el-icon-arrow-left arrow-leftStyle"></i>
                            </div>
                            <div class="goBack">&nbsp;&nbsp;&nbsp;返回主页</div>
                        </div>
                    </router-link>
                </div>
                <div class="titleStyle">
                    <div class="titleIconStyle">
                        <img src="../components/picture/html.jpeg"
                             class="imgStyle" />
                    </div>
                    <div class="titleFontStyle">
                        <span style="font-size: 25px">HTML篇</span>
                        <el-divider></el-divider>
                        <p>
                            此篇主要包含，html相关考点、计算机网络相关知识、浏览器相关内容
                        </p>
                    </div>
                </div>
                <div style="display: flex">
                    <div style="width: 75%">
                        <div class="catalogStyle fontStyle">
                            <div style="display: flex">
                                <img src="../assets/CONTENT DELIVERY.png"
                                     style="width: 24px; height: 24px; margin-top: 6px" />
                                <span style="font-size: 22px; font-weight: bold; margin-left: 10px">内容</span>
                            </div>
                            <el-divider></el-divider>
                            <div id="c0"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>1.html文件中，doctype有什么作用</h4>
                                </div>
                                <div class="fontIndent">
                                    <span>&lt;!DOCTYPE&gt;声明于文档最前面的位置，处于html标签之前，用于告知浏览器使用哪种html规范</span>
                                </div>
                            </div>
                            <div id="c1">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>2.Quirks是什么？他和Standards模式有什么区别？</h4>
                                </div>
                                <div class="fontIndent">
                                    <span>
                                        ie6开始，才引入Standards标准模式，所以Quirks模式作用就是判断是否有写文档类型定义，如果有写
                                        则页面采用css支持更好的布局方式，否则，采用兼容之前的布局方式。
                                    </span>
                                    <p>区别：</p>
                                    <ul>
                                        <li>
                                            盒模型：w3c标准模式和ie模式下的width包含的范围不同；
                                        </li>
                                        <li>
                                            标准模式下的span标签设置width和height都不生效，但是在quirks模式下，会生效；
                                        </li>
                                        <li>
                                            Quirks模式下的
                                            <code>margin: 0 auto;</code>失效
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="c2">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>3.img标签的alt和title有何不同</h4>
                                </div>
                                <span class="fontIndent">
                                    <ul>
                                        <li>alt:为不能正确显示图片时候显示的文本；</li>
                                        <li>title:为鼠标移入图片时候显示的文本。</li>
                                    </ul>
                                </span>
                            </div>
                            <div id="c3">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>4.strong和em有何异同？</h4>
                                </div>
                                <span class="fontIndent">
                                    <ul>
                                        <li>
                                            strong：粗体强调标签，强调，表示内容的重要性；如：
                                            <strong>粗体强调</strong>
                                        </li>
                                        <li>
                                            em：斜体强调标签，更强烈强调，表示内容的强调点。如：
                                            <em>斜体强调</em>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div id="c4">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>5.渐进增强和优雅降级不同</h4>
                                </div>
                                <span class="fontIndent">
                                    <ul>
                                        <li>
                                            渐进增强：针对低版本浏览器构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能以达到更好效果；
                                        </li>
                                        <li>
                                            优雅降级：一开始就构建最完整功能，然后再针对低版本浏览器进行兼容。
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div id="c5">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>6.描述以下cookie、sessionStorage和localStorage区别</h4>
                                </div>
                                <span class="fontIndent">
                                    <ul>
                                        <li>
                                            cookie用于存储用户信息，获取数据需要与服务器连接；localStorage和sessionStorage用于存放客户端信息，无须
                                            请求服务器；
                                        </li>
                                        <li>
                                            cookie存储大小有限，只有4k，超过的数据忽略，但是localStorage和sessionStorage存储大小为5M
                                        </li>
                                        <li>
                                            cookie和localStorage数据永久保存，其中cookie可设置过期时间。localStorage开发者可以自行封装方法进行设置失效时间；
                                            sessionStorage数据保存再当前会话，刷新页面不会数据不会丢失清除，但是结束会话（关闭浏览器、关闭页面、跳转页面）数据失效。
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div id="c6">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>7.简述以下src和href的区别</h4>
                                </div>
                                <span class="fontIndent">
                                    <ul>
                                        <li>
                                            src用于替换当前元素，href用于在当前文档和引用资源之间建立联系；
                                        </li>
                                        <li>
                                            src指向外部资源的位置，指向的内容会嵌入到文档中当前标签所在位置，在解析时会暂停其他资源的下载和处理，直到该资源处理
                                            完毕，这也是为什么js文件建议放到底部而不是头部；
                                        </li>
                                        <li>
                                            href指向网络资源所在的位置，建立和当前元素（锚点）或当前文档（链接）之间的连接，他会并行下载资源不会停止对当前文档的处理；
                                            例如:
                                            <code>&lt;link href="common.css" rel="stylesheet" /&gt;</code>这也是为什么建议css的加载建议用link而不是@import。
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div id="c7">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>
                                        8.从用户刷新页面开始，一次js请求会可以在哪些地方进行缓存处理
                                    </h4>
                                </div>
                                <span class="fontIndent">DNS缓存、CDN缓存、浏览器缓存、服务器缓存</span>
                            </div>
                            <div id="c8">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>9.html语义化</h4>
                                </div>
                                <span class="fontIndent">
                                    使用语义化的作用：
                                    <ul>
                                        <li>
                                            代码结构：使页面没有css情况下，也能呈现出很好的内容结构；
                                        </li>
                                        <li>
                                            有利于SEO：爬虫依赖标签来确定关键字的权重，因此可以和搜索引擎进行很好的沟通，帮助爬虫获取更多有效信息；
                                        </li>
                                        <li>
                                            提升用户体验；例如title、alt可以为用户解释名称或图片信息，以及label标签的灵活运用；
                                        </li>
                                        <li>
                                            便于团队开发和维护：使代码更具有可读性，让开发人员更容易理解html结构，减少差异化。
                                        </li>
                                        <li>
                                            方便其他设备解析：如屏幕阅读器、盲人阅读器、移动设备等以有意义的方式来渲染网页。
                                        </li>
                                    </ul>
                                    <span>常用语义元素：</span>
                                    <ul>
                                        <li>
                                            结构体：h1-h6、header、nav、footer、article、section
                                        </li>
                                        <li>文本：p、ul、ol、li、blockquote</li>
                                        <li>一致：a、strong、em、q、abrr、small</li>
                                    </ul>
                                </span>
                            </div>
                            <div id="c9">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>10.SEO的理解</h4>
                                </div>
                                <div class="fontIndent">
                                    <span>
                                        <strong>什么是SEO？</strong>
                                    </span>
                                    <p>
                                        汉译为搜索引擎优化。是一种方式：利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。
                                        目的是：为网站提供生态式的自我营销解决方案，让其在行业内占据领先地位，获得品牌收益。
                                    </p>
                                    <span style="margin-left: 30px">
                                        <strong>前端针对SEO 需要注意哪些？</strong>
                                    </span>
                                    <ul>
                                        <li>
                                            合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；
                                            description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；keywords列举出重要关键词即可;
                                        </li>
                                        <li>
                                            语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页;
                                        </li>
                                        <li>
                                            重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取;
                                        </li>
                                        <li>重要内容不要用js输出：爬虫不会执行js获取内容;</li>
                                        <li>少用iframe：搜索引擎不会抓取iframe中的内容;</li>
                                        <li>非装饰性图片必须加alt;</li>
                                        <li>
                                            提高网站速度：网站速度是搜索引擎排序的一个重要指标。
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="c10">
                                <div style="display: flex"
                                     id='iframe'>
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>11.iframe优缺点</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>iframe优点：</p>
                                    <ul>
                                        <li>能原封不动的把嵌入网页展现出来；</li>
                                        <li>
                                            如果多个网页同时嵌入iframe，在修改iframe内容时候只需要修改一次；
                                        </li>
                                        <li>
                                            如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。
                                        </li>
                                    </ul>
                                    <p>iframe缺点：</p>
                                    <ul>
                                        <li>不容易管理；</li>
                                        <li>用户体验感极差；</li>
                                        <li>
                                            代码结构复杂，无法被搜索引擎优化，因为爬虫还不能很好处理iframe；
                                        </li>
                                        <li>会增加对服务器的请求。</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="c11">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>12.TCP三次握手（网络资源）</h4>
                                </div>
                                <div class="htmlImgStyle">
                                    <img src="../assets/tcpwoshou.jpg"
                                         style="width: 100%" />
                                </div>
                                <div class="htmlImgStyle">
                                    <img src="../assets/tcpwoshou1.jpg"
                                         style="width: 100%" />
                                </div>
                                <span style="margin-left: 35px">
                                    <strong class="fontIndet">为什么要进行三次握手？</strong>
                                </span>
                                <ul class="fontIndent">
                                    <li>
                                        为了防止服务器端开启一些无用的连接增加服务器开销以及防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。
                                    </li>
                                    <li>
                                        由于网络传输是有延时的(要通过网络光纤和各种中间代理服务器)，在传输的过程中，比如客户端发起了SYN=1创建连接的请求(第一次握手)。
                                    </li>
                                    <li>
                                        如果服务器端就直接创建了这个连接并返回包含SYN、ACK和Seq等内容的数据包给客户端，这个数据包因为网络传输的原因丢失了，丢失之后客户端就一直没有接收到服务器返回的数据包。
                                    </li>
                                    <li>
                                        服务器端是不知道客户端有没有接收到服务器端返回的信息的。
                                    </li>
                                </ul>
                            </div>
                            <div id="c12">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>13.TCP四次挥手（网络资源）</h4>
                                </div>
                                <div class="htmlImgStyle">
                                    <img src="../assets/tcphuishou.jpg"
                                         style="width: 100%" />
                                </div>
                                <div class="htmlImgStyle">
                                    <img src="../assets/tcphuishou1.jpg"
                                         style="width: 100%" />
                                </div>
                                <span style="margin-left: 35px">
                                    <strong class="fontIndet">为什么“握手”是三次，“挥手”却要四次？</strong>
                                </span>
                                <p class="fontIndent">
                                    ①：建立连接时，被动方服务器端结束CLOSED阶段进入“握手”阶段并不需要任何准备，可以直接返回SYN和ACK报文，开始建立连接。
                                </p>
                                <p class="fontIndent">
                                    ②：释放连接时，被动方服务器，突然收到主动方客户端释放连接的请求时并不能立即释放连接，因为还有必要的数据需要处理，所以服务器先返回ACK确认收到报文，经过CLOSE-WAIT阶段准备好释放连接之后，才能返回FIN释放连接报文。
                                </p>
                                <span style="margin-left: 35px">
                                    <strong class="fontIndet">为什么客户端在TIME-WAIT阶段要等2MSL?</strong>
                                </span>
                                <ul class="fontIndent">
                                    <li>为的是确认服务器端是否收到客户端发出的ACK确认报文,</li>
                                    <li>
                                        当客户端发出最后的ACK确认报文时，并不能确定服务器端能够收到该段报文。
                                        所以客户端在发送完ACK确认报文之后，会设置一个时长为2MSL的计时器。
                                        MSL指的是Maximum Segment
                                        Lifetime：一段TCP报文在传输过程中的最大生命周期。
                                        2MSL即是服务器端发出为FIN报文和客户端发出的ACK确认报文所能保持有效的最大时长。
                                    </li>
                                    <li>
                                        服务器端在1MSL内没有收到客户端发出的ACK确认报文，就会再次向客户端发出FIN报文。
                                    </li>
                                    <li>
                                        如果客户端在2MSL内，再次收到了来自服务器端的FIN报文，说明服务器端由于各种原因没有接收到客户端发出的ACK确认报文。
                                        客户端再次向服务器端发出ACK确认报文，计时器重置，重新开始2MSL的计时。
                                    </li>
                                    <li>
                                        否则客户端在2MSL内没有再次收到来自服务器端的FIN报文，说明服务器端正常接收了ACK确认报文，客户端可以进入CLOSED阶段，完成“四次挥手”.
                                    </li>
                                </ul>
                                <p></p>
                            </div>
                            <div id="c13">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>14.TCP和UDP区别</h4>
                                </div>
                                <ul>
                                    <li>
                                        Tcp是面向连接的，Udp是无连接的，即发送数据前不需要建立连接；
                                    </li>
                                    <li>
                                        Tcp提供可靠性服务，即通过tcp连接传送的数据，无差错、不丢失、不重复，且按序到达；
                                        udp尽最大努力交付，不保证可靠性交付；因此，tcp适合大数据的交换；
                                    </li>
                                    <li>
                                        tcp是面向字节流的，udp是面向报文的；并且udp网络出现阻塞不会出现降速情况，因此会出现丢包操作；
                                    </li>
                                    <li>tcp只能1对1，udp允许1对多；</li>
                                    <li>tcp首部较大，有20个字节；udp首部只有8个字节；</li>
                                </ul>
                            </div>
                            <div id="c14">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>15.什么是BOM以及常用的BOM属性对象方法有哪些？</h4>
                                </div>
                                <div class="fontIndent">
                                    <span>BOM:BOM是浏览器对象，常用的BOM有：</span>
                                    <div class="htmlImgStyle">
                                        <img src="../assets/bom.jpg"
                                             style="width: 100%" />
                                    </div>
                                </div>
                            </div>
                            <div id="c15">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>16.浏览器缓存</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        浏览器缓存包括：强缓存和协商缓存，根据响应的header内容来决定的；
                                    </p>
                                    <p>
                                        强缓存返回的状态码为200；协商缓存返回的状态码是304，通过服务器来告知缓存是否可用。
                                    </p>
                                    <p>
                                        强缓存相关字段有：expires、cache-control；协商缓存相关字段有：Last-Modified/If-Modified-Since
                                    </p>
                                </div>
                            </div>
                            <div id="c16">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>
                                        17.从地址栏输入一个url，到这个页面呈现出来，中间发生什么？
                                    </h4>
                                </div>
                                <span class="fontIndent">
                                    <ul>
                                        <li>
                                            输入url后，首先需要找到这个url域名的服务器ip，浏览器首先会查找缓存，
                                            缓存查找方式：浏览器缓存->系统缓存查看host文件是否有记录->路由器缓存查看DNS服务器得到ip地址；
                                        </li>
                                        <li>
                                            根据ip地址以及相的端口号，构造一个http请求，请求报文包括请求信息（请求方法、请求说明、请求附带的数据），
                                            并将这个http请求封装一个tcp包；
                                        </li>
                                        <li>
                                            这个tcp数据包经过传输层、网络层、数据链路层、物理层最终达到服务器；
                                        </li>
                                        <li>服务器解析做出响应，返回响应的html给浏览器；</li>
                                        <li>
                                            由于html是一个树形结构，因此，浏览器会构造dom树，构建过程中如果遇到js脚本或外部链接则先下载响应js代码后再继续构建
                                            因此建议js代码写在html后面；
                                        </li>
                                        <li>
                                            接着构造样式树，根据外部样式、内部样式、内联样式进一步构建CSSOM样式规则树，并于构建好的dom树合并为渲染树；
                                        </li>
                                        <li>接着构造布局，确定各个元素的位置和尺寸；</li>
                                        <li>
                                            渲染页面，在解析树过程中遇到图片、视频、音频等资源，进行并行下载。
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div id="c17">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>18.post和get区别</h4>
                                </div>
                                <span class="fontIndent">
                                    <ul>
                                        <li>
                                            get的参数存放在url中，post的参数存放在request&nbsp;Body中，因此，post比get更安全；
                                        </li>
                                        <li>get传递参数有大小长度限制，post没有</li>
                                        <li>get只能进行url编码，post支持多种编码</li>
                                        <li>
                                            get请求参数会完整的保存在
                                            浏览历史记录中，而post参数不会被保留
                                        </li>
                                        <li>
                                            get产生一个tcp数据包（header+data），post产生两个tcp数据包（header、data）
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div id="c18">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>19.web前端优化常见方法</h4>
                                </div>
                                <span class="fontIndent">
                                    <ul>
                                        <li>
                                            内容优化：减少http请求次数、减少DNS查找、避免重定向、减少使用iframe、避免404、懒加载、预加载；
                                        </li>
                                        <li>
                                            服务器优化：使用内容分发网络（把网站内容分散到多个、处于不同地域位置的服务器上可加快下载速度）、避免空的图像src
                                            、提前刷新缓存区；
                                        </li>
                                        <li>cookie优化：减少使用cookie</li>
                                        <li>
                                            css优化：css代码放在html头部、使用link标签导入css样式以代替@import导入、避免使用css表达式
                                        </li>
                                        <li>
                                            javascript优化：将js脚本写在页面底部、将js作为外部文件引用、优化代码避免重复js代码、减少dom
                                            访问；
                                        </li>
                                        <li>图像优化：优化图片大小</li>
                                    </ul>
                                </span>
                            </div>
                            <div id="c19">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>20.状态码</h4>
                                </div>
                                <div class="htmlImgStyle1">
                                    <img src="../assets/statusNum.jpg"
                                         style="width: 100%" />
                                </div>
                            </div>
                            <div id="c20">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>21.浏览器内核</h4>
                                </div>
                                <div class="htmlImgStyle1">
                                    <p>
                                        浏览器内核：浏览器所采用的渲染引擎，决定了浏览器如何显示网页内容以及页面格式信息。
                                    </p>
                                    <p>
                                        现如今的几大浏览器分别为：Google
                                        chrome、FireFox、Safari、IE、Opera
                                    </p>
                                    <p>上述浏览器内核分别为：</p>
                                    <ul>
                                        <li>IE: Trident</li>
                                        <li>Chrome: Webkit/Blink</li>
                                        <li>FireFox: Gecko</li>
                                        <li>Opera: Presto/Webkit/Blink</li>
                                        <li>Safari: Webkit</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="c21">
                                <div style="display: flex">
                                    <div style="margin-right: 7px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>22.html5新增属性</h4>
                                </div>
                                <div class="htmlImgStyle1">
                                    <ul>
                                        <li>语义化标签</li>
                                        <li>
                                            增加表单元素和属性：&lt;output&gt;、min、max、step、autofocus；
                                        </li>
                                        <li>视频和音频&lt;auto&gt;、&lt;video&gt;</li>
                                        <li>Canvas容器</li>
                                        <li>拖放API</li>
                                        <li>Web Storage(localStorage/sessionStorage)</li>
                                        <li>Web Socket</li>
                                    </ul>
                                    <el-button type="text"
                                               @click="handleHtml5Detail">详见：</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="
              position: fixed;
              right: 100px;
              width: 20%;
              margin-top: -100px;
            ">
                        <div class="catalogStyle">
                            <div style="display: flex">
                                <img src="../assets/catalog.png"
                                     style="width: 24px; height: 24px; margin-top: 3px" />
                                <span style="font-size: 22px; font-weight: bold; margin-left: 10px">目录</span>
                            </div>
                            <el-divider></el-divider>
                            <div class="htmlFix">
                                <div v-for="item in catalogHtmlData"
                                     :key="item.index"
                                     class="htmlcatalogItem"
                                     :id="item.i"
                                     :class="itemIndex === item.index ? 'activeCatalog' : ''"
                                     @click="handlehtmlCatalog(item)">
                                    <div class="radiuStyle"
                                         :class="
                      itemIndex === item.index ? 'activeRadiuCatalog' : ''
                    "></div>
                                    <el-tooltip placement="left-start"
                                                :content="item.name"
                                                :open-delay="400">
                                        <div class="htmlItemName">{{ item.name }}</div>
                                    </el-tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'htmlAndCssInterview',
    data() {
        return {
            catalogHtmlData: [
                { index: 'c0', name: 'html文件中，doctype有什么作用', i: '0' },
                {
                    index: 'c1',
                    name: 'Quirks是什么？他和Standards模式有什么区别？',
                    i: '1',
                },
                { index: 'c2', name: 'img标签的alt和title有何不同', i: '2' },
                { index: 'c3', name: 'strong和em有何异同？', i: '3' },
                { index: 'c4', name: '渐进增强和优雅降级不同', i: '4' },
                {
                    index: 'c5',
                    name: '描述以下cookie、sessionStorage和localStorage区别',
                    i: '5',
                },
                { index: 'c6', name: '简述以下src和href的区别', i: '6' },
                {
                    index: 'c7',
                    name:
                        '从用户刷新页面开始，一次js请求会可以在哪些地方进行缓存处理',
                    i: '7',
                },
                { index: 'c8', name: 'html语义化', i: '8' },
                { index: 'c9', name: 'SEO的理解', i: '9' },
                { index: 'c10', name: 'iframe优缺点', i: '10' },
                { index: 'c11', name: 'TCP三次握手', i: '11' },
                { index: 'c12', name: 'TCP四次挥手', i: '12' },
                { index: 'c13', name: 'TCP和UDP区别', i: '13' },
                {
                    index: 'c14',
                    name: '什么是BOM以及常用的BOM属性对象方法有哪些',
                    i: '14',
                },
                { index: 'c15', name: '浏览器缓存', i: '15' },
                {
                    index: 'c16',
                    name:
                        '从地址栏输入一个url，到这个页面呈现出来，中间发生什么',
                    i: '16',
                },
                { index: 'c17', name: 'post和get区别', i: '17' },
                { index: 'c18', name: 'web前端优化常见方法', i: '18' },
                { index: 'c19', name: '状态码', i: '19' },
                { index: 'c20', name: '浏览器内核', i: '20' },
                { index: 'c21', name: 'html5新增属性', i: '21' },
            ],
            itemIndex: '',
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            let id = vm.$route.params.id;
            id && document.getElementById(id).scrollIntoView();
        });
    },
    mounted() {
        window.addEventListener('mousewheel', this.btnoffsetHeight, false);
    },
    methods: {
        handlehtmlCatalog(item) {
            console.log(item.index, item.name);
            this.itemIndex = item.index;

            document.getElementById(item.index).scrollIntoView();
        },

        handleCatalog(data) {
            this.itemIndex = data;
            // data.substring(1)作用就是防止id重复
            document.getElementById(data.substring(1)).scrollIntoView();
        },

        btnoffsetHeight() {
            let selectData = '';
            for (let k in this.catalogHtmlData) {
                let height =
                    document.getElementById(this.catalogHtmlData[k].index)
                        .offsetTop - document.documentElement.scrollTop;
                // console.log(height, this.catalogHtmlData[k].index);
                if (height < 0) {
                    selectData = this.catalogHtmlData[k].index;
                }
                if (height >= 0 && height < 40) {
                    selectData = this.catalogHtmlData[k].index;
                    break;
                }
            }
            // console.log(selectData);
            selectData !== '' && this.handleCatalog(selectData);

            // 如果用map遍历，无法实现查找停止遍历功能。
            // this.catalogHtmlData.map((item) => {
            //   console.log(
            //     document.getElementById(item.index).offsetTop,
            //     document.documentElement.scrollTop
            //   );
            //   let height =
            //     document.getElementById(item.index).offsetTop -
            //     document.documentElement.scrollTop;
            //   console.log(item.index, height);
            //   if (height >= 0 && height <script 20) {
            //     selectData.push(item.index);
            //   }
            // });

            // 浏览器，隐藏部分高度
            // document.documentElement.scrollTop;
            // 浏览器某个div距离顶部距离
            // document.getElementById("c1").offsetTop
        },

        handleHtml5Detail() {
            window.open('https://www.cnblogs.com/sarah-wen/p/10767178.html');
        },
    },
    destroyed() {
        window.removeEventListener('mousewheel', this.btnoffsetHeight, false);
    },
};
</script>

<style>
.learnhtml {
    background-image: linear-gradient(#f3edff, white);
}

.htmlFix {
    /* 自动适应，超出则显示滚动条 */
    overflow: auto;
    height: 500px;
}

/* 让滚动条不展示 */
.htmlFix::-webkit-scrollbar {
    display: none;
}

.radiuStyle {
    width: 6px;
    height: 6px;
    background-color: black;
    border-radius: 3px;
    /* display: inline-block; */
    margin: 8px;
}

.htmlcatalogItem {
    /* width: 80%; */
    padding: 10px;
    display: flex;
}

.htmlcatalogItem:hover {
    background-color: #ebedef;
}

.htmlItemName {
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.activeCatalog {
    color: #0281d8;
}

.activeRadiuCatalog {
    background-color: #0281d8;
}

.htmlImgStyle {
    margin-left: 30px;
    width: 550px;
}

.htmlImgStyle1 {
    margin-left: 30px;
    width: 750px;
}
</style>
