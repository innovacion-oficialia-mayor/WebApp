import { createRouter, createWebHistory } from 'vue-router';
import TheStartSesion from '@/views/TheStartSesion.vue';

// routes
const routes = [
  {
    path: '/',
    name: 'start',
    component: TheStartSesion,
    // alias: '/home'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/TheStartAdmin.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/TheStartUser.vue')
  }
];

// create routes and history
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
