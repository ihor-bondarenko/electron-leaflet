<template>
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <md-button class="md-icon-button" @click.native="showAdditionalTileLayer">
              <md-icon>map</md-icon>
      </md-button>
      <md-button class="md-icon-button" @click.native="deleteAdditionalTileLayer">
                    <md-icon>delete</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">SMap</h2>
    </md-toolbar>
</template>

<script>
    export default {
        mounted() {},
        props: ['busCopmonent'],
        methods: {
            toggleLeftSidenav() {
                this.busCopmonent.$emit('toggle-left-sidenav', 1)
            },
            showAdditionalTileLayer() {
                this.busCopmonent.$emit('show-new-layer', 1)
            },
            deleteAdditionalTileLayer() {
                this.busCopmonent.$emit('delete-new-layer', 1)
            }
          }
    }
</script>