<template>
  <div class="learnClosure">
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
            <img src="@/components/picture/javascript7.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">Javascript进阶篇六</span>
            <el-divider></el-divider>
            <p>此篇主要讲述javascript的作用域及闭包。</p>
          </div>
        </div>
        <div style="display:flex">
          <div style="width:75%;">
            <div class="catalogStyle fontStyle">
              <div style="display:flex;">
                <img
                  src="@/assets/CONTENT DELIVERY.png"
                  style="width:24px;height:24px; margin-top:6px"
                />
                <span style="font-size:22px; font-weight: bold; margin-left:10px">内容</span>
              </div>
              <el-divider></el-divider>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>1.什么是闭包</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    闭包是一个拥有许多变量和绑定了这些变量的环境表达式（通常是一个函数），因而这些变量也是表达式的一部分；
                    简而言之：闭包就是能够读取其他函数内部变量的函数。
                  </p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>2.变量作用域</h4>
                </div>
                <div class="fontIndent">
                  <p>变量作用域分为，全局变量和局部变量。</p>
                  <p>在js的函数内部可以直接读取全局变量；在函数外无法读取函数内部的局部变量。</p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>3.闭包定义</h4>
                </div>
                <div class="fontIndent">
                  <p>看如下的实例，就产生了闭包：</p>
                  <el-card>
                    <pre>

                  function foo(){
                    let a = 200;
                    function bar(){
                      console.log(a);//200
                    }
                    return bar;
                  }
                  let baz = foo();
                  baz();
                    </pre>
                  </el-card>
                  <p>上述的实例中是如何产生闭包的？</p>
                  <p>函数foo中创建了函数bar，并返回函数bar，并在函数foo作用域外执行了bar，当函数bar执行时，访问了foo作用域内的变量a，就产生了闭包。</p>
                  <p>也就是说，当一个函数有权访问另一个函数作用域中的变量，并且该函数在另一个函数的词法作用域外执行，就产生了闭包。</p>
                  <p>
                    bar可以访问函数foo，foo无法访问bar内变量，这就是js语言特有的链式作用域结构。
                    子对象会一级一级的向上寻找所有父对象的变量，直至window，所以父对象的所有变量，对子对象都是可见的。
                  </p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>4.闭包作用</h4>
                </div>
                <div class="fontIndent">
                  <p>闭包的作用有两个，一个是之前说的可以读取函数内部的变量，另一个就是让这些变量的值，始终都存放在内存中。</p>
                  <p>因此，在使用闭包时候需要注意的是：变量存放在内存，故内存消耗大，不能滥用闭包；解决方法是，在退出函数之前将不使用的局部变量删除。</p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>5.闭包场景题</h4>
                </div>
                <div class="fontIndent">
                  <p>场景一：</p>
                  <el-card>
                    <pre>

                  function print(fn) {
                    const a = 200
                    fn()
                  }
                  // 函数作为参数被传递
                  const a = 100
                  function fn() {
                      console.log(a) // 在定义的地方往上查找，找到外面全局定义的 a 变量，所以是打印 100
                  }
                  print(fn);// 100
                    </pre>
                  </el-card>
                  <p>场景二：</p>
                  <el-card>
                    <pre>

                  function create() {
                    const a = 100
                    return function () {
                        console.log(a)
                    }
                  }
                  // 函数作为返回值
                  const fn = create()
                  const a = 200
                  fn();// 打印 100 
                    </pre>
                  </el-card>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>6.this的取值</h4>
                </div>
                <div class="fontIndent">
                  <ul>
                    <li>当作普通函数调用，返回window，this指向最后调用他的对象；</li>
                    <li>使用call、bind、apply，传入什么，this绑定什么；</li>
                    <li>作为对象方法调用，this指向这个上级对象；</li>
                    <li>构造函数调用，通过构造函数创建的对象，this指向这个新对象。</li>
                  </ul>
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
    return {};
  },
  methods: {},
};
</script>

<style>
.learnClosure {
  background-image: linear-gradient(#fee9ee, white);
}
</style>