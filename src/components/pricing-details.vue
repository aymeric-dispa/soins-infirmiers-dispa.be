<template>
  <div id="pricing-details">
    <div class="container">

      <h4>Tarifs</h4>
      <h5>Infirmier à domicile conventionné "Tiers payant"</h5>
      <p>
      <div><img src="../assets/price-tag.svg"
                class="price-tag"/></div>

      <p>Agréé auprès de toutes les mutuelles belges, j’adhère à la convention du "Tiers Payant" prescrite par l’INAMI. <br/>
        J’envoie directement mes factures pour me faire rembourser du montant de mes prestations auprès de votre mutuelle et/ou organisme d’assurance maladie et/ou assurance complémentaire santé.
      </p>

      <br/>
      <h5>De quoi ai-je besoin ?</h5>
      <ul>
        <li>Deux vignettes de mutuelle</li>
        <li>Votre carte d’identité</li>
        <li>Une prescription médicale (si besoin de soins particuliers)</li>
      </ul>

      <p>
        <a>
          <a
            href="http://www.inami.fgov.be/fr/themes/cout-remboursement/facilite-financiere/Pages/tiers-payant.aspx#.WgIhVXTjLq">plus d'informations sur le tiers-payant</a>
        </a>

      </p>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'pricing-details'
  }

</script>

<style scoped>
  #pricing-details {
    padding-bottom: 35px;
  }

  .price-tag {
    float: left;
    width: 80px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  a:link {
    color: #28a745;
  }

</style>
