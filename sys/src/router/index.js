import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import LoginPage from '@/components/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
  ],
});
