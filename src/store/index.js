import Vue from 'vue'
import Vuex from 'vuex';
import state from './sates';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
