import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-eighties.css';

const highlightCode = () => {
    const block = document.querySelectorAll('pre');
    hljs.configure({ useBR: true });
    block.forEach((el) => {
        hljs.highlightBlock(el);
    });
};
const btnoffsetHeight = (catalogData) => {
    let selectData = '';
    for (let k in catalogData) {
        let height =
            document.getElementById(catalogData[k].index)
                .offsetTop - document.documentElement.scrollTop;
        if (height < 0) {
            selectData = catalogData[k].index;
        }
        if (height >= 0 && height < 40) {
            selectData = catalogData[k].index;
            break;
        }
    }
    selectData !== '' && handleCatalog(selectData);
};

const handleCatalog = (data) => {
    // data.substring(1)作用就是防止id重复
    document.getElementById(data.substring(1)).scrollIntoView();
    return data;
};
let timer = null;

function debounce(fn, delay) {
    // 获取函数的作用域和变量
    let context = this;
    let args = arguments;
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        fn.apply(context, args);
    }, delay);
}
let prevDate = Date.now();
function throttle(fn, delay) {
    let context = this;
    let newDate = Date.now();
    let args = arguments;
    if (newDate - prevDate >= delay) {
        fn.apply(context, args);
        prevDate = newDate
    }
}

let timerThrottle = null;
function throttleTimer(fn, delay) {
    let context = this;
    let args = arguments;
    if (!timerThrottle) {
        timerThrottle = setTimeout(() => {
            fn.apply(context, args);
            timerThrottle = null
        }, delay);
    }
}
let testName = 234;
export default testName;

export {
    highlightCode,
    btnoffsetHeight,
    handleCatalog,
    debounce,
    throttle,
    throttleTimer,
};
