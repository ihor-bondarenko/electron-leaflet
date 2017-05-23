import { Map } from 'leaflet';
import _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import Rx from 'rxjs/Rx';
import defaultIcon from './extends/icons/default';
import mapDefault from './extends/map/default';

L.Icon.Default.imagePath = 'img/';
let markers = [];
let obj = {};

/*var myObservable = new Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');*/
const subjectMarkers = new Rx.BehaviorSubject([]);
class SMap {
    constructor(id) {
        this.defaultMap = null;
        this.markers = [];
        //let icon = new defaultIcon();
        //let icn = new L.Icon();
        /*
        let markerLocation = new L.LatLng(51.5, -0.09);
        L.marker(markerLocation, {icon: icon}).addTo(this.map);
        L.circle([51.5, -0.09], {radius: 2000}).addTo(this.map);
        var latlngs = [
            [
                [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
                [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
            ],
            [
                [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
            ]
        ];
        var polygon = L.polygon(latlngs, {color: 'red'}).addTo(this.map);
        */

    }

    init(id) {
        return new Promise(
            (resolve, reject) => {
                this.map = new mapDefault(id || 'map');
                this.map.init().then( e => {
                    resolve();
                });
            });
        //console.log(this.map);
       /* this.map = new mapDefault(id || 'map').map().setView([51.505, -0.09], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        this.map.on('layerremove', function(e) {
        });
        this.map.on('layeradd', (e) =>{
            this.subMarkers.next(e.layer);
        });
        this.subMarkers = subjectMarkers.subscribe((x) => { this.addMarker(x) });*/
    }

    removeMarker(marker) {
        this.map.Map.removeLayer(marker);
        _.pullAt(markers, _.findIndex(markers, markers[0]));
    }

    createMarker(markers) {
       // L.marker([lat, lon], {draggable: true}).addTo(this.map.Map);
        this.map.addMarker(markers);
    }

    addTileLayer(layer){
        this.map.addTileLayerToMap(layer);
    }

    addMarker(marker) {
        markers.push(marker);
       // console.log(marker)
    }

    getMarkersList(){
        return markers;
        /*return Observable.create(observer => {
            observer.next('foo');
        });*/
    }

    deleteTileLayer() {
        this.map.deleteTileLayer();
    }
}

export default SMap;