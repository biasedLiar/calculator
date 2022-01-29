<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CalculatorButtons msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import CalculatorButtons from "../views/calculatorParts/CalculatorButtons.vue";

export default {
  name: "Home",
  components: {
    CalculatorButtons,
  },
};
</script>
