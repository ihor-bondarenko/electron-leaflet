<template>
     <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <h3 class="md-title">Sidenav content</h3>
          </div>
        </md-toolbar>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
      </md-sidenav>
</template>

<script>
   export default {
     props: ['busCopmonent'],
     mounted() {
        this.busCopmonent.$on('toggle-left-sidenav', (id) => {
            this.toggleLeftSidenav();
        })
     },
     methods: {
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