import defaultLayer from '../layers/defaultLayer';
import openToMapLayer from '../layers/openToMapLayer';
import stamenLayer from '../layers/stamenLayer';
import adminBorderLayer from '../layers/adminBorderLayer';
import toneHybridLayer from '../layers/toneHybridLayer';

class MapSuper {
    constructor(id, options) {
        this.options = {};
        this.options = Object.assign({}, this.options, options);
        this.id = id || 'map';
        this.tilesLayers = [];
        this.Map = null;
    }

    init() {
        return new Promise(
            (resolve, reject) => {
                    if(!document.getElementById(this.id)){
                        reject('map container not found');
                    }else{
                        resolve(this.map());
                    }
        });
    }

    map() {
        return new L.Map(this.id, this.options);
    }
}

export default MapSuper;