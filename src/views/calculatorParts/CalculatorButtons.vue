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
    <button @click="addDot">.</button>
  
    <button @click="setOperation((n1, n2) => n1 + n2)">+</button>
    <button @click="setOperation((n1, n2) => n1 - n2)">-</button>
    <button @click="setOperation((n1, n2) => n1 * n2)">*</button>
    <button @click="setOperation((n1, n2) => n1 / n2)">/</button>
    <button @click="equals">=</button>
    <button @click="totalReset">AC</button> 
    <button @click="del">DEL</button>
    
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      oldNumb: 0,
      newNumb: null,
      func: null,
      msg: 0,
      charSinceDot: null,
      ans: 0,
    };
  },
  methods: {
    roundTo(n) {
      this.oldNumb = +(this.oldNumb.toFixed(n));
    },
    numbWritten(numb) {
      if(this.newNumb === null){
        this.newNumb = 0;
      }
      if (this.charSinceDot === null) {
        this.newNumb = this.newNumb*10;
        this.newNumb +=numb;
      } else{
        this.charSinceDot++;
        this.newNumb += numb * (10 ** (-1 * this.charSinceDot));
        this.roundTo(6);
      }
      this.msg = this.newNumb;
      console.log("newNumb: " + this.newNumb);
      console.log("oldNumb: " + this.oldNumb);
    },
    setOperation(newFunc){
      if(this.newNumb === 0 && toString(this.func) === toString(((n1, n2) => n1 / n2))){
        this.oldNumb = NaN;
      } else{
        if(this.func === null){
          this.oldNumb = this.newNumb;
        } else if (this.newNumb != null){
          this.oldNumb = this.func(this.oldNumb, this.newNumb);
          this.roundTo(6);
        }
      }
      this.newNumb = null;
      this.func = newFunc;
      this.charSinceDot = null;
      this.msg = this.oldNumb;
      console.log("newNumb: " + this.newNumb);
      console.log("oldNumb: " + this.oldNumb);
    },
    totalReset(){
      this.oldNumb=0;
      this.newNumb=null;
      this.func=null;
      this.msg = this.oldNumb;
      this.charSinceDot = null;
      console.log("newNumb: " + this.newNumb);
      console.log("oldNumb: " + this.oldNumb);
    },
    del() {
      if (this.charSinceDot === null){
        this.newNumb = (this.newNumb - (this.newNumb % 10))/10;
      } else if (this.charSinceDot === 0){
        this.charSinceDot = null;
      } else {
        this.charSinceDot--;
        this.newNumb -= (this.newNumb**this.charSinceDot - (this.newNumb**this.charSinceDot % 1))**(-1 * this.charSinceDot);
        this.roundTo(6);
      }
      this.msg =this.newNumb;
    },
    equals(){
      if(this.newNumb === 0 && toString(this.func) == toString(((n1, n2) => n1 / n2))){
        this.oldNumb = NaN;
      } else{
        if(this.func === null){
          this.oldNumb = this.newNumb;
        } else if (this.newNumb != null){
           
          this.oldNumb = this.func(this.oldNumb, this.newNumb);
          this.roundTo(6);
        }
      }
      this.msg = this.oldNumb;
      this.oldNumb=0;
      this.newNumb=null;
      this.func=null;
      this.charSinceDot = null;
      console.log("newNumb: " + this.newNumb);
      console.log("oldNumb: " + this.oldNumb);
    },
    addDot(){
      if (this.charSinceDot === null){
        this.charSinceDot = 0;
      }
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
