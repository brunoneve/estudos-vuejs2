import Vue from 'vue'
import {Time} from './time'

new Vue({
    el: '#app',
    data: {
        times: [
            new Time('Palmeiras', require('./assets/palmeiras_60x60.png')),
            new Time('Santos', require('./assets/santos_60x60.png')),
            new Time('Flamengo', require('./assets/flamengo_60x60.png')),
        ],


    }
})
