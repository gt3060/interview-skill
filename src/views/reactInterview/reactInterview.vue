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
                        <img src="@/components/picture/test.jpeg"
                             class="imgStyle" />
                    </div>
                    <div class="titleFontStyle">
                        <span style="font-size: 25px">React</span>
                        <el-divider></el-divider>
                        <p>此篇主要讲述react常见的考点。</p>
                    </div>
                </div>
                <div style="display: flex">
                    <div style="width: 75%">
                        <div class="catalogStyle fontStyle">
                            <div style="display: flex">
                                <img src="@/assets/CONTENT DELIVERY.png"
                                     style="width: 24px; height: 24px; margin-top: 6px" />
                                <span style="font-size: 22px; font-weight: bold; margin-left: 10px">内容</span>
                            </div>
                            <el-divider></el-divider>
                            <div id="c0"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>性能优化</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        性能优化对于react来说很重要，因此，react的性能优化有以下几点：
                                    </p>
                                    <ul>
                                        <li>
                                            在页面使用setTimeout、addEventListener、setInterval等，要及时在comwillUnmount中进行销毁；
                                        </li>
                                        <li>使用异步组件；</li>
                                        <li>使用React-loadable动态加载组件；</li>
                                        <li>
                                            shouldComponentUpdate(简称SCU
                                            )、React.PureComponent、React.memo；
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="c1"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>什么情况使用shouldComponentUpdate</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        shouldComponentUpdate这个方法会手动判断是否要调用render来更新dom，因为dom描述非常消耗性能，
                                        若能在shouldComponentUpdate方法中合理构建dom-diff，有利于提高性能。
                                    </p>
                                </div>
                            </div>
                            <div id="c2"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>组件之间通信</h4>
                                </div>
                                <div class="fontIndent">
                                    <ul>
                                        <li>
                                            父组件给子组件传值、子组件调用父组件方法、子组件给父组件传值：通过props来进行获取传值；
                                        </li>
                                        <li>
                                            父组件获取子组件值：通过在调用子组件处添加ref，利用this.refs.***进行获取。
                                        </li>
                                        <li>兄弟之间传值：通过借助共有的父组件进行传值；</li>
                                        <li>通过context通讯；</li>
                                        <li>通过redux通讯。</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="c3"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>调用setState之后发生了什么</h4>
                                </div>
                                <div class="fontIndent">
                                    <span>在代码调用setState之后，react会将传入的参数与状态进行合并，然后重复啊所谓的调和阶段，经过调和过程
                                        react会构建新的元素树，在react得到元素树之后，react会自动计算出新老元素树的差别，
                                        然后根据差异进行最小化重新渲染ui界面，这就保证按需更新而不是全部重新渲染。
                                    </span>
                                </div>
                            </div>
                            <div id="c4"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>react生命周期</h4>
                                </div>
                                <div class="fontIndent">
                                    <div>
                                        <img src="@/assets/reactLifeCircle.png"
                                             width="90%" />
                                    </div>
                                    <p>①挂载卸载过程</p>
                                    <ul>
                                        <li>constructor</li>
                                        <li>componentWillMount</li>
                                        <li>componentDidMount</li>
                                        <li>componentWillUnMount</li>
                                    </ul>
                                    <p>②更新过程</p>
                                    <ul>
                                        <li>componentWillReceiveProps</li>
                                        <li>shouldComponentUpdate</li>
                                        <li>componentWillUpdate</li>
                                        <li>componentDidUpdate</li>
                                        <li>render</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="c5"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>为什么虚拟dom会提高性能</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        虚拟dom相当于在js和真实dom中增加一个缓存，利用dom-diff算法避免了没有必要的dom操作，从而提高性能。
                                    </p>
                                    <p>具体实现步骤如下：</p>
                                    <p>
                                        用js对象结构表示dom树结构，然后用这个树构建一个真正的dom树，插到文档中，当状态变更时候，重新构造一棵新的对象树；
                                        然后用新对象树和旧的比较，记录两个树的差异，把所记录的差异应用到真正的dom树中。
                                    </p>
                                </div>
                            </div>
                            <div id="c6"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>react之diff算法</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>react-diff基于三种策略</p>
                                    <ul>
                                        <li>Webui中dom节点跨层级移动操作特别少，可以忽略不计；</li>
                                        <li>
                                            拥有相同类型组件生成相似的树形结构，拥有不同类型组件生成不同的树形结构；
                                        </li>
                                        <li>同一层级的节点通过唯一id值区分。</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="c7"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>react之refs</h4>
                                </div>
                                <div class="fontIndent">
                                    refs是react提供给我们的安全访问dom元素或某个组件实例的句柄。我们可以为元素添加ref属性，然后在回调函数中接受该元素在dom树
                                    的句柄。该值可以作为回调函数的第一个参数返回。
                                </div>
                            </div>
                            <div id="c8"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>类组件和函数式组件</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        ①类组件不仅允许你使用额外的功能，如组件自身的状态和生命周期的钩子，也能使组件直接访问store并维持状态。
                                    </p>
                                    <p>
                                        ②当组件仅是接受props，并将组件自身渲染到页面，该组件就是一个无状态组件。可以使用一个纯函数来创建这个组件。
                                        这种组件也被称为哑组件或展示组件。
                                    </p>
                                </div>
                            </div>
                            <div id="c9"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>组件的状态和属性之间有什么不同</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        ①State是一种数据结构，用于组件挂载时所需数据的默认值，State可能会随着时间的推移发生改变，但多数时候是作为
                                        用户事件行为的结果；
                                    </p>
                                    <p>
                                        ②Props则是组件的配置，props由父组件传递给子组件，并且就子组件而言，props是不可变的。回调函数也可以通过props传递。
                                    </p>
                                </div>
                            </div>
                            <div id="c10"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>受控组件和非受控组件</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①受控组件：表单中维护自身value是由组件state托管；</p>
                                    <p>
                                        如下面的input标签，input的value值是由state中的value决定的，故如果要改变input值，需要绑定onChange进行state更新。
                                    </p>
                                    <p>
                                        官网定义：在 HTML 中，表单元素（如&lt;input&gt;、
                                        &lt;textarea&gt; 和
                                        &lt;select&gt;）之类的表单元素通常自己维护 state，
                                        并根据用户输入进行更新。而在 React 中，可变状态（mutable
                                        state）通常保存在组件的 state 属性中， 并且只能通过使用
                                        setState()来更新。我们可以把两者结合起来，使 React 的 state
                                        成为“唯一数据源”。 渲染表单的 React
                                        组件还控制着用户输入过程中表单发生的操作。被 React
                                        以这种方式控制取值的表单输入元素就叫做“受控组件”。
                                    </p>
                                    <el-card>
                                        <pre>

                  class NameForm extends React.Component {
                    constructor(props) {
                      super(props);
                      this.state = {value: ''};

                      this.handleChange = this.handleChange.bind(this);
                      this.handleSubmit = this.handleSubmit.bind(this);
                    }
                    handleChange(event) {
                      this.setState({value: event.target.value});
                    }
                    handleSubmit(event) {
                      alert('提交的名字: ' + this.state.value);
                      event.preventDefault();
                    }
                    render() {
                      return (
                        &lt;form onSubmit={this.handleSubmit}&gt;
                          &lt;label&gt;
                            名字:
                            &lt;input type="text" value={this.state.value} onChange={this.handleChange} /&gt;
                          &lt;/label&gt;
                          &lt;input type="submit" value="提交" /&gt;
                        &lt;/form&gt;
                      );
                    }
                  }
                    </pre>
                                    </el-card>
                                    <p>
                                        ②非受控组件：维护自身value不是由组件state托管，是由dom本身托管。
                                    </p>
                                    <p>
                                        要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，可以使用ref来从dom节点中获取表单数据。将上述的input表单改成非受控组件，写法如下：
                                    </p>
                                    <el-card>
                                        <pre>

                  class NameForm extends React.Component {
                    constructor(props) {
                      super(props);
                    }
                    handleSubmit = (event) => {
                      event.preventDefault();
                      alert('提交的名字: ' + this.input.value);
                    }
                    render() {
                      return (
                        &lt;form onSubmit={this.handleSubmit}&gt;
                          &lt;label&gt;
                            名字:
                            &lt;input type="text" ref={(input) => this.input = input} /&gt;
                          &lt;/label&gt;
                          &lt;input type="submit" value="提交" /&gt;
                        &lt;/form&gt;
                      );
                    }
                  }
                    </pre>
                                        <p>注意：默认值使用defaultValue</p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c11"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>react组件何处发起ajax</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        在 React 组件中，应该在 componentDidMount
                                        中发起网络请求。这个方法会在组件第一次“挂载”(被添加到
                                        DOM)时执行，在组件的生命周期中仅会执行一次。更重要的是，你不能保证在组件挂载之前
                                        Ajax 请求已经完成，如果是这样，
                                        也就意味着你将尝试在一个未挂载的组件上调用
                                        setState，这将不起作用。在 componentDidMount
                                        中发起网络请求将保证这有一个组件可以更新了。
                                    </p>
                                </div>
                            </div>
                            <div id="c12"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>React 中有三种构建组件的方式</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>React.createClass()、ES6 class 和无状态函数。</p>
                                </div>
                            </div>
                            <div id="c13"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png" />
                                    </div>
                                    <h4>简单说一下redux</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        redux
                                        是一个应用数据流框架，主要是解决了组件间状态共享的问题，原理是集中式管理，主要有三个核心方法，action，store，reducer，
                                        工作流程是view 调用 store 的 dispatch 接收 action 传入
                                        store，reducer 进行 state 操作，view 通过 store 提供的
                                        getState 获取最新的数据，flux
                                        也是用来进行数据操作的，有四个组成部分
                                        action，dispatch，view，store，工作流程是 view 发出一个
                                        action，派发器接收 action，让 store
                                        进行数据更新，更新完成以后 store 发出 change，view 接受
                                        change 更新视图。Redux 和 Flux 很像。主要区别在于 Flux
                                        有多个可以改变应用状态的 store，在 Flux 中 dispatcher
                                        被用来传递数据到注册的回调事件，但是在 redux
                                        中只能定义一个可更新状态的 store，redux 把 store 和
                                        Dispatcher 合并,结构更加简单清晰 新增
                                        state,对状态的管理更加明确，通过redux，流程更加规范了，减少手动编码量，提高了编码效率，
                                        同时缺点时当数据更新时有时候组件不需要，但是也要重新绘制，有些影响效率。
                                        一般情况下，我们在构建多交互，多数据流的复杂项目应用时才会使用它们。
                                    </p>
                                    <p>
                                        缺点：当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新
                                        render，可能会有效率影响，或者需要写复杂的
                                        shouldComponentUpdate 进行判断
                                    </p>
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
                                <img src="@/assets/catalog.png"
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
    data() {
        return {
            catalogHtmlData: [
                { index: 'c0', name: '1.性能优化', i: '0' },
                {
                    index: 'c1',
                    name: '2.什么情况使用shouldComponentUpdate',
                    i: '1',
                },
                { index: 'c2', name: '3.组件之间通信', i: '2' },
                { index: 'c3', name: '4.调用setState之后发生了什么', i: '3' },
                { index: 'c4', name: '5.react生命周期', i: '4' },
                { index: 'c5', name: '6.为什么虚拟dom会提高性能', i: '5' },
                { index: 'c6', name: '7.react之diff算法', i: '6' },
                { index: 'c7', name: '8.react之refs', i: '7' },
                { index: 'c8', name: '9.类组件和函数式组件', i: '8' },
                {
                    index: 'c9',
                    name: '10.组件的状态和属性之间有什么不同',
                    i: '9',
                },
                { index: 'c10', name: '11.受控组件和非受控组件', i: '10' },
                { index: 'c11', name: '12.react组件何处发起ajax', i: '11' },
                {
                    index: 'c12',
                    name: '13.React 中有三种构建组件的方式',
                    i: '12',
                },
                { index: 'c13', name: '14.简单说一下redux', i: '13' },
            ],
            itemIndex: '',
        };
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
            selectData !== '' && this.handleCatalog(selectData);
        },
    },
    destroyed() {
        window.removeEventListener('mousewheel', this.btnoffsetHeight, false);
    },
};
</script>

<style scoped>
.learnVue {
    background-image: linear-gradient(#f0fcf2, white);
}
</style>
