import SMap from './sm/sm.module';
import $ from 'jquery';
import Vue from 'vue';
import VueMaterial from 'vue-material';
Vue.use(VueMaterial);

/*import rethinkdb from 'rethinkdb';

rethinkdb.connect({ host: 'http://127.0.0.1', port: 28015 }, function(err, conn) {
    console.log(err);
    if(err) throw err;
    console.log(conn);
    r.db('test').tableCreate('tv_shows').run(conn, function(err, res) {
        if(err) throw err;
        console.log(res);
        r.table('tv_shows').insert({ name: 'Star Trek TNG' }).run(conn, function(err, res)
        {
            if(err) throw err;
            console.log(res);
        });
    });
});
*/
/*const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:8081');
ws.on('open', function open() {
    console.log('-- ws opened --');
    ws.send('something');
});
ws.on('message', function incoming(data) {
    console.log(data);
});*/

Vue.component('vue-toolbar', require('./vue-components/toolbar.vue'));
Vue.component('vue-sidenav', require('./vue-components/sidenav.vue'));
var Map;
var bus = new Vue();
var App = new Vue({
    el: '#app',
    data: {
        bus: bus,
        markers: [],
        tileLayersList: []
    },
    methods: {
        createMarker() {
            var lon = -0.09;
            var lat = 51.5;
            Map.createMarker(lat,lon);
            /*for(var i = 0, j = 20; i<j; i++) {
                Map.createMarker(lat,lon + 0.01);
            }*/
        },
        addTileLayer(){
            Map.addTileLayer();
        }
    },
    mounted: function () {
        //this.$set(this.$data,'Map', new SMap());
        Map = new SMap();
        Map.init().then(e => {
            this.tileLayersList = Map.map.MapLayers.layerList.tiles;
            //console.log( this.tileLayersList);
        });

        this.bus.$on('create-marker', (e) => {
            this.createMarker();
        });
        this.bus.$on('show-new-layer', (e) => {
            Map.addTileLayer();
        });
        this.bus.$on('delete-new-layer', (e) => {
            Map.deleteTileLayer();
        });
        this.bus.$on('set-map-tiles-layer', (e) => {
          Map.addTileLayer(e);
        });

        let socket = io.connect('http://localhost:8089/', {reconnect: true});

        socket.on('connect', function (s) {
            console.log('Connected!');
            socket.on('news', function(d){
                console.log(d)
            })
        });
    }
});