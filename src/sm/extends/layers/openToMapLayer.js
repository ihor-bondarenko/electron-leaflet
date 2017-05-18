class openToMapLayer {
    constructor(url ,options){

    }

    static layer(url ,options){
        let _url = url || 'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
        return new L.TileLayer(_url ,options);
    }
}

export default openToMapLayer;