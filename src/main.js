import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import Auth from './Auth'

let app = createApp(App)
let router = createRouter({
    history: createWebHistory(),
    routes: import.meta.hot ? [] : routes,
})
// redirect to login for pages that require Authorisation
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) ) {
        if (Auth.check()) {
            console.log('check');
            next();
            return;
        } else {
            router.push('/login');
        }
    } else {
        next();
    }
});

if (import.meta.hot) {
    let removeRoutes = []

    for (let route of routes) {
        removeRoutes.push(router.addRoute(route))
    }

    import.meta.hot.accept('./routes.js', ({ routes }) => {
        for (let removeRoute of removeRoutes) removeRoute()
        removeRoutes = []
        for (let route of routes) {
            removeRoutes.push(router.addRoute(route))
        }
        router.replace('')
    })


}

app.use(router)

app.mount('#app')
