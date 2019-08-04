<template>
  <main class="main-content">
    <dashboard-order />
    <hr class="divider" />
    <dashboard-order-history />
  </main>
</template>
<script>
import DashboardOrderHistory from '@/components/dashboard/DashboardOrderHistory'
import DashboardOrder from '@/components/dashboard/DashboardOrder'

export default {
  components: {
    DashboardOrderHistory,
    DashboardOrder
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    padding: 1.5em 1em;
  }
</style>
