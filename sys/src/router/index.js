import Vue from 'vue';
import Router from 'vue-router';
import { Support, LoginPage, Modify, Front, TakeType, Evaluation } from './path';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'support',
      component: Support,
    },
    {
      path: '/support',
      name: 'support',
      component: Support,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/evaluation',
      name: 'evaluationPage',
      component: Evaluation,
    },
    {
      path: '/taketype',
      name: 'take',
      component: TakeType,
    },
    {
      path: '/modify',
      name: 'modifytype',
      component: Modify,
    },
    {
      path: '/front',
      name: 'frontdesk',
      component: Front,
    }
  ],
});
