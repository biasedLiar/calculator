<template>
  <label v-if="label">{{ label }}</label>
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
  ></textarea>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
<style scoped>

label{
  display: block;
  margin-left: 0;
  margin-right: auto;
}

input{
  display: inline;
}
</style>