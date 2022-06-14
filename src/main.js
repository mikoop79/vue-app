import { createApp } from 'vue'
import App from './App.vue'


import axios from 'axios';
import VueAxios from 'vue-axios';
import Auth from './Auth.js';

createApp(App).mount('#app').use(VueAxios, axios)
