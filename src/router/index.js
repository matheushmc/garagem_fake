import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: "/logout",
          name: "logout",
          component: () => import('@/views/logoutView.vue'),
        },
        {
          path: "/acessorios",
          name: "acessorios",
          component: () => import('@/views/AcessorioView.vue'),
        },
        {
          path: "/cores",
          name: "cor",
          component: () => import('@/views/CorView.vue'),
        },
        {
          path: "/categorias",
          name: "categoria",
          component: () => import('@/views/CategoriaView.vue'),
        },
        {
          path: "/marcas",
          name: "marca",
          component: () => import('@/views/MarcaView.vue'),
        }
      ],
    },
  ],
});

export default router;