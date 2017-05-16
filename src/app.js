import SMap from './sm/sm.module';
import $ from 'jquery';
import Vue from 'vue';
import VueMaterial from 'vue-material';
Vue.use(VueMaterial);

Vue.component('vue-toolbar', require('./vue-components/toolbar.vue'));
Vue.component('vue-sidenav', require('./vue-components/sidenav.vue'));
var bus = new Vue();
var App = new Vue({
    el: '#app',
    data: {
        bus: bus
    }
});

$(document).ready(function(){
   // $('#map').css('height',$(document).height()-15);
    var map = new SMap();
});