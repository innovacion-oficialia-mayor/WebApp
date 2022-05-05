import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
// Global componentes
import AppLink from '@/components/AppLink.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('app-link',AppLink);
app.mount('#app');
