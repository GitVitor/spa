<template functional>
  <select class="vv-select" v-on="listeners">
    <option
      value="false"
      selected
      v-if="!props.value"
      :disabled="!!props.value"
      >{{ props.placeholder }}</option>
    <slot />
  </select>
</template>
<script>
export default {
  props: {
    value: {
      default: false
    },
    placeholder: {
      default: 'Selecione'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/colors';
@import '~@/styles/variables';

.vv-select {
  background-color: map-get($theme-colors, 'white');
  border: $input-border;
  border-radius: $input-border-radius;
  font-size: $input-font-size;
  height: calc(#{$input-height} + 6px);
  width: 100%;
}
</style>
