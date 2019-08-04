<template functional>
  <div class="vv-field">
    <label class="vv-field__label">{{ props.label }}</label>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.vv-field {
  margin: 1em;

  .vv-field__label {
    display: block;
    margin-bottom: 0.5em;
  }
}
</style>
