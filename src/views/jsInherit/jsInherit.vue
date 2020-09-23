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
            <img src="@/components/picture/javascript8.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">Javascript进阶篇七</span>
            <el-divider></el-divider>
            <p>此篇主要讲述javascript的各种继承。</p>
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
                  <h4>1.前言</h4>
                </div>
                <div class="fontIndent">
                  <p>构造函数、原型、实例关系</p>
                  <p>
                    每一个构造函数都有一个prototype属性，指向函数的原型对象；每一个原型对象都有一个constructor属性，指向构造函数每一个实例
                    都有一个_proto_属性，指向构造函数的原型对象。关系图如下：
                  </p>
                  <el-card>
                    <img src="@/assets/jsInherit.jpg" width="80%" />
                  </el-card>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>2.原型链继承</h4>
                </div>
                <div class="fontIndent">
                  <p>基本思想：利用原型让一个引用类型继承另一个引用类型的属性和方法。</p>
                  <p>核心：原型链对象变成父类实例，子类就可以调用父类的方法和属性。</p>
                  <el-card>
                    <p>具体实现：</p>
                    <pre>

                  //父类型
                  function Person(name, age) {
                    this.name = name,
                    this.age = age,
                    this.play = [1, 2, 3]
                    this.setName = function () { }
                  }
                  Person.prototype.setAge = function () { }
                  //子类型
                  function Student(price) {
                    this.price = price
                    this.setScore = function () { }
                  }
                  Student.prototype = new Person() // 子类型的原型为父类型的一个实例对象
                  var s1 = new Student(15000)
                  var s2 = new Student(14000)
                  console.log(s1,s2)
                    </pre>
                    <p>结果如下：</p>
                    <img src="@/assets/jsInherit2.jpg" width="90%" />
                    <p>总结：</p>
                    <p>
                      子类(s1/s2)的实例就可以通过__proto__访问到 Student.prototype 也就是Person的实例（
                      <code>s1.__proto__ === Student.prototype</code>），这样就可以访问到父类的私有方法；
                      然后再通过__proto__指向父类的prototype就可以获得到父类原型上的方法（
                      <code>s1.__protot__.__proto__ === Parent.prototype</code>）。于是做到了将父类的私有、公有方法和属性都当做子类的公有属性。
                    </p>
                  </el-card>
                  <p>
                    子类继承父类的属性和方法是将父类的私有属性和公有方法都作为自己的公有属性和方法，我们都知道在操作基本数据类型的时候操作的是值，在操作引用数据类型的时候操作的是地址，
                    如果说父类的私有属性中有引用类型的属性，那它被子类继承的时候会作为公有属性，这样子类1操作这个属性的时候，就会影响到子类2。
                  </p>
                  <p class="code">
                    即
                    <code>如果s1中的play数组中增加值，那么s2中的play属性也会跟着变化。</code>
                  </p>
                  <p>另外注意一点的是，我们需要在子类中添加新的方法或者是重写父类的方法时候，切记一定要放到替换原型的语句之后。</p>
                  <p class="code">
                    <code>即：</code>
                  </p>
                  <p class="code">
                    <code>// Student.prototype.sayHello = function () { }//在这里写子类的原型方法和属性是无效的，</code>
                  </p>
                  <p class="code">
                    <code>//因为会改变原型的指向，所以应该放到重新指定之后</code>
                  </p>
                  <p class="code">
                    <code>Student.prototype = new Person()</code>
                  </p>
                  <p class="code">
                    <code>Student.prototype.sayHello = function () { }</code>
                  </p>
                  <p>优点：</p>
                  <ul>
                    <li>父类新增原型方法/原型属性，子类都能访问到;</li>
                    <li>简单，易于实现。</li>
                  </ul>
                  <p>缺点：</p>
                  <ul>
                    <li>来自原型对象的所有属性被所有实例共享;</li>
                    <li>创建子类实例时，无法向父类构造函数传参;</li>
                    <li>要想为子类新增属性和方法，必须要在Student.prototype = new Person() 之后执行，不能放到构造器中</li>
                  </ul>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>3.构造函数继承</h4>
                </div>
                <div class="fontIndent">
                  <p>核心：在子类型构造函数中通过使用call调用父类型构造函数</p>
                  <el-card>
                    <pre>
                    
                  function Person(name, age) {
                    this.name = name,
                    this.age = age,
                    this.setName = function () {}
                  }
                  Person.prototype.setAge = function () {}
                  function Student(name, age, price) {
                    Person.call(this, name, age)  // 相当于: this.Person(name, age)
                    /*this.name = name
                    this.age = age*/
                    this.price = price
                  }
                  var s1 = new Student('Tom', 20, 15000)
                    </pre>
                    <p>结果如图：</p>
                    <img src="@/assets/jsInherit3.jpg" width="85%" />
                    <p>总结：</p>
                    <p>
                      这种方式只是实现部分的继承，如果父类的原型还有方法和属性，子类是拿不到这些方法和属性的。
                      也就是说，父类原型中的setAge是获取不到的。
                    </p>
                  </el-card>
                  <p>优点：</p>
                  <ul>
                    <li>可以实现多继承(call多个父类对象);</li>
                    <li>创建子类实例时，可以向父类传递参数;</li>
                    <li>解决了原型链继承中子类实例共享父类引用属性的问题.</li>
                  </ul>
                  <p>缺点</p>
                  <ul>
                    <li>只能继承父类的实例属性和方法，不能继承原型属性和方法;</li>
                    <li>无法实现函数复用，每个子类都有父类实例函数的副本，影响性能.</li>
                  </ul>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>4.原型链+构造函数的组合继承</h4>
                </div>
                <div class="fontIndent">
                  <p>这种方式关键在于:通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用。</p>
                  <el-card>
                    <pre>

                  function Person(name, age){
                    this.name = name;
                    this.age = age;
                    this.setAge = function(){ };
                  }
                  Person.prototype.setAge = function(){
                    console.log('thisSetAge');
                  }
                  function Student(name, age, price){
                    Person.call(this, name, age);
                    this.price = price;
                    this.setScore = function(){ }
                  }
                  Student.prototype = new Person();
                  Student.prototype.constructor = Student;
                  Student.prototype.sayHello = function(){  };
                  var s1 = new Student('Tom', 20, 15000)
                  var s2 = new Student('Jack', 22, 14000)
                  console.log(s1)
                  console.log(s1.constructor) //Student
                  console.log(p1.constructor) //Person
                    </pre>
                    <p>运行结果：</p>
                    <img src="@/assets/jsInherit4.jpg" width="85%" />
                    <p>总结：</p>
                    <p>
                      这种方式融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
                      不过也存在缺点就是无论在什么情况下，都会调用两次构造函数：一次是在创建子类型原型的时候，
                      另一次是在子类型构造函数的内部，子类型最终会包含父类型对象的全部实例属性，但我们不得不在调用子类构造函数时重写这些属性。
                    </p>
                  </el-card>
                  <p>优点：</p>
                  <ul>
                    <li>可以继承实例属性/方法，也可以继承原型属性/方法;</li>
                    <li>可传参;</li>
                    <li>函数可复用.</li>
                  </ul>
                  <p>缺点</p>
                  <p>调用了两次父类构造函数，生成了两份实例。</p>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>4.</h4>
                </div>
                <div class="fontIndent">
                  <p>构造函数、原型、实例关系</p>
                  <p>
                    每一个构造函数都有一个prototype属性，指向函数的原型对象；每一个原型对象都有一个constructor属性，指向构造函数每一个实例
                    都有一个_proto_属性，指向构造函数的原型对象。关系图如下：
                  </p>
                  <el-card>
                    <img src="@/assets/jsInherit.jpg" width="80%" />
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
    return {};
  },
  methods: {},
};
</script>

<style>
.learnClosure {
  background-image: linear-gradient(#e9f6ff, white);
}
</style>