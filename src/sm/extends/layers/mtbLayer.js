class mtbLayer {
    constructor(url ,options){
        this.options = Object.assign({}, options);
    }
    static layer(url ,options){
        let _url = url || 'http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png';
        return new L.TileLayer(_url ,{
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &amp; USGS'
        });
    }
}

export default mtbLayer;