<template>
  <div class="about">
    <h1>Feedback about the calculator</h1>
    <form @submit.prevent="sendForm">
      <fieldset>
        <legend>Personal Info</legend>
        <div class="field">
          <BaseInput
            v-model="userdata.name"
            label="Name"
            type="text"
          />
        </div>
        
        <br>
        <div class="field">
          <BaseInput
            v-model="userdata.email"
            label="Email"
            type="text"
            error="this input has an error"
          />
        </div>
        
      </fieldset>
      

      <fieldset>
        <legend>Feedback</legend>
        <div class="field">
          <BaseTextArea
            v-model="userdata.message"
            label="Message"
            type="text"
          />
        </div>
        
      </fieldset>
      
      
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
//import {useField} from 'vee-validate';

export default {
  data (){
    return {
      userdata: {
        name: '',
        email: '',
        message: '',

      }
    }
  }, 
  methods: {
    sendForm(){
      console.log("name: " + this.userdata.name + ", email: " + this.userdata.email + ", message: " + this.userdata.message);
    }
  }
}
</script>
<style scoped>
.about{
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