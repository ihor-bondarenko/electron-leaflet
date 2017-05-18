const StamenLayer = L.TileLayer.extend({
    initialize: function(url, options) {
        this._url = url;
        L.setOptions(this, options);
    }
});

class stamenLayer {
    constructor(url, options){
        let _url = url || 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}';
        this.options = {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        };
        this.options = Object.assign({}, options, this.options);
        return new StamenLayer(_url ,this.options);
    }
    /*
    * deprecated
    * */
    /*static layer(url ,options){
        let _url = url || 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}';
        return new StamenLayer(_url ,{
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        });
    }*/
}

export default stamenLayer;