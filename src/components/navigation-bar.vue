<template>
  <b-navbar class="b-navbar" toggleable="md" type="dark" variant="success" id="navigation-bar" sticky>

    <b-nav-toggle size="sm" target="nav_collapse"></b-nav-toggle>

    <b-collapse size="sm" is-nav id="nav_collapse">

      <b-navbar-nav size="sm">

        <b-nav-item v-bind:to="'/'" exact>Accueil</b-nav-item>
        <b-nav-item v-bind:to="'/soins'">Soins</b-nav-item>
        <b-nav-item v-bind:to="'/tarifs'">Tarifs</b-nav-item>
        <b-nav-item v-bind:to="'/contact'">Contact</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'navigation-bar'
  }
</script>

<style scoped>
  #navigation-bar {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 1px 6px 0px #3c3c3c;
    font-size: 130%
  }

</style>
