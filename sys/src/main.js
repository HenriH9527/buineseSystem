// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import App from './App';

import Header from './components/common/header';
import HomePage from './components/navComponent/homepage';
import ClientManage from './components/navComponent/clientmanage';
import OrderManage from './components/navComponent/ordermanage';
import MarketReport from './components/navComponent/marketreport';

Vue.config.productionTip = false;

Vue.component('my-header', Header);
Vue.component('my-home', HomePage);
Vue.component('chart', ECharts);
Vue.component('my-client', ClientManage);
Vue.component('my-order', OrderManage);
Vue.component('my-market', MarketReport);

Vue.use(Vuex);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
