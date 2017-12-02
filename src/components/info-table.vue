<template>
  <div id="info-table">
    <b-container>

      <div class=" jumbotron center">
        <b-row>
          <b-col class="asset">
            <div>
              <img v-bind:src="carSrc" class="icon" @mouseover="carSrc = whiteCar"
                   @mouseout="carSrc = colorCar"/></div>
            <h4>Disponible 24h/24 et 7j/7</h4>
            Pas besoin de vous déplacer, je peux me rendre à votre domicile 24 heures sur 24 et 7 jours sur 7.
          </b-col>
          <b-col class="col asset">
            <div>
              <img v-bind:src="diplomaSrc" class="icon" @mouseover="diplomaSrc = whiteDiploma"
                   @mouseout="diplomaSrc = colorDiploma"/></div>
            <h4>Educateur en diabétologie</h4>
            Je m’assure de la prise en charge de l’éducation du patient diabétique et de sa famille.
          </b-col>
          <b-col class="col asset">

            <div>
              <router-link to="tarifs"><img v-bind:src="pigSrc" class="icon" @mouseover="pigSrc = whitePig"
                                            @mouseout="pigSrc = colorPig"/></router-link>
            </div>
            <h4>Conventionné INAMI</h4>
            Vos soins étants pris en charge par votre mutuelle, vous n'avez aucun frais à avancer.<br/>
            <router-link to="tarifs">Cliquez ici pour plus d'informations</router-link>
          </b-col>


        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'info-table',
    data () {
      return {
        pigSrc: '',
        diplomaSrc: '',
        carSrc: '',
        colorPig: '/static/img/icons/piggy-bank.svg',
        whitePig: '/static/img/icons/piggy-bank-white.svg',
        colorDiploma: '/static/img/icons/diploma.svg',
        whiteDiploma: '/static/img/icons/diploma-white.svg',
        colorCar: '/static/img/icons/car.svg',
        whiteCar: '/static/img/icons/car-white.svg',
        myImage: "https://s-media-cache-ak0.pinimg.com/originals/bd/5d/84/bd5d845c980508d41b0329dc21d08d2b.jpg",
        otherImage: "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg"
      }
    },

    created: function () {
      this.pigSrc = this.colorPig;
      this.diplomaSrc = this.colorDiploma;
      this.carSrc = this.colorCar;
    },
  }


</script>

<style scoped>
  .icon {
    display: block;
    margin: 0 auto;
    width: 35%;
    opacity: 1;
    padding-bottom: 10px;
  }

  .asset {
    text-align: center;
    padding-bottom: 10px;
  }

  a:link {
    color: #28a745;
  }

</style>
