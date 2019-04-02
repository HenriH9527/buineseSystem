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

//大客户
import BigClientHome from './components/bigClient/homepage';
import BigClientCommunity from './components/bigClient/community';
import BigClientControlSchool from './components/bigClient/controlschool';
import BigClientKindergarten from './components/bigClient/kindergarten';
import BigClientSchool from './components/bigClient/school';
import BigClientStatistic from './components/bigClient/statistic';
import BigClientNursery from './components/bigClient/nursery';
import Extends from './components/bigClient/child/extends';
import Cooperation from './components/bigClient/child/cooperation';
import CooperatOrganizatioin from './components/bigClient/cooperation';
import DataOfExtend from './components/bigClient/child/dataofextend';
import DataOfCooperation from './components/bigClient/child/dataofcooperation';

//外出体检
import OutWorkHome from './components/outwork/homepage';
import OutWorkSchool from './components/outwork/school';
import OutWorkKindergarten from './components/outwork/kindergarten';
import OutWorkNursery from './components/outwork/nursery';
import OutWorkControl from './components/outwork/controlschool';
import OutWorkstatistic from './components/outwork/statistic';
import Foot from './components/outwork/child/foot';
import Bone from './components/outwork/child/bone';
import SchoolFoot from './components/outwork/child/schoolfoot';
import SchoolBone from './components/outwork/child/schoolbone';
import StatisticFirst from './components/outwork/child/statisticfirst';
import StatisticSecond from './components/outwork/child/statisticsecond';

//修型车间
import ModifyHome from './components/modifymodule/homepage';
import ModifyWillAllot from './components/modifymodule/willallot';
import ModifywillValidate from './components/modifymodule/willvalidate';
import ModifyalreadyAllot from './components/modifymodule/alreadyallot';
import ModifyReject from './components/modifymodule/reject';
import ModifyStatistic from './components/modifymodule/statistic';

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

//大客户
Vue.component('big-home', BigClientHome);
Vue.component('big-nursery', BigClientNursery);
Vue.component('big-kindergarten', BigClientKindergarten);
Vue.component('big-school', BigClientSchool);
Vue.component('big-statistic', BigClientStatistic);
Vue.component('big-control', BigClientControlSchool);
Vue.component('big-community', BigClientCommunity);
Vue.component('big-extends', Extends);
Vue.component('big-cooperation', Cooperation);
Vue.component('big-cooperateOrganization', CooperatOrganizatioin);
Vue.component('big-dataOfExtend', DataOfExtend);
Vue.component('big-dataOfCooperation', DataOfCooperation);

//外出体检
Vue.component('outwork-home', OutWorkHome);
Vue.component('outwork-school', OutWorkSchool);
Vue.component('outwork-kindergarten', OutWorkKindergarten);
Vue.component('outwork-nursery', OutWorkNursery);
Vue.component('outwork-control', OutWorkControl);
Vue.component('outwork-statistic', OutWorkstatistic);
Vue.component('outwork-foot', Foot);
Vue.component('outwork-bone', Bone);
Vue.component('outwork-schoolfoot', SchoolFoot);
Vue.component('outwork-schoolbone', SchoolBone);
Vue.component('outwork-first', StatisticFirst);
Vue.component('outwork-second', StatisticSecond);

//修型
Vue.component('modify-home', ModifyHome);
Vue.component('modify-willallot', ModifyWillAllot);
Vue.component('modify-validate', ModifywillValidate);
Vue.component('modify-reject', ModifyReject);
Vue.component('modify-statistic', ModifyStatistic);
Vue.component('modify-alreadyallot', ModifyalreadyAllot);


Vue.use(Vuex);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
