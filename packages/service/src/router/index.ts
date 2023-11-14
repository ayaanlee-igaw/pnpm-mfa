import { createRouter, createWebHistory } from 'vue-router'
import Remote1View from '@/views/Remote1View.vue';
import Remote2View from '@/views/Remote2View.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/remote1',
      name: 'remote1',
      component: Remote1View
    },
    {
      path: '/remote2',
      name: 'remote2',
      component: Remote2View
    }
  ]
})

export { router }
