import axios from 'axios';
const url = 'https://www.fastmock.site/mock/5fbc0b1f0b43faebea99f608e0064df8/interviewSkill/';
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
    },
    testActionData({ commit, state }) {
        commit('add');
        console.log(state.count)
    }
}
