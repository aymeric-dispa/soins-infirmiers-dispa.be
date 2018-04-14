<template>
  <div id="contact-form">

    <div class="container">
      <h4>Besoin de renseignements ?</h4> <br/>

      <div class="row">
        <div class="col-md-7 col-sm-12">
          <form id="contact_form" v-on:submit.prevent="submitForm" action="" v-show="!formSubmitted">
            <div class="form-group">
              <label>Nom : </label>
              <b-form-input v-model="name" class="form-control" name="name" type="text" required/>
            </div>
            <div class="form-group">
              <label>Addresse E-mail : </label>
              <b-form-input v-model="email" class="form-control" name="email" type="email"
                            required/>
            </div>

            <label>Message
              <small>(<span>{{ message.length }}</span> / <span>{{ maxLength }}</span>)</small>
            </label>
            <div class="form-group">
              <b-form-textarea v-model="message" class="form-control" name="message" type="text"
                               :rows="4" required maxlength="500"/>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>

          </form>
          <div v-show="formSubmitted" class="confirmation-message">
            <div v-show="messageFailed" class="alert alert-danger">
              Le message n'a pas pu être envoyé.
            </div>
            <div v-show="!messageFailed" class="alert alert-success">
              Message envoyé avec succès !
            </div>
          </div>
        </div>
        <div class="col-md-5 col-sm-12">
          <div>
            <br/>
            <img src="../assets/phone.svg" class="icon">
            <h4><p id="phone-number"><Strong>0496/95.55.59</Strong></p></h4>
          </div>
          <br/>
          <img src="../assets/house.svg" class="icon" id="house-icon">
          <h6><p id="address">Quentin Dispa<br/> Rue Notre Dame de Lorette 21<br/>5620 Florennes
          </p></h6>
        </div>

      </div>
    </div>
    <br/>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.426582565504!2d4.606436015877988!3d50.246616609911904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1f4a86dbcbf1f%3A0x24abcab89c2e73de!2sRue+Notre+Dame+de+Lorette+21%2C+5620+Florennes%2C+Belgique!5e0!3m2!1sfr!2sie!4v1509888049086"
        width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>

</template>
<script>
  import * as console from "debug";

  export default {
    name: 'contact-form',
    data () {
      return {
        name: '',
        email: '',
        message: '',
        maxLength: 500,
        formSubmitted: false,
        messageFailed: false

      }
    },
    methods: {
      submitForm: function () {
        var contactForm = {
          from_email: this.email,
          from_name: this.name,
          content: this.message
        };
        this.$http.post('/sendEmail', contactForm).then(()=> {
          console.log('Message Sent.');
        }, response => {
          console.log('An error occurred while sending the message.');
          console.log(response);
          this.messageFailed = true;
        }).then(() => {
          this.formSubmitted = true;
        });
      }
    }
  }


</script>

<style scoped>
  #contact-form {
    margin-bottom: 0px;
  }

  .confirmation-message {
    margin-top: 40px
  }

  #phone-number {
    color: #259740;
    font-size: 30px;
  }

  .icon {
    width: 65px;
    text-align: left;
    float: left;
    shape-margin: 0px;
    margin-right: 5px;
  }

  #house-icon {
    margin-top: 10px;
  }

  .map {
    margin-top: 25px;
    line-height: 0%;
  }

  iframe {
    margin-right: 0;
    margin-left: 0;
  }

  #phone-number {
    display: block;
  }

  #address {
    margin-top: 5px;
    display: block;
  }


</style>
