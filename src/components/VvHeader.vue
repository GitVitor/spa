<template>
  <div>
    <header class="d-flex">
      <i class="material-icons icon--font-bigger">add_shopping_cart</i>
      <h1 class="header__h1">Controle financeiro</h1>
      <i
        class="material-icons header__icon-menu icon--font-bigger"
        @click="sidebarMenuOpen = !sidebarMenuOpen"
      >menu</i>
    </header>
    <sidebar-menu :open="sidebarMenuOpen" />
  </div>
</template>
<script>
import sidebarMenu from '@/components/SidebarMenu.vue'
export default {
  components: {
    sidebarMenu
  },
  data() {
    return {
      sidebarMenuOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/colors';

header {
  background-color: map-get($theme-colors, 'gray');
  padding: 8px 16px;
  justify-content: space-between;

  .header__h1 {
    cursor: pointer;
    font-size: 24px;
    font-weight: 300;
  }

  .header__icon-menu {
    cursor: pointer;
  }
}

.icon--font-bigger {
  font-size: 30px;
  padding-top: 15px;
}
</style>
