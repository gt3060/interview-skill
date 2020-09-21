<template>
  <div class="learnJsBasic">
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
            <img src="../components/picture/javascript1.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">Javascript基础篇</span>
            <el-divider></el-divider>
            <p>此篇主要包含，javascript基础考点，字符串的替换、数组的查找使用、数据类型等使用</p>
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
              <div id="c0" style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>1.js数据类型有哪些</h4>
                </div>
                <div class="fontIndent">
                  <code>基本数据类型包括：Number、String、Boolean、Undefined、null、Symbol（es6新增）</code>
                </div>
                <div class="fontIndent">
                  <code>除此之外，还包括一种引用类数据类型：Object；里面包含function、array、date等</code>
                </div>
                <div class="fontIndent">
                  <code>原始数据类型保存在栈中，占据空间小使用频繁；</code>
                  <br />
                  <code>引用数据类型保存在栈和堆中，占据空间大，在栈中存放指针，指针指向堆中的该实体的起始位置。</code>
                </div>
              </div>
              <div id="c1">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>2.js数据类型转换</h4>
                </div>
                <div class="htmlImgStyle">
                  <img src="../assets/jsTypeTranslate.jpg" style="width:100%" />
                </div>
              </div>
              <div id="c2">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>3.js判断数据类型</h4>
                </div>
                <div class="fontIndent">
                  <p>采用typeof方式</p>
                  <el-button
                    v-for="(item, index) in typeofData"
                    :key="index"
                    @click="btnTypeof(item)"
                    type="primary"
                    size="small"
                    style="margin-left:30px"
                  >{{item === undefined ? "undefined" : (item === null ? 'null' : item)}}</el-button>
                  <el-card style="margin:15px 0px 0px 30px" shadow="hover">
                    <p>语法：typeof {{typeOfInitValue}}</p>
                    <p>类型：{{typeofValue}}</p>
                  </el-card>
                  <p>
                    因此，要想判断一个对象的正确类型，需要用到
                    <code>instanceof</code>
                    运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
                  </p>
                  <el-button
                    v-for="(item) in instanceofData"
                    :key="item.type"
                    @click="btnInstanceof(item.name, item.type)"
                    type="primary"
                    size="small"
                    style="margin-left:30px"
                  >{{item.name}}</el-button>
                  <el-card style="margin:15px 0px 0px 30px" shadow="hover">
                    <p>
                      语法：
                      <code>{{instanceofGrammer}}</code>
                    </p>
                    <p>类型：{{instanceofValue}}</p>
                  </el-card>
                  <p>
                    除此之外，还可以用
                    <code>Object.prototype.toString.call</code>
                  </p>
                  <el-button
                    v-for="item in objPrototypeCallData"
                    :key="item.type"
                    @click="btnPrototypeCall(item.name, item.type)"
                    type="primary"
                    size="small"
                    style="margin-left:30px"
                  >{{item.name === undefined ? "undefined" : (item.name === null ? 'null' : item.name)}}</el-button>
                </div>
                <el-card style="margin:15px 0px 0px 30px" shadow="hover">
                  <p>
                    语法：
                    <code>{{prototypeCallGrammer}}</code>
                  </p>
                  <p>类型：{{prototypeCallValue}}</p>
                </el-card>
              </div>
              <div id="c3">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>4.js有哪些内置对象？</h4>
                </div>
                <p class="fontIndent">
                  js的内置对象主要指的是在程序执行前存在全局作用域里的由js定义的全局值属性、函数和用来实例化其他对象的构造函数对象。
                  一般我们常用到的全局值属性有：
                  <code>NaN、undefined</code>，全局函数如
                  <code>parseInt()、parseFloat()</code>，用来实例化对象的构造函数对象包括
                  <code>Date、Object、Math</code>等。
                </p>
                <span class="fontIndent">
                  <ul>
                    <li>值属性（返回一个简单的值，没有自己的属性和方法）：NaN、null、undefined</li>
                    <li>函数属性（全局函数可以直接调用）：eval()、parseInt()、parseFloat()</li>
                    <li>基本对象（基本对象是定义或使用其他对象的基础，主要包括一般对象、函数对象、错误对象）：Object、Function、Boolean、Symbol、Error</li>
                    <li>数字和日期对象：Number、Date、Math</li>
                    <li>字符串：String、RegExp</li>
                    <li>可索引的集合对象（这些对象表示按照索引值来排序的数据集合，包括数组及类型数组）:Array</li>
                    <li>使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素：Map、Set、WeakMap、WeakSet</li>
                    <li>结构化数据：JSON</li>
                    <li>控制抽象对象：Promise、Generator</li>
                    <li>反射:Reflect、Proxy</li>
                    <li>其他：arguments</li>
                  </ul>
                </span>
              </div>
              <div id="c4">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>5.null和undefined区别</h4>
                </div>
                <span class="fontIndent">
                  undefined和null都是js数据的基本类型，undefined代表的是未定义，null代表的是一个空对象。一般变量声明了，但是还没有
                  定义的时候会返回undefined；null主要用于赋值给一些可能会返回对象的变量，作为初始化；利用typeof类型判断，null返回的是Object，
                  undefined返回的是undefined。
                </span>
              </div>
              <div id="c5">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>6.js创建对象的几种方式</h4>
                </div>
                <span>①利用new+Object形式创建</span>
                <pre>

                let person = new Object();
                person.name = "耿";
                person.sex = "male";
                person.hobby = function(){
                  console.log(this.name);
                }
                </pre>
                <span>②字面式创建对象</span>
                <pre>

                let person = {
                  name:"耿",
                  sex:"male",
                  hobby:function(){
                    console.log(this.name);
                  }
                }
                </pre>
                <span>③工厂模式(解决重复实例化多个对象问题)</span>
                <pre>

                function Person(name, sex){
                  let p = new Object();
                  p.name = name;
                  p.sex = sex;
                  p.hobby = function(){
                    console.log(this.name);
                  };
                  return p;
                }
                let person1 = Person("陈", "male");
                let person2 = Person("耿", "male");
                console.log(person1 instanceof Object);//true
                console.log(person1 instanceof Person);//false
                </pre>
                <span>④构造函数模式</span>
                <pre>

                function Person(name, sex){
                  this.name = name;
                  this.sex = sex;
                  this.hobby = function(){
                    console.log(this.name);
                  }
                }
                let person1 = new Person("耿", "male");
                let person2 = new Person("陈", "male");
                console.log(person1 instanceof Object);//true
                console.log(person1 instanceof Person);//false
                </pre>
                <span>构造函数和工厂模式区别：</span>
                <ul>
                  <li>没有显示的创建对象p;</li>
                  <li>没有return语句;</li>
                  <li>直接将属性和方法赋值给this对象;</li>
                  <li>通过构造函数创建的对象，既可以判断出是Object的实例，也可以判断（instanceof）出是Person的实例。</li>
                </ul>
                <span>⑤原型模式</span>
                <pre>
                
                function Person(){};
                Person.prototype.name = "陈";
                Person.prototype.sex = "male";
                Person.prototype.hobby = function(){
                  console.log(this.name);
                }
                console.log(Person, Person.prototype);
                //创建第一个实例person1
                let person1 = new Person();
                console.log(person1, person1.name);
                //创建第二个实例person2
                let person2 = new Person();
                person2.name = "耿";//设置自己的属性和方法，即私有属性，可以覆盖原型对象上的同名属性（方法）
                console.log(person2, person2.name);
                </pre>
                <p>运行结果：</p>
                <img src="@/assets/createObjRunResult.png" />
                <p>⑥混合模式（构造函数模式+原型模式）</p>
                <pre>

                function Person(name, sex){
                  this.name = name;
                  this.sex = sex;
                }
                Person.prototype = {
                  constructor: Person, // 每个函数都有prototype属性指向该函数的原型对象，原型对象都有constructor属性，这是一个指向prototype属性所在函数的指针
                  hobby: function(){
                    console.log(this.name);
                  }
                }
                let person1 = new Person("陈", "male");
                let person2 = new Person("耿", "male");
                </pre>
              </div>
              <div id="c6">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>7.事件捕获</h4>
                </div>
                <p class="fontIndent">
                  当事件发生在dom元素上，该事件并不完全发生在该dom元素上，在捕获阶段，事件从window开始一直到触发事件的元素,例如当点击子div时，
                  父div的click函数同时响应。
                </p>
                <el-card style="margin:15px 0px 0px 30px" shadow="hover">
                  <div
                    @click="handleFather"
                    style="width:150px; height:120px; border:1px solid black;"
                    id="parentId"
                  >
                    <div
                      style="width:70px; height:70px; border:1px solid black;margin:20px 0px 0px  20px"
                      @click="handleChild"
                      id="childId"
                    ></div>
                  </div>
                  <p>addEventListener方法具有第三个可选参数useCapture，其默认值为false，事件将在冒泡阶段中发生，如果为true，则事件将在捕获阶段中发生</p>
                </el-card>
              </div>
              <div id="c7">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>8.事件冒泡</h4>
                </div>
                <p class="fontIndent">
                  事件冒泡刚好与事件捕获相反，当前元素---->body ----> html---->document ---->window。当事件发生在DOM元素上时，该事件并不完全发生在那个元素上。
                  在冒泡阶段，事件冒泡，或者事件发生在它的父代，祖父母，祖父母的父代，直到到达window为止。例如：当点击子div时，先触发子div的click再触发父div的click
                </p>
                <el-card style="margin:15px 0px 0px 30px" shadow="hover">
                  <div
                    @click="handleFather('true')"
                    style="width:150px; height:120px; border:1px solid black;"
                    id="parentId"
                  >
                    <div
                      style="width:70px; height:70px; border:1px solid black;margin:20px 0px 0px  20px"
                      @click="handleChild('true')"
                      id="childId"
                    ></div>
                  </div>
                </el-card>
              </div>
              <div id="c8">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>9.var、let、const区别</h4>
                </div>
                <p class="fontIndent">①var声明的变量会挂载在window上，let和const声明的变量不会；</p>
                <span class="fontIndent">
                  <ul>
                    <li>
                      const定义的变量不可被修改，而且必须初始化；
                      <code>const a = 200;</code>
                    </li>
                    <li>var和let定义的变量可被修改，如果不初始化，则输出undefined；</li>
                    <li>let是块级作用域，函数内部使用后，对函数外部无影响；var存在变量提升。</li>
                  </ul>
                </span>
              </div>
              <div id="c9">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>10.什么是对象解构</h4>
                </div>
                <div class="fontIndent">
                  <span>对象析构是从对象或数组中获取或提取值的一种新的、更简洁的方法，如下面的对象：</span>
                  <pre>
                  const Person = {
                    name: "陈",
                    sex: "male"
                  }
                  </pre>
                  <p>
                    通常的方法是：
                    <code>let name = Person.name; let sex = Person.sex;</code>
                  </p>
                  <p>
                    如果使用解构方法：
                    <code>const {name, sex} = Person;</code>
                  </p>
                </div>
              </div>
              <div id="c10">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>11.模块化</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    一个模块是实现一个特定功能的一组方法，在最开始时候，js只用来实现一些简单的功能，
                    所以并没有模块的概念，但随着程序越来越复杂，代码的模块化开发越来越重要。
                  </p>
                </div>
              </div>
              <div id="c11">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>12.几种常见的模块规范</h4>
                </div>
                <div class="fontIndent">
                  <p>①CommonJS方案：</p>
                  <p>
                    该规范的核心思想是允许模块通过 require 方法来同步加载所要依赖的其他模块，通过module.export定义模块的输出接口，
                    缺点是:同步的模块加载方式不适合在浏览器环境中，同步意味着阻塞加载，浏览器资源是异步加载的。
                  </p>
                  <p>②AMD</p>
                  <p>这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。</p>
                  <p>③CMD</p>
                  <p>
                    这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。
                    它和require.js的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。
                  </p>
                  <p>④ES6</p>
                  <p>使用 import 和 export 的形式来导入导出模块.</p>
                  <p>
                    <strong>总结</strong>
                  </p>
                  <ul>
                    <li>AMD和CMD：RequireJS是AMD规范的实现，SeaJS是CMD规范的实现， 一个主张提前加载依赖，一个主张延迟加载依赖</li>
                    <li>无论是node应用模块，还是webpack 配置 ，均是采用CommonJS模块化规范</li>
                  </ul>
                </div>
              </div>
              <div id="c12">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>13.什么是Set对象，它是如何工作的？</h4>
                </div>
                <div class="fontIndent">
                  <p>Set对象允许存储任何类型的唯一值。</p>
                  <p>①Set对象构造函数创建实例</p>
                  <p>
                    <code>const set1 = new Set(); const set2 = new Set(['a','b','c','d'])</code>
                  </p>
                  <p>②Set对象中增加元素</p>
                  <p>
                    <code>set1.add('a');//向Set对象set1中增加值为'a',结果:Set {"a"}</code>
                  </p>
                  <p>
                    <code>set2.add('a').add('e');//向Set对象set2中增加值为e，值为a不会添加，因为已经存在,结果:Set {"a", "b", "c", "d", "e"}</code>
                  </p>
                  <p>③Set对象中删除元素</p>
                  <p>
                    删除一个元素：
                    <code>set2.delete('a');//Set {'b', 'c', 'd', 'e'}</code>
                  </p>
                  <p>
                    删除全部元素：
                    <code>set2.clear();</code>
                  </p>
                  <p>④Set查找是否存在某一个元素</p>
                  <p>
                    <code>set2.has('b'); //返回值为true/false</code>
                  </p>
                  <p>⑤Set对象的size属性</p>
                  <p>
                    用于返回set对象长度，等同于arr的length：
                    <code>set2.size();</code>
                  </p>
                  <p>我们可以利用set存储的唯一值的特性来进行数组去重：</p>
                  <code>let arr = [11,2,3,4,2,3]; let set3 = [...new Set(arr)];</code>
                  <p>
                    <strong>
                      另外还有WeakSet， 与 Set 类似，也是不重复的值的集合。但是 WeakSet 的成员只能是对象，而不能是其他类型的值。
                      WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet对该对象的引用。
                    </strong>
                  </p>
                </div>
              </div>
              <div id="c13">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>14.===和==区别</h4>
                </div>
                <ul class="fontIndent">
                  <li>===称为等同符，当两边值的类型相同时，直接比较值，若类型不同，直接返回false</li>
                  <li>==称为等值符，当两边类型相同时，直接比较值是否相等，若类型不同，先转化为类型相同的值，再比较</li>
                </ul>
                <div class="fontIndent">
                  <p>针对==比较类型转换规则：</p>
                  <ul>
                    <li>若两边是boolean、string、number三者中任意两个进行比较，优先转换为数字进行比较；</li>
                    <li>若两边出现null、undefined，null和undefined除了和自己相等，就彼此相等（一个为null一个为undefined）；</li>
                    <li>NaN == NaN（也返回false）；</li>
                    <li>若一个是对象，另一个是数值或者字符串，则把对象先转换为基础类型再比较，对象转基础类型利用toString或者valueOf方法（Date只能利用toString方法）</li>
                  </ul>
                </div>
              </div>
              <div id="c14">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>15.日期和时间戳转换</h4>
                </div>
                <div class="fontIndent">
                  <p>日期改为时间戳：</p>
                  <ul>
                    <li>
                      <code>let date1 = date.getTime();//精确度到毫秒</code>
                    </li>
                    <li>
                      <code>let date2 = date.valueOf();//精确度到毫秒</code>
                    </li>
                    <li>
                      <code>let date3 = Date.parse(date);//精确度到秒</code>
                    </li>
                  </ul>
                  <p>时间戳改为日期</p>
                  <p>
                    ①利用插件（
                    <a href="http://momentjs.cn/" target="_blank">moment</a>）
                  </p>
                  <ul>
                    <li>
                      改为时间模式：
                      <code>moment(time).format('YYYY-MM-DD HH:mm:ss')</code>
                    </li>
                    <li>
                      改为日期模式：
                      <code>moment(date).format('YYYY-MM-DD')</code>
                    </li>
                  </ul>
                  <p>
                    ②纯js代码
                    <el-button
                      @click="handleShowTimetoDate"
                      type="text"
                      style="margin-left:15px"
                    >代码显示/隐藏</el-button>
                  </p>
                  <el-card v-if="isShowTimeToDate === true" shadow="hover">
                    <pre>

                    function timeConvert(timestamp,num){//num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳 
                      timestamp = timestamp+'';
                      timestamp = timestamp.length==10?timestamp*1000:timestamp;
                      var date = new Date(timestamp);
                      var y = date.getFullYear();
                      var m = date.getMonth() + 1;
                      m = m &lt; 10 ? ('0' + m) : m;
                      var d = date.getDate();
                      d = d &lt; 10 ? ('0' + d) : d;
                      var h = date.getHours();
                      h = h &lt; 10 ? ('0' + h) : h;
                      var minute = date.getMinutes();
                      var second = date.getSeconds();
                      minute = minute &lt; 10 ? ('0' + minute) : minute; 
                      second = second &lt; 10 ? ('0' + second) : second; 
                      if(num==0){
                          return y+'-'+m+'-'+d;
                      }else{
                          return y+'-'+m+'-'+d +' '+ h +':'+ minute +':' + second;
                      }
                    }
                    </pre>
                  </el-card>
                </div>
              </div>
              <div id="c15">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>16.new一个对象具体发生了什么</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    以
                    <code>let person = new Person('耿', 'male')</code>为例：
                  </p>
                  <p>
                    ①创建一个简单的空对象，
                    <code>let obj = {};</code>
                  </p>
                  <p>
                    ②将该对象的内置原型对象_proto_设置为构造函数的原型对象；
                    <code>obj._proto_ = Person.prototype</code>
                  </p>
                  <p>
                    ③将创建的简单对象作为this参数调用构造函数，完成初始化工作；
                    <code>obj.name = name; obj.sex = sex;</code>
                  </p>
                  <p>
                    ④如果函数有返回对象，则返回此对象；没有返回this。
                    <code>return obj;</code>
                  </p>
                  <p>具体如下：</p>
                  <pre>

                  function Person(name, sex){
                    let that = {
                      _proto_: Person.prototype,
                    };
                    that.name = name;
                    that.sex = sex;
                    return that;
                  }
                  let person = new Person('耿', 'male')
                  </pre>
                </div>
              </div>
              <div id="c16">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>17.自己定义一个new方法</h4>
                </div>
                <div class="fontIndent">
                  <pre>

                    // 构造器函数
                    let Parent = function (name, age) {
                        this.name = name;
                        this.age = age;
                    };
                    Parent.prototype.sayName = function () {
                        console.log(this.name);
                    };
                    //自己定义的new方法
                    let newMethod = function (Parent, ...rest) {
                        // 1.以构造器的prototype属性为原型，创建新对象；
                        let child = Object.create(Parent.prototype);
                        // 2.将this和调用参数传给构造器执行
                        let result = Parent.apply(child, rest);
                        // 3.如果构造器没有手动返回对象，则返回第一步的对象
                        return typeof result === 'object' ? result : child;
                    };
                    //创建实例，将构造函数Parent与形参作为参数传入
                    const child = newMethod(Parent, 'echo', 26);
                    child.sayName() //'echo';
                    //最后检验，与使用new的效果相同
                    child instanceof Parent//true
                    child.hasOwnProperty('name')//true
                    child.hasOwnProperty('age')//true
                    child.hasOwnProperty('sayName')//false
                  </pre>
                  <p>除此之外，可以利用arguments来进行创建，创建实例不变，构造函数不变只改变封装new方法</p>
                  <pre>

                  function newMethod(){
                    var obj = {};
                    //取得该方法的第一个参数(并删除第一个参数)，该参数是构造函数
                    var Constructor = [].shift.apply(arguments);
                    //将新对象的内部属性__proto__指向构造函数的原型，这样新对象就可以访问原型中的属性和方法
                    obj.__proto__ = Constructor.prototype;
                    //取得构造函数的返回值
                    var ret = Constructor.apply(obj, arguments);
                    //如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
                    return typeof ret === "object" ? ret : obj;
                  }
                  </pre>
                </div>
              </div>
              <div id="c17">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>17.arguments详解</h4>
                </div>
                <div class="fontIndent">
                  <p>①首先介绍一下，形参和实参的概念</p>
                  <ul>
                    <li>形参是函数定义的参数；</li>
                    <li>实参是函数调用的实际传的参数；</li>
                    <li>形参的个数多于实参，那么，多余形参的参数值为undefined；</li>
                    <li>实参的个数如果多于形参，那么，多余的参数值可以通过arguments访问。</li>
                  </ul>
                  <p>②前言</p>
                  <ul>
                    <li>
                      js并没有重载函数的功能，但是arguments对象能够模拟重载，js中每个函数都会有一个Arguments对象实例的arguments，
                      它引用着函数的实参，可以用数组下标的方式，引用arguments中的元素。
                    </li>
                    <li>arguments.length为函数实参个数，arguments.callee引用函数自身。</li>
                  </ul>
                  <el-card>
                    <p>实例如下：</p>
                    <pre>

                    (function Person(name, sex){
                      console.log(arguments)
                    })('geng', 'male') 
                    </pre>
                    <p>
                      <code>arguments.callee与形参一一对应：</code>
                    </p>
                    <pre>

                    (function Person(name, sex){
                      arguments[0] = 'chen'
                      console.log(arguments[0], name)
                    })('geng', 'male') // 输出：chen chen
                    </pre>
                  </el-card>
                  <p>③特点</p>
                  <ul>
                    <li>arguments对象和Function是分不开的；因此不能显式创建；</li>
                    <li>arguments对象参数可以被设置；</li>
                    <li>arguments对象的callee属性的初始值就是正被执行的Function对象；</li>
                    <li>arguments对象并不是一个数组，而是一个类数组。但是对于每个参数的访问方式等同于数组访问参数；</li>
                    <li>
                      将arguments的类数组对象，转换为数组对象，
                      <code>[].slice.call(arguments,params);</code>
                      或者
                      <code>Array.prototype.slice.call(arguments,params);</code>
                      或者
                      <code>Array.from(arguments);</code>
                      或者使用扩展运算符
                      <code>[...arguments]</code>
                      其中params是可选参数，如果不填则表示将所有数据转换为数组，若存在，则表示从parmas起开始转换
                    </li>
                  </ul>
                </div>
              </div>
              <div id="c18">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>18.for...of和for...in区别</h4>
                </div>
                <div class="fontIndent">
                  <ul>
                    <li>for...in是遍历数组的索引，for...of是遍历数组的每个元素值；</li>
                    <li>for...of遍历的只是数组内元素，不包括原型方法和索引；for...in则全部遍历出来；</li>
                    <li>for...in遍历数组的index为String类型（“0”，“1”，“2”），并不是数字（0，1，2）；</li>
                    <li>因此，for...in更适合遍历对象，而for...of更适合遍历数组。</li>
                  </ul>
                  <el-card>
                    <pre>
                  
                  //for...in
                  //对象
                  Object.prototype.method = function(){
                    console.log(this);
                  }
                  let myObject = {
                    a: 1,
                    b: 2,
                    c: 3
                  }
                  for(let key in myObject){
                    console.log(key);//每次遍历出结果为: a, b, c, method
                  }
                  //数组
                  Array.prototype.method = function(){
                    console.log(this);
                  }
                  let arr = [1, 2, 4];
                  arr.name = "数组";
                  for(let key in arr){
                    console.log(key);//每次遍历出结果为：0, 1, 2, name, method
                  }
                  //for...of
                  //对象
                  for(let key of myObject){
                    console.log(key);//报错，因为for...of不允许遍历对象
                  }
                  //数组
                  for(let key of arr){
                    console.log(key);//1, 2, 4
                  }
                    </pre>
                  </el-card>
                </div>
              </div>
              <div id="c19">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>19.JSON.stringify参数</h4>
                </div>
                <div class="fontIndent">
                  <p>JSON.stringify一共有三个参数</p>
                  <p>第一个参数data值，</p>
                  <p>第二个参数可以为过滤函数，也可以是一个数组，</p>
                  <p>第三个参数，用来控制结果字符串里面的间距。</p>
                  <p>具体如下：</p>
                  <p>①只传第一个参数data</p>
                  <p class="code">
                    <code>let data = {name:"gengtian", info:{age:18, sex:"male"}}</code>
                  </p>
                  <p class="code">
                    <code>JSON.stringify(data);// {"name":"gengtian", "info":{"age":18, "sex":"male"}}</code>
                  </p>
                  <p>需要注意的是：stringify对data里的数据格式有一些要求：</p>
                  <ul>
                    <li>非数组对象的属性，不能保证以特定的顺序出现在序列化后的字符串中；</li>
                    <li>布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值；</li>
                    <li>
                      undefined、任意的函数以及Symbol值，在序列化过程中会被忽略（出现在非数组对象的属性中）或者
                      被转换成null（出现在数组中时候）。
                    </li>
                    <li>所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们;</li>
                    <li>不可枚举的属性会被忽略。</li>
                  </ul>
                  <p>②传两个参数</p>
                  <p>
                    第二个参数可以为一个过滤函数，也可以为一个数组，当为数组时被序列化的值的每个属性都会经过该函数的转换和处理，
                    当为数组时则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中。
                  </p>
                  <p>过滤函数:</p>
                  <el-card>
                    <pre>
                  var data = {
                    name:"niuzai",
                    info:{
                      age:18,
                      sex:"male"
                    }
                  };
                  JSON.stringify(data, function(key, val){
                    console.log("key is %s", key);
                    console.log("val is %s", typeof(val));
                    return val;
                  });
                  // key is 
                  // val is object {name: "niuzai", info: {…}}
                  // key is name
                  // val is string niuzai
                  // key is info
                  // val is object {age: 18, sex: "male"}
                  // key is age
                  // val is number 18
                  // key is sex
                  // val is string male
                    </pre>
                  </el-card>
                  <p>数组</p>
                  <p>
                    <code>JSON.stringify(data, ["name", "info", "sex"]);</code>
                  </p>
                  <p>
                    <code>//age由于不在列表里，所以没被序列化</code>
                  </p>
                  <p>
                    <code>//"{"name":"niuzai","info":{"sex":"male"}}</code>
                  </p>
                  <p>③三个参数</p>
                  <p>
                    第三参数space用来控制结果字符串里面的间距。如果是一个数字, 则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多10个空格）；
                    如果是一个字符串，则每一级别会比上一级别多缩进用该字符串（或该字符串的前十个字符）
                  </p>
                  <p>④toJSON</p>
                  <p>如果转换对象中包含toJSON方法，那么返回的结果则由他决定</p>
                  <el-card>
                    <pre>

                    let obj = {
                      name:'zhangsan',
                      toJSON:function(){
                        return 'customize return value'
                      }
                    }
                    console.log(JSON.stringify(obj))  // "customize return value"
                    </pre>
                  </el-card>
                </div>
              </div>
              <div id="c20">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>20.小数取整以及保留小数几位</h4>
                </div>
                <div class="fontIndent">
                  <p>①小数取整</p>
                  <p class="code">
                    丢弃小数部分，保留整数部分：
                    <code>parseInt(7/2);//3</code>
                  </p>
                  <p class="code">
                    向上取整，有小数就向上加一：
                    <code>Math.ceil(7/2);//4</code>
                  </p>
                  <p class="code">
                    四舍五入：
                    <code>Math.round(7/2);//4</code>
                  </p>
                  <p class="code">
                    向下取整：
                    <code>Math.floor(7/2);//3</code>
                  </p>
                  <p>②保留小数点后两位</p>
                  <p class="code">
                    <code>Math.round(num*100)/100;</code>
                  </p>
                  <p class="code">
                    <code>num.toFixed(2);</code>
                  </p>
                  <p class="code">
                    <code>num.replace(/([0-9]+\.[0-9]{2})[0-9]*/,"$1");</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style="position:fixed; right:100px; width:20%; margin-top:-100px;">
            <div class="catalogStyle">
              <div style="display:flex;">
                <img src="../assets/catalog.png" style="width:24px;height:24px; margin-top:3px" />
                <span style="font-size:22px; font-weight: bold; margin-left:10px">目录</span>
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
                    :class="itemIndex === item.index ? 'activeRadiuCatalog' : ''"
                  ></div>
                  <el-tooltip placement="left-start" :content="item.name " :open-delay="400">
                    <div class="htmlItemName">{{item.name}}</div>
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
import { Message } from "element-ui";
export default {
  data() {
    return {
      catalogHtmlData: [
        { index: "c0", name: "js数据类型有哪些", i: "0" },
        { index: "c1", name: "js数据类型转换", i: "1" },
        { index: "c2", name: "js判断数据类型", i: "2" },
        { index: "c3", name: "js有哪些内置对象？", i: "3" },
        { index: "c4", name: "null和undefined区别", i: "4" },
        { index: "c5", name: "js创建对象的几种方式", i: "5" },
        { index: "c6", name: "事件捕获", i: "6" },
        { index: "c7", name: "事件冒泡", i: "7" },
        { index: "c8", name: "var、let、const区别", i: "8" },
        { index: "c9", name: "什么是对象解构", i: "9" },
        { index: "c10", name: "模块化", i: "10" },
        { index: "c11", name: "几种常见的模块规范", i: "11" },
        { index: "c12", name: "什么是Set对象，它是如何工作的？", i: "12" },
        { index: "c13", name: "===和==区别", i: "13" },
        { index: "c14", name: "日期和时间戳转换", i: "14" },
        { index: "c15", name: "new一个对象具体发生了什么", i: "15" },
        { index: "c16", name: "自己定义一个new方法", i: "16" },
        { index: "c17", name: "arguments详解", i: "17" },
        { index: "c18", name: "for...of和for...in区别", i: "18" },
        { index: "c19", name: "JSON.stringify参数", i: "19" },
        { index: "c20", name: "小数取整以及保留小数几位", i: "20" },
      ],
      itemIndex: "",
      typeofValue: "",
      typeOfInitValue: "***",
      typeofData: [2, "str", true, [], undefined, null, {}, function () {}],
      instanceofValue: "",
      instanceofGrammer: "*** instanceof (Array)",
      instanceofData: [
        {
          name: [],
          type: "i0",
        },
        {
          name: /[a-z]/,
          type: "i1",
        },
        {
          name: {},
          type: "i2",
        },
        {
          name: function () {},
          type: "i3",
        },
      ],
      objPrototypeCallData: [
        {
          name: false,
          type: "o1",
        },
        {
          name: 10,
          type: "o2",
        },
        {
          name: "str",
          type: "o3",
        },
        {
          name: undefined,
          type: "o4",
        },
        {
          name: null,
          type: "o5",
        },
        {
          name: [],
          type: "o6",
        },
        {
          name: /[a-z]/,
          type: "o7",
        },
        {
          name: {},
          type: "o8",
        },
        {
          name: function () {},
          type: "o9",
        },
      ],
      prototypeCallGrammer: "Object.prototype.toString.call(***)",
      prototypeCallValue: "",
      isShowTimeToDate: false,
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
    // typeof类型判断
    btnTypeof(value) {
      this.typeOfInitValue = value;
      this.typeofValue = (typeof value).toString();
    },

    // instanceof类型判断
    btnInstanceof(value, type) {
      switch (type) {
        case "i0":
          this.instanceofValue = (value instanceof Array).toString();
          this.instanceofGrammer = `[] instanceof Array`;
          break;
        case "i1":
          this.instanceofValue = (value instanceof RegExp).toString();
          this.instanceofGrammer = `${value} instanceof RegExp`;
          break;
        case "i2":
          this.instanceofValue = (value instanceof Object).toString();
          this.instanceofGrammer = `{} instanceof Object`;
          break;
        case "i3":
          this.instanceofValue = (value instanceof Function).toString();
          this.instanceofGrammer = `${value} instanceof Function`;
          break;
      }
    },

    // Object.prototype.toString.call()类型判断
    btnPrototypeCall(value, type) {
      this.prototypeCallValue = Object.prototype.toString
        .call(value)
        .toString();
      this.prototypeCallGrammer =
        type === "o6"
          ? `Object.prototype.toString.call([])`
          : type === "o8"
          ? `Object.prototype.toString.call({})`
          : `Object.prototype.toString.call(${value})`;
    },

    //处理事件冒泡（捕获）父元素
    handleFather(type) {
      if (type === "true") {
        Message.success("parent");
      } else {
        document.getElementById("parentId").addEventListener(
          "click",
          function () {
            Message.success("parent");
          },
          true
        );
      }
    },

    //处理事件冒泡（捕获）子元素
    handleChild(type) {
      if (type === "true") {
        Message.success("child");
      } else {
        document.getElementById("childId").addEventListener(
          "click",
          function () {
            Message.success("child");
          },
          true
        );
      }
    },

    //
    handleShowTimetoDate() {
      this.isShowTimeToDate = !this.isShowTimeToDate;
      // this.$notify({
      //   title: "HTML 片段",
      //   dangerouslyUseHTMLString: true,
      //   message: "<strong>这是 <i>HTML</i> 片段</strong>",
      // });
    },
  },
};
</script>

<style>
.learnJsBasic {
  background-image: linear-gradient(#e8fbf2, white);
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