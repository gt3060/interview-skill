import axios from 'axios';
const url = 'http://mock.studyinghome.com/mock/5fe3f9df23564445774b0676/interviewSkill/';
export default {
    promiseTestData({ commit }, data) {
        // 异步传参 方法返回第二个是所传的参数
        console.log("--------------------", commit, data)
        return (
            axios({
                url: url + 'promiseTestData',
                method: 'get'
            })
        )
    },
    promiseTestSiteCatalog({ commit }, data) {
        console.log(commit)
        return (
            axios({
                url: url + 'testSiteInterface',
                method: 'get',
                params: data,
            })
        )
    }
}
