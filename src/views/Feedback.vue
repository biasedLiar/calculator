<template>
  <div class="Feedback">
    <h1>Feedback about the calculator</h1>
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Personal Info</legend>
        <div class="field">
          <BaseInput
            v-model="name"
            label="Name"
            type="text"
            :error="nameError"
            
          />
        </div>
        
        <br>
        <div class="field">
          <BaseInput
            v-model="email"
            label="Email"
            type="text"
            :error="emailError"
          />
        </div>
        
      </fieldset>
      

      <fieldset>
        <legend>Feedback</legend>
        <div class="field">
          <BaseTextArea
            v-model="message"
            label="Message"
            type="text"
            :error="messageError"
          />
        </div>
        
      </fieldset>
      
      
      <button type="submit">Submit</button>
      <p v-if="sending"> Sending </p>
    </form>
  </div>
</template>

<script>
import {useField} from 'vee-validate';

export default {
  name: "Feedback",
  setup(){
      let sending = false
      function onSubmit(){
        console.log("sending")
        sending = true
        //console.log("name: " + this.userdata.name + ", email: " + this.email + ", message: " + this.userdata.message);
      }

      const {value: email, errorMessage: emailError} = useField('email', function (value) {
        if (!value) return 'This field has no value'

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test(String(value).toLowerCase())) {
          return 'Please enter a valid email address'
        }

        return true
      })

      const {value: name, errorMessage: nameError} = useField('name', function (value) {
        if (!value) return 'This field has no value'

        return true
      })

      const {value: message, errorMessage: messageError} = useField('name', function (value) {
        if (!value) return 'This field has no value'

        return true
      })

      return {
        onSubmit,
        email: email,
        emailError: emailError,
        name: name,
        nameError: nameError,
        message: message,
        messageError: messageError,
        sending,



      }
    }
}
</script>
<style scoped>
.Feedback{
  text-align: left;
  width: 30%;
  margin: auto;
}

fieldset{
  border-width: 0px;
  margin: 0px;
  padding: 0px;
}

.field{
  margin: 5px;
}
</style>