const DefaultLayer = L.TileLayer.extend({
    initialize: function(url, options) {
        this._url = url;
        L.setOptions(this, options);
    }
});

let instance = null;

class defaultLayer {
    constructor(url, options) {
        if (instance) {
            return instance
        }
        this.name = 'Default Layer';
        this.id = 'defaultLayer';
        this._url = url || 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

        this.options = {};

        this.options = Object.assign({}, options, this.options);
        instance = this;
    }

    Layer(url, options) {
        let _url = url || this._url;
        let _options = Object.assign({}, options, this.options);
        return new DefaultLayer(_url, _options);
    }
}

export default defaultLayer;