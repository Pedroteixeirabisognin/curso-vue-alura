import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

import VueRouter from 'vue-router';
import {routes} from './routes';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);

//Também posso passar assim new VueRouter({routes}); quando as propriedades tem o mesmo nome. 
const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  //Também posso colocar só router
  router: router,
  render: h => h(App)
})
