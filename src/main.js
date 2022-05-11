import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
// Global componentes
import AppButton from '@/components/AppButton.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('app-button',AppButton);
app.mount('#app');
