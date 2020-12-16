import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-eighties.css';

const highlightCode = () => {
    const block = document.querySelectorAll('pre');
    hljs.configure({ useBR: true });
    block.forEach((el) => {
        hljs.highlightBlock(el);
    });
};

export { highlightCode };
