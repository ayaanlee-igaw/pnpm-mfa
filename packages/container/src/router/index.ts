// @ts-ignore
import { createRouter, createWebHistory, Router } from 'vue-router'
import HomeView from '@/views/HomeView.vue';

// @ts-ignore
const routerModule = await import('service/router');
const serviceRouter: Router = routerModule.default.router;
window.console.log('serviceRouter', serviceRouter);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...serviceRouter.getRoutes(),
  ]
})

export default router
