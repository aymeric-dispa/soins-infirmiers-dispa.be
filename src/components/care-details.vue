<template>
  <div id="care-details">
    <div class="container">
      <h4>Les Soins</h4>
      <div class="row">
        <div class="col">
          <!-- Although we only have 1 col per row, we need ta col otherwise we'll face design issues.-->

          <div>
            <img src="../assets/notepad.svg"
                 class="icon"/></div>
          <p id="page-description">
            Sur cette page vous trouverez la liste <strong>non exhaustive</strong> des soins que je peux prodiguer,
            ainsi qu'un complément d'informations sur <strong>les soins d'hygiène et les soins palliatifs</strong>.</p>
        </div>
        <br/>
      </div>
      <br/>
      <div class="row">
        <div class="col">
          <h5>Liste des soins</h5>
          <ul>
            <li>Toilettes</li>
            <li>Hygiènes corporelle</li>
            <li>Préparation hebdomadaire, dosage et surveillance de prise de médicaments</li>
            <li>Applications de pommades</li>
            <li>Placement de bas de contention</li>
            <li>Bandages et tous types de pansements</li>
            <li>Injections,prise de sang, perfusions, frottis</li>
            <li>Ablation d’agrafes et fils</li>
            <li>Méchages</li>
            <li>Soins d’ulcères, urostomie, gastrostomie, escarres</li>
            <li>Chimiothérapie (retrait et rinçage du cathéter, pompes chimio)</li>
            <li>Sondages vésicaux, placement et surveillance de sonde naso-gastrique</li>
            <li>Soins pré et post-opératoires</li>
            <li>Surveillance de paramètres</li>
            <li>Insulinothérapie et accompagnement des patients diabétiques</li>
            <li>Soins palliatifs</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>Soins d'hygiène</h5>
          <p>
            <img src="../assets/bathtub.svg"
                 class="icon"/>
            En fonction de vos besoins, je réalise la toilette complète en douche, en baignoire, ou la toilette partielle au lavabo ou au lit.
            Chaque toilette est complétée par des soins annexes en fonction de vos besoins, tels que le rasage, le brossage des dents, le soin des ongles et l’aide à l’habillement si nécessaire. Toutefois, je prône votre autonomie.
          </p>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col">
          <h5>Soins palliatifs</h5>
          <p>
            <img src="../assets/cardiogram.svg"
                 class="icon"/>
            Lors des soins palliatifs, je veille à votre confort physique, psychique et spirituel. Je mets tout en œuvre pour assurer un cadre des plus agréables. Je me charge de chaque soin avec prévenance et douceur.
            Je suis à votre disposition  24 heures sur 24 pour répondre au mieux à vos besoins et pour votre confort.
          </p></div>
      </div>


    </div>
  </div>

</template>

<script>
  export default {
    name: 'care-details'
  }

</script>

<style scoped>

  #care-details {
    padding-bottom: 35px;
  }

  .icon {
    float: left;
    width: 80px;
    margin-right: 10px;
    margin-top: 5px;
  }

  #page-description {
    margin-top: 5px;
  }


</style>
