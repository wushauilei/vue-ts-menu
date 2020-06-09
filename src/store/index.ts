import Vue from 'vue';
import Vuex from 'vuex';
import RecommendData from '@/model/RecommendData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    baseUrl: 'http://127.0.0.1:80',
  },
  mutations: {
    setToken(state: any, token: string): void {
      state.token = token;
      localStorage.setItem('token', token);
    },
  },
  actions: {
  },
  modules: {
  },
});
