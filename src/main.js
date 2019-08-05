import Vue from 'vue'
import App from '@/App.vue'
import money from 'v-money'
import toCurrency from '@/filters/toCurrency'

Vue.use(money, { precision: 2, decimal: ',', thousands: '.', prefix: 'R$ ' })
Vue.filter('toCurrency', toCurrency)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
