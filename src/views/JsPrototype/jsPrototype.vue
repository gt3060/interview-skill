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
            <img src="@/components/picture/javascript3.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">Javascript进阶篇五</span>
            <el-divider></el-divider>
            <p>此篇主要讲述javascript的原型和原型链。</p>
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
                  <h4>1.为什么使用原型</h4>
                </div>
                <div class="fontIndent">
                  <p>最开始设计JS为了实现继承这个概念以及避免浪费内存，引入了，prototype属性，也叫做原型对象，即显示原型。</p>
                  <el-card>
                    <p>实例一：</p>
                    <pre>

                  // 构造函数
                  function Dog (special,sex,age){
                      this.special = special;
                      this.sex = sex;
                      this.age = age;
                      this.bark = function(){
                          return console.log(this.special + "汪汪汪");
                      }
                  }
                  // 实例
                  let keji = new Dog("keji", "male", 1);
                  let jinmao = new Dog("jinmao", "female", 2);
                  // 打印
                  console.log(keji);
                  console.log(jinmao);
                  console.log(Dog);
                  console.log(keji.bark === jinmao.bark);
                  console.log(keji.bark(), jinmao.bark());
                    </pre>
                    <p>运行结果图如下：</p>
                    <img src="@/assets/prototype2.png" />
                  </el-card>
                  <p>
                    按照上面方法进行构造函数以及实例化，可以发现，两个方法的名字相同，但是实际上在内存都占有位置，属于不同方法；
                    如果创建多个对象，那么每个对象都会创建这个方法占着不同内存，故会产生内存浪费。那么如何进一步优化？
                  </p>
                  <el-card>
                    <p>实例二：</p>
                    <pre>
                  
                  //构造函数
                  function Dog(special,sex,age){
                      this.special = special;
                      this.sex = sex;
                      this.age = age;
                  }
                  Dog.prototype.bark = function(){
                    return console.log(this.special + "汪汪汪")
                  }
                  //同样打印出如下结果
                  onsole.log(keji);
                  console.log(jinmao);
                  console.log(Dog);
                  console.log(keji.bark === jinmao.bark);
                  console.log(keji.bark(), jinmao.bark());
                    </pre>
                    <p>结果运行图如下：</p>
                    <img src="@/assets/prototype1.jpg" />
                  </el-card>
                  <p>
                    可以发现
                    <code>keji.bark === jinmao.bark</code>为true；这是因为我们把bark方法放到原型对象的方法中。所以有：
                  </p>
                  <p class="code">
                    <code>console.log(keji._proto_ === Dog.prototype);//true</code>
                  </p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>2.普通对象和函数对象</h4>
                </div>
                <div class="fontIndent">
                  <p>javascript中提到的最多一句话是：万物皆对象，对象分为普通对象和函数对象，Object、Function是函数自带的函数对象。</p>
                  <el-card>
                    <p>实例三：</p>
                    <pre>

                  var o1 ={};
                  var o2 =new Object();
                  var o3 =new f1();
                  function f1(){};
                  var f2 = function(){};
                  var f3 = new Function('str','console.log(str)');
                  console.log(typeof Object)//function
                  console.log(typeof Function); //function
                  console.log(typeof f1); //function
                  console.log(typeof f2); //function
                  console.log(typeof f3); //function
                  console.log(typeof o1); //object
                  console.log(typeof o2); //object
                  console.log(typeof o3); //object
                    </pre>
                  </el-card>
                  <p>总结（却分函数对象和普通对象）：</p>
                  <p>
                    凡是通过new Function()创建的对象都是函数对象，其他的都是普通对象，f1和f2归根结底都是通过new Function的方式进行创建。
                    Function和Object也都是通过New Function创建的。
                  </p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>3.构造函数</h4>
                </div>
                <div class="fontIndent">
                  <el-card>
                    <p>实例四：</p>
                    <pre>

                  function Person(name, age, job) {
                    this.name = name;
                    this.age = age;
                    this.job = job;
                    this.sayName = function() { alert(this.name) }
                  }
                  var person1 = new Person('Zaxlct', 28, 'Software Engineer');
                  var person2 = new Person('Mick', 23, 'Doctor');
                  console.log(person1.constructor == Person); //true
                  console.log(person2.constructor == Person); //true
                    </pre>
                  </el-card>
                  <p>总结：</p>
                  <p>其中，person1和person2是构造函数Person的实例，实例的构造函数属性指向构造函数。</p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>4.原型对象</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    只要创建一个函数，就会为这个函数创造一个prototype属性，这个属性指向函数的原型对象，默认情况下：所有原型对象，
                    都会自动获得一个构造函数的属性，这个属性包含一个指向prototype属性所在函数的指针。当调用这个构造函数所创建的一个实例后，该实例的内部
                    会包含一个指针，指向构造函数的原型对象。
                  </p>
                  <el-card>
                    <pre>
                  function Person() {}
                  Person.prototype.name = 'Zaxlct';
                  Person.prototype.age  = 28;
                  Person.prototype.job  = 'Software Engineer';
                  Person.prototype.sayName = function() {
                    alert(this.name);
                  }
                    
                  var person1 = new Person();
                  person1.sayName(); // 'Zaxlct'

                  var person2 = new Person();
                  person2.sayName(); // 'Zaxlct'

                  console.log(person1.sayName == person2.sayName); //true
                    </pre>
                    <p>
                      每个对象都有一个
                      <code>_proto_</code>属性，但只有函数对象有prototype属性，故将上述代码整理后为：
                    </p>
                    <pre>
                  Person.prototype = {
                    name:  'Zaxlct',
                    age: 28,
                    job: 'Software Engineer',
                    sayName: function() {
                      alert(this.name);
                    }
                  }
                    </pre>
                  </el-card>
                  <p>总结：</p>
                  <p>
                    对于原型对象的自定义属性外，还包括一个默认属性constructor；在默认情况下，所有原型对象都有一个constructor属性，
                    这个属性指向prototype属性所在的函数Person，即：
                  </p>
                  <p class="code">
                    <code>Person.prototype.constructor === Person</code>
                  </p>
                  <p>故：原型对象（Person.prototype）是构造函数（Person）的实例，原型对象也是普通对象。</p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>5._proto_</h4>
                </div>
                <div class="fontIndent">
                  <p>js在创建对象的时候都有一个叫做_proto_的内置属性，用于指向创建它的构造函数的原型对象。</p>
                  <p>
                    例如：对象person1有一个_proto_属性，创建它的构造函数是Person，构造函数的原型对象是Person.prototype，
                    所以
                    <code>person1._proto_ === Person.prototype</code>
                  </p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>6.原型链</h4>
                </div>
                <div class="fontIndent">
                  <p>通过以下几个例子来讲述原型链：</p>
                  <p class="code">
                    <code>function Person(){};</code>
                  </p>
                  <p class="code">
                    <code>let person1 = new Person(){};</code>
                  </p>
                  <el-divider></el-divider>
                  <p>①person1._proto_</p>
                  <p>
                    因为 person1._ proto _ === person1 的构造函数.prototype;故有：
                    <code>person1._proto_ === Person.prototype;</code>
                  </p>
                  <el-divider></el-divider>
                  <p>②Person._proto_</p>
                  <p>
                    <code>Person._proto_ === Function.prototype;</code>
                  </p>
                  <el-divider></el-divider>
                  <p>③Person.prototype._proto_</p>
                  <p>
                    Person.prototype是一个普通对象，故有:
                    <code>Person.prototype._proto_ === Object.prototype;</code>
                  </p>
                  <el-divider></el-divider>
                  <p>④Object._proto_</p>
                  <p>
                    <code>Object._proto_ === Function.prototype;</code>
                  </p>
                  <el-divider></el-divider>
                  <p>⑤Object.prototype._proto_</p>
                  <p>Object.prototype 对象也有proto属性，但它比较特殊，为 null 。因为 null 处于原型链的顶端，这个只能记住。</p>
                  <el-divider></el-divider>
                  <p>总结：</p>
                  <ul>
                    <li>所有函数对象的proto都指向Function.prototype；</li>
                    <li>Math和JSON是以对象的形式存在，无需new，他们的proto都指向Object.prototype；</li>
                    <li>空的函数指向Function.prototype；</li>
                    <li>原型链的形成是真正是靠_ proto _而不是prototype；</li>
                    <li>每个对象都有_ proto _但只有函数对象才有prototype；</li>
                  </ul>
                  <p>关系图：（红色就是一条原型链）</p>
                  <img src="@/assets/prototype3.jpg" width="80%" />
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
.learnExecution {
  background-image: linear-gradient(#fff8e8, white);
}
</style>