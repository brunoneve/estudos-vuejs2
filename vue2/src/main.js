import Vue from 'vue'
import {Time} from './time'

new Vue({
  el: '#app',
  data: {
    time: new Time('Palmeiras', require('./assets/palmeiras_60x60.png'))
  }
})
