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
    path: '/admin/dashboard',
    name: 'dashboard',
    component: () => import('@/views/admin/DashboardAdmin.vue')
  },
  {
    path: '/admin/dashboard/register',
    name: 'register',
    component: () => import('@/views/admin/RegisterAdmin.vue')
  },

  {
    path: '/admin/dashboard/register/addUser',
    name: 'addUser',
    component: () => import('@/views/admin/AddUser.vue')
  },

  {
    path: '/admin/dashboard/register/editUser/:id/:slug',
    name: 'editUser',
    component: () => import('@/views/admin/EditUser.vue'),
    props: route => ({
      id: parseInt(route.params.id),
    })
  },

  {
    path: '/admin/dashboard/clima',
    name: 'clima',
    component: () => import('@/views/admin/ClimaAdmin.vue')
  },
  {
    path: '/admin/clima/newpoll',
    name: 'newpoll',
    component: () => import('@/views/admin/NewPoll.vue')
  }
];

// create routes and history
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
