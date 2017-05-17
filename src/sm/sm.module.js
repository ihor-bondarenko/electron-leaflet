import { Map } from 'leaflet';
import _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import Rx from 'rxjs/Rx';
import defaultIcon from './extends/icons/default';

L.Icon.Default.imagePath = 'img/';
let markers = [];
let obj = {};

/*var myObservable = new Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');*/
const subjectMarkers = new Rx.BehaviorSubject([]);
class SMap {
    constructor(id) {
        this.map = null;
        this.markers = [];
        this.init(id);
        let icon = new defaultIcon();
        let markerLocation = new L.LatLng(51.5, -0.09);
        L.marker(markerLocation, {icon: icon}).addTo(this.map);
        L.circle([51.5, -0.09], {radius: 2000}).addTo(this.map);
        var latlngs = [
            [ // first polygon
                [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
                [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
            ],
            [ // second polygon
                [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
            ]
        ];
        var polygon = L.polygon(latlngs, {color: 'red'}).addTo(this.map);
        console.log(icon);
    }

    init(id) {
        this.map = L.map(id || 'map').setView([51.505, -0.09], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        this.map.on('layerremove', function(e) {
            //console.log(e);
        });
        this.map.on('layeradd', (e) =>{
            this.subMarkers.next(e.layer);
        });
        this.subMarkers = subjectMarkers.subscribe((x) => { this.addMarker(x) });
    }

    removeMarker(marker) {
        this.map.removeLayer(marker);
        _.pullAt(markers, _.findIndex(markers, markers[0]));
    }

    createMarker(lat, lon) {
        L.marker([lat, lon], {draggable: true}).addTo(this.map);
    }

    addMarker(marker) {
        markers.push(marker);
        console.log(marker)
    }

    getMarkersList(){
        return markers;
        /*return Observable.create(observer => {
            observer.next('foo');
        });*/
    }
}

export default SMap;