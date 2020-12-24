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

export { highlightCode, btnoffsetHeight, handleCatalog };
