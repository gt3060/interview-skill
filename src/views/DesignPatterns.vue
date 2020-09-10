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
            <img src="../components/picture/javascript2.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">Javascript进阶篇一</span>
            <el-divider></el-divider>
            <p>此篇主要讲述前端相关的设计模式</p>
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
                  <h4>1.什么是设计模式</h4>
                </div>
                <p class="fontIndent">
                  设计模式是对软件设计开发过程中反复出现的某类问题的通用解决方案。设计模式更多的是指导思想和思想论，而不是线程代码；
                  每种设计模式对于每种语言都有各自的具体实现方式；使用设计模式是为了可重用代码，让代码更容易被他人理解，保证代码可靠性。
                </p>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>2.外观模式</h4>
                </div>
                <p class="fontIndent">
                  它为子系统中的一组接口提供一个统一的高层接口，使子系统更容易使用，简而言之，就是外观模式就是将多个子系统中复杂处理逻辑抽象。
                  从而提供一个更统一、更简洁、更通用的API，很多我们用到的框架和库都遵循了这种设计模式，比如Jquery就将复杂的原生dom操作进行
                  抽象和封装，并消除了浏览器之间的兼容问题。从而提供了一个更高级更易用的版本。
                </p>
                <el-card>
                  例如（兼容浏览器）：
                  <pre>
                    
                    let addMyEvent = function (el, ev, fn) {
                      if (el.addEventListener) {//addeventListener是主流浏览器遵循w3c标准的方法
                          el.addEventListener(ev, fn, false)
                      } else if (el.attachEvent) {//attachEvent是ie有的方法
                          el.attachEvent('on' + ev, fn)
                      } else {
                          el['on' + ev] = fn
                      }
                    }; 
                    </pre>
                </el-card>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>3.代理模式</h4>
                </div>
                <div class="fontIndent">
                  <p>代理模式是为一个对象提供一个代理对象并由代理对象控制对原对象的引用，以便控制对他的访问。</p>
                  <el-card>
                    <p>实现：</p>
                    <pre>

                    class Letter{
                      constructor(name){
                        this.name = name;
                      }
                    }
                    let xiaoming = {
                      name:'小明',
                      sendLetter(target){
                        target.receiveLetter(this.name);
                      }
                    }
                    let xiaohua = {
                      receiveLetter(customer){
                        xiaohong.listenGoodMood(()=>{
                          xiaohong.receiveLetter(new Letter(customer+'的情书'))
                        });
                      }
                    }
                    let xiaohong = {
                      name:'小红',
                      receiveLetter(letter){
                        console.log(this.name+'收到'+letter.name);
                      }
                      listenGoodMood(fn){
                        setTimeout(()=>{
                          fn();
                        },1000)
                      }
                    }
                    xiaoming.sendLetter(xiaohua);
                    </pre>
                  </el-card>
                </div>
              </div>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>4.工厂模式</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。
                    该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。
                  </p>
                  <el-card>
                    <pre>
                    
                    class Product{
                      constructor(name){
                        this.name = name;
                      }
                      init(){console.log('init')};
                      fun(){console.log('fun')}
                    }
                    class Factory{
                      create(name){
                        return new Product(name)
                      }
                    }
                    //use
                    let factory = new Factory();
                    let p = factory.create('geng');
                    </pre>
                  </el-card>
                </div>
              </div>
              <div style="margin:20px 0px">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>5.单例模式</h4>
                </div>
                <div class="fontIndent">
                  <p>单例模式仅允许类或对象具有单个实例，并且它使用全局变量来存储该实例。</p>
                  <p>实现方法：判断是否存在该对象的实例，如果已存在则不再创建。</p>
                  <p>
                    单例模式分为懒汉式和饿汉式：懒汉式在类加载时，不创建实例，因此类加载速度快，但运行时获取对象的速度慢；
                    饿汉式在类加载时就完成了初始化，所以类加载较慢，但获取对象的速度快。
                  </p>
                  <p>场景：vuex和redux中的store</p>
                  <el-card>
                    <pre>

                    class FooServiceSingleton=(function(){
                      function FooService(){},
                      let fooservice;
                      return {
                        getInstance:function(){
                          if(!fooservice){
                            fooservice = new FooService();
                          }
                          return fooservice;
                        }
                      }
                    })()
                    //验证
                    const fooService1 = FooServiceSingleton.getInstance();
                    const fooService2 = FooServiceSingleton.getInstance();
                    console.log(fooService1 === fooService2);//true说明只创建了一个实例
                    </pre>
                  </el-card>
                </div>
              </div>
              <div style="margin:20px 0px">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>6.策略模式</h4>
                </div>
                <div class="fontIndent">
                  <p>策略模式定义一系列的算法，将每一个算法封装起来，并让他们可以相互替换.</p>
                  <p>实现方法定义一组可变的策略类封装具体算法，定义一组不变的环境类将请求委托给某一个策略类.</p>
                  <p>
                    使用场景适用于业务场景中需要判断多种条件，甚至包含复杂条件嵌套的，可以使用策略模式来提升代码的可维护性和可读性。
                    比如支付，博客权限校验
                  </p>
                  <el-card>
                    <pre>

                    var PaymentMethodStrategy = {
                      BankAccount: function (money) {
                        return money > 50 ? money * 0.7 : money;
                      },
                      CreditCard: function (money) {
                        return money * 0.8;
                      },
                      Alipay: function (money) {
                        return money;
                      },
                    }
                    var userPay = function (selectedStrategy, money) {
                      return PaymentMethodStrategy[selectedStrategy](money);
                    };
                    //验证实现
                    console.log('银行卡支付价格为：' + userPay('BankAccount', 100)); //70
                    console.log('支付宝支付价格为：' + userPay('Alipay', 100)); //100
                    console.log('信用卡支付价格为：' + userPay('CreditCard', 100)); //80
                    </pre>
                  </el-card>
                </div>
              </div>
              <div style="margin:20px 0px">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>7.观察者模式</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    观察者模式，也叫订阅-发布模式，是对象的行为模式，在对象之间定义了一对多的依赖关系，
                    就是多个观察者和一个被观察者之间的关系，当被观察者发生变化的时候，会通知所有的观察者对象，他们做出相对应的操作。
                  </p>
                  <p>实现方法定义一组可变的策略类封装具体算法，定义一组不变的环境类将请求委托给某一个策略类.</p>
                  <p>
                    使用场景适用于业务场景中当一个对象的状态发生变化时，需要自动通知其他关联对象，自动刷新对象状态，或者说执行对应对象的方法，比如你是一个老师，需要通知班里家长的时候，你可以建一个群（列表）。
                    每次通知事件的时候只要循环执行这个列表就好了（群发），而不用关心这个列表里有谁。
                  </p>
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
};
</script>

<style>
.learnhtml {
  background-image: linear-gradient(#ecfafe, white);
}
</style>