<template>
  <div id="app">
    <meta name="viewport" content="width=device-width">
    <app-header></app-header>
    <navigation-bar></navigation-bar>
    <div class="page-content">
      <br>
      <div id="router-view-container">
        <router-view></router-view>
      </div>
    </div>
    <app-footer></app-footer>
  </div>


</template>
<script>
  import AppHeader from "./components/app-header";
  import NavigationBar from "./components/navigation-bar";
  import AppFooter from "./components/app-footer";

  export default {
    components: {
      AppHeader, NavigationBar, AppFooter
    },
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-bottom: 0px;
    text-align: justify;
    background-image: url("./assets/wallpaper.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    line-height: 1.6;
  }

  @media screen and (max-width: 400px) {

    #app {
      background-image: url("./assets/wallpaper-mobile.jpg");
      background-size: 100%;
      background-repeat: repeat;
    }

  }

  .page-content {
    background-color: white;
    opacity: 0.96;
  }

  #router-view-container {
    margin-top: 8px;
  }

  a:any-link {
    color: #28a745;
  }

  h4 {
    font-family: 'Bookman';
    font-size: 200%;
  }

  @media screen and (max-width: 768px) {

    #router-view-container {
      margin-top: 0;
    }

  }

</style>
