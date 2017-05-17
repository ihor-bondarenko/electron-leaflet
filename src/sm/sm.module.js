import { Map } from 'leaflet';
import _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import Rx from 'rxjs/Rx';

let markers = [];
let obj = {};

/*var myObservable = new Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');*/

class SMap {
    constructor(id) {
        this.map = null;
        this.markers = [];
        this.init(id);

        var subject = new Rx.Subject();
        this.sub = subject.subscribe((x) => { console.log('subject'); console.log(x); })
    }

    init(id) {
        this.map = L.map(id || 'map').setView([51.505, -0.09], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        this.map.on('layerremove', function(e) {
            //console.log(e);
        });
        //this.getMarkersList().subscribe(v => { console.log(v) });
    }

    removeMarker(marker) {
        this.map.removeLayer(markers[0]);
        _.pullAt(markers, _.findIndex(markers, markers[0]));
        //console.log(markers);
    }

    createMarker(lat, lon) {
        let m = L.marker([lat, lon]).addTo(this.map);
       // markers.push(m);
        this.sub.next(m);
    }

    addMarker(marker) {
        markers.push(marker);
    }

    getMarkersList(){
        return markers;
        /*return Observable.create(observer => {
            observer.next('foo');
        });*/
    }
}

export default SMap;