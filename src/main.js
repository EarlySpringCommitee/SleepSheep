import Vue from 'vue'
import VueRouter from "vue-router";
import index from './components/App.vue';
import login from './components/login.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: index },
        { path: '/login', component: login },
    ]
})

new Vue({ router }).$mount('#app')