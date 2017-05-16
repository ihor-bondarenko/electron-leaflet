import SMap from './sm/sm.module';
import $ from 'jquery';
import Vue from 'vue';
import VueMaterial from 'vue-material';
Vue.use(VueMaterial);

Vue.component('vue-toolbar', require('./vue-components/toolbar.vue'));
Vue.component('vue-sidenav', require('./vue-components/sidenav.vue'));
var map;
var bus = new Vue();
var App = new Vue({
    el: '#app',
    data: {
        bus: bus
    },
    mounted: function () {
        // `this` points to the vm instance
        map = new SMap();
        console.log(map);
    }
});
console.log(map);