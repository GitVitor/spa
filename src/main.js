import Vue from 'vue'
import App from '@/App.vue'
import money from 'v-money'

Vue.use(money, { precision: 2, decimal: ',', thousands: '.', prefix: 'R$ ' })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
