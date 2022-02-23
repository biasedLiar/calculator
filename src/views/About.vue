<template>
  <div class="about">
    <h1>Feedback about the calculator</h1>
    <h3>Personal Info</h3>
    <BaseInput
      v-model="userdata.name"
      label="Name"
      type="text"
    />
    <BaseInput
      v-model="userdata.email"
      label="Email"
      type="text"
    />
    
    <h3>Feedback</h3>
    <BaseTextArea
      v-model="userdata.message"
      label="Message"
      type="text"
    />
  </div>
</template>

<script>

export default {
  data (){
    return {
      userdata: {
        name: '',
        email: '',
        message: '',

      }
    }
  }
}
</script>
<style scoped>

</style>