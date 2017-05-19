<template>
     <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <h3 class="md-title">Sidenav content</h3>
          </div>
        </md-toolbar>
        <div v-for="icon in markers">
            <div v-html="icon"></div>
        </div>
        <md-button class="md-icon-button md-raised" v-on:click.native="createMarker">
          <md-icon>add</md-icon>
        </md-button>
        <h2>Layers</h2>
        <div v-for="layer in tileLayers">
            <md-card md-with-hover>
              <md-card-header>
                    <div class="md-title">{{ layer.name }}</div>
                  </md-card-header>
             <md-card-media>
                <img src="img/stamen_layer_map.png" alt="People">
                <md-ink-ripple></md-ink-ripple>
              </md-card-media>
              <md-card-actions>
                <md-button class="md-icon-button" v-on:click.native="activateTileLayer(layer.id)">
                  <md-icon>layers</md-icon>
                </md-button>
              </md-card-actions>
            </md-card>
        </div>
      </md-sidenav>
</template>

<script>
   export default {
     props: ['busCopmonent', 'mapMarkers', 'tileLayers'],
     mounted() {
        this.busCopmonent.$on('toggle-left-sidenav', (id) => {
            this.toggleLeftSidenav();
        })
     },
     computed: {
       markers: function () {
         return this.mapMarkers.map((val, ind, arr)=>{
            return val._icon;
         });
       }
     },
     watch: {
        mapMarkers: function(v){

        }
     },
     methods: {
     activateTileLayer(layer) {
        this.busCopmonent.$emit('set-map-tiles-layer',layer);
     },
     createMarker(){
        console.log('marker create from child event');
        this.busCopmonent.$emit('create-marker');
     },
       toggleLeftSidenav() {
         this.$refs.leftSidenav.toggle();
       },
       toggleRightSidenav() {
         this.$refs.rightSidenav.toggle();
       },
       closeRightSidenav() {
         this.$refs.rightSidenav.close();
       },
       open(ref) {
         console.log('Opened: ' + ref);
       },
       close(ref) {
         console.log('Closed: ' + ref);
       }
     }
   };
</script>