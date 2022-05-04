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
  }
];

// create routes and history
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
