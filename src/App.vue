<template>
  <div id="app">
    
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>  | 
      <router-link :to="{ name: 'Feedback' }">Feedback</router-link>  | 
      <p v-if="user">{{user}} </p>
      <router-link v-else :to="{ name: 'LogIn' }">Log In</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  computed: {
    user(){
      return this.$store.state.user
    }
  }

}
</script>
<style>
body{
  
  background-color: navy;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:aquamarine;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
