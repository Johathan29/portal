import { createApp } from 'vue';
import './style.css';

import App from './App.vue';
import quienessomos from './page/quienes-somos.vue';
import baseLegal from './page/base-legal.vue';
import Home from './components/Home.vue';
//import Mascotas from './Mascotas.vue';
import navegation from './navegation';
import PathNotFound from './PathNotFound.vue';

import { createRouter, createWebHashHistory } from 'vue-router';
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
const routes = [
  { path: '/', component: Home },
  { path: '/quienes-somos', component: quienessomos },
  { path: '/base-legal', component: baseLegal },
  { path: '/:pathMatch(.*)*', component: PathNotFound },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(App);

app.use(router);

app.mount('#app');
