import MapSuper from './map.super';
import defaultLayer from '../layers/defaultLayer';
import openToMapLayer from '../layers/openToMapLayer';
import stamenLayer from '../layers/stamenLayer';
import adminBorderLayer from '../layers/adminBorderLayer';
import toneHybridLayer from '../layers/toneHybridLayer';
import mtbLayer from '../layers/mtbLayer';
class mapDefault extends MapSuper {
    constructor(id, options) {
        super(id, options);
        this.Map = null;
        this.tilesLayers = {};
        this.tilesLayerGroup =  null;
    }
    init() {
        return new Promise(
            (resolve, reject) => {
                super.init().then(map => {
                    this.Map = map;
                    this.Map.setView([51.505, -0.09], 13);
                    this.tilesLayerGroup = L.layerGroup().addTo(this.Map);
                    resolve();
                }).catch(e => {
                    reject();
                });
            });
    }

    addTileLayer() {
        let l = new stamenLayer();
        this.tilesLayerGroup.addLayer(l);
        this.tilesLayerGroup.eachLayer(function (layer) {
           //console.log(layer);
        });
        //l.addTo(this.Map);
        //console.log(this.tilesLayers);
    }

    deleteTileLayer(){
        /*_.forEach(this.tilesLayers, (v) => {
            this.Map.removeLayer(v);
        });*/
        this.tilesLayerGroup.clearLayers();
        //console.log(this.Map);
    }
}

export default mapDefault;