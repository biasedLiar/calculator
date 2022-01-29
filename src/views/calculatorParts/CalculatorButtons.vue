<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="numbWritten(1)">1</button>
    <button @click="numbWritten(2)">2</button>
    <button @click="numbWritten(3)">3</button>
    <button @click="numbWritten(4)">4</button>
    <button @click="numbWritten(5)">5</button>
    <button @click="numbWritten(6)">6</button>
    <button @click="numbWritten(7)">7</button>
    <button @click="numbWritten(8)">8</button>
    <button @click="numbWritten(9)">9</button>
    <button @click="numbWritten(0)">0</button>
  
    <button @click="setOperation((n1, n2) => n1 + n2)">+</button>
    <button @click="setOperation((n1, n2) => n1 - n2)">-</button>
    <button @click="setOperation((n1, n2) => n1 * n2)">*</button>
    <button @click="setOperation((n1, n2) => n1 / n2)">/</button>
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
      func: null,
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
    setOperation(newFunc){
      if(this.newNumb === 0 && this.func == ((n1, n2) => n1 / n2)){
        this.oldNumb = NaN;
      } else{
        if(this.func === null){
          this.oldNumb = this.newNumb;
        } else{
          this.oldNumb = this.func(this.oldNumb, this.newNumb);
        }
      }
      this.newNumb = 0;
      this.func = newFunc;
      console.log("newNumb: " + this.newNumb);
      console.log("oldNumb: " + this.oldNumb);
    },
    totalReset(){
      this.oldNumb=0;
      this.newNumb=0;
      this.function=null;
      console.log("newNumb: " + this.newNumb);
      console.log("oldNumb: " + this.oldNumb);
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
