import axios from 'axios';
const url = 'http://mock.studyinghome.com/mock/5fe3f9df23564445774b0676/interviewSkill/';

export default {
    promiseTestData() {
        return (
            axios({
                url: url + 'promiseTestData',
                method: 'get'
            })
        )
    }
}
