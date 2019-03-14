import Vue from 'vue';
import Router from 'vue-router';
import { Support, LoginPage } from './path';

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
  ],
});
