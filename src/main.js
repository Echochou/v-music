import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueLazyLoad from 'vue-lazyload'
import router from './router'

import fastclick from 'fastclick'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
