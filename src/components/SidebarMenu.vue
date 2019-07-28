<template>
  <div class="sidebar-menu" :class="{ 'sidebar-menu--open': open }"></div>
</template>
<script>
export default {
  props: {
    open: {
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/colors";

.sidebar-menu--open {
  background-color: map-get($theme-colors, 'dark-gray');
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  width: 85vw;
}
</style>

