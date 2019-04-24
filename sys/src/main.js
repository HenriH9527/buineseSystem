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

// common
import Header from './components/common/header';
import Vheader from './components/common/vheader';

// 支具室
import HomePage from './components/navComponent/homepage';
import ClientManage from './components/navComponent/clientmanage';
import OrderManage from './components/navComponent/ordermanage';
import MarketReport from './components/navComponent/marketreport';
import MemberReport from './components/navComponent/memberreport';
import Log from './components/navComponent/log';

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

//加工车间
import ProcessHome from './components/process/homepage';
import ProcessFirWillAllot from './components/process/firwillallot';
import ProcessFirAlready from './components/process/firalready';
import ProcessFirReject from './components/process/firreject';
import ProcessSecWillAllot from './components/process/secwillallot';
import ProcessSecAlready from './components/process/secalready';
import ProcessSecReject from './components/process/secreject';
import ProcessStatistic from './components/process/statistic';

//质检部
import QualityHome from './components/quality/homepage';
import QualityAllValidate from './components/quality/allvalidate';
import QualityHalfValidate from './components/quality/halfvalidate';
import QualityReject from './components/quality/reject';
import QualityWillValidate from './components/quality/willvalidate';
import QualityAlreadyValidate from './components/quality/alreadyvalidate';
import QualityStatistic from './components/quality/statistic';
import QualityModifyValidate from './components/quality/modifyvalidate';

//测评
import EvaluationHome from './components/evaluation/homepage';
import EvaluationWillReceive from './components/evaluation/willreceive';
import EvaluationReceive from './components/evaluation/receive';
import EvaluationOrderManage from './components/evaluation/ordermanage';
import EvaluationProduct from './components/evaluation/product';
import EvaluationStatistic from './components/evaluation/statistic';

//维修 试穿
import TryTake from './components/tryclothes/take';
import TryWillTake from './components/tryclothes/willtake';
import TryWillMessage from './components/tryclothes/willmessage';
import MaintainRepair from './components/tryclothes/willrepair';
import Maintain from './components/tryclothes/maintain';
import WillMaintain from './components/tryclothes/willmaintain';


//财务
import FianceHome from './components/finance/homepage';
import FianceStatistic from './components/finance/statistic';
import FianceOrder from './components/finance/ordersearch';
import FianceWillBack from './components/finance/willback';

//库房
import WarehouseHome from './components/warehouse/homepage';
import WarehouseOrder from './components/warehouse/warehouseorder';
import WarehouseInHouseOrder from './components/warehouse/inhouseorder';
import WarehouseOutHouseOrder from './components/warehouse/outhouseorder';
import WarehouseWillIn from './components/warehouse/willin';
import WarehouseWillOut from './components/warehouse/willout';
import WarehouseStatistic from './components/warehouse/statistic';

//回访
import ReturnHome from './components/return/homepage';
import ReturnLog from './components/return/log';
import ReturnWill from './components/return/will';
import ReturnQuestion from './components/return/question';
import ReturnRemind from './components/return/remind';
import ReturnNotGet from './components/return/notget';
import ReturnStatistic from './components/return/statistic';

//理论
import TheoryEvaluation from './components/theory/evaluation';
import TheoryPhysical from './components/theory/physical';

// 系统管理
import SysHome from './components/supermanage/sys';
import SysRole from './components/supermanage/role';
import SysAddRole from './components/supermanage/addrole';

Vue.config.productionTip = false;

Vue.component('my-header', Header);
Vue.component('v-header', Vheader);

// 支具室
Vue.component('my-home', HomePage);
Vue.component('chart', ECharts);
Vue.component('my-client', ClientManage);
Vue.component('my-order', OrderManage);
Vue.component('my-market', MarketReport);
Vue.component('my-member', MemberReport);
Vue.component('my-log', Log);

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

//加工
Vue.component('process-home', ProcessHome);
Vue.component('process-firwillallot', ProcessFirWillAllot);
Vue.component('process-firalready', ProcessFirAlready); 
Vue.component('process-firreject', ProcessFirReject);
Vue.component('process-secallot', ProcessSecWillAllot);
Vue.component('process-secreject', ProcessSecReject);
Vue.component('process-secalready', ProcessSecAlready);
Vue.component('process-statistic', ProcessStatistic);

//质检部
Vue.component('quality-home', QualityHome);
Vue.component('quality-all', QualityAllValidate);
Vue.component('quality-half', QualityHalfValidate);
Vue.component('quality-willvalidate', QualityWillValidate);
Vue.component('quality-already', QualityAlreadyValidate);
Vue.component('quality-reject', QualityReject);
Vue.component('quality-modify', QualityModifyValidate);
Vue.component('quality-statistic', QualityStatistic);

//测评
Vue.component('evaluation-home', EvaluationHome);
Vue.component('evaluation-willreceive', EvaluationWillReceive);
Vue.component('evaluation-receive', EvaluationReceive);
Vue.component('evaluation-order', EvaluationOrderManage);
Vue.component('evaluation-product', EvaluationProduct);
Vue.component('evaluation-statistic', EvaluationStatistic);

// 试穿 维修
Vue.component('try-take', TryTake);
Vue.component('try-willtake', TryWillTake);
Vue.component('try-message', TryWillMessage);
Vue.component('maintain-repair', MaintainRepair);
Vue.component('maintain', Maintain);
Vue.component('will-maintain', WillMaintain);

//财务
Vue.component('fiance-home', FianceHome);
Vue.component('fiance-statistic', FianceStatistic);
Vue.component('fiance-order', FianceOrder);
Vue.component('fiance-back', FianceWillBack);

//库房
Vue.component('warehouse-home', WarehouseHome);
Vue.component('warehouse-order', WarehouseOrder);
Vue.component('warehouse-inhouse', WarehouseInHouseOrder);
Vue.component('warehouse-outhouse', WarehouseOutHouseOrder);
Vue.component('warehouse-in', WarehouseWillIn);
Vue.component('warehouse-out', WarehouseWillOut);
Vue.component('warehouse-statistic', WarehouseStatistic);

//回访
Vue.component('return-home', ReturnHome);
Vue.component('return-will', ReturnWill);
Vue.component('return-notget', ReturnNotGet);
Vue.component('return-statistic', ReturnStatistic);
Vue.component('return-question', ReturnQuestion);
Vue.component('return-remind', ReturnRemind);
Vue.component('return-log', ReturnLog);

//理论
Vue.component('theory-evaluation', TheoryEvaluation);
Vue.component('theory-physical', TheoryPhysical);

//系统管理
Vue.component('sys-home', SysHome);
Vue.component('sys-role', SysRole);
Vue.component('sys-add', SysAddRole);


Vue.use(Vuex);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
