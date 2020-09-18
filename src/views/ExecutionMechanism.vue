<template>
  <div class="learnExecution">
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
            <img src="../components/picture/javascript3.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">Javascript进阶篇二</span>
            <el-divider></el-divider>
            <p>此篇主要讲述javascript的执行机制，包括同步异步、宏任务微任务等。</p>
          </div>
        </div>
        <div style="display:flex">
          <div style="width:75%;">
            <div class="catalogStyle fontStyle">
              <div style="display:flex;">
                <img
                  src="../assets/CONTENT DELIVERY.png"
                  style="width:24px;height:24px; margin-top:6px"
                />
                <span style="font-size:22px; font-weight: bold; margin-left:10px">内容</span>
              </div>
              <el-divider></el-divider>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>1.javascript概念理解</h4>
                </div>
                <div class="fontIndent">
                  <p>①关于javascript</p>
                  <p>javascript是单线程语言，虽然在最新的h5中提出web-worker概念，但是也是基于单线程进行模拟，其核心依然是单线程。</p>
                  <el-divider></el-divider>
                  <p>②什么是单线程、多线程</p>
                  <p>多线程：程序可以同一时间做几件事情；</p>
                  <p>单线程：程序同一时间只能做一件事情。</p>
                  <el-divider></el-divider>
                  <p>③js为什么是单线程，</p>
                  <p>
                    js的单线程与他的用途有关，作为浏览器脚本语言，js的主要用途是与用户互动，以及操作dom，这决定了它只能是单线程。
                    否则会带来很复杂的同步问题，比如：假定js同时有两个线程，一个在某个dom节点添加内容，一个线程是删除这个节点，
                    这时浏览器该以哪个线程为准呢?
                  </p>
                  <p>所以为了避免复杂性，从一诞生，js就是单线程，这已经是这门语言的核心特征。</p>
                  <p>
                    为了利用多核cpu计算能力，h5提供web-worker标准，允许js脚本创建多个线程，但是子线程完全受主线程控制，且不得操作dom。
                    因此说这个标准本质上并没有改变js是单线程这个核心概念。
                  </p>
                  <el-divider></el-divider>
                  <p>④js为什么需要异步？</p>
                  <p>如果js不存在异步，只能自上而下执行，如果上一行解析时间很长，那么下面的代码就会阻塞，这样对用户来说阻塞即卡死，体验感很差，</p>
                  <el-divider></el-divider>
                  <p>⑤js单线程又是怎么实现异步的？</p>
                  <p>
                    既然js是单线程，只能在一条线程上执行，又是怎么实现异步的？是通过事件循环机制（event-loop），理解了事件循环机制就理解了js的
                    执行机制。
                  </p>
                  <el-divider></el-divider>
                  <p>⑥任务队列</p>
                  <p>
                    任务队列是一个事件的队列（也可以理解成消息队列），IO设备完成一个任务就在任务队列中添加一个事件，表示相关的异步任务可以进入
                    执行栈，主线程读取任务队列，就是读取里面有哪些事件。
                  </p>
                  <p>
                    任务队列中的事件，除了io设备的事件以外，还包括用户产生的事件（比如鼠标点击、页面滚动）。只要指定过回调函数，
                    这些事件发生时就会进入任务队列等待主线程读取。
                  </p>
                  <p>所谓"回调函数"（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。</p>
                  <p>
                    "任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，"任务队列"上第一位的事件就自动进入主线程。
                    但是，由于存在后文提到的"定时器"功能，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程
                  </p>
                  <p>
                    读取到异步任务，首先将其放进事件表格中，当放进事件表格当放进事件表格中的异步任务完成某种事情或者说达成某些条件（如setTimeout事件到了，鼠标点击了，数据文件获取到了）之后，
                    才将这些异步任务推入事件队列（Event Queue)中，这时候的异步任务才是执行栈中空闲的时候才能读取到的异步任务。
                  </p>
                  <el-divider></el-divider>
                  <p>⑦js的执行机制，事件循环（event-loop）</p>
                  <p>主线程从任务队列中读取事件，这个过程是循环的。所以整个的这种运行机制又称为Event-Loop，事件循环（event-loop）是js的执行机制。</p>
                  <el-divider></el-divider>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>2.javscript的同步和异步</h4>
                </div>
                <div class="fontIndent">
                  <p>同步任务指的是：在主线程上排队执行的任务只有前一个任务执行完毕后，才能执行后一个任务。</p>
                  <p>异步任务指的是：不进入主线程，而进入任务队列的任务，只有任务队列通知主线程，某个异步任务可以执行了，该任务才会进入主线程。</p>
                  <p>任务进入执行栈后流程图：</p>
                  <img src="@/assets/jsExecutionQuere.png" width="600px" />
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>3.异步任务的划分</h4>
                </div>
                <div class="fontIndent">
                  <p>①异步任务具体划分为哪几种？</p>
                  <p>分为宏任务和微任务</p>
                  <el-divider></el-divider>
                  <p>②宏任务</p>
                  <p>宏任务主要包括，定时器、事件绑定、ajax、回调函数、Node中fs可以进行异步的I/O操作；</p>
                  <el-divider></el-divider>
                  <p>③微任务</p>
                  <p>
                    Promise(async/await) => Promise并不是完全的同步，在promise中是同步任务，执行resolve或者reject回调的时候，
                    此时是异步操作，会先将then/catch等放到微任务队列。当主栈完成后，才会再去调用resolve/reject方法执行
                  </p>
                  <p>process.nextTick （node中实现的api，把当前任务放到主栈最后执行，当主栈执行完，先执行nextTick，再到等待队列中找）</p>
                  <p>MutationObserver （创建并返回一个新的 MutationObserver 它会在指定的DOM发生变化时被调用。）</p>
                  <el-divider></el-divider>
                  <p>
                    为什么有了宏任务，还会有微任务存在？因为宏任务太占用性能，当需要一些较早就准备好的方法，排在最后才执行的时候，
                    又不想新增一个宏任务，那么就可以把这些方法，一个一个的放在微任务队列里面，在这个宏任务中的代码执行完后，就会执行微任务队列。
                  </p>
                  <el-divider></el-divider>
                  <p>④因此，执行顺序优先级为：</p>
                  <p>同步大于异步，在异步中，微任务大于宏任务</p>
                  <p>具体实例如下：</p>
                  <img width="600px" style="margin-left:50px" src="@/assets/asyncExample.png" />
                  <div>
                    <el-button @click="handleAsyncExample" type="text">复制代码显示/隐藏</el-button>
                  </div>
                  <el-card v-if="isShowAsyncExampleOpt === true">
                    <pre>

                        async function async1(){
                          console.log('async1 start');
                          new Promise((resolve, reject)=>{
                            try{
                              throw new Error('error');
                            }catch(e){
                              console.log(e)
                            }
                            setTimeout(() => {
                              resolve('promise4')
                            }, 3*1000);
                          }).then(
                            (res)=>console.log(res),
                            (err)=>console.log(err),
                          ).finally((res)=>console.log(res))
                          console.log(await async2());
                          console.log('async1 end');
                        }

                        function async2(){
                          console.log('async2');
                          return new Promise((resolve)=>{
                            setTimeout(() => {
                              resolve(2)
                            }, 1*3000);
                          })
                        }

                        console.log('script start');

                        setTimeout(() => {
                          console.log('settimeout')
                        }, 0);

                        async1();

                        new Promise((resolve) =>{
                          console.log('promise1');
                          resolve();
                        }).then(()=>{
                          console.log('promise2');
                          return new Promise((resolve)=>{
                            resolve()
                          }).then(()=>console.log('then 1-1'))
                        }).then(()=>console.log('promise3'))

                        console.log('script end');
                    </pre>
                  </el-card>
                  <p>执行结果：</p>
                  <el-card>
                    <pre>

                    script start
                    async1 start
                    Error: error
                    async2
                    promise1
                    script end
                    promise2
                    then 1-1
                    promise3
                    settimeout
                    promise4
                    2
                    async1 end
                    </pre>
                  </el-card>
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
  data() {
    return {
      isShowAsyncExampleOpt: false,
    };
  },
  methods: {
    handleAsyncExample() {
      this.isShowAsyncExampleOpt = !this.isShowAsyncExampleOpt;
    },
  },
};
</script>

<style>
.learnExecution {
  background-image: linear-gradient(#fff8e8, white);
}
</style>