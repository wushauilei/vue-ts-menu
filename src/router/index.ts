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
    },
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/Category.vue'),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/User.vue'),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search/Search.vue'),
    meta: {
      keepAlive: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
