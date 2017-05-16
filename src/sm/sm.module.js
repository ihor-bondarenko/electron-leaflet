import { Map } from 'leaflet';

class SMap {
    constructor(id) {
        this.map = null;
        this.init(id);
    }

    init(id) {
        this.map = L.map(id || 'map').setView([51.505, -0.09], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }
}

export default SMap;