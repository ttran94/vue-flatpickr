import Vue from 'vue'
import App from './App.vue'
import VueFlatpickr from '../dist/index'
import '../dist/theme/airbnb.css'

Vue.use(VueFlatpickr)

new Vue({
  el: '#app',
  ...App
})
