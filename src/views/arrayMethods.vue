<template>
    <div class="learnArrayMethod">
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
                        <img src="../components/picture/javascript4.jpeg"
                             class="imgStyle" />
                    </div>
                    <div class="titleFontStyle">
                        <span style="font-size: 25px">Javascript进阶篇三</span>
                        <el-divider></el-divider>
                        <p>此篇主要讲述javascript相关的数组和字符串相关操作。</p>
                        <p>
                            数组中常用方法亦可点击：
                            <el-button type="text"
                                       @click="btnToArrayMethodUrl">点击此处</el-button>
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
                                    <div style="margin: 2px 7px 0px 0px">
                                        <img src="../assets/title_2.png" />
                                    </div>
                                    <div class="fontTitle">第一章&nbsp;&nbsp;数组篇</div>
                                </div>
                            </div>
                            <div id="c1"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>push和pop</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        如果学过数据结构对push和pop来说就不陌生，这是对栈的压入和获取（在数组的末尾添加或删除元素）；
                                        在js中的语法也与其相同：
                                    </p>
                                    <p>
                                        语法：
                                        <code>arr.push()/arr.pop()</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>const arr = [1, 8, 10, 22, 5]</code>
                                        </p>
                                        <p>
                                            <code>arr.push(6); //[1, 8, 10, 22, 5, 6]</code>
                                        </p>
                                        <p>
                                            <code>arr.pop();//[1, 8, 10, 22, 5]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c2"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>shift和unshift</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        shift是获取数组第一个元素，unshift是在数组第一个元素前添加元素
                                    </p>
                                    <p>
                                        语法：
                                        <code>arr.shift()/arr.unshift()</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>const arr = [1, 8, 10, 22, 5]</code>
                                        </p>
                                        <p>
                                            <code>arr.shift(); //[8, 10, 22, 5]</code>
                                        </p>
                                        <p>
                                            <code>arr.unshift(6);//[6, 8, 10, 22, 5]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c3"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>concat</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>用于将两个数组连接在一起</p>
                                    <p>
                                        语法：
                                        <code>arr.concat(arr1)</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>const arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>const arr1 = [9, 8, 7, 6];</code>
                                        </p>
                                        <p>
                                            <code>arr.concat(arr1);//[1, 8, 10, 22, 5, 9, 8, 7, 6]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c4"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>splice</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        splice方法：从数组中指定位置删除若干元素/向数组中指定位置添加若干元素
                                    </p>
                                    <p>
                                        语法：
                                        <code>arr.splice(index, num, item, item1, ...
                                            );//前两个元素必需，后面元素可选。</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>const arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>arr.splice(1, 2);//[1, 22, 5]</code>
                                        </p>
                                        <p>
                                            <code>arr.splice(1, 0, 88);//[1, 88, 8, 10, 22, 5]</code>
                                        </p>
                                        <p>
                                            <code>arr.splice(1, 2, 99, 98, 97);//[1, 99, 98, 97, 22,
                                                5]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c5"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>slice</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        slice方法：是用来获取一个数组中的某个区间内的数值（算头不算尾），但不破坏原来数组，只是返回一个新数组，有两个参数，
                                        第一个参数为从何处获取，为必需值，第二个参数为从何处结束，为可选值，如果没有指定，则截取到数组结束所有元素；
                                        若为负值，那么表示从数组尾部开始算起的元素。
                                    </p>
                                    <p>
                                        语法：
                                        <code>arr.slice(index, index1);</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>const arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>arr.slice(1,
                                                2);//[8]算头不算尾，从index为1开始，到index为2为止前的元素</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c6"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>split</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        split方法用于把一个字符串分割成字符串数组。有两个参数：第一个参数为必需，指定了分隔符；
                                        第二个参数为可选参数，代表可指定返回数组的最大长度，如果设置该参数，返回的子串不会多于这个参数指定的数组；如果没有设置，则整个字符串全部分割。
                                    </p>
                                    <p>
                                        语法：
                                        <code>str.split(separator, howmany);</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>let str = "gengtian";</code>
                                        </p>
                                        <p>
                                            <code>str.split('');//["g", "e", "n", "g", "t", "i", "a",
                                                "n"]</code>
                                        </p>
                                        <p>
                                            <code>str.split('', 4);//["g", "e", "n", "g"]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c7"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>reverse</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>用于颠倒数组中元素的位置</p>
                                    <p>
                                        语法：
                                        <code>arr.reverse();</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>const arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>arr.reverse();//[5, 22, 10, 8, 1]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c8"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>indexOf和lastIndexOf</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        indexOf此方法从前往后查找数组中是否有符合条件的元素，有，则返回第一个符合条件的索引值，若不存在，则返回-1；
                                        lastindexOf此方法作用和indexOf相同，只是查找方向不同，是从后往前查找。
                                    </p>
                                    <p>
                                        语法：
                                        <code>arr.indexOf(index)/arr.lastindexOf(index);</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>const arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>arr.indexOf(8);//1</code>
                                        </p>
                                        <p>
                                            <code>arr.indexOf(11);//-1</code>
                                        </p>
                                        <p>lastIndexOf同理</p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c9"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>includes</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        判断数组中是否包含给定的值。包含两个参数，第一个参数为必需，要查找的字符串；
                                        第二个参数可选，设置从哪个位置开始查找。
                                    </p>
                                    <p>
                                        语法：
                                        <code>arr.includes(searchValue, start);</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>const arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>arr.includes(8);//true</code>
                                        </p>
                                        <p>
                                            <code>arr.includes(8,3);//false</code>
                                        </p>
                                        <p>includes和indexOf区别是什么？</p>
                                        <ul>
                                            <li>indexOf返回的数值，includes返回的是布尔值；</li>
                                            <li>indexOf不能判断NaN，返回-1；includes可以判断</li>
                                        </ul>
                                        <p>
                                            <code>let arr1 = [2, 9, NaN];</code>
                                        </p>
                                        <p>
                                            <code>arr1.includes(NaN);//true</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c10"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>fill</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        fill将给定的数值填充到数组中，有三个参数，第一个：是给定值；第二个是开始填充的位置（可选，默认为0）；
                                        第三个是结束位置（可选，默认最后）。
                                    </p>
                                    <p>
                                        语法：
                                        <code>arr.fill(number, start, end);</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>const arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>arr.fill(7);//[7, 7, 7, 7, 7]</code>
                                        </p>
                                        <p>
                                            <code>arr.fill(8, 2, 3);//[7, 7, 8, 7, 7]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c11"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>Array.from</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。第一个参数为必需，是转变之前的数据；
                                        第二个为可选，为新数组中的每个元素会执行该回调函数。
                                    </p>
                                    <p>
                                        语法：
                                        <code>Array.form(value, function);</code>
                                    </p>
                                    <p>Array.from的用法：</p>
                                    <p>①将类数组转为真正的数组</p>
                                    <el-card>
                                        <p>
                                            <code>let arrayLike = {0:"1", 1:"2", 2:"3",
                                                'length':'3'};</code>
                                        </p>
                                        <p>
                                            <code>Array.from(arrayLike);//['1', '2', '3']</code>
                                        </p>
                                    </el-card>
                                    <p>用此方法将类数组转为数组必需具备以下条件：</p>
                                    <ul>
                                        <li>
                                            该类数组对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组;
                                        </li>
                                        <li>该类数组对象的属性名必须为数值型或字符串型的数字.</li>
                                    </ul>
                                    <p>②利用Set+Array.from进行数组去重</p>
                                    <el-card>
                                        <p>
                                            <code>let set = new Set([1,2,3,4,5])</code>
                                        </p>
                                        <p>
                                            <code>Array.from(set);//[1,2,3,4,5]</code>
                                        </p>
                                        <p>
                                            Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组:
                                        </p>
                                        <p>
                                            <code>Array.from(set, item=>item+1);//[2,3,4,5,6]</code>
                                        </p>
                                        <p>故可用Set+Array.from方式进行数组去重</p>
                                    </el-card>
                                    <p>③将字符串转数组</p>
                                    <el-card>
                                        <p>
                                            <code>let str = "gengtian";</code>
                                        </p>
                                        <p>
                                            <code>Array.from(str);//["g", "e", "n", "g", "t", "i", "a",
                                                "n"]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c12"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>keys、values、entries</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>这三个方法是es6新增方法：</p>
                                    <p>
                                        ①keys:返回的是一个遍历器对象，遍历遍历器对象可以利用for...of来进行遍历,keys()是对
                                        <strong>键名</strong>进行遍历。
                                    </p>
                                    <p>
                                        ②values:返回的是一个遍历器对象，遍历遍历器对象可以利用for...of来进行遍历,values()是对
                                        <strong>键值</strong>进行遍历。
                                    </p>
                                    <p>
                                        ③entries:返回的是一个遍历器对象，遍历遍历器对象可以利用for...of来进行遍历,keys()是对
                                        <strong>键值对</strong>进行遍历。
                                    </p>
                                    <p>
                                        语法：
                                        <code>arr.keys()/arr.values()/arr.entries();</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>let arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>let arr1 = arr.keys();</code>
                                        </p>
                                        <p>
                                            <code>for(let index of arr1){ console.log(index); //0, 1, 2,
                                                3, 4 }</code>
                                        </p>
                                        <p>
                                            <code>for(let index of arr.values()){ console.log(elm); //1,
                                                8, 10, 22, 5 }</code>
                                        </p>
                                        <p>
                                            <code>for(let index of arr.entries()){ console.log(item);
                                                //[0, 1], [1, 8], [2, 10], [3, 22], [4, 5] }</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c13"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>map、forEach</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①forEach和map的相同点</p>
                                    <ul>
                                        <li>
                                            里面每一次执行的匿名函数都有三个参数：item（当前项）、index（索引值）、input（原始数组）;
                                        </li>
                                        <li>map和forEach都是对数组进行遍历，也只能遍历数组；</li>
                                        <li>匿名函数的this都指向window；</li>
                                    </ul>
                                    <p>②forEach和map的不同点</p>
                                    <ul>
                                        <li>map有返回值，可以返回新数组；forEach没有返回值</li>
                                    </ul>
                                    <p>
                                        语法：
                                        <code>arr.map/forEach((item, index, record)=>{console.log(item,
                                            index, record)});</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>let arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>let arr1 = arr.map(item=> item = item+1); //arr:[1, 8,
                                                10, 22, 5]、arr1:[2, 9, 11, 23, 6]</code>
                                        </p>
                                        <p>
                                            <code>let arr1 = arr.forEach((item, index, record)=>
                                                record[index] = item+1); //arr:[2, 9, 11, 23,
                                                6]、arr1:undefined</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c14"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>filter</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        filter()和map()类似，参数都用来接收一个函数，与map不同的是：filter把传入的函数作用于每个数值，并通过返回值为true或false决定筛选去留，
                                    </p>
                                    <p>
                                        语法：
                                        <code>arr.filter((item, index, record)=>{console.log(item,
                                            index, record)});</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>let arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>let arr1 = arr.filter(item=> item > 10); //[22]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c15"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>sort</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>sort方法就是将数组进行排序</p>
                                    <p>
                                        语法：
                                        <code>arr.sort();</code>
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>let arr = [7, 3, 2, 1, 4];</code>
                                        </p>
                                        <p>
                                            <code>arr.sort();//[1, 2, 3, 4, 7]</code>
                                        </p>
                                        <p>
                                            <code>再来看下一个：</code>
                                        </p>
                                        <p>
                                            <code>let arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>arr.sort(); //[1, 10, 22, 5, 8]</code>
                                        </p>
                                        <p>
                                            <code>之所以会有上述输出：是因为默认先将里面的元素转化为string类型，也就是字符串之间的比较，也就有了10
                                                &lt; 22&lt; 5&lt; 8的结果</code>
                                        </p>
                                        <p>
                                            <code>解决办法如下：</code>
                                        </p>
                                        <p>
                                            <code>从小到大：arr.sort((x, y) => x-y);</code>
                                        </p>
                                        <p>
                                            <code>从大到小：arr.sort((x, y) => y-x);</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c16"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>every、some</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>every、some用来判断数组中元素是否满足条件，具体如下：</p>
                                    <ul>
                                        <li>
                                            every判断数组中每个元素是否全部符合条件，返回true/false；
                                        </li>
                                        <li>
                                            some判断数组中是否存在一个元素满足符合条件，返回true/false。
                                        </li>
                                    </ul>
                                    <el-card>
                                        <p>
                                            <code>let arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>console.log(arr.every(function(s){ return s> 1 }))
                                                //结果为false</code>
                                        </p>
                                        <p>
                                            <code>arr.some( (value, index) =>value &lt; 2) //true</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c17"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>find、findIndex</h4>
                                </div>
                                <div class="fontIndent">
                                    <ul>
                                        <li>
                                            find此方法用于判断数组中是否有符合条件的元素，如有，则返回第一个与之匹配元素，否则返回undefined：
                                        </li>
                                        <li>
                                            findIndex作用同find，只是findIndex返回这个元素的索引。
                                        </li>
                                    </ul>
                                    <el-card>
                                        <p>
                                            <code>let arr = [1, 8, 10, 22, 5];</code>
                                        </p>
                                        <p>
                                            <code>arr.find(function(s){ return s==12 }); //
                                                undefined</code>
                                        </p>
                                        <p>
                                            <code>arr.find(function(s){ return s==8 }); // 8</code>
                                        </p>
                                        <p>
                                            <code>arr.findIndex(function(s){ return s === 22 }) //
                                                3</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c18"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>reduce</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        语法：
                                        <code>arr.reduce((prev, cur, index, arr) => {...}, init)</code>
                                    </p>
                                    <ul>
                                        <li>arr表示原数组；</li>
                                        <li>prev表示上一次调用回调时的返回值，或者初始值init；</li>
                                        <li>cur表示当前正在处理的数组元素</li>
                                        <li>
                                            index表示当前正在处理元素的索引，若提供init则索引为0，否则索引为1。
                                        </li>
                                        <li>init表示初始值</li>
                                    </ul>
                                    <p>实例一：求数组元素之和</p>
                                    <div class="codeBorder fontCodeStyle">
                                        <pre class="codeBorder">
        let sum = arr.reduce((pre, cur)=>{<br/>
            return pre + cur<br/>
        }, 0)
                                        </pre>
                                    </div>
                                    <p>实例二：数组去重</p>
                                    <div class="codeBorder fontCodeStyle">
                                        <pre class="codeBorder">
        let subRepeat = arr.reduce((pre,cur)=>{<br/>
            pre.indexOf(cur) === -1 &amp;&amp; pre.push(cur);<br/>
            return pre;<br/>
        },[])
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div id="c19"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 3px 4px 0px 0px">
                                        <img src="../assets/title_2.png" />
                                    </div>
                                    <div class="fontTitle">第二章&nbsp;&nbsp;字符串篇</div>
                                </div>
                            </div>
                            <div id="c20"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>查找字符串中的字符串</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①indexOf/lastIndexOf</p>
                                    <p>
                                        用法和数组中indexOf/lastIndexOf用法相同，不过多写出来，同样存在两个参数第一个为目标值，第二个为检索起始位置。
                                        <code>str.indexOf('...')</code>
                                    </p>
                                    <p>②search</p>
                                    <p>search方法搜索特定值的字符串，并返回匹配的位置。</p>
                                    <p>
                                        语法：
                                        <code>str.search(str1)</code>
                                    </p>
                                    <p>
                                        search与indexOf不同点在于，search没有第二个参数，indexOf中第一个参数没办法设置正则表达式。
                                    </p>
                                </div>
                            </div>
                            <div id="c21"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>提取部分字符串</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①slice</p>
                                    <p>
                                        字符串中的slice方法同数组中的用法相同，同样存在两个参数，具体可看数组
                                        <code>str.slice(start, end);</code>
                                    </p>
                                    <p>②substring</p>
                                    <p>
                                        substring方法类似于slice，不同点在于，substring不支持负数参数；
                                        <code>str.substring(start, end);</code>
                                    </p>
                                    <p>③substr</p>
                                    <p>
                                        同样，substr方法类似于slice，不同点在于，substr方法的第二个参数表示提取字符串的长度，而slice表示结束索引位置。
                                    </p>
                                    <p>
                                        <code>str.substr(start, length);</code>
                                    </p>
                                </div>
                            </div>
                            <div id="c22"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>替换字符串内容（replace）</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        replace方法不会改变调用他的字符串，它返回的是新字符串。
                                        <code>str.replace(target, value);</code>
                                    </p>
                                    <p>默认，replace()只替换首个匹配的字符串；</p>
                                    <p>
                                        如需执行对大小写不敏感匹配，需要利用正则表达式
                                        <code>str.replace(/target/i, value);</code>
                                    </p>
                                    <p>
                                        如需替换所有匹配信息，同样需要利用正则表达式
                                        <code>str.replace(/target/g, value);</code>
                                    </p>
                                    <p>注：利用正则表达式处理字符串的方法还有match</p>
                                </div>
                            </div>
                            <div id="c23"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>字符串转换为大写/小写</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①字符串转换为大写(toUpperCase)</p>
                                    <el-card>
                                        <p>
                                            <code>let str = "gengtian";</code>
                                        </p>
                                        <p>
                                            <code>let str1 = str.toUpperCase(); //"GENGTIAN"</code>
                                        </p>
                                    </el-card>
                                    <p>②字符串转换为小写(toLowerCase)</p>
                                    <el-card>
                                        <p>
                                            <code>let str = "GENGTIAN";</code>
                                        </p>
                                        <p>
                                            <code>let str1 = str.toLowerCase(); //"gengtian"</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c24"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>连接两个或多个字符串(concat)</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>用法同数组</p>
                                    <p>
                                        <code>str.concat(str1, str2, str3, ...)</code>
                                    </p>
                                </div>
                            </div>
                            <div id="c25"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>删除字符串两端的空白符(trim)</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        <code>str.trim()</code>
                                    </p>
                                </div>
                            </div>
                            <div id="c26"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>提取字符串字符</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①charAt</p>
                                    <p>方法返回字符串中指定下标（位置）的字符串。</p>
                                    <el-card>
                                        <p>
                                            <code>let str = "Gengtian"</code>
                                        </p>
                                        <p>
                                            <code>str.charAt(0);//G</code>
                                        </p>
                                    </el-card>
                                    <p>②charCodeAt</p>
                                    <p>
                                        charCodeAt() 方法返回字符串中指定索引的字符 unicode 编码。
                                    </p>
                                </div>
                            </div>
                            <div id="c37"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 3px 4px 0px 0px">
                                        <img src="../assets/title_2.png"
                                             alt="" />
                                    </div>
                                    <div class="fontTitle">第三章&nbsp;&nbsp;对象</div>
                                </div>
                            </div>
                            <text-field catalog
                                        title="Object.assign"
                                        id="c38"
                                        content="assign方法用于对象的合并，将原对象的所有可枚举属性，
                                        复制到目标对象，如果目标对象与源对象有同名属性，或多个源对象有同名属性，那么出现在后面的属性会覆盖前面的属性。
                                        看下面这个实例："
                                        fontSizeType="small">
                            </text-field>
                            <p class="code"><code>const target = { a: 0, b: 0 };</code></p>
                            <p class="code"><code>const source1 = { a:1, b: 1, c:1 };</code></p>
                            <p class="code"><code>const source2 = { c: 2 };</code></p>
                            <p class="code"><code>Object.assign(target, source1, source2);</code></p>
                            <p class="code"><code>console.log("target",target);//{a:1, b:1, c:2}</code></p>
                            <text-field content="如果assign参数只传一个，那么就直接返回这个参数，就是浅拷贝；
                                                如果方法中参数不是对象，则需要先转化为对象再返回；看下面这个实例："></text-field>
                            <p class="code"><code>Object.assign(2);//[[PrimitiveValue]]: 2</code> </p>
                            <text-field content="可以看到它的原始值都在包装对象的内部属性 `[[PrimitiveValue]]`上面，这个属性是不会被`Object.assign`拷贝的，
                                                只有字符串的包装对象，会产生可枚举的实义属性，那些属性则会被拷贝。
                                                但是有一些基本数据类型无法转化对象，例如：undefined、null，转化之后会报错"></text-field>
                            <p class="code"><code>Object.assign(undefined); // 报错</code></p>
                            <p class="code"><code>Object.assign(null); // Cannot convert undefined or null to object</code></p>
                            <text-field content="不过，如果这些无法转化对象的基本数据类型放在源对象位置，则不会报错，直接跳过，基本数据类型也一样（除了字符串），
                                                会直接跳过，字符串转换会以数组形式（类似先split）展现"></text-field>
                            <p class="code"><code>Object.assign(obj, undefined); // obj</code></p>
                            <p class="code"><code>Object.assign({}, 'abc'); // {0:a, 1:b, 2:c}</code></p>
                            <p class="code"><code>Object.assign({}, true); // {}</code></p>
                            <text-field content="主要应用在对象的浅拷贝以及数组替换某个位置元素"></text-field>
                            <p class="code"><code>let obj = {b:{a:1}};</code></p>
                            <p class="code"><code>let obj1 = Object.assign({}, obj);// {b:{a:1}}</code></p>
                            <p class="code"><code>----------------------------------</code></p>
                            <p class="code"><code>let arr = [1, 2, 3];</code></p>
                            <p class="code"><code>let arr1 = Object.assign(arr, [4, 5]);//[4, 5, 3]</code></p>
                            <text-field catalog
                                        title="Object.create"
                                        id="c39"
                                        content="此方法使现有对象作为新对象的原型来创建对象，例如："
                                        fontSizeType="small">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        let obj = {<br/>
            sex: 'female',<br/>
            info: function(){<br/>
                console.log(`${name}的性别是：${sex}`);<br/>
            }<br/>
        }<br/>
        let xiaoming = Object.create(obj); // 创建新对象--图①<br/>
        xiaoming.name = '小明'; // 赋新的属性--图②<br/>
        xiaoming.sex = 'male'; // 重写--图③
                                </pre>
                            </div>
                            <text-field content="上述代码实现的结果如下图："></text-field>
                            <img alt=""
                                 src="@/assets/objectCreateRes.jpg"
                                 width="90%" />
                            <text-field content="下面分析一下Object.create方法的两个参数。
                                                第一个参数必需，为新对象的原型对象；
                                                第二个参视可选，可添加新属性到新对象上，是一个对象，对象的属性等同于
                                                Object.defineProperties()的第二个参数。举例如下："></text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
       let person = {<br/>
        sex: 'male',<br/>
        info: function(){}<br/>
        }<br/>
        let proDesc = {<br/>
            age:{<br/>
                value: 24, // 属性默认值<br/>
                congigurable: false, // 设置false之后将不能不删除，默认false<br/>
                writable: false,  // 设置false之后将不能修改，默认false<br/>
                enumerable: true, // 设置false之后将无法被枚举，默认false<br/>
            }<br/>
        }<br/>
        let person1 = Object.create(person, proDesc);
                                </pre>
                            </div>
                            <text-field content="最后需要注意的是：使用Object.create()方法创建空对象，是没有原型属性的"></text-field>
                            <p class="code"><code>let obj = Object.create(null);//{}</code></p>
                            <p class="code"><code>obj.__proto__;//undefined</code></p>
                            <text-field :list="createList"></text-field>
                            <div id="c27"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 3px 4px 0px 0px">
                                        <img src="../assets/title_2.png"
                                             alt="" />
                                    </div>
                                    <div class="fontTitle">第四章&nbsp;&nbsp;归纳</div>
                                </div>
                            </div>
                            <div id="c28"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png"
                                             alt="" />
                                    </div>
                                    <h4>字符串转数组</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①split</p>
                                    <el-button type="text"
                                               @click="toStringToArray">split详见</el-button>
                                    <el-card>
                                        <p>
                                            <code>let str = "gengtian";</code>
                                        </p>
                                        <p>
                                            <code>str.split(''); //["g", "e", "n", "g", "t", "i", "a",
                                                "n"]</code>
                                        </p>
                                    </el-card>
                                    <p>②Array.from</p>
                                    <el-button type="text"
                                               @click="toArrayFrom">Array.from详见</el-button>
                                </div>
                            </div>
                            <div id="c29"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>对象或数组转字符串</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①toString</p>
                                    <p>toString方法能够把每个元素转换成字符串，然后以逗号相连</p>
                                    <el-card>
                                        <p>
                                            <code>let arr = [1,3,4,5,6];</code>
                                        </p>
                                        <p>
                                            <code>arr.toString(); //"1,3,4,5,6"</code>
                                        </p>
                                    </el-card>
                                    <p>②toLocalString()</p>
                                    <p>
                                        toLocalString() 方法与 toString() 方法用法基本相同，
                                        主要区别在于 toLocalString()
                                        方法能够使用用户所在地区特定的分隔符把生成的字符串连接起来，形成一个字符串。
                                    </p>
                                    <p>
                                        <code>arr.toLocalString()</code>
                                    </p>
                                    <p>③join</p>
                                    <p class="code">
                                        <code>arr.join('-');//将数组中每个元素按照-进行连接形成一个字符串</code>
                                    </p>
                                    <p>④JSON.stringify</p>
                                    <p class="code">
                                        <code>JSON.stringify(arr);//此时注意，利用此方法数组转字符串会将[]同时转为字符串：JSON.stringify([1,2,3]);
                                            "[1,2,3]"</code>
                                    </p>
                                </div>
                            </div>
                            <div id="c30"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>比较两个数组是否相等</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>
                                        js不能直接使用
                                        <code>==</code>或者
                                        <code>===</code>来判断两个数组是否相等，以下两行代码均返回false。
                                    </p>
                                    <el-card>
                                        <p>
                                            <code>[1, 1, 1] == [1, 1, 1];//false</code>
                                        </p>
                                        <p>
                                            <code>[1, 1, 1] === [1, 1, 1];//false</code>
                                        </p>
                                    </el-card>
                                    <p>①toString</p>
                                    <el-card>
                                        <p>
                                            <code>[1, 1, 1].toString() == [1, 1,
                                                1].toString();//true</code>
                                        </p>
                                        <p>
                                            <code>[1, 1, 1].toString() === [1, 1,
                                                1].toString();//true</code>
                                        </p>
                                    </el-card>
                                    <p>
                                        如果两个数组的元素相同但是元素位置不同，单纯利用此方法就行不通：
                                    </p>
                                    <p class="code">
                                        <code>[1, 2, 3].toString() ===( || == ) [1, 3, 2].toString();
                                            //false</code>
                                    </p>
                                    <p>此时只需先进行排序再进行转字符串判断</p>
                                    <p class="code">
                                        <code>[1, 2, 3].sort().toString() ===( || == ) [1, 3,
                                            2].sort().toString();</code>
                                    </p>
                                    <p>②JSON.stringify</p>
                                    <p class="code">
                                        <code>JSON.stringfity([1,2,3]) === ( || == )
                                            JSON.stringify([1,2,3]);</code>
                                    </p>
                                    <p>
                                        同样需要注意地是，如果数组元素相同，位置不同，也需要先用sort方法进行排序再进行转换比较。
                                    </p>
                                </div>
                            </div>
                            <div id="c31"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>数组中交换两个元素的位置</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①借助第三方变量temp</p>
                                    <p>②splice</p>
                                    <p>
                                        其核心思想也都是借助temp实现替换只是利用js方法来实现，看的很高级。
                                    </p>
                                    <div class="codeBorder fontCodeStyle">
                                        <pre class="codeBorder">
        let arr = [1, 2, 3, 4, 5];<br/>
        arr.splice(2, 1, ...arr.splice(3, 1, arr[2]));<br/>
        console.log(arr);//[1, 2, 4, 3, 5]
                                        </pre>
                                    </div>
                                    <p>③利用es6解构赋值</p>
                                    <el-card>
                                        <p>
                                            <code>[arr[2], arr[3]] = [arr[3], arr[2]]</code>
                                        </p>
                                    </el-card>
                                </div>
                            </div>
                            <div id="c32"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>数组中元素的删除</h4>
                                </div>
                                <div class="fontIndent">
                                    <p class="code">
                                        <code>let arr = [0, 1, 2, 3, 4, 5]</code>
                                    </p>
                                    <p>①delete</p>
                                    <p>
                                        <code>delete arr[0];//[empty, 1, 2, 3, 4, 5]</code>
                                    </p>
                                    <p>
                                        可发现，利用delete删除数组元素，只是单纯删除数组中该位置的元素，但是，长度仍保持不变。
                                    </p>
                                    <p>②pop删除数组中最后一个元素</p>
                                    <p>
                                        <code>arr.pop();//[0, 1, 2, 3, 4]</code>
                                    </p>
                                    <p>③shift删除数组中第一个元素</p>
                                    <p>
                                        <code>arr.shift();//[1, 2, 3, 4, 5]</code>
                                    </p>
                                    <p>④splice可删除数组中间指定位数指定个数元素</p>
                                    <p>
                                        <code>arr.splice(2,1);//[0, 1, 3, 4, 5]</code>
                                    </p>
                                    <p>
                                        ⑤filter利用filter过滤掉出部分满足条件的元素，不改变原数组，产生新数组
                                    </p>
                                    <p>
                                        <code>let arr1 = arr.filter(item => item>3);//arr1:[4, 5] arr:
                                            [0, 1, 2, 3, 4, 5]</code>
                                    </p>
                                    <p>同样可以利用高级函数和splice结合进行根据条件进行删除。</p>
                                </div>
                            </div>
                            <div id="c33"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>查询数组中最大元素</h4>
                                </div>
                                <div class="fontIndent">
                                    <p class="code">
                                        <code>Math.max.apply(null,arr)</code>
                                    </p>
                                </div>
                            </div>
                            <div id="c34"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>多个数组合并</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①解构</p>
                                    <p class="code">
                                        <code>let arr = [...arr1, ...arr2, ...arr3]</code>
                                    </p>
                                    <p>②concat</p>
                                    <p class="code">
                                        <code>let arr = arr1.concat(arr2).concat(arr3);</code>
                                    </p>
                                </div>
                            </div>
                            <div id="c35"
                                 style="margin: 20px 0px">
                                <div style="display: flex; margin-bottom: 25px">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>数组去重</h4>
                                </div>
                                <p class="code"
                                   style="margin-bottom: 25px">
                                    已知数组arr：[1, 2, 32, 2, "a", "b", "a", "2", 2, 10, 9]
                                </p>
                                <el-card>
                                    <el-collapse v-model="activeName"
                                                 accordion>
                                        <el-collapse-item name="1">
                                            <template slot="title">
                                                <i class="el-icon-scissors"
                                                   style="margin-right: 7px"></i>Es6 Set
                                            </template>
                                            <div style="line-height: 40px">
                                                <p>
                                                    语法：
                                                    <code>Array.from(new Set(arr))</code>
                                                </p>
                                                <p>
                                                    同样，可以简写:
                                                    <code>[...new Set(arr)]</code>
                                                </p>
                                                <el-divider></el-divider>
                                                <el-button type="text"
                                                           @click="textArrayFromSet">测试</el-button>
                                                <p>
                                                    测试结果:{{ JSON.stringify(finalArrayFromSetData) }}
                                                </p>
                                            </div>
                                        </el-collapse-item>
                                        <el-collapse-item name="2">
                                            <template slot="title">
                                                <i class="el-icon-scissors"
                                                   style="margin-right: 7px"></i>for+for+splice
                                            </template>
                                            <div style="line-height: 40px">
                                                <p>
                                                    这里说明一下，对数组的遍历同样可以使用，map、forEach
                                                </p>
                                                <div class="codeBorder fontCodeStyle">
                                                    <pre class="codeBorder">
            for(let i = 0; i &lt; arr.length; i++ ){<br/>
                for(let j = i + 1; j &lt; arr.length; j++){<br/>
                    if(arr[i] === arr[j]){<br/>
                        arr.splice(j,1);<br/>
                        j--;<br/>
                    }<br/>
                }<br/>
            }
                                                    </pre>
                                                </div>
                                                <el-divider></el-divider>
                                                <el-button type="text"
                                                           @click="textForSplice">测试</el-button>
                                                <p>测试结果:{{ JSON.stringify(finalForSpliceData) }}</p>
                                            </div>
                                        </el-collapse-item>
                                        <el-collapse-item name="3">
                                            <template slot="title">
                                                <i class="el-icon-scissors"
                                                   style="margin-right: 7px"></i>indexOf
                                            </template>
                                            <div style="line-height: 40px">
                                                <div class="codeBorder fontCodeStyle">
                                                    <pre class="codeBorder">
            let arr1 = [];<br/>
            for(let i of arr){<br/>
                if(arr1.indexOf(i) === -1){<br/>
                    arr1.push(i))<br/>
                }<br/>
            }
                                                    </pre>
                                                </div>
                                                <el-divider></el-divider>
                                                <el-button type="text"
                                                           @click="textForIndexOf">测试</el-button>
                                                <p>
                                                    测试结果:{{ JSON.stringify(finalForIndexOfData) }}
                                                </p>
                                            </div>
                                        </el-collapse-item>
                                        <el-collapse-item name="4">
                                            <template slot="title">
                                                <i class="el-icon-scissors"
                                                   style="margin-right: 7px"></i>sort
                                            </template>
                                            <div style="line-height: 40px">
                                                <div class="codeBorder fontCodeStyle">
                                                    <pre class="codeBorder">
            arr.sort();<br/>
                let arr1 = [];<br/>
                for(let i = 0; i &lt; arr.length; i++){<br/>
                if(arr[i] !== arr[i+1]){<br/>
                    arr1.push(arr[i])<br/>
                }<br/>
            }
                                                    </pre>
                                                </div>
                                                <p>
                                                    此种方式更适合于数组中每个元素都为数字，否则会出现排列后:[2,
                                                    '2', 2]这种情况，需要进一步排序
                                                </p>
                                                <el-divider></el-divider>
                                                <el-button type="text"
                                                           @click="textForSort">测试</el-button>
                                                <p>测试结果:{{ JSON.stringify(finalForSortData) }}</p>
                                            </div>
                                        </el-collapse-item>
                                        <el-collapse-item name="5">
                                            <template slot="title">
                                                <i class="el-icon-scissors"
                                                   style="margin-right: 7px"></i>filter+indexOf
                                            </template>
                                            <div style="line-height: 40px">
                                                <p>
                                                    <code>
                                                        let arr1 = arr.filter((item, index, array) => array.indexOf(item) === index)
                                                    </code>
                                                </p>
                                                <el-divider></el-divider>
                                                <el-button type="text"
                                                           @click="textFilterIndexOf">测试</el-button>
                                                <p>
                                                    测试结果:{{ JSON.stringify(finalFilterIndexOfData) }}
                                                </p>
                                            </div>
                                        </el-collapse-item>
                                        <el-collapse-item name="6">
                                            <template slot="title">
                                                <i class="el-icon-scissors"
                                                   style="margin-right: 7px"></i>reduce+includes
                                            </template>
                                            <div style="line-height: 40px">
                                                <div class="codeBorder fontCodeStyle">
                                                    <pre class="codeBorder">
        let arr1 = arr.reduce((pre, cur) => {<br/>
            !pre.includes(cur) &amp;&amp; pre.push(cur);<br/>
            return pre<br/>
        }, [])
                                                    </pre>
                                                </div>
                                                <el-divider></el-divider>
                                                <el-button type="text"
                                                           @click="textReduceIncludes">测试</el-button>
                                                <p>
                                                    测试结果:{{ JSON.stringify(finalReduceIncludesData) }}
                                                </p>
                                            </div>
                                        </el-collapse-item>
                                    </el-collapse>
                                </el-card>
                            </div>
                            <div id="c36"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="../assets/light.png" />
                                    </div>
                                    <h4>数组深拷贝浅拷贝</h4>
                                </div>
                                <div class="fontIndent">
                                    <p>①什么是深拷贝和浅拷贝</p>
                                    <p>
                                        在js中，万物皆为对象，对象中分为原始类型和引用类型，原始类型保存在栈中引用类型保存在
                                        栈和堆中，其中指针保存在栈，指针指向的数据保存在堆中，故有：深拷贝不仅拷贝栈中数据还拷贝堆中数据；
                                        而浅拷贝只拷贝栈中数据，即指针。
                                    </p>
                                    <p>②如何实现深拷贝</p>
                                    <p class="code">
                                        深拷贝方法有：
                                        <code>slice、concat、map、es6扩展运算符实现、JOSN.stringify(JSON.parse(arr))</code>
                                    </p>
                                    <p class="code">
                                        除此之外还包括Object.assign()，但此方法只拷贝一级属性，二级属性仍然是浅拷贝。
                                    </p>
                                    <p>③手写深拷贝</p>
                                    <text-field content="方法一："></text-field>
                                    <div class="codeBorder fontCodeStyle">
                                        <pre class="codeBorder">
        function DeepClone(obj){<br/>
            //判断拷贝对象是，引用类数据类型还是基本数据类型<br/>
            if(typeof obj == 'object'){<br/>
                let result = obj.constructor == Array ? [] : {};<br/>
                for(let i in obj){<br/>
                result[i] = typeof obj[i] == 'object' ? DeepClone(obj[i]) : obj[i]<br/>
                }<br/>
            }else{<br/>
                let result = obj;<br/>
            }<br/>
            return result;<br/>
        }
            </pre>
                                    </div>
                                    <text-field content="方法二："></text-field>
                                    <div class="codeBorder fontCodeStyle">
                                        <pre class="codeBorder">
        function deepClone(obj){<br/>
            let objClone = Array.isArray(obj) ? [] : {};<br/>
            if(obj &amp;&amp; typeof obj === 'object'){<br/>
                for(let i in obj){<br/>
                if(obj[i] &amp;&amp; typeof obj[i] === 'object'){<br/>
                    objClone[i] = deepClone(obj[i]);<br/>
                }else{<br/>
                    objClone[i] = obj[i];<br/>
                }<br/>
                }<br/>
            }<br/>
            return objClone<br/>
        }
            </pre>
                                    </div>
                                </div>
                            </div>

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
import { highlightCode } from '../utils/common';
import TextField from '../components/textField.vue';
import catalog from '../components/catalog';
// import { Message } from "element-ui";
export default {
    components: {
        TextField,
        catalog,
    },
    data() {
        return {
            catalogHtmlData: [
                { index: 'c0', name: '1.数组篇', i: '0', title: true },
                { index: 'c1', name: 'push和pop', i: '1' },
                { index: 'c2', name: 'shift和unshift', i: '2' },
                { index: 'c3', name: 'concat', i: '3' },
                { index: 'c4', name: 'splice', i: '4' },
                { index: 'c5', name: 'slice', i: '5' },
                { index: 'c6', name: 'split', i: '6' },
                { index: 'c7', name: 'reverse', i: '7' },
                { index: 'c8', name: 'indexOf和lastindexOf', i: '8' },
                { index: 'c9', name: 'includes', i: '9' },
                { index: 'c10', name: 'fill', i: '10' },
                { index: 'c11', name: 'Array.from', i: '11' },
                { index: 'c12', name: 'keys、values、entries', i: '12' },
                { index: 'c13', name: 'map、forEach', i: '13' },
                { index: 'c14', name: 'filter', i: '14' },
                { index: 'c15', name: 'sort', i: '15' },
                { index: 'c16', name: 'every、some', i: '16' },
                { index: 'c17', name: 'find、findIndex', i: '17' },
                { index: 'c18', name: 'reduce', i: '18' },
                { index: 'c19', name: '2.字符串篇', i: '19', title: true },
                { index: 'c20', name: '查找字符串中的字符串', i: '20' },
                { index: 'c21', name: '提取部分字符串', i: '21' },
                { index: 'c22', name: '替换字符串内容', i: '22' },
                { index: 'c23', name: '字符串转换为大写/小写', i: '23' },
                { index: 'c24', name: '连接两个或多个字符串', i: '24' },
                { index: 'c25', name: '删除字符串两端的空白符', i: '25' },
                { index: 'c26', name: '提取字符串字符', i: '26' },
                { index: 'c37', name: '3.对象', i: '37', title: true },
                { index: 'c38', name: 'Object.assign', i: '38' },
                { index: 'c39', name: 'Object.create', i: '39' },
                { index: 'c27', name: '4.归纳', i: '27', title: true },
                { index: 'c28', name: '字符串转数组', i: '28' },
                { index: 'c29', name: '对象或数组转字符串', i: '29' },
                { index: 'c30', name: '比较两个数组是否相等', i: '30' },
                { index: 'c31', name: '数组中交换两个元素的位置', i: '31' },
                { index: 'c32', name: '数组中元素的删除', i: '32' },
                { index: 'c33', name: '查询数组中最大元素', i: '33' },
                { index: 'c34', name: '多个数组合并', i: '34' },
                { index: 'c35', name: '数组去重', i: '35' },
                { index: 'c36', name: '数组深拷贝浅拷贝', i: '36' },
            ],
            itemIndex: '',
            tabPosition: 'left',
            activeName: ['1'],
            textData: [1, 2, 32, 2, 'a', 'b', 'a', '2', 2, 10, 9],
            finalArrayFromSetData: [],
            finalForSpliceData: [],
            finalForIndexOfData: [],
            finalForSortData: [],
            finalFilterIndexOfData: [],
            finalReduceIncludesData: [],
            createList: {
                listTitle: '总结设置原型属性的方法：',
                routeList: [
                    {
                        data: `通过Object.create();`,
                    },
                    {
                        data: `直接利用__proto__设置：obj.__proto__.age = 12;`,
                    },
                    {
                        data: `直接利用构造函数设置：Object.prototype.age = 12;`,
                    },
                    {
                        data: `利用Es6的setPrototypeOf：Object.setPrototypeOf(obj, prototype)；此外与设置原型属性对应的获取原型属性方法：getPrototypeOf`,
                    },
                ],
            },
        };
    },
    mounted() {
        highlightCode();
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

        btnToArrayMethodUrl() {
            window.open('https://juejin.im/post/6844904025587089416');
        },

        toStringToArray() {
            this.itemIndex = 'c6';
            document.getElementById('c6').scrollIntoView();
        },

        toArrayFrom() {
            this.itemIndex = 'c11';
            document.getElementById('c11').scrollIntoView();
        },

        //利用Set进行数组去重
        textArrayFromSet() {
            this.finalArrayFromSetData = Array.from(new Set(this.textData));
        },

        //利用for+for+splice进行数组去重
        textForSplice() {
            let arr = this.textData;
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] === arr[j]) {
                        arr.splice(j, 1);
                        j--;
                    }
                }
            }
            this.finalForSpliceData = arr;
        },

        //利用for+indexOf进行数组去重
        textForIndexOf() {
            let arr = this.textData;
            let arr1 = [];
            for (let i of arr) {
                if (arr1.indexOf(i) === -1) {
                    arr1.push(i);
                }
            }
            this.finalForIndexOfData = arr1;
        },

        //利用for+sort进行数组去重
        textForSort() {
            let arr = this.textData;
            arr.sort((x, y) => x - y);
            let arr1 = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== arr[i + 1]) {
                    arr1.push(arr[i]);
                }
            }
            this.finalForSortData = arr1;
        },

        //利用filter+indexOf进行数组去重
        textFilterIndexOf() {
            let arr = this.textData;
            let arr1 = arr.filter(
                (item, index, array) => array.indexOf(item) === index
            );
            this.finalFilterIndexOfData = arr1;
        },

        // 利用reduce+includes进行数组去重
        textReduceIncludes() {
            let arr = this.textData;
            let arr1 = arr.reduce((pre, cur) => {
                !pre.includes(cur) && pre.push(cur);
                return pre;
            }, []);
            this.finalReduceIncludesData = arr1;
        },
    },
};
</script>

<style>
.learnArrayMethod {
    background-image: linear-gradient(#f5e5f8, white);
}

.fontTitle {
    font-size: 25px;
    font-family: 楷体;
    font-weight: bold;
}
</style>
