<template>
  <div id="app">
    <vv-header />
  </div>
</template>

<script>
import vvHeader from '@/components/VvHeader.vue'

export default {
  name: 'app',
  components: {
    vvHeader
  }
}
</script>
<style lang="scss">
@import './styles/app.scss';
</style>
