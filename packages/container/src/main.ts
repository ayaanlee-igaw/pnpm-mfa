import './assets/main.css'

import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from 'pinia'

// @ts-ignore
const RemoteService = defineAsyncComponent(() => import('service/App'));

// @ts-ignore
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.performance = true;

app.use(createPinia())
app.use(router)
app.component("RemoteService", RemoteService);

app.mount('#app')
