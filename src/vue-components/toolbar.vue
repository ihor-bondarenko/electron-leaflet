<template>
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
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
            }
          }
    }
</script>