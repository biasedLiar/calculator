<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CalculatorButtons />
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
