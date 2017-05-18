class adminBorderLayer {
    constructor(url ,options){
        this.options = Object.assign({}, options);
    }
    static layer(url ,options){
        let _url = url || 'http://korona.geog.uni-heidelberg.de/tiles/adminb/x={x}&y={y}&z={z}';
        return new L.TileLayer(_url ,{
            maxZoom: 19,
            attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
    }
}

export default adminBorderLayer;