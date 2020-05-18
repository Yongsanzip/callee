

import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/general.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

var VueScrollactive = require('vue-scrollactive');
Vue.use(VueScrollactive);