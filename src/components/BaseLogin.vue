<template>
  <div id="loginContainer">
    <div id="loginTitle">
        <label>Please login!</label>
    </div>
    <div id="username">
        <label id="usernameLabel">Username:</label>
        <textarea v-model="username"></textarea>
      </div>
      <div id="password">
        <label id="passwordLabel">Password: </label>
        <textarea v-model="password"></textarea>
        <button v-on:click="handleClickSignin">Sign in</button>
      </div>
      <router-link v-if="loggedInUnsuccesfully" :to="{ name: 'Register' }">Home</router-link>
  </div>
  
</template>


<script>
export default {
  methods: {
    handleClickSignin (){
      
      if (this.logInInfoCorrect()){
        this.$store.dispatch('logInAs', this.username)
      } else{
        this.loggedInUnsuccesfully = true
      }
    },
    logInInfoCorrect(){
      if (this.username === this.$store.state.username && this.password === this.$store.state.password) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      username: '',
      password: '',
      loggedInUnsuccesfully: false,
    }
  }

}
</script>

<style scoped>
#loginContainer {
    display: grid;
    justify-content: center;
    margin: 40px;
}

#loginTitle {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

#username, #password {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
}

#usernameLabel, #passwordLabel {
    width: 100px;
}

</style>
