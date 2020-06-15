import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    secondarymenuId: 0,
    navbarTitle: '',
    oldNavbarTitle: '',
    tabbarActive: '',
    oldTabbarActive: '',
    baseUrl: 'http://127.0.0.1:80',
  },
  mutations: {
    setToken(state: any, token: string): void {
      state.token = token;
      localStorage.setItem('token', token);
    },
    setSecondarymenuId(state: any, secondarymenuId: number): void {
      state.secondarymenuId = secondarymenuId;
    },
    setNavbarTitle(state: any, navbarTitle: string): void {
      state.oldNavbarTitle = state.navbarTitle;
      state.navbarTitle = navbarTitle;
    },
    setTabbarActive(state: any, tabbarActive: any) {
      state.oldTabbarActive = state.tabbarActive;
      state.tabbarActive = tabbarActive;
    },
  },
  actions: {
  },
  modules: {
  },
});
