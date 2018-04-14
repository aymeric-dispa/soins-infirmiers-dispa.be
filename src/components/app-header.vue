<template>
  <div id="app-header">
    <header role="banner">
      <img src="../assets/banner.png" alt="Banner Image" style="max-width: 100%"/>
      <br/>
      <h5 id="banner-txt">Soins à domicile dans la région de Philippeville, Florennes et Couvin<br/></h5>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style soped>

  #app-header {
    text-align: center;
    width: 100%;
    color: white;
  }

  @media screen and (max-width: 450px) {
    #banner-txt {
      font-size: 110%;
    }
  }

</style>
