<template functional>
  <div class="vv-field" :class="data.staticClass">
    <label class="vv-field__label">{{ props.label }}</label>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    class: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.vv-field {
  margin: 1em;

  .vv-field__label {
    display: block;
    margin-bottom: 0.5em;
  }
}
</style>
