import Vue from 'vue';
import Vuex from 'vuex';
import http from './http_js/http';
import user from './user_js/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    http,
    user,
  },
});
