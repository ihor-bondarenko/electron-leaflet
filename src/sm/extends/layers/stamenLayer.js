const StamenLayer = L.TileLayer.extend({
    initialize: function(url, options) {
        this._url = url;
        L.setOptions(this, options);
    }
});

let instance = null;

class stamenLayer {
    constructor(url, options){
        if(instance) { return instance}
        this.name = 'Stamen Layer';
        this.id = 'stamenLayer';
        this._url = url || 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}';

        this.options = {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        };

        this.options = Object.assign({}, options, this.options);
        instance = this;
       // return new StamenLayer(_url ,this.options);
    }

    Layer(url ,options){
        let _url = url || this._url;
        console.log(this);
        let _options = Object.assign({}, options, this.options);
        return new StamenLayer(_url , _options);
    }
}

export default stamenLayer;