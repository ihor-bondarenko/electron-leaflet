class toneHybridLayer {
    constructor(url ,options){
        this.options = Object.assign({}, options);
    }
    static layer(url ,options){
        let _url = url || 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}.{ext}';
        return new L.TileLayer(_url ,{
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        });
    }
}

export default toneHybridLayer;