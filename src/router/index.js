import { createRouter, createWebHistory } from 'vue-router';
import StartSesion from '@/views/StartSesion.vue';

// routes
const routes = [
  {
    path: '/',
    name: 'start',
    component: StartSesion,
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
    component: () => import('@/views/StartAdmin.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/StartUser.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/admin/DashboardAdmin.vue')
  }
];

// create routes and history
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
