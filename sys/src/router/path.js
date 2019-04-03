/**
 * @param {LoginPage}    登录页面 
 * @param {Support}      支具页面 
 * @param {Evaluation}   测评页面 
 * @param {Front}        前台页面 
 * @param {Modify}       修型页面 
 * @param {TakeType}     取型页面 
 * @param {bigClient}    大客户页面
 * @param {outWork}      外出体检
 * @param {Process}      加工车间
 * @param {Quality}      质检部
 * 
 */


const Support = resolve => require(['@/components/support'], resolve);
const LoginPage = resolve => require(['../components/login'], resolve);
const Evaluation = resolve => require(['../components/evaluation'], resolve);
const Front = resolve => require(['../components/front'], resolve);
const TakeType = resolve => require(['../components/taketype'], resolve);
const Modify = resolve => require(['../components/modify'], resolve);
const BigClient = resolve => require(['../components/bigclient'], resolve);
const OutWork = resolve => require(['../components/outwork'], resolve);
const Process = resolve => require(['../components/process'], resolve);
const Quality = resolve => require(['../components/quality'], resolve);

export { Support, LoginPage, Evaluation, Front, TakeType, Modify, BigClient, OutWork, Process, Quality };