<template>
  <div id="app-footer">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-xs-12">
            <ul class="adress">
              <span>Me connaitre</span>
              <li>
                <p>
                  Infirmier indépendant ayant une expertise en diabétologie disponible 24 heures sur 24 et 7 jours sur 7 pour tous types de soins dans la région de Couvin, Philippeville et Florennes. </p>
              </li>
            </ul>
          </div>

          <div class="col-sm-4 col-xs-12">
            <ul class="adress">
              <span>Contact</span>
              <li>
                <p>Quentin Dispa <br>Rue Notre dame de Lorette 21 <br>5620, Florennes</p>
              </li>

              <li>
                <p>
                  quentin.dispa@gmail.com</p>
              </li>

            </ul>
          </div>

          <div class="col-sm-4 col-xs-12">
            <ul class="social">
              <a href="https://www.facebook.com/infirmiercouvin/">
                <span>Suivez-moi !</span>
                <img class="fb" src="../assets/facebook.svg"></a>
            </ul>
          </div>
        </div>
        <div>
          <ul class="adress">
            <li>
              <div class="copyright">
                © Soins Infirmiers Dispa, 2017 - Tous droits réservés<br/>
                &#9825; Site créé par Aymeric Dispa <br/>
                Icons made by <a href="https://www.flaticon.com/authors/smashicons"
                                 title="Smashicons">Smashicons</a> from <a
                href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a
                href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>

</template>
<script>

  export default {
    name: 'app-footer'
  }

</script>


<!-- styling for the component -->
<style scoped>

  #app-footer {
    padding: 50px 0;
    opacity: 0.9;
    background-color: #33383c;
    font-family: Roboto;
  }

  .adress span, .social span {
    color: #FFF;
    font-weight: 800;
    padding-bottom: 8px;
    margin-bottom: 20px;
    display: block;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 3px;
  }

  .adress li p, .social li a {
    color: #FFF;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 12px;
    margin-bottom: 15px;
  }

  .adress, .social {
    list-style: none;
  }

  @media screen and (max-width: 768px) {
    ul {
      padding: 0;
      list-style-type: none;
    }

    .adress .social {
      padding-bottom: 25px;
    }

  }

  .copyright {
    color: #9c9c9c;
    font-size: 12px;
  }

  .fb {
    max-width: 90px;
  }

  a:link {
    text-decoration: none !important;
    color: #28a745;
  }

</style>
