// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'font-awesome/css/font-awesome.css'
import 'onsenui/css/onsenui-core.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import $ons from 'vue-onsenui/esm'
import * as VOns from './vue-onsen-components'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use($ons)
Object.values(VOns).forEach(comp => Vue.component(comp.name, comp))

/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: 'APIKEY',
    libraries: 'places' // necessary for places input
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
