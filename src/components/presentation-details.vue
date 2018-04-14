<template>
  <div id="presentation-details">
    <div class="container" id="presentation">
      <h4>Quentin, votre infirmier dans la région de Philippeville, Florennes et Couvin</h4>
      <div class="row">

        <div class="col-md-12">
          <div><img src="../assets/quentin.jpg"
                    class="img-thumbnail presentation-picture"/></div>
          <p id="presentation-txt">
            Bonjour,
            Je m’appelle Quentin Dispa, je suis un infirmier de  27 ans, indépendant, souriant et à l'écoute, exerçant dans la région de <strong>Philippeville, Florennes et Couvin</strong>. <br/>
            Mon expérience professionnelle compte <strong>sept années en structures hospitalières/maisons de repos à plein-temps</strong>, où je suis passé par tous les services de soins généraux en tant qu’intérimaire et/ou étudiant.<br/>

            <br/>Dernièrement, j’ai travaillé trois ans en service d’hémodialyse à l’Hôpital Civil Marie Curie. Je possède un contact <strong>chaleureux</strong>
            et <strong>bienveillant</strong> envers le patient.
            <br/>Je dispose d’une <strong>expertise en diabétologie</strong>
            m’octroyant un titre d’éducateur en diabétologie. Je suis moi-même atteint du diabète de type 1, je dispose donc d’une approche différente et d’une compréhension évidente face aux problèmes habituels rencontrés par le patient et son entourage.
          </p><br/>

        </div>
      </div>
      <div class="alert alert-danger">
        <strong>Votre infrmier n'exerce plus !</strong>
      </div>
    </div>

    <info-table></info-table>

  </div>

</template>

<script>
  import InfoTable from "./info-table";
  export default {
    components: {
      InfoTable
    },
    name: 'about'
  }


</script>
<style scoped>
  #presentation-details {
    padding-bottom: 35px;
  }

  #presentation-txt {
    margin-top: 5px;
  }

  .presentation-picture {
    float: left;
    width: 300px;
    shape-margin: 20px;
    margin-right: 30px;
    margin-bottom: 5px;
    margin-top: 7px;
  }

  @media screen and (max-width: 500px) {
    .presentation-picture {
      width: 100%;
    }
  }


</style>
