<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="numbWritten(1)">1</button>
    <button @click="numbWritten(2)">2</button>
    <button @click="plusWritten">+</button>
    <button @click="totalReset">AC</button>
    
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    msg: String,
  },
  data() {
    return {
      oldNumb: 0,
      newNumb: 0,
      function: null,
      numb: 2,
    };
  },
  methods: {
    test() {
      console.log("Test");
    },
    numbWritten(numb) {
      this.newNumb = this.newNumb*10;
      this.newNumb +=numb;
      console.log("newNumb: " + this.newNumb);
      console.log("oldNumb: " + this.oldNumb);
    },
    plusWritten(){
      if(this.function === null){
        this.oldNumb = this.newNumb;
      }
      this.newNumb=0;
      this.function = (numb1, numb2) => numb1+numb2;
      console.log("newNumb: " + this.newNumb);
      console.log("oldNumb: " + this.oldNumb);
    },
    totalReset(){
      this.oldNumb=0;
      this.newNumb=0;
      this.function=null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
