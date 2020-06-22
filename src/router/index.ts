import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
      navbar: false,
    },
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/Category.vue'),
    meta: {
      keepAlive: true,
      navbar: false,
    },
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/User.vue'),
    meta: {
      keepAlive: false,
      navbar: false,
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search/Search.vue'),
    meta: {
      keepAlive: false,
      navbar: false,
    },
  },
  {
    path: '/menu-detail',
    name: 'MenuDetail',
    component: () => import('@/views/menuDetail/MenuDetail.vue'),
    meta: {
      keepAlive: false,
      navbar: true,
    },
  },
  {
    path: '/threelevelcatalog',
    name: 'Threelevelcatalog',
    component: () => import('@/views/threelevelcatalog/Threelevelcatalog.vue'),
    meta: {
      keepAlive: true,
      navbar: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      keepAlive: false,
      navbar: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/Register.vue'),
    meta: {
      keepAlive: false,
      navbar: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
