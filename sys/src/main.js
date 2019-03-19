// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import App from './App';
// 支具室
import Header from './components/common/header';
import HomePage from './components/navComponent/homepage';
import ClientManage from './components/navComponent/clientmanage';
import OrderManage from './components/navComponent/ordermanage';
import MarketReport from './components/navComponent/marketreport';

//取型
import TakeHome from './components/taketype/homepage';
import AlreadyReject from './components/taketype/alreadyreject';
import Receive from './components/taketype/receive';
import Statistics from './components/taketype/statistics';
import WillReceive from './components/taketype/willreceive';
import WillSelfTest from './components/taketype/willselftest';

// 前台
import FrontHome from './components/frontdesk/homepage';
import FrontClient from './components/frontdesk/clientmanage';
import FrontOrder from './components/frontdesk/ordermanage';
import FrontStatistic from './components/frontdesk/statistic';
import FrontReceive from './components/frontdesk/alreadyreceive';



Vue.config.productionTip = false;

Vue.component('my-header', Header);
// 支具室
Vue.component('my-home', HomePage);
Vue.component('chart', ECharts);
Vue.component('my-client', ClientManage);
Vue.component('my-order', OrderManage);
Vue.component('my-market', MarketReport);

// 取型
Vue.component('take-home', TakeHome);
Vue.component('take-alreadyReject', AlreadyReject);
Vue.component('take-receive', Receive);
Vue.component('take-statistics', Statistics);
Vue.component('take-willReceive', WillReceive);
Vue.component('take-willSelfTest', WillSelfTest);

// 前台
Vue.component('front-home', FrontHome);
Vue.component('front-client', FrontClient);
Vue.component('front-order', FrontOrder);
Vue.component('front-statistic', FrontStatistic);
Vue.component('front-receive', FrontReceive);

Vue.use(Vuex);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
