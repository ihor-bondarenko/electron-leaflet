const OpenToMapLayer = L.TileLayer.extend({
    initialize: function(url, options) {
        this._url = url;
        L.setOptions(this, options);
    }
});

let instance = null;

class openToMapLayer {
    constructor(url ,options){
        if (instance) {
            return instance
        }
        this.name = 'Open To Map Layer';
        this.id = 'openToMapLayer';
        this._url = url || 'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';


        this.options = Object.assign({}, options, this.options);
        instance = this;
    }

    Layer(url ,options){
        let _url = url || this._url;
        let _options = Object.assign({}, options, this.options);
        return new OpenToMapLayer(_url , _options);
    }

    /*static layer(url ,options){
        let _url = url || 'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
        return new L.TileLayer(_url ,options);
    }*/
}

export default openToMapLayer;