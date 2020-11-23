<template>
  <div class="learnVue">
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
            <img src="@/components/picture/vue.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size: 25px">Vue</span>
            <el-divider></el-divider>
            <p>此篇主要讲述vue常见的考点。</p>
            <router-link to="/vueDetail">
              <el-button type="text" @click="btnVueDetail">
                vue的详解传送门
              </el-button>
            </router-link>
          </div>
        </div>
        <div style="display: flex">
          <div style="width: 75%">
            <div class="catalogStyle fontStyle">
              <div style="display: flex">
                <img
                  src="@/assets/CONTENT DELIVERY.png"
                  style="width: 24px; height: 24px; margin-top: 6px"
                />
                <span
                  style="font-size: 22px; font-weight: bold; margin-left: 10px"
                  >内容</span
                >
              </div>
              <el-divider></el-divider>
              <div id="c0" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>MVC和MVVC</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    MVC是后端分层开发的概念（M指的是数据层Model，V指的是视图层View，C是逻辑层Controller）
                  </p>
                  <p>MVVC是前端视图层的概念，具体区别如下：</p>
                  <el-card>
                    <img src="@/assets/MVC_MVVM.png" width="95%" />
                  </el-card>
                </div>
              </div>
              <div id="c1" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue生命周期(钩子函数)</h4>
                </div>
                <div class="fontIndent">
                  <p>所有生命周期如下：</p>
                  <p>①beforeCreate（创建前）</p>
                  <p>
                    顾名思义，创建之前的阶段，此时该实例内的所有东西都还没有创建，所以在这个生命周期钩子函数中$el,data都是undefined。
                  </p>
                  <p>②create（创建后）</p>
                  <p>
                    在这个生命周期之间，进行初始化事件，进行数据的观测，在created的时候数据已经和data属性进行绑定，
                    在这个生命周期钩子函数中，我们可以获取到data的值并对它进行操作。
                  </p>
                  <p>③beforeMount（载入前）</p>
                  <p>
                    在这一阶段，首先会判断是否有el选项，如果有的话就继续向下编译，如果没有el选项，
                    则停止编译，也就意味着停止了生命周期，直到在该实例上调用vm.$mount(el)[也就是动态引入了el]。
                  </p>
                  <p>接着判断是否指定template</p>
                  <p>④mounted</p>
                  <p>
                    此时是给vue实例对象添加$el成员，并且替换掉挂载的DOM元素。
                  </p>
                  <p>⑤beforeUpdate/updated</p>
                  <p>
                    当vue发现data中的数据发生变化，会触发对对应组件的重新渲染，当数据改变后调用beforeupdata，当渲染完成后调用updated钩子函数。
                    data值改变后触发beforeUpdate钩子函数,当页面渲染完成后调用updated。
                  </p>
                  <p>⑦beforeDestroy</p>
                  <p>
                    beforeDestroy钩子函数在实例销毁之前调用。在这一步实例仍然可用。
                  </p>
                  <p>⑧Destroyed</p>
                  <p>
                    destroyed钩子函数在Vue 实例销毁后调用。 调用后，Vue
                    实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
                  </p>
                  <p>官网生命周期图片</p>
                  <el-card>
                    <img src="@/assets/VueLifeCircle.jpg" />
                  </el-card>
                  <p>
                    除了上述的基本八个生命周期外，还有在路由或高级组件时候涉及到（activated、deactivated），一般配合keep-alive使用
                    在vue-detail章节keep-alive中会详细讲解
                  </p>
                  <p><strong>总结:</strong></p>
                  <p>①什么是vue生命周期？</p>
                  <p>
                    vue实例从创建到销毁的过程，就是生命周期，从开始创建、初始化数据、编译模板、挂载dom->渲染、更新-渲染、销毁等一系列过程。
                  </p>
                  <p>②vue生命周期的作用是什么？</p>
                  <p>
                    它的生命周期中有很多函数钩子，让我们在控制整个vue实例过程时更容易形成好的逻辑。
                  </p>
                  <p>③vue生命周期主要分几个阶段？</p>
                  <p>
                    大体分为如下八个阶段：创建前/后（beforeCreate/created）、载入前/后（beforeMount/mounted）、更新前/后（beforeUpdate/updated）、
                    销毁前/后（beforeDestroy/destroyed）
                  </p>
                  <p>④第一次页面加载会触发哪些钩子函数？</p>
                  <p>beforeCreate, created, beforeMount, mounted。</p>
                  <p>⑤dom渲染在哪个周期完成？</p>
                  <p>DOM 渲染在 mounted 中就已经完成了。</p>
                  <p>⑥接口请求一般放在哪个生命周期中？</p>
                  <p>
                    接口请求一般放在mounted中，但需要注意的是服务端渲染时不支持mounted；需要放到created中
                  </p>
                </div>
              </div>
              <div id="c2" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue实现数据绑定原理</h4>
                </div>
                <div class="fontIndent">
                  <p>①Object.defineProperty()</p>
                  <p>
                    Object.defineProperty()方法会直接在一个对象上定义一个新属性，或者一个对象的现有属性，并返回对象。
                  </p>
                  <p>
                    需要注意的是：应当直接在Object构造器对象上调用此方法，而不是任意一个Object类型的实例上调用。
                  </p>
                  <el-card>
                    <p>语法：</p>
                    <p>
                      <code>Object.defineProperty(obj, prop, descriptor)</code>
                    </p>
                    <p>参数：</p>
                    <p>obj:要定义的参数；</p>
                    <p>prop:要定义或修改的属性名称或Symbol；</p>
                    <p>descriptor:要定义或修改的属性描述符。</p>
                    <pre>

                  const object1 = {};
                  Object.defineProperty(object1, 'property1', {
                    value: 42,
                    writable: false,
                  });
                  object1.property1 = 77;
                  console.log(object1.property1);//42
                    </pre>
                    <p>总结：</p>
                    <p>
                      默认情况下，使用Object.defineProperty()添加属性值是不允许修改的；
                    </p>
                    <p>
                      对象里目前存在的属性描述符有两种形式，数据描述符和存储描述符；数据描述符是一个具有值的属性，该值可以是可写的，也可是不可写；
                      存储描述符是由getter和setter函数所描述的属性，一个描述符只能是两者之一，不能同时是两者。
                    </p>
                  </el-card>
                </div>
              </div>
              <div id="c3" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue组件之间参数传递</h4>
                </div>
                <div class="fontIndent">
                  <p>①父组件与子组件传值</p>
                  <p>
                    父组件传给子组件：子组件通过props方法接受数据；子组件传给父组件：通过$emit方法传递参数
                  </p>
                </div>
              </div>
              <div id="c4" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>css只在当前组件起作用</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    在style标签中写入scoped即可，例如：<code
                      >&lt;style scoped &gt;&lt;/style&gt;</code
                    >
                  </p>
                </div>
              </div>
              <div id="c5" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>v-if和v-show的区别</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    v-if按照条件是否渲染手动添加或删除dom元素，v-show是display的block或none；
                  </p>
                </div>
              </div>
              <div id="c6" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue的两个核心是什么？</h4>
                </div>
                <div class="fontIndent">
                  <p>数据驱动和组件系统</p>
                </div>
              </div>
              <div id="c7" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue常用的指令有哪些？</h4>
                </div>
                <div class="fontIndent">
                  <p>v-on（@）、v-if、v-show、v-for、v-bind（：）、v-else</p>
                </div>
              </div>
              <div id="c8" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue常用的事件修饰符？</h4>
                </div>
                <div class="fontIndent">
                  <ul>
                    <li>
                      .stop阻止事件冒泡，相当于调用event.stopPropagation()方法
                    </li>
                    <li>
                      .prevent组织默认行为，相当于调用了event.preventDefault()方法，比如表单的提交、a标签的跳转就是默认事件
                    </li>
                    <li>
                      .self:只有元素本身触发时才触发方法，就是只有点击元素本身才会触发。比如一个div里面有个按钮，div和按钮都有事件，我们点击按钮，
                      div绑定的方法也会触发，如果div的click加上self，只有点击到div的时候才会触发，变相的算是阻止冒泡：
                    </li>
                    <li>
                      .once:事件只能用一次，无论点击几次，执行一次之后都不会再执行
                    </li>
                    <li>.capture：添加事件侦听器时使用事件捕获模式</li>
                  </ul>
                </div>
              </div>
              <div id="c9" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue中key值的作用</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    当vue利用v-for正在更新已渲染的元素列表时，它默认用“就地复用”策略，如果数据项的顺序改变，vue将不会移动dom元素，
                    来匹配数据项的顺序。而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素，key的作用就是为了高效的更新
                    虚拟dom。
                  </p>
                </div>
              </div>
              <div id="c10" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>什么是vue的计算属性？</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    在模板中放入太多的逻辑会让模板过于沉重且难以维护，在需要对数据进行复杂处理，且可能多次使用情况下，尽量采取计算属性的方式，
                    好处：①使得数据处理结构清晰；②依赖于数据，数据更新，处理结果也会随之更新；③计算属性内部this指向vm实例，④在template调用时候，
                    直接写计算属性名即可；⑤常用的是getter方法，获取数据，也可以使用setter方法改变数据；⑥相较于methods不管依赖的数据变没变，methods
                    都会重新计算，但是依赖数据不变的时候computed从缓存中获取，不会重新计算。
                  </p>
                </div>
              </div>
              <div id="c11" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue等单页面应用及其优缺点</h4>
                </div>
                <div class="fontIndent">
                  <p>优点：</p>
                  <p>
                    Vue 的目标是通过尽可能简单的 API
                    实现响应的数据绑定和组合的视图组件，
                    核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。
                  </p>
                  <p>缺点：</p>
                  <p>
                    不支持低版本的浏览器，最低只支持到IE9；不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；
                    第一次加载首页耗时相对长一些；不可以使用浏览器的导航按钮需要自行实现前进、后退。
                  </p>
                </div>
              </div>
              <div id="c12" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue与react和angular区别</h4>
                </div>
                <div class="fontIndent">
                  <ul>
                    <li>
                      vue更轻量级，压缩后只有20k+；react有44k，angular有56k，所以对于移动端来说vue更适合；
                    </li>
                    <li>
                      vue更易上手，学习曲线平稳，而angular入门比较难，概念较多，react同样需要学习很多，包括react全家桶；
                    </li>
                    <li>
                      vue借用了angular的v-hide、v-show指令，和react的组件化；
                    </li>
                    <li>vue还有自己的计算属性。</li>
                  </ul>
                </div>
              </div>
              <div id="c13" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue核心思想</h4>
                </div>
                <div class="fontIndent">
                  <ul>
                    <li>
                      数据驱动，手动改变数据，vue通过指令对dom数据进行封装，当数据改变时候，通过指令进行修改对应的dom，数据驱动dom变化；
                      当修改视图时，vue监听到dom变化，进而修改数据。
                    </li>
                    <li>组件化（封装复用代码）；</li>
                    <li>MVVM框架；</li>
                    <li>模块友好；</li>
                    <li>轻量级框架；</li>
                    <li>双向数据绑定；</li>
                    <li>插件化。</li>
                  </ul>
                </div>
              </div>
              <div id="c14" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>简单说一下vue2.x响应式数据原理</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    vue在初始化数据时，会使用Object.defineProperty重新定义data中的所有属性，当页面使用对应属性时，
                    首先会进行依赖收集（收集当前组件的watcher），如果属性发生变化会通知相关依赖进行更新操作（发布订阅）。
                  </p>
                </div>
              </div>
              <div id="c15" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>简单说一下vue3.x响应式数据原理</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    vue3.x改用Proxy替代Object.defineProperty。因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法，并且作为
                    新标准将受到浏览器厂商持续性能优化。
                  </p>
                  <p>
                    Proxy只会代理对象的第一层，那么Vue3又是怎样处理这个问题的呢？
                  </p>
                  <p>
                    判断当前Reflect.get的返回值是否为Object，如果是则再通过reactive方法做代理，
                    这样就实现了深度观测。
                  </p>
                  <p>
                    监测数组的时候可能触发多次get/set，那么如何防止触发多次呢？
                  </p>
                  <p>
                    我们可以判断key是否为当前被代理对象target自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行trigger。
                  </p>
                </div>
              </div>
              <div id="c16" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue-computed</h4>
                </div>
                <div class="fontIndent">
                  <p>①computed定义</p>
                  <p>
                    当其依赖的属性的值发生变化时，计算属性会重新计算，反之，则使用缓存中的属性值
                  </p>
                  <p>②为什么使用computed</p>
                  <p>
                    通常在模板中放有太多逻辑东西，会让模板变得繁重，且难于维护，例如：
                  </p>
                  <p class="code">
                    <code>
                      &lt;div&gt;{ { message.split("").reverse().join("") } }
                      &lt;/div&gt;
                    </code>
                  </p>
                  <p>
                    当如上述代码中模板中逻辑就较为复杂，此时就应该使用计算属性，计算属性就是当依赖的属性的值发生变化的时候，才会触发他的更改；
                    如果依赖的值不发生改变，则使用缓存中的属性值。上述用计算属性代码如下：
                  </p>
                  <p class="code">
                    <code> { {computedMessage} } </code>
                  </p>
                  <p class="code">
                    <code> data: { message: "hello" } </code>
                  </p>
                  <p class="code">
                    <code>
                      computed:{ computedMessage: function(){return
                      this.message.split('').reverse().join('')} }
                    </code>
                  </p>
                  <p>总结：</p>
                  <p>
                    computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，
                    然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
                  </p>
                  <p>
                    computed比较适合对多个变量或者对象进行处理后返回一个结果值，
                    也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，
                  </p>
                  <p>
                    computed中的数据虽然也可以通过methods中进行处理渲染，但是，从性能上来看，每次页面渲染时如果使用方法则都被执行一次；如果利用
                    计算属性，只有当依赖值发生变化时候，才会重新计算值，否则会采用缓存数据即返回之前数据。
                  </p>
                  <p>③computed中的getter函数</p>
                  <p>
                    在computed的属性同data中数据一样，可以进行读取和设值，因此在computed中可以分为getter和setter，
                    一般情况下，是没有setter的，computed只是预设了getter，也就是只能读取，不可以改变设置。所以上述代码等价于：
                  </p>
                  <p class="code">
                    <code>
                      computed:{ computedMessage:{get:function(){ return
                      this.message} } }
                    </code>
                  </p>
                  <p>④computed中的setter函数</p>
                  <p>
                    当赋值给计算属性的时候，将调用setter函数，多用于在模板组件中需要修改计算属性的值的时候。
                  </p>
                  <el-card>
                    <pre>

                  computed:{
                    computedMessage:{
                      //getter
                      get:function(){
                        return this.message;
                      }
                      //setter
                      set:function(newValue){
                        this.message = newValue;
                      }
                    }
                  }
                    </pre>
                  </el-card>
                </div>
              </div>
              <div id="c17" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>说一下computed和watch</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    computed:本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。
                    适用于计算比较消耗性能的计算场景。
                    当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。
                  </p>
                  <p>
                    watch没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开deep：true选项，这样便会对对象中的每一项进行监听。
                    这样会带来性能问题，优化的话可以使用字符串形式监听，如果没有写到组件中，不要忘记使用unWatch手动注销哦
                  </p>
                </div>
              </div>
              <div id="c18" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>组件中的data为什么是函数</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例都是用一个构造函数，如果data是对象的话，对象属于引用类型，
                    会影响到所有的实例，所以为了保证组件不同的实例之间的data不冲突，data必需是函数。
                  </p>
                </div>
              </div>
              <div id="c19" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>组件中的data为什么是函数</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例都是用一个构造函数，如果data是对象的话，对象属于引用类型，
                    会影响到所有的实例，所以为了保证组件不同的实例之间的data不冲突，data必需是函数。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style="
              position: fixed;
              right: 100px;
              width: 20%;
              margin-top: -100px;
            "
          >
            <div class="catalogStyle">
              <div style="display: flex">
                <img
                  src="@/assets/catalog.png"
                  style="width: 24px; height: 24px; margin-top: 3px"
                />
                <span
                  style="font-size: 22px; font-weight: bold; margin-left: 10px"
                  >目录</span
                >
              </div>
              <el-divider></el-divider>
              <div class="htmlFix">
                <div
                  v-for="item in catalogHtmlData"
                  :key="item.index"
                  class="htmlcatalogItem"
                  :id="item.i"
                  :class="itemIndex === item.index ? 'activeCatalog' : ''"
                  @click="handlehtmlCatalog(item)"
                >
                  <div
                    class="radiuStyle"
                    :class="
                      itemIndex === item.index ? 'activeRadiuCatalog' : ''
                    "
                  ></div>
                  <el-tooltip
                    placement="left-start"
                    :content="item.name"
                    :open-delay="400"
                  >
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
  data() {
    return {
      catalogHtmlData: [
        { index: "c0", name: "1.MVC和MVVC", i: "0" },
        { index: "c1", name: "2.vue生命周期", i: "1" },
        { index: "c2", name: "3.vue实现数据绑定原理", i: "2" },
        { index: "c3", name: "4.vue组件之间参数传递", i: "3" },
        { index: "c4", name: "5.css只在当前组件起作用", i: "4" },
        { index: "c5", name: "6.v-if和v-show的区别", i: "5" },
        { index: "c6", name: "7.vue的两个核心是什么？", i: "6" },
        { index: "c7", name: "8.vue常用的指令有哪些？", i: "7" },
        { index: "c8", name: "9.vue常用的事件修饰符？", i: "8" },
        { index: "c9", name: "10.vue中key值的作用", i: "9" },
        { index: "c10", name: "11.什么是vue的计算属性？", i: "10" },
        { index: "c11", name: "12.vue等单页面应用及其优缺点", i: "11" },
        { index: "c12", name: "13.vue与react和angular区别", i: "12" },
        { index: "c13", name: "14.vue核心思想", i: "13" },
        { index: "c14", name: "15.简单说一下vue2.x响应式数据原理", i: "14" },
        { index: "c15", name: "16.简单说一下vue3.x响应式数据原理", i: "15" },
        { index: "c16", name: "17.vue-computed", i: "16" },
        { index: "c17", name: "18.说一下computed和watch", i: "17" },
        { index: "c18", name: "19.组件中的data为什么是函数", i: "18" },
      ],
      itemIndex: "",
      isShowVueDetail: false,
    };
  },
  mounted() {
    window.addEventListener("mousewheel", this.btnoffsetHeight, false);
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
      let selectData = "";
      for (let k in this.catalogHtmlData) {
        let height =
          document.getElementById(this.catalogHtmlData[k].index).offsetTop -
          document.documentElement.scrollTop;
        // console.log(height, this.catalogHtmlData[k].index);
        if (height < 0) {
          selectData = this.catalogHtmlData[k].index;
        }
        if (height >= 0 && height < 40) {
          selectData = this.catalogHtmlData[k].index;
          break;
        }
      }
      selectData !== "" && this.handleCatalog(selectData);
    },

    btnVueDetail() {
      this.isShowVueDetail = true;
    },
  },
};
</script>

<style scoped>
.learnVue {
  background-image: linear-gradient(#d9eaf8, white);
}
</style>