import SMap from '../sm/sm.module';
import SIOClient from '../socket.io/client';
import Vue from 'vue';
import VueMaterial from 'vue-material';
Vue.use(VueMaterial);

let Map;
let App;
let instance;
let socketClient = new SIOClient();
socketClient.init().then(e => {
    /*socketClient.socket.on('new-data', function(d){
        console.log(d);
    });*/
});
class VueUiComponent {
    constructor() {
        if(instance){
            return this;
        }
        instance = this;
    }

    initVue() {
        if(App) {
            return this;
        }
        Vue.component('vue-toolbar', require('./vue-components/toolbar.vue'));
        Vue.component('vue-sidenav', require('./vue-components/sidenav.vue'));
        const bus = new Vue();
        App = new Vue({
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

                socketClient.socket.on('new-data', function(d){
                    console.log(d);
                    //Map.createMarker(d);
                });
                socketClient.socket.on('geojson-data', function(d){
                    console.log(d);
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


            }
        });
        return this;
    }
}

export default VueUiComponent;