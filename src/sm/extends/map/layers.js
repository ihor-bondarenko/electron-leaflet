import defaultLayer from '../layers/defaultLayer';
import openToMapLayer from '../layers/openToMapLayer';
import stamenLayer from '../layers/stamenLayer';
import adminBorderLayer from '../layers/adminBorderLayer';
import toneHybridLayer from '../layers/toneHybridLayer';
import mtbLayer from '../layers/mtbLayer';

const layerList = {
    tiles: {
        defaultLayer: new defaultLayer(),
        openToMapLayer: new openToMapLayer(),
        stamenLayer: new stamenLayer(),
        //adminBorderLayer: new adminBorderLayer(),
       // toneHybridLayer: new toneHybridLayer(),
       // mtbLayer: new mtbLayer()
    }
};

class MapLayers {
    constructor() {
        this.tilesLayerGroup =  null;
        this.tilesLayers = {};
        this.layerList = layerList;
    }

    getLayerTilesList() {
        return layerList.tiles;
    }

    static getLayerList() {

    }

    renameLayer(layer, name) {
        console.log(this.layerList);
        this.layerList.tiles[layer].name = name;
    }

    setTileLayer(layer) {
        this.tilesLayerGroup.clearLayers();
       this.tilesLayerGroup.addLayer(this.layerList.tiles[layer].Layer());
    }
}

export default MapLayers;