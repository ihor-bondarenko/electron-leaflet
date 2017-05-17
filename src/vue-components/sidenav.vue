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
      </md-sidenav>
</template>

<script>
   export default {
     props: ['busCopmonent', 'mapMarkers'],
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