import Vue from 'vue';
import Router from 'vue-router';
import { Home, LoginPage } from './path';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
  ],
});
