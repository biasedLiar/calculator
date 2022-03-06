<template>
  <div class="home">
    <form @submit.prevent="onSubmit">
        <BaseTextArea
                v-model="code"
                label="Code"
                type="text"
                :error="messageError"
            />
        <button type="submit">Submit</button>
    </form>
    <h2> Output: </h2>
    <p class="result" v-html="result"></p>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Home",
  data() {
      return {
        messageError: "",
        code: "",
        result: "test",

      }
  },
   methods: {
      onSubmit(){
        this.result = "Processing..."
        var bodyFormData = new FormData();
        bodyFormData.append('code', this.code);
        axios({
            method: "post",
            url: "http://localhost:8080/Docker",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
            })
            .then(response => {
                //handle success
                console.log(response);
                this.result = response.data.replace(/(?:\r\n|\r|\n)/g, '<br>')
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
      
      }
    }

};
</script>
<style scoped>

</style>
