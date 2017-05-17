import SMap from './sm/sm.module';
import $ from 'jquery';
import Vue from 'vue';
import VueMaterial from 'vue-material';
Vue.use(VueMaterial);

Vue.component('vue-toolbar', require('./vue-components/toolbar.vue'));
Vue.component('vue-sidenav', require('./vue-components/sidenav.vue'));
var Map;
var bus = new Vue();
var App = new Vue({
    el: '#app',
    data: {
        bus: bus,
        markers: []
    },
    methods: {
        createMarker() {
            var lon = -0.09;
            var lat = 51.5;
            console.log('marcer create event');
            Map.createMarker(lat,lon);
        }
    },
    mounted: function () {
        //this.$set(this.$data,'Map', new SMap());
        Map = new SMap();
        Map.getMarkersList();

        this.bus.$on('create-marker', (e) => {
            this.createMarker();
        });
    }
});