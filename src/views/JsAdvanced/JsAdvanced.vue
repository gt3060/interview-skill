<template>
    <div class="learnJsAdvanced"
         @mousewheel="fnScroll">
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
                        <img src="@/components/picture/javascript5.jpeg"
                             alt=""
                             class="imgStyle" />
                    </div>
                    <div class="titleFontStyle">
                        <span style="font-size:25px">JS篇(进阶四)</span>
                        <el-divider></el-divider>
                        <p>此篇主要包含，JS更深入或者更难的知识点的理解与总结</p>
                    </div>
                </div>
                <div style="display:flex">
                    <div style="width:75%;">
                        <div class="catalogStyle fontStyle">
                            <div style="display:flex;">
                                <img src="@/assets/CONTENT DELIVERY.png"
                                     alt=""
                                     style="width:24px;height:24px; margin-top:6px" />
                                <span style="font-size:22px; font-weight: bold; margin-left:10px">内容</span>
                            </div>
                            <el-divider></el-divider>
                            <text-field id="c0"
                                        title="1.迭代器(iterator)"
                                        catalog>
                            </text-field>
                            <div id="c1">
                                <div style="display:flex">
                                    <div style="margin-right:7px;">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>2.Promise</h4>
                                </div>
                                <div class="fontIndent">
                                    <span>Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.</span>
                                    <p><strong>语法</strong></p>
                                    <p class="code">new Promise( function(resolve, reject) {...} /* executor */ );</p>

                                    <p><strong>参数</strong></p>
                                    <p class="redText">executor</p>
                                    <p>
                                        executor是带有 resolve 和 reject 两个参数的函数 。
                                        Promise构造函数执行时立即调用executor 函数，
                                        resolve 和 reject 两个函数作为参数传递给executor（executor 函数在Promise构造函数返回所建promise实例对象前被调用）。
                                        resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）。
                                        executor 内部通常会执行一些异步操作，一旦异步操作执行完毕(可能成功/失败)，
                                        要么调用resolve函数来将promise状态改成fulfilled，
                                        要么调用reject 函数将promise的状态改为rejected。
                                        如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略。
                                    </p>

                                    <p><strong>描述</strong></p>
                                    <p>
                                        <span class="highlight">promise</span>
                                        对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。
                                        它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。
                                        这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象
                                    </p>

                                    <p>一个 Promise有以下几种状态:</p>

                                    <p>
                                    <ul>
                                        <li>pending: 初始状态，既不是成功，也不是失败状态。</li>
                                        <li>fulfilled: 意味着操作成功完成。</li>
                                        <li>rejected: 意味着操作失败。</li>
                                    </ul>
                                    </p>

                                    <p>
                                        pending 状态的 Promise 对象可能会变为fulfilled 状态并传递一个值给相应的状态处理方法，
                                        也可能变为失败状态（rejected）并传递失败信息。当其中任一种情况出现时，
                                        Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用
                                        （then方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。
                                        当Promise状态为fulfilled时，调用 then 的 onfulfilled 方法，当Promise状态为rejected时，
                                        调用 then 的 onrejected 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争）。
                                    </p>

                                    <p>
                                        因为 <span class="highlight">Promise.prototype.then</span> 和 <span class="highlight">Promise.prototype.catch</span> 方法返回 promise 对象， 所以它们可以被链式调用。
                                    </p>

                                    <div class="reminder">
                                        不要和惰性求值混淆： 有一些语言中有惰性求值和延时计算的特性，它们也被称为“promises”，
                                        例如Scheme. Javascript中的promise代表一种已经发生的状态， 而且可以通过回调方法链在一起。
                                        如果你想要的是表达式的延时计算，考虑无参数的"箭头方法":
                                        f = () =>表达式 创建惰性求值的表达式，使用 f() 求值。
                                    </div>

                                    <div class="reminder">
                                        注意： 如果一个promise对象处在fulfilled或rejected状态而不是pending状态，
                                        那么它也可以被称为settled状态。你可能也会听到一个术语resolved ，
                                        它表示promise对象处于settled状态。关于promise的术语，
                                        Domenic Denicola 的 States and fates 有更多详情可供参考。
                                    </div>

                                    <p><strong>属性</strong></p>
                                    <p><span class="redText">Promise.length</span>: length属性，其值总是为 1 (构造器参数的数目).</p>
                                    <p><span class="redText">Promise.prototype</span>: 表示 Promise 构造器的原型.</p>

                                    <p><strong>方法</strong></p>
                                    <p>
                                    <ul>
                                        <li>
                                            <p class="redText">Promise.all(iterable)</p>
                                            <p>
                                                这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
                                                一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，
                                                会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
                                                顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，
                                                它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
                                                Promise.all方法常被用于处理多个promise对象的状态集合。
                                            </p>
                                        </li>
                                        <li>
                                            <p class="redText">Promise.allSettled(iterable)</p>
                                            <p>
                                                等到所有promises都完成（每个promise返回成功或失败）。
                                                返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
                                            </p>
                                        </li>
                                        <li>
                                            <p class="redText">Promise.any(iterable)</p>
                                            <p>
                                                接收一个Promise对象的集合，当其中的一个promise 成功，就返回那个成功的promise的值。
                                            </p>
                                        </li>
                                        <li>
                                            <p class="redText">Promise.race(iterable)</p>
                                            <p>
                                                当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。
                                            </p>
                                        </li>
                                        <li>
                                            <p class="redText">Promise.reject(reason)</p>
                                            <p>
                                                返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法
                                            </p>
                                        </li>
                                        <li>
                                            <p class="redText">Promise.resolve(value)</p>
                                            <p>
                                                返回一个状态由给定value决定的Promise对象。
                                                如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；
                                                否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，
                                                并且将该value传递给对应的then方法。通常而言，如果你不知道一个值是否是Promise对象，
                                                使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。
                                            </p>
                                        </li>
                                    </ul>
                                    </p>

                                    <p><strong>Promise 原型</strong></p>
                                    <p class="redText">属性</p>
                                    <p><span class="highlight">Promise.prototype.constructor</span></p>
                                    <p>返回被创建的实例函数. 默认为 Promise 函数.</p>

                                    <p class="redText">方法</p>
                                    <p><span class="highlight">Promise.prototype.catch(onRejected)</span></p>
                                    <p>
                                        添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
                                        当这个回调函数被调用，新 promise 将以它的返回值来resolve，
                                        否则如果当前promise 进入fulfilled状态，则以当前promise的完成结果作为新promise的完成结果.
                                    </p>
                                    <p><span class="highlight">Promise.prototype.then(onFulfilled, onRejected)</span></p>
                                    <p>添加解决(fulfillment)和拒绝(rejection)回调到当前 promise, 返回一个新的 promise, 将以回调的返回值来resolve.</p>
                                    <p><span class="highlight">Promise.prototype.finally(onFinally)</span></p>
                                    <p>
                                        添加一个事件处理回调于当前promise对象，并且在原promise对象解析完毕后，返回一个新的promise对象。
                                        回调会在当前promise运行完毕后被调用，无论当前promise的状态是完成(fulfilled)还是失败(rejected)
                                    </p>

                                    <p><strong>创建Promise</strong></p>
                                    <p>
                                        Promise 对象是由关键字 new 及其构造函数来创建的。
                                        该构造函数会把一个叫做“处理器函数”（executor function）的函数作为它的参数。
                                        这个“处理器函数”接受两个函数——resolve 和 reject ——作为其参数。
                                        当异步任务顺利完成且返回结果值时，会调用 resolve 函数；
                                        而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数。
                                    </p>

                                    <p class="code">
                                        const myFirstPromise = new Promise((resolve, reject) => {<br />
                                        &emsp;// ?做一些异步操作，最终会调用下面两者之一:<br />
                                        &nbsp;&nbsp;//<br />
                                        &nbsp;&nbsp;// resolve(someValue); // fulfilled<br />
                                        &nbsp;&nbsp;// ?或<br />
                                        &nbsp;&nbsp;// reject("failure reason"); // rejected<br />
                                        });<br />
                                    </p>

                                    <p>想要某个函数?拥有promise功能，只需让其返回一个promise即可。</p>

                                    <p class="code">
                                        function myAsyncFunction(url) {<br />
                                        return new Promise((resolve, reject) => {<br />
                                        const xhr = new XMLHttpRequest();<br />
                                        xhr.open("GET", url);<br />
                                        xhr.onload = () => resolve(xhr.responseText);<br />
                                        xhr.onerror = () => reject(xhr.statusText);<br />
                                        xhr.send();<br />
                                        });<br />
                                        };
                                    </p>

                                    <p><strong>示例</strong></p>
                                    <p class="redText">基础示例</p>
                                    <p class="code">
                                        let myFirstPromise = new Promise(function(resolve, reject){<br />
                                        //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)<br />
                                        //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.<br />
                                        setTimeout(function(){<br />
                                        resolve("成功!"); //代码正常执行！<br />
                                        }, 250);<br />
                                        });<br />
                                        myFirstPromise.then(function(successMessage){<br />
                                        //successMessage的值是上面调用resolve(...)方法传入的值.<br />
                                        //successMessage参数不一定非要是字符串类型，这里只是举个例子<br />
                                        console.log("Yay! " + successMessage);<br />
                                        });<br />
                                    </p>

                                    <p class="redText">高级示例</p>
                                    <p>
                                        本例展示了 Promise 的一些机制。
                                        testPromise()方法在每次点击
                                        <span class="highlight">&lt;button&gt;</span>
                                        按钮时被调用，该方法会创建一个promise 对象，使用
                                        <span class="highlight">window.setTimeout()</span>
                                        让Promise等待 1-3 秒不等的时间来填充数据（通过Math.random()方法）。
                                    </p>
                                    <br />

                                    <p>Promise 的值的填充过程都被日志记录（logged）下来，这些日志信息展示了方法中的同步代码和异步代码是如何通过Promise完成解耦的。</p>

                                    <p class="code">
                                        'use strict';<br />
                                        var promiseCount = 0;<br /><br />

                                        function testPromise() {<br />
                                        let thisPromiseCount = ++promiseCount;<br /><br />

                                        let log = document.getElementById('log');<br />
                                        log.insertAdjacentHTML('beforeEnd', thisPromiseCount +<br />
                                        ') 开始 (&lt;small&gt;同步代码开始&lt;/small&gt;)&lt;br /&gt;');<br /><br />

                                        // 新构建一个 Promise 实例：使用Promise实现每过一段时间给计数器加一的过程，每段时间间隔为1~3秒不等<br />
                                        let p1 = new Promise(<br />
                                        // resolver 函数在 Promise 成功或失败时都可能被调用<br />
                                        (resolve, reject) => {<br />
                                        log.insertAdjacentHTML('beforeEnd', thisPromiseCount +<br />
                                        ') Promise 开始 (&lt;small&gt;异步代码开始&lt;/small&gt;)&lt;br /&gt;');<br />
                                        // 创建一个异步调用<br />
                                        window.setTimeout(<br />
                                        function() {<br />
                                        // 填充 Promise<br />
                                        resolve(thisPromiseCount);<br />
                                        }, Math.random() * 2000 + 1000);<br />
                                        }<br />
                                        );<br /><br />

                                        // Promise 不论成功或失败都会调用 then<br />
                                        // catch() 只有当 promise 失败时才会调用<br />
                                        p1.then(<br />
                                        // 记录填充值<br />
                                        function(val) {<br />
                                        log.insertAdjacentHTML('beforeEnd', val +<br />
                                        ') Promise 已填充完毕 (&lt;small&gt;异步代码结束&lt;/small&gt;)&lt;br /&gt;');<br />
                                        })<br />
                                        .catch(<br />
                                        // 记录失败原因<br />
                                        (reason) => {<br />
                                        console.log('处理失败的 promise ('+reason+')');<br />
                                        });<br /><br />

                                        log.insertAdjacentHTML('beforeEnd', thisPromiseCount +<br />
                                        ') Promise made (&lt;small&gt;同步代码结束&lt;/small&gt;)&lt;br /&gt; ');<br />
                                        }
                                    </p>

                                    <div class="reminder">
                                        添加HTML内容与文本内容除了innerHTML与innerText方法，
                                        还有insertAdjacentHTML和 insertAdjacentText方法，<br />
                                        这两个方法更灵活，可以在指定的地方插入html内容和文本内容。
                                        insertAdjacentText方法与 insertAdjacentHTML方法类似，只不过只能插入纯文本，参数相同<br />
                                        方法名称：insertHtml(where,el,html)<br />
                                        参数介绍：<br />
                                        where：插入位置。包括beforeBegin,beforeEnd,afterBegin,afterEnd。<br />
                                        el：用于参照插入位置的html元素对象<br />
                                        html：要插入的html代码<br />
                                        insertAdjacentHTML 方法：在指定的地方插入html标签语句<br />
                                        原型：insertAdajcentHTML(swhere,stext)<br />
                                        参数：<br />
                                        swhere: 指定插入html标签语句的地方，<br />
                                        stext:要插入的内容<br />
                                        有四种值可用：<br />
                                        1. beforeBegin: 插入到标签开始前<br />
                                        2. afterBegin:插入到标签开始标记之后<br />
                                        3. beforeEnd:插入到标签结束标记前<br />
                                        4. afterEnd:插入到标签结束标记后
                                    </div>
                                </div>
                            </div>
                            <text-field id="c2"
                                        title="3.async/await"
                                        content="主要记录async/await的使用以及，基本的执行顺序；"
                                        catalog>
                            </text-field>
                            <text-field content="async写在函数声明前面，返回的是一个promise对象；就算函数return一个常量，也会
                                                把这个直接两存放再Promise.resolve()封装promise对象，因此我们通过调用async修饰的函数后，
                                                可以使用then的链式结构调用。例如："></text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
            async function Person(){<br/>
                return "person"<br/>
            }<br/>
            const p1 = Person(); // 此时p1就是Promise对象<br/>
            p1.then(res=>console.log(res));
                                </pre>
                            </div>
                            <text-field isBtn
                                        :btnMethod="handleP1"
                                        btnText="输出p1"></text-field>
                            <text-field isBtn
                                        :btnMethod="handleP1Then"
                                        btnText="输出p1.then"></text-field>
                            <text-field content="由js执行顺序可知（先同步后异步，先微任务后宏任务），所以在没有await关键字下执行async函数，
                                                会立即执行，返回一个Promise对象，不会阻塞下面的语句，这就等同于普通的promise，因此又有了await关键字的衍生。
                                                "></text-field>
                            <text-field content="await只能用在async内部，await表达式会暂停当前async函数的执行，等待promise处理完成；
                                                若promise返回fulfilled，其回调resolve函数的参数作为await返回的值。继续执行async函数。先看下面这个代码："></text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
            handleAwait() {<br/>
                console.log('11');<br/>
                this.outputText();<br/>
                console.log('44');<br/>
            },<br/>
            outputText() {<br/>
                new Promise((resolve) => {<br/>
                    resolve('33');<br/>
                }).then((res) => {<br/>
                    console.log(res);<br/>
                });<br/>
            },
                                </pre>
                            </div>
                            <text-field content="上面代码打印输出：11->44->33"></text-field>
                            <text-field isBtn
                                        :btnMethod="handleAwait"
                                        btnText="异步请求输出"></text-field>
                            <text-field content="那么如何在使用异步情况下，还可以输出：11->33->44，看下面这个代码："></text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
            async handleNewAwait() {<br/>
                console.log('11');<br/>
                await this.outputText();<br/>
                console.log('44');<br/>
            },<br/>
            outputText() {<br/>
                new Promise((resolve) => {<br/>
                    resolve('33');<br/>
                }).then((res) => {<br/>
                    console.log(res);<br/>
                });<br/>
            },
                                </pre>
                            </div>
                            <text-field isBtn
                                        :btnMethod="handleNewAwait"
                                        btnText="await异步请求输出"></text-field>
                            <text-field fontSizeType="small"
                                        bold
                                        title='批量并发执行'></text-field>
                            <text-field content="多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。多个请求并发执行，可以使用Promise.all方法"></text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
            // 示例：<br/>
            let foo = await getFoo();<br/>
            let bar = await getBar();<br/>
            // 并发写法：<br/>
            let [foo, bar] = await Promise.all([getFoo(), getBar()]);
                                </pre>
                            </div>
                            <text-field></text-field>
                            <text-field fontSizeType="small"
                                        bold
                                        title='使用场景'></text-field>
                            <text-field content="使用promise请求后端接口，需要在then获取结果，简之需要的做的事情依赖某个操作的结果时，可以将依赖的操作写成await。"></text-field>
                            <text-field id="c3"
                                        title="4.防抖和节流"
                                        content="浏览器的resize（调整浏览器窗口）、scroll（滚动）、keypress（键盘按键）、mousemove（鼠标移动）等事件在触发时候，会不断的调用
                                                所绑定的事件函数，极大的浪费资源，降低前端性能，为了优化体验，需要对这类事件进行调用次数的限制。主要通过两种方式：防抖和节流。"
                                        catalog>
                            </text-field>
                            <text-field content="防抖：作用就是在短时间内多次触发一个函数，只执行最后一次，或者只在开始时候执行。"></text-field>
                            <text-field content="以我们这个项目为例，我们这个项目采用mousewheel来监听鼠标滚动然后获取当前位置，并在右面目录获取到对应锚点的位置。代码如下："></text-field>
                            <p class="code">window.addEventListener('mousewheel', this.btnoffsetHeight, false);</p>
                            <text-field content="此时你会发现，只要鼠标滚动，他就会调用一次方法，并且会感觉到特别影响性能。下面，优化代码如下："></text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
            let timer = null; // 初始化一个timer<br/>
            debounce(fn, delay) {<br/>
                // 获取函数的作用域和变量<br/>
                let context = this;<br/>
                let args = arguments;<br/>
                if (timer) {<br/>
                    clearTimeout(timer);<br/>
                }<br/>
                timer = setTimeout(() => {<br/>
                    fn.apply(context, args);<br/>
                }, delay);<br/>
            },
                                </pre>
                            </div>
                            <text-field content="使用场景："></text-field>
                            <text-field content="①：使用search实时搜索，当用户不断输入值时候，用防抖的思想来节约ajax请求；"></text-field>
                            <text-field content="②：window触发resize（调整浏览器窗口）时，用防抖的思想来节约触发事件请求次数。"></text-field>
                            <text-field content="节流：作用就是规定在一个单位时间内，只触发一次这个函数，如果单位时间内多次触发这个函数，只有一次生效。"></text-field>
                            <text-field content="首先，介绍一种用事件戳的方法，如下："></text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
            let prevDate = Date.now();<br/>
            function throttle(fn, delay) {<br/>
                let context = this;<br/>
                let newDate = Date.now();<br/>
                let args = arguments;<br/>
                if (newDate - prevDate >= delay) {<br/>
                    fn.apply(context, args)<br/>
                }<br/>
                prevDate = newDate<br/>
            }
                                </pre>
                            </div>
                            <text-field content="上面这个方法，是利用时间戳来实现，"></text-field>
                        </div>
                    </div>
                    <catalog :catalogData="catalogHtmlData"
                             :itemIndex.sync="itemIndex"></catalog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import catalog from '../../components/catalog';
import {
    highlightCode,
    // debounce,
    throttle,
} from '../../utils/common';
// import { highlightCode } from '../../utils/common';
import TextField from '../../components/textField.vue';
export default {
    components: {
        catalog,
        TextField,
    },
    data() {
        return {
            catalogHtmlData: [
                { index: 'c0', name: '迭代器(iterator)', i: '0' },
                {
                    index: 'c1',
                    name: 'Promise',
                    i: '1',
                },
                {
                    index: 'c2',
                    name: 'async/await',
                    i: '2',
                },
                {
                    index: 'c3',
                    name: '防抖和节流',
                    i: '3',
                },
            ],
            itemIndex: '',
        };
    },
    mounted() {
        highlightCode();
    },
    methods: {
        fnScroll() {
            // debounce(this.btnoffsetHeight, 200);
            throttle(this.btnoffsetHeight, 2000);
        },
        handlehtmlCatalog(item) {
            this.itemIndex = item.index;
            document.getElementById(item.index).scrollIntoView();
        },

        handleCatalog(data) {
            this.itemIndex = data;
            // data.substring(1)作用就是防止id重复
            document.getElementById(data.substring(1)).scrollIntoView();
        },

        btnoffsetHeight() {
            console.log('btnoffsetHeight');
            let selectData = '';
            for (let k in this.catalogHtmlData) {
                let height =
                    document.getElementById(this.catalogHtmlData[k].index)
                        .offsetTop - document.documentElement.scrollTop;
                if (height < 0) {
                    selectData = this.catalogHtmlData[k].index;
                }
                if (height >= 0 && height < 40) {
                    selectData = this.catalogHtmlData[k].index;
                    break;
                }
            }
            selectData !== '' && this.handleCatalog(selectData);
        },
        async Person() {
            return 'person';
        },
        handleP1() {
            const p1 = this.Person();
            console.log(p1);
        },
        handleP1Then() {
            const p1 = this.Person();
            p1.then((res) => console.log(res));
        },
        handleAwait() {
            console.log('11');
            this.outputText();
            console.log('44');
        },
        outputText() {
            new Promise((resolve) => {
                resolve('33');
            }).then((res) => {
                console.log(res);
            });
        },
        async handleNewAwait() {
            console.log('11');
            await this.outputText();
            console.log('44');
        },
    },
};
</script>

<style scoped>
.learnJsAdvanced {
    background-image: linear-gradient(#feefe8, white);
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
.codeBorder {
    width: 100%;
}
</style>
