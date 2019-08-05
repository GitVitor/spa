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
@import '~@/styles/colors';
@import '~@/styles/variables';
@import '~@/styles/mixins';

.main-content {
  padding: 1.5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include media-breakpoint-up(lg) {
    flex-direction: row;
  }

  ::v-deep .dashboard-order-history {
    @include media-breakpoint-up(lg) {
      flex-grow: 1;
      margin-left: 1em;
    }
  }
}

.divider {
  @include media-breakpoint-up(md) {
    display: none;
  }
}
</style>
