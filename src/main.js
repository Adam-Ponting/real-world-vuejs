import Vue from 'vue'
import App from './App.vue'
import router from './router' // import the router
import store from './store'

Vue.config.productionTip = false

new Vue({
  router, // use the router
  store,
  render: h => h(App)
}).$mount('#app')
