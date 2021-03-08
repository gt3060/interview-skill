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
                        <img src="@/components/picture/test_two.jpeg"
                             alt=""
                             class="imgStyle" />
                    </div>
                    <div class="titleFontStyle">
                        <span style="font-size: 25px">js经典十大排序算法</span>
                        <el-divider></el-divider>
                        <p>此篇主要讲述十大排序算法（编写语言利用javascript）。</p>
                    </div>
                </div>
                <div style="display: flex">
                    <div style="width: 75%">
                        <div class="catalogStyle fontStyle">
                            <div style="display: flex">
                                <img src="@/assets/CONTENT DELIVERY.png"
                                     alt=""
                                     style="width: 24px; height: 24px; margin-top: 6px" />
                                <span style="font-size: 22px; font-weight: bold; margin-left: 10px">简介</span>
                            </div>
                            <text-field content="下面先上一张图，简单说一下十大排序的种类和时间空间复杂度，以及他的稳定性"></text-field>
                            <img src="@/assets/sortImg.png"
                                 style="width:70%"
                                 alt="" />
                            <text-field catalog
                                        title="时间复杂度"
                                        id="c4"
                                        content="字面意思，时间复杂度就是一段算法程序在运行环境下运行一遍所需要的时间，
                                                但是，不同性能的机器跑的算法运行时间不同，故统一采用一种通用的大O符号表示法（T(n)=O(f(n))),
                                                大O表示法并不是计算真实执行时间，而是用来表示代码执行时间的增长趋势，也叫做渐进时间复杂度。
                                                其中f(n)指的是每行代码执行次数之和，而O表示正比例关系。举个例子，以下面代码为例："
                                        fontSizeType="small">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        let sum = 0;<br/>
        for(let i = 1; i&lt;10; i++){<br/>
            sum = sum + 1;<br/>
        }
                                </pre>
                            </div>
                            <text-field content="上面这个代码中，执行单位按1单元时间（unit_time）表示，那么，第一行执行时间是1单元时间，
                                                第二行是n单元时间，第三行是n单元时间；最后执行整个程序的时间为：Tn=(1+2n)*，
                                                按照代码执行增长趋势来看，当n趋于无穷大时，常量1和倍数2就无足轻重
                                                （低阶/常量/系数并不左右增长趋势，所以只记录一个最大量级就可以），故可以简化为O(n)。"></text-field>
                            <text-field :list="timeComplex"></text-field>
                            <text-field content="再来看一张图片，更能直观看出每种时间复杂度的影响"></text-field>
                            <img src="@/assets/timeImg.jpg"
                                 style="width:70%"
                                 alt="" />
                            <text-field content="具体如下："></text-field>
                            <text-field title="常数阶O(1)；"
                                        fontSizeType="small"
                                        content="当某一块代码的执行不随某个变量增长而增长，即代码块中不存在循环等复杂操作，都用O(1)表示">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        let i = 10;<br/>
        i = i+1;<br/>
        j = i;<br/>
        j++;
                                </pre>
                            </div>
                            <text-field title="对数阶O(logN)"
                                        fontSizeType="small"
                                        content="结果来源：循环体最终执行x遍结果才大于等于n，假设就是等于n，
                                        那么i就需要乘以2^x = n，所以才有x = log2^n，所以时间复杂度为O(log2N)，但是我们知道无论是以
                                        2为底还是3/10，他们之间是可以相互转化的，log(a)b*log(b)n = log(a)n，故最终可简化位O(logN)">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        let i = 1;<br/>
        while(i&lt;n){<br/>
            i = i*2;<br/>
        }
                                </pre>
                            </div>
                            <text-field title="线性阶O(n)"
                                        fontSizeType="small"
                                        content="这个很常见于一层循环体，循环体内每行代码都执行n次(1)表示，就像上面的例子所描述。">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        let sum = 0;<br/>
        for(let i = 1; i&lt;10; i++){<br/>
            sum = sum + 1;<br/>
        }
                                </pre>
                            </div>
                            <text-field title="线性对数阶O(nlogN)"
                                        fontSizeType="small"
                                        content="这里，就是将线性阶和对数阶结合在一起，例如下面代码，每个while的时间复杂度为logN，每个for内的循环体为n，故最终为O(nlogN)">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        for(let i=1; i&lt;n; i++){<br/>
            let j = 1;<br/>
            while(j&lt;n){<br/>
                j = j*2;<br/>
            }<br/>
        }
                                </pre>
                            </div>
                            <text-field title="指数阶(2^n)"
                                        fontSizeType="small"
                                        content="指数阶的案例可以通过斐波那契数列来呈现(数列从第3项开始，每一项都等于前两项之和),
                                                举例：0，1，1，2，3，5，8，13，21，34...，如果把流程图画出来可以清晰发现是一个二叉树，
                                                那么节点数就是：2^(n-1)，故最坏的情况下时间复杂度为O(2^n)">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        funtion fib(n){<br/>
            if(n&lt;2){<br/>
                return;<br/>
            }<br/>
            return fib(n-1)+fib(n-2)<br/>
        }
                                </pre>
                            </div>
                            <text-field title="其余量级"
                                        fontSizeType="small"
                                        content="理解了上面的时间复杂度，那么其余的O(n*2)/O(n*3)/O(n*k)就很好理解了。就相当于2/3/个循环体，每个循环体的时间复杂度都为O(n)"></text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        for(let i=1; i&lt;n; i++){<br/>
            for(let j =1; j&lt;n; j++){<br/>
                for(let k = 1; k&lt;n; k++){<br/>
                    for(...)...<br/>
                }<br/>
            }<br/>
        }
                                </pre>
                            </div>
                            <text-field title="O(m+n)"
                                        fontSizeType="small"
                                        content="这种数据复杂度由两个数据的规模来决定，看如下代码">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        let sum = 0;<br/>
        for(let i = 1; i&lt;m; i++){<br/>
            sum = sum + 1;<br/>
        }<br/>
        let sum1 = 0;<br/>
        for(let i = 1; i&lt;n; i++){<br/>
            sum1 = sum1 + 1;<br/>
        }<br/>
        return sum + sum1;
                                </pre>
                            </div>
                            <text-field content="上面这个代码中可以看到，是由两个变量构成，而这两个变量是分不出哪个量级大，
                                                所以在判断时间复杂度时候就应该都写上，O(m+n)；乘法亦然。"></text-field>
                            <text-field :list="timeComplexSumUpList"></text-field>
                            <text-field catalog
                                        title="空间复杂度"
                                        id="c5"
                                        content="空间复杂度是对一个算法在运行过程中临时占用存储空间大小的一个量度，
                                                同样反映的是一个趋势，我们用 S(n) 来定义（S(n) = O(f(n)))，具体看几个例子：。"
                                        fontSizeType="small">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        let i = 10;<br/>
        i = i+1;<br/>
        j = i;<br/>
        j++;
                                </pre>
                            </div>
                            <text-field content="如果算法所需要的临时空间，不随某个变量n的变化而变化，
                                                即算法空间复杂度为O(1)，例如排序算法中选择排序，插入排序，冒泡排序；
                                                但如果算法如下：">
                            </text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        let i = 0;<br/>
        let arr = [];<br/>
        for(let i = 1; i&lt;n; i++){<br/>
            arr.push(i);<br/>
        }
                                </pre>
                            </div>
                            <text-field content="上面代码中，第一行申请了一个空间存储变量 i，但是它是常量阶的，跟数据规模 n 没有关系，所以我们可以忽略。
                                                数组的length会随着n的变化而变化，数据占用的大小为n，故此时他的
                                                空间复杂度为O(n)"></text-field>
                            <text-field content="还是以上面那个斐波那契例子为例，此时空间复杂度也为O(n)，因为递归的深度为n。"></text-field>
                            <text-field catalog
                                        title="平均情况时间复杂度"
                                        id="c6"
                                        content="理论上来讲，最好情况时间复杂度和最坏情况时间复杂度对应的都是极端情况下的代码复杂度，发生的概率其实并不大。
                                        为了更好地表示平均情况下的时间复杂度，需要进入一个新的概念：平均情况时间复杂度。"
                                        fontSizeType="small">
                            </text-field>
                            <text-field content="分析最简单的查找某个元素的算法，最好情况就是第一个位置就是要查的元素，最坏的就是最后一个位置，那么分系平均情况时间复杂度，
                                                一共出现的情况有n+1种（其中如果存在有n种，还有一种是不存在数组中。）。把每种情况累加除以n+1就是需要遍历元素个数的平均值，
                                                所以最终结果就是：(1+2+3+...+n+n)/(n+1) = n(n+3)/2(n+1)；所以这个算法的平均情况时间复杂度也为O(n)；
                                                不过此时有点问题:没有将各种情况发生的概率考虑进去。如果我们把每种情况发生的概率也考虑进去，那平均时间复杂度的计算过程就变成了这样:
                                                (1+2+3+...+n)1/2n+n*1/2（其中数组中与不在数组中的概率都为 1/2。另外，要查找的数据出现在 0～n-1 这 n 个位置的概率也是一样的，为 1/n）"></text-field>
                            <text-field content="再看一个例子："></text-field>
                            <div class="codeBorder fontCodeStyle">
                                <pre class="codeBorder">
        int[] array = new int[n];<br/>
        int count = 0;<br/>
        public void insert(int value) {<br/>
            // 数组已经存满，进行扩容操作，然后将之前的元素拷贝到新数组中<br/>
            if (count >= arr.length) {<br/>
                // 新建一个大小为之前数组2倍的新数组<br/>
                int[] arr2 = new int[2*arr.length];<br/>
                // 将之前数组中元素copy到新数组中<br/>
                for (int i = 0;i&lt;arr.length;i++) {<br/>
                    arr2[i] = arr[i];<br/>
                }<br/>
                // 将新数组赋值给原数组（扩容后的数组代替原来的数组）<br/>
                arr = arr2;<br/>
            }<br/>
            // 数组没满，直接将值插入到数组中即可<br/>
            arr[count] = value;<br/>
            count++;<br/>
        }
                                </pre>
                            </div>
                            <text-field content="这个代码作用就是，首先判断数组是否已经满了，
                                                如果没满直接插入，如果已经满了，需要先将数组中所有元素放到新数组，再进行插入。"></text-field>
                            <text-field content="具体分析：理想情况，没有满，直接插入，时间复杂度位O(1)；
                                                最坏情况，数组中没有空闲空间了，我们需要先做一次数组的遍历放到新数组，然后再将数据插入，所以最坏情况时间复杂度为 O(n);
                                                细心观察可以发现，每当经历n次时间复杂度为O(1)的操作时，便经历1次时间复杂度为O(n)的操作，有一定的时序规律，并且出现高级别复杂度的情况极少。我们将出现高级别的情况均摊到低级别复杂度的情况中，整个插入操作的时间复杂度就变为O(1)了
                                                这就是摊还分析的大致思想，也就是均摊时间复杂度。"></text-field>
                            <text-field conten="代码在绝大多数情况下是低级别复杂度，只有极少数情况是高级别复杂度，并且具有一定的时序规律，则用均摊时间复杂度分析。"></text-field>
                            <div style="display: flex">
                                <img src="@/assets/CONTENT DELIVERY.png"
                                     alt=""
                                     style="width: 24px; height: 24px; margin-top: 6px" />
                                <span style="font-size: 22px; font-weight: bold; margin-left: 10px">内容</span>
                            </div>
                            <el-divider></el-divider>
                            <div style="margin: 20px 0px">
                                <div>以下所有示例均根据[3, 1, 5, 7, 2, 4, 9, 6, 10, 8]</div>
                            </div>
                            <div id="c0"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png"
                                             alt="" />
                                    </div>
                                    <h4>冒泡排序</h4>
                                </div>
                                <div class="fontIndent">
                                    <el-button type="text"
                                               @click="btnBubbleSort">普通冒泡排序测试</el-button>
                                    <el-button type="text"
                                               @click="btnBubbleSortOptimization">优化冒泡排序测试1</el-button>
                                    <div>
                                        <el-button type="text"
                                                   @click="btnBubbleSort('nomal')">普通冒泡排序测试</el-button>
                                        <el-button type="text"
                                                   @click="bubbleSortOptimization">优化冒泡排序测试2</el-button>
                                    </div>
                                    <p>测试结果：{{ newData }}----执行几次{{newDataIndex}}</p>
                                    <p>测试代码：</p>
                                    <img src="@/assets/bubble_res.jpg"
                                         alt=""
                                         width="90%" />
                                    <text-field content="那么，冒泡排序方法可以优化么，答案当然是可以的，
                                                        如果在遍历第i遍就已经排好序，则不需要在进行i+1的遍历，那么优化算法是
                                                        利用一个标志位flag，加以实现，如优化代码一
                                                        (这种优化仅仅适用于连片有序而整体无序的数据(例如：1， 2，3 ，4 ，7，6，5))。"></text-field>
                                    <p>优化代码一</p>
                                    <img src="@/assets/sortOptimization.png"
                                         alt=""
                                         width="90%" />
                                    <text-field content="除了上面这个待优化问题外，还有一种情况，对于前面大部分是无序而后边小半部分有序的数据
                                                        (1，2，5，7，4，3，6，8，9，10)排序效率也不可观，这种情况，我们可以
                                                        记下本次遍历最后一次交换的位置，仍然利用标记位，标记位后面的没有交换必然是有序的。"></text-field>
                                    <p>优化代码二</p>
                                    <img alt=""
                                         src="@/assets/optimizationTwo.jpg"
                                         width="90%" />
                                </div>
                            </div>
                            <text-field fontSizeType="small"
                                        title="应用场景"
                                        content="若待排序的序列基本有序，则可以选择冒泡排序，稳定性良好，但不适合大规模无序序列的排序。"></text-field>
                            <div id="c3"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png"
                                             alt="" />
                                    </div>
                                    <h4>选择排序</h4>
                                </div>
                                <div class="fontIndent">
                                    <div>
                                        <el-button type="text"
                                                   @click="btnSelectSort">选择排序测试</el-button>
                                    </div>
                                    <div>
                                        <p>
                                            首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
                                            然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
                                        </p>
                                        <p>测试结果：{{ newSelectData }}</p>
                                    </div>
                                    <div>
                                        <p>测试代码：</p>
                                    </div>
                                    <img src="@/assets/select_res.jpg"
                                         alt=""
                                         width="90%" />
                                    <div>
                                        <p>选择排序和冒泡排序区别：</p>
                                        <ul>
                                            <li>
                                                冒泡排序:从左到右，数组中相邻的两个元素进行比较，将较大的放到后面。
                                            </li>
                                            <li>
                                                选择排序：从第一个位置开始比较，找出最小的，和第一个位置互换，开始下一轮。
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <text-field fontSizeType="small"
                                        title="应用场景"
                                        content="数据规模较小时，性能较好。"></text-field>
                            <div id="c2"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png"
                                             alt="" />
                                    </div>
                                    <h4>插入排序</h4>
                                </div>
                                <div class="fontIndent">
                                    <el-button type="text"
                                               @click="btnInsertSort">插入排序测试</el-button>
                                    <p>从第二个元素开始，直接插入到前面有序数组中</p>
                                    <p>测试结果：{{ newInsertData }}</p>
                                    <p>测试代码：</p>
                                    <img src="@/assets/insert_res.jpg"
                                         alt=""
                                         width="90%" />
                                </div>
                            </div>
                            <text-field content="相等的两个元素 A[i] = A[j]，无论从那边开始，与当前元素相等的都放在当前元素的后边，
                                                即保证了 i < j，所以是稳定排序。"></text-field>
                            <text-field fontSizeType="small"
                                        title="应用场景"
                                        content="数据规模较小且基本有序，选用插入排序。"></text-field>
                            <text-field catalog
                                        title="希尔排序"
                                        id="c7"
                                        content="在插入排序的算法的基础上作出改进，将序列按照增量分割成多个子数组，然后分别对这些子数组进行插入排序。看下面这个图更能直观理解希尔排序"
                                        fontSizeType="small">
                            </text-field>
                            <img src="@/assets/xierSortImg.jpg"
                                 alt=""
                                 width="90%" />
                            <text-field :list="xierList"></text-field>
                            <text-field isBtn
                                        btnText="希尔排序"
                                        :btnMethod="xierSort"></text-field>
                            <text-field :content="xierSortData"></text-field>
                            <img src="@/assets/xierSort.jpg"
                                 alt=""
                                 width="90%" />
                            <text-field fontSizeType="small"
                                        title="应用场景"
                                        content="数据量较小且基本有序时"></text-field>
                            <text-field catalog
                                        title="归并排序"
                                        id="c8"
                                        content="归并排序是用分治思想，分治模式主要有：分解、合并"
                                        fontSizeType="small">
                            </text-field>
                            <text-field content="分解：利用递归将当前数组分割成两半"></text-field>
                            <text-field content="集成合并：从最小数组开始，两两按大小顺序合并，直到并为原始数组大小"></text-field>
                            <text-field isBtn
                                        btnText="归并排序"
                                        :btnMethod="guiBingSort"></text-field>
                            <text-field :content="mergeSortData"></text-field>
                            <img alt=""
                                 src="@/assets/mregeSort.jpg"
                                 width="90%" />
                            <text-field fontSizeType="small"
                                        title="应用场景"
                                        content="数据量较大且要求排序稳定"></text-field>
                            <div id="c1"
                                 style="margin: 20px 0px">
                                <div style="display: flex">
                                    <div style="margin: 6px 7px 0px 0px">
                                        <img src="@/assets/light.png"
                                             alt="" />
                                    </div>
                                    <h4>快速排序</h4>
                                </div>
                                <div class="fontIndent">
                                    <div>
                                        <el-button type="text"
                                                   @click="btnQuickSort">快速排序测试</el-button>
                                    </div>
                                    <p>测试结果：{{ newQuickData }}</p>
                                    <div>
                                        <p>
                                            首先找到一个中间值，然后遍历第一次将所有小于中间值放在left数组，将所有大于中间值放到right数组，最后利用递归思想循环。
                                        </p>
                                        <p>测试代码：</p>
                                    </div>
                                    <img src="@/assets/quick_res.jpg"
                                         width="90%"
                                         alt="" />
                                </div>
                            </div>
                            <text-field fontSizeType="small"
                                        title="应用场景"
                                        content="快速排序适合处理大量数据排序时的场景。"></text-field>
                            <text-field catalog
                                        title="堆排序"
                                        id="c9"
                                        content="堆排序是利用堆这种数据结构而设计的排序算法，堆排序是一种选择排序，下面先简单介绍一下堆的概念："
                                        fontSizeType="small"></text-field>
                            <text-field content="堆是完全二叉树，每个节点的值都大于或等于其左右孩子节点的值，称为大顶堆；
                                                    或者每个节点的值都小于或者等于其左右孩子节点的值，这种情况称为小顶堆。"></text-field>
                            <text-field :list="heapSortList"></text-field>
                            <text-field isBtn
                                        btnText="堆排序"
                                        :btnMethod="heapSort"></text-field>
                            <text-field :content="mergeHeapData"></text-field>
                            <text-field :content="mergeNewData"></text-field>
                            <text-field content="复杂度分析:因为具有n个结点的完全二叉树的深度为[log2n]+1，
                                                所以 shiftDown的复杂度为 O(logn)，而外层循环共有 f(n) 次，
                                                所以最终的复杂度为 O(nlogn)。"></text-field>
                            <img alt=""
                                 src="@/assets/heapSortCode.jpg"
                                 width="90%" />
                            <text-field catalog
                                        title="计数排序"
                                        id="c10"
                                        content="计数排序是一种非比较类排序 它的时间复杂度为O(n+k), k是最大值与最小值的差值；
                                                计数排序快于任何一种比较排序算法，但是它为此牺牲了空间"
                                        fontSizeType="small"></text-field>
                            <text-field isBtn
                                        btnText="计数排序"
                                        :btnMethod="countSort"></text-field>
                            <text-field content="以 [ 1, 3, 8, 1, 4, 2, 1, 3, 6, 8, 9, 2 ] 数组为例："></text-field>
                            <text-field :content="countNewData"></text-field>
                            <text-field :list="countList"></text-field>
                            <img src="@/assets/countCode.png"
                                 alt=""
                                 width="90%" />
                            <text-field catalog
                                        title="桶排序"
                                        id="c11"
                                        content="桶排序是将待排数组按照是否在同一值域的前提进行分配，也就是根据元素值特性将集合
                                                拆分为多个区域，拆分后形成多个桶，从桶的值域排序上来看，是处于有序状态的，因此接着
                                                堆每个桶进行排序，则所有桶中元素构成的集合也是有序的。"
                                        fontSizeType="small">
                            </text-field>
                            <text-field content="桶排序是对计数排序的一种改进，计数排序申请的空间是从最小值到最大值，如果待排序列并不是依次递增，则很明显会造成资源浪费；
                                                桶排序则是在最小值和最大值期间每一个固定区间申请空间，尽量减少元素值大小不连续情况所造成的空间浪费。"></text-field>
                            <text-field :list="bucketData"></text-field>
                            <text-field isBtn
                                        btnText="桶排序"
                                        :btnMethod="bucketSort"></text-field>
                            <text-field content="以 [ 29, 25, 3, 49, 9, 37, 21, 43 ]  数组为例："></text-field>
                            <text-field :content="bucketNewData"></text-field>
                            <img alt=""
                                 src="@/assets/bucketSortCode.png"
                                 width="90%" />
                            <text-field catalog
                                        title="基数排序"
                                        id="c12"
                                        content="基数排序是一种非比较型的整数排序算法。其基本原理是，按照整数的每个位数分组。在分组过程中，对于不足位的数据用0补位。"
                                        fontSizeType="small">
                            </text-field>
                            <text-field :list="radixData"></text-field>
                            <text-field isBtn
                                        btnText="基数排序"
                                        :btnMethod="radixSort"></text-field>
                            <text-field content="以 [ 170, 45, 75, 90, 802, 2, 24, 66 ]  数组为例："></text-field>
                            <text-field :content="radixNewData"></text-field>
                            <img alt=""
                                 src="@/assets/radixSortCode.jpg"
                                 width="90%" />
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
export default {
    components: {
        TextField,
        catalog,
    },
    data() {
        return {
            catalogHtmlData: [
                { index: 'c4', name: '时间复杂度', i: '4' },
                { index: 'c5', name: '空间复杂度', i: '5' },
                { index: 'c6', name: '平均情况时间复杂度', i: '6' },
                { index: 'c0', name: '1.冒泡排序', i: '0' },
                { index: 'c3', name: '2.选择排序', i: '3' },
                { index: 'c2', name: '3.插入排序', i: '2' },
                { index: 'c7', name: '4.希尔排序', i: '7' },
                { index: 'c8', name: '5.归并排序', i: '8' },
                { index: 'c1', name: '6.快速排序', i: '1' },
                { index: 'c9', name: '7.堆排序', i: '9' },
                { index: 'c10', name: '8.计数排序', i: '10' },
                { index: 'c11', name: '9.桶排序', i: '11' },
                { index: 'c12', name: '10.基数排序', i: '12' },
            ],
            itemIndex: '',
            oldData: [3, 1, 5, 7, 2, 4, 9, 6, 10, 8],
            newData: [],
            newDataIndex: 0,
            newQuickData: [],
            newInsertData: [],
            newSelectData: [],
            newXierSortData: [],
            newMergeSortData: [],
            initHeapData: [],
            newHeapData: [],
            newCountData: [],
            newBucketData: [],
            newRadixData: [],
            timeComplex: {
                listTitle:
                    '常见的时间复杂度量级有（按时间复杂度从小到大排序）：',
                routeList: [
                    {
                        data: `常数阶O(1)；`,
                    },
                    {
                        data: `对数阶O(logN)；`,
                    },
                    {
                        data: `线性阶O(n)；`,
                    },
                    {
                        data: `线性对数阶O(nlogN)；`,
                    },
                    {
                        data: `平方阶O(n²)`,
                    },
                    {
                        data: `立方阶O(n³)`,
                    },
                    {
                        data: `K次方阶O(n^k)`,
                    },
                    {
                        data: `指数阶(2^n)`,
                    },
                ],
            },
            timeComplexSumUpList: {
                listTitle: '总结：如何分析一段代码的时间复杂度',
                routeList: [
                    {
                        data: `只关注循环执行次数最多的一段代码：因为我们通常会忽略低阶/常数/系数，只记录最大阶的量级；`,
                    },
                    {
                        data: `乘法法则：嵌套代码的复杂度等于嵌套内外代码的复杂度的乘积，类似嵌套循环。`,
                    },
                ],
            },
            xierList: {
                listTitle: '下面代码按照js进行实现，先加以说明：',
                routeList: [
                    {
                        data: `希尔排序本质上是一种插入排序算法；`,
                    },
                    {
                        data: `希尔排序是对直接插入排序的一种优化，对于一些不太友好的数据，先大体按照gap进行分组；
                                （直接插入排序是按照1的分组进行插入排序）；`,
                    },
                    {
                        data: `gap是一个变化的量，gap的取值有很多，通常认为gap的取值位3*i+1，也就是说当G = [1，4，13，40...]
                                等数据时候，时候会使得时间复杂度降到O(N^1.25)，为最佳。`,
                    },
                    {
                        data: `稳定性描述：分组的本身可能会影响到两个相等元素的排序变化，所以为不稳定排序。`,
                    },
                ],
            },
            heapSortList: {
                listTitle: '总结堆排序的具体方法',
                routeList: [
                    {
                        data: `先将无序数组按照升序/降序的条件调整为大顶堆/小顶堆；`,
                    },
                    {
                        data: `将堆顶元素与末尾元素互换，将最大/小的元素沉底到数组末端；`,
                    },
                    {
                        data: `重新调整解构，使其满足堆定义，继续重复前两个步骤，直至整个序列有序。`,
                    },
                ],
            },
            countList: {
                listTitle: '归纳计数排序',
                routeList: [
                    {
                        data: `当输入的元素是n个0到k之间的整数时,时间复杂度是O(n+k),空间复杂度也是O(n+k),其排序速度快于任何比较排序算法.`,
                    },
                    {
                        data: `当k不是很大并且序列比较集中时,计数排序是一个很有效的排序算法`,
                    },
                    {
                        data: `计数排序的缺点是当最大值最小值差距过大时,不适用计数排序,当元素不是整数值,不适用计数排序.`,
                    },
                ],
            },
            bucketData: {
                listTitle: '桶排序过程中存在的两个步骤：',
                routeList: [
                    {
                        data: `元素值域的划分：需要根据待排序的特性进行选择，既不能出现所有元素都映射在同一个桶上，也不能出现每个元素都映射在不同桶上的极端情况。`,
                    },
                    {
                        data: `排序算法的选择：在对每个桶内元素进行排序时候，可以自主选择合适的排序算法，故桶排序算法的复杂度和稳定性都根据具体排序算法而定。`,
                    },
                ],
            },
            radixData: {
                listTitle: '实现过程如下：',
                routeList: [
                    {
                        data: `首先找到最大值，然后获取最大值的位数，这个决定最终循环几次；`,
                    },
                    {
                        data: `接着，初始化10个桶，分别代表每一位中0-9的10种可能性；`,
                    },
                    {
                        data: `第一次遍历，个位，个位数字是几，就将这个数据放到几号桶种；遍历结束后，再将元素从桶中取出覆盖原有数组，`,
                    },
                    {
                        data: `接着进行第二次、第三次、第n次遍历，直至循环结束；`,
                    },
                ],
            },
        };
    },
    computed: {
        xierSortData: function () {
            return `测试结果：[ ${this.newXierSortData} ]`;
        },
        mergeSortData: function () {
            return `测试结果：[ ${this.newMergeSortData} ]`;
        },
        mergeHeapData() {
            return `初始化为大顶堆的结果：[ ${this.initHeapData} ]`;
        },
        mergeNewData() {
            return `测试结果：[ ${this.newHeapData} ]`;
        },
        countNewData() {
            return `测试结果：[ ${this.newCountData} ]`;
        },
        bucketNewData() {
            return `测试结果：[ ${this.newBucketData} ] `;
        },
        radixNewData() {
            return `测试结果：[ ${this.newRadixData} ]`;
        },
    },
    mounted() {
        highlightCode();
        window.addEventListener('mousewheel', this.btnoffsetHeight, false);
    },
    methods: {
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

        //冒泡排序
        btnBubbleSort(type) {
            let oldData = type ? [1, 2, 5, 7, 4, 3, 6, 8, 9, 10] : this.oldData;
            this.newDataIndex = 0;
            for (let i = 0; i < oldData.length; i++) {
                for (let j = oldData.length - 1; j > i; j--) {
                    if (oldData[j] > oldData[j - 1]) {
                        [oldData[j - 1], oldData[j]] = [
                            oldData[j],
                            oldData[j - 1],
                        ];
                        this.newDataIndex++;
                    }
                }
            }
            this.newData = oldData;
        },

        // 优化冒泡算法一：
        btnBubbleSortOptimization() {
            let oldData = [10, 9, 8, 7, 6, 5, 4, 3, 1, 2];
            this.newDataIndex = 0;
            for (let i = 0; i < oldData.length; i++) {
                let flag = 1;
                for (let j = oldData.length - 1; j > i; j--) {
                    if (oldData[j] < oldData[j - 1]) {
                        [oldData[j - 1], oldData[j]] = [
                            oldData[j],
                            oldData[j - 1],
                        ];
                        flag = 0;
                        this.newDataIndex++;
                    }
                }
                if (flag === 1) {
                    this.newData = oldData;
                    return;
                }
            }
            this.newData = oldData;
        },

        // 优化冒泡算法二：
        bubbleSortOptimization() {
            let oldData = [1, 2, 5, 7, 4, 3, 6, 8, 9, 10];
            this.newDataIndex = 0;
            let pos = 0;
            let k = oldData.length - 1;
            for (let i = 0; i < oldData.length; i++) {
                let flag = 1;
                pos = 0;
                for (let j = 0; j < k; j++) {
                    if (oldData[j] > oldData[j + 1]) {
                        [oldData[j + 1], oldData[j]] = [
                            oldData[j],
                            oldData[j + 1],
                        ];
                        flag = 0;
                        pos = j;
                        this.newDataIndex++;
                    }
                }
                k = pos;
                if (flag === 1) {
                    this.newData = oldData;
                    return;
                }
            }
            this.newData = oldData;
        },

        btnQuickSort() {
            let [...oldData] = this.oldData;
            this.newQuickData = this.quickSort(oldData);
        },

        //快速排序
        quickSort(ele) {
            if (ele.length <= 1) {
                return ele;
            }
            let pivotIndex = Math.floor(ele.length / 2);
            let pivot = ele.splice(pivotIndex, 1)[0];

            let left = [];
            let right = [];
            for (let i = 0; i < ele.length; i++) {
                if (ele[i] < pivot) {
                    left.push(ele[i]);
                } else {
                    right.push(ele[i]);
                }
            }
            return this.quickSort(left).concat([pivot], this.quickSort(right));
        },

        //插入排序
        btnInsertSort() {
            let oldData = this.oldData;
            for (let i = 1; i < oldData.length; i++) {
                if (oldData[i] < oldData[i - 1]) {
                    let j = i - 1;
                    let cur = oldData[i];
                    while (j >= 0 && cur < oldData[j]) {
                        oldData[j + 1] = oldData[j];
                        j--;
                    }
                    oldData[j + 1] = cur;
                }
            }
            this.newInsertData = oldData;
        },

        //选择排序
        btnSelectSort() {
            let oldData = this.oldData;
            for (let i = 0; i < oldData.length; i++) {
                for (let j = i + 1; j < oldData.length; j++) {
                    if (oldData[j] < oldData[i]) {
                        [oldData[i], oldData[j]] = [oldData[j], oldData[i]];
                    }
                }
            }
            this.newSelectData = oldData;
        },

        // 希尔排序
        xierSort() {
            let oldData = this.oldData;
            let len = oldData.length;
            let gap = 1;
            while (gap < len / 3) {
                gap = gap * 3 + 1;
            }
            for (gap; gap > 0; gap = Math.floor(gap / 3)) {
                for (let i = gap; i < len; i++) {
                    let j = i - gap;
                    let temp = oldData[i];
                    for (j; j >= 0 && oldData[j] > temp; j -= gap) {
                        oldData[j + gap] = oldData[j];
                    }
                    oldData[j + gap] = temp;
                }
            }
            this.newXierSortData = oldData;
        },
        guiBingSort() {
            let oldData = this.oldData;
            this.newMergeSortData = this.mergeSort(oldData);
        },

        // 归并排序之分解
        mergeSort(arr) {
            if (arr.length <= 1) {
                return arr;
            }
            let middle = Math.floor(arr.length / 2);
            let left = arr.slice(0, middle);
            let right = arr.slice(middle);
            return this.merge(this.mergeSort(left), this.mergeSort(right));
        },

        // 归并排序之合并
        merge(leftArr, rightArr) {
            let res = [];
            while (leftArr.length > 0 && rightArr.length > 0) {
                if (leftArr[0] < rightArr[0]) {
                    res.push(leftArr.shift());
                } else {
                    res.push(rightArr.shift());
                }
            }
            return res.concat(leftArr, rightArr);
        },

        // 堆处理
        heapShift(arr, len, length) {
            // 三个参数分别代表 arr：排序数组，length：待排序数组长度，len：表示从根节点开始调整
            for (let j = 2 * len + 1; j < length; j = j * 2 + 1) {
                if (j + 1 < length && arr[j] < arr[j + 1]) {
                    j++; // 用来判断子节点中数据较大的那个节点
                }
                if (arr[len] < arr[j]) {
                    [arr[len], arr[j]] = [arr[j], arr[len]];
                    len = j;
                } else {
                    break;
                }
            }
        },

        // 堆排序
        heapSort() {
            let [...oldData] = this.oldData;
            let length = oldData.length;
            let len = Math.floor(length / 2) - 1; // 找到第一个非叶子节点

            // 初始化大顶堆
            for (len; len >= 0; len--) {
                this.heapShift(oldData, len, length);
            }
            [...this.initHeapData] = oldData; // 此行只用来记录首次初始化结果

            // 排序，这里的i表示数组的长度，故循环了n次
            for (let i = oldData.length - 1; i > 0; i--) {
                [oldData[0], oldData[i]] = [oldData[i], oldData[0]]; // 先将大顶堆最大值（最上面值）和最后一个值交换
                this.heapShift(oldData, 0, i);
            }
            [...this.newHeapData] = oldData; // 次行记录最终排序结果
        },

        // 计数排序
        countSort() {
            let oldData = [1, 3, 8, 1, 4, 2, 1, 3, 6, 8, 9, 2];
            let max = Math.max(...oldData);
            let min = Math.min(...oldData);
            let arr = []; // 定义一个空数组
            // 将待排序数组按照所出现的频率进行重装---计数
            for (let i = 0; i < oldData.length; i++) {
                let temp = oldData[i];
                arr[temp] = arr[temp] + 1 || 1;
            }
            let index = 0;
            for (let i = min; i <= max; i++) {
                while (arr[i] > 0) {
                    oldData[index] = i;
                    index++;
                    arr[i]--;
                }
            }
            this.newCountData = oldData;
        },

        // 桶排序(bucketNumber为桶的数量)
        bucketSort(e, bucketNumber = 5) {
            let oldData = [29, 25, 3, 49, 9, 37, 21, 43];
            let max = Math.max(...oldData);
            let min = Math.min(...oldData);
            let bucketCount = Math.floor((max - min) / bucketNumber) + 1; // 用来定义每个桶的取值范围
            let arr = []; //定义一个空数组
            for (let i = 0; i < bucketNumber; i++) {
                arr[i] = []; // 初始化每个桶
            }
            for (let i = 0; i < oldData.length; i++) {
                arr[Math.floor((oldData[i] - min) / bucketCount)].push(
                    oldData[i]
                ); // 把数组中每个元素分别放入对应的桶中
            }
            let newData = [];
            for (let i = 0; i < arr.length; i++) {
                let temp = this.sort(arr[i]); // 根据当前性能酌情考虑使用哪种排序算法；
                for (let j = 0; j < temp.length; j++) {
                    newData.push(temp[j]); // 将每个桶中的数据依次取出
                }
            }
            this.newBucketData = newData;
        },

        sort(oldData) {
            for (let i = 0; i < oldData.length; i++) {
                for (let j = oldData.length - 1; j > i; j--) {
                    if (oldData[j] < oldData[j - 1]) {
                        [oldData[j - 1], oldData[j]] = [
                            oldData[j],
                            oldData[j - 1],
                        ];
                    }
                }
            }
            return oldData;
        },

        // 基数排序
        radixSort() {
            let oldData = [170, 45, 75, 90, 802, 2, 24, 66];
            // 获取数组中最大的元素
            let max = Math.max(...oldData);
            // 获取最大元素的位数
            let times = 0;
            while (max >= 1) {
                max = max / 10;
                times++;
            }
            // 初始化十个桶
            let arr = [];
            for (let i = 0; i < 10; i++) {
                arr[i] = [];
            }
            // 进行每一位的遍历
            for (let i = 0; i < times; i++) {
                // i是每次遍历
                for (let j = 0; j < oldData.length; j++) {
                    // j指向每次遍历的oldData的每个元素
                    arr[Math.floor((oldData[j] / Math.pow(10, i)) % 10)].push(
                        oldData[j]
                    ); // 入桶
                }
                let m = 0; // m指向取值重新赋给oldData的位置
                for (let j = 0; j < 10; j++) {
                    // j指向遍历每个桶
                    let bucket = arr[j];
                    for (let k = 0; k < bucket.length; k++) {
                        // k指向每个桶遍历出的每个元素
                        oldData[m] = bucket[k];
                        m++;
                    }
                    bucket.length = 0;
                }
            }
            this.newRadixData = oldData;
        },
    },
    destroyed() {
        window.removeEventListener('mousewheel', this.btnoffsetHeight, false);
    },
};
</script>

<style scoped>
.learnVue {
    background-image: linear-gradient(#faedf9, white);
}
</style>
