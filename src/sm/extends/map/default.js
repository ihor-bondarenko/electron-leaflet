import MapSuper from './map.super';
import defaultLayer from '../layers/defaultLayer';
import openToMapLayer from '../layers/openToMapLayer';
import stamenLayer from '../layers/stamenLayer';
import adminBorderLayer from '../layers/adminBorderLayer';
import toneHybridLayer from '../layers/toneHybridLayer';
import mtbLayer from '../layers/mtbLayer';
import MapLayers from './layers';
import MapMarkers from './markers';

class mapDefault extends MapSuper {
    constructor(id, options) {
        super(id, options);
        this.Map = null;
        this.MapLayers = new MapLayers();
        this.MapMarkers = new MapMarkers();
    }
    init() {
        return new Promise(
            (resolve, reject) => {
                super.init().then(map => {
                    this.Map = map;
                    this.Map.setView([51.49621, 31.30013], 13);
                    this.MapLayers.tilesLayerGroup = L.layerGroup().addTo(this.Map);
                    this.MapMarkers.markersGroup = L.layerGroup().addTo(this.Map);
                    let lat = 51.49621;
                    let lon = 31.30013;
                    var latlngs = [
                        [51.49621, 31.30013]
                    ];
                    /*setInterval(() => {
                        lon += 0.0003;
                        latlngs.push([51.49621, lon+0.0001]);
                        this.testMarkers(lat, lon, latlngs);
                    }, 5000);*/
                    resolve();
                }).catch(e => {
                    reject();
                });
            });
    }

    addTileLayerToMap(layer) {
        this.MapLayers.setTileLayer(layer);
       /* let l = new stamenLayer();
        this.MapLayers.tilesLayerGroup.addLayer(l);
        this.MapLayers.tilesLayerGroup.eachLayer(function (layer) {

        });*/
    }

    deleteTileLayer(){
        this.MapLayers.tilesLayerGroup.clearLayers();
    }

    testMarkers(lat, lon, latlngs) {

        let polyline = L.polyline(latlngs, {color: 'red'});

        this.MapMarkers.markersGroup.clearLayers();
        //console.log(this.Map);
        for(var i = 0, j = 1; i<j; i++) {
           // markers.push(L.marker([lat, lon + 0.0001]));
            lon += 0.0001;
            this.MapMarkers.markersGroup.addLayer(L.marker([lat, lon])).addLayer(polyline);
        }
       // this.MapMarkers.markersGroup.addLayer(markers);
       // this.MapMarkers.markersGroup
    }
    addMarker(markers) {
        console.log('received markers');
        this.MapMarkers.markersGroup.clearLayers();
        for(var i in markers) {
            if(markers.hasOwnProperty(i)){
                this.MapMarkers.markersGroup.addLayer(L.marker([markers[i]['location']['coordinates'][1], markers[i]['location']['coordinates'][0]]));
            }
        }
        //this.MapMarkers.markersGroup.clearLayers();
    }
}

export default mapDefault;