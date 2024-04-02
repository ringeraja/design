import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

createApp(App).use(router).mount('#app');
