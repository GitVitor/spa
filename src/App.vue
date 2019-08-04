<template>
  <div id="app">
    <vv-header />
    <dashboard />
  </div>
</template>

<script>
import vvHeader from '@/components/VvHeader.vue'
import dashboard from '@/pages/Dashboard.vue'

export default {
  name: 'app',
  components: {
    vvHeader,
    dashboard
  }
}
</script>
<style lang="scss">
@import './styles/app.scss';
</style>
