import VueRouter from 'vue-router'

let LandingPage = require('./pages/LandingPage.vue').default;
let AboutPage = require('./pages/AboutPage.vue').default;
let LoginPage = require('./pages/LoginPage.vue').default;

let routes = [
    { path: '/', component: LandingPage, name: 'landing'},
    { path: '/about', component: AboutPage, name: 'about'},
    { path: '/login', component: LoginPage, name: 'login'}
];

let router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
