import { createApp } from 'vue'
import App from './App.vue'

// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import Auth from './Auth.js';

import VueRouter from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import DashboardPage from './components/DashboardPage.vue';



const routes = [
    {
        path: '/login',
        component: LoginPage,
        name: "Login"
    },
    {
        path: '/register',
        component: RegisterPage,
        name: "Register"
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        name: "Dashboard",
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'nav__link--active',
    linkExactActiveClass: 'nav__link--exact',
});

// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// })

const app = createApp(App);


app.use(router)

app.mount('#app');

