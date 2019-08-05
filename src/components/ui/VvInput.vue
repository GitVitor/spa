<template functional>
  <input class="vv-input" :value="props.externalValue" type="text" v-on="listeners" />
</template>
<style lang="scss" scoped>
@import '~@/styles/colors';
@import '~@/styles/variables';

.vv-input {
  border: $input-border;
  border-radius: $input-border-radius;
  font-size: $input-font-size;
  height: $input-height;
  padding: $input-padding;
  width: $input-width;
}
</style>
