import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueWebSocket from 'vue-native-websocket';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

const socketUrl = 'wss://test.relabs.ru/event';
const configuration = {
  store,
  format: 'json',
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
};
Vue.use(VueWebSocket, socketUrl, configuration);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
