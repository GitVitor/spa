<template>
  <div>
    <div class="header-wrapper">
      <header class="d-flex">
        <i class="material-icons header__icon-logo header__icon--font-bigger">add_shopping_cart</i>
        <h1 class="header__h1">Controle financeiro</h1>
        <i
          class="material-icons header__icon-menu header__icon--font-bigger"
          @click="sidebarMenuOpen = !sidebarMenuOpen"
        >menu</i>
        <ul class="header__menu">
          <li class="header__menu__item">Dashboard</li>
          <li class="header__menu__item">Resumo</li>
          <li class="header__menu__item">Configurações</li>
        </ul>
      </header>
    </div>
    <sidebar-menu :open="sidebarMenuOpen" @close="sidebarMenuOpen = false" />
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
@import '~@/styles/variables';
@import '~@/styles/mixins';

.header-wrapper {
  background-color: map-get($theme-colors, 'gray');
}

header {
  padding: 1em 0;
  justify-content: space-between;

  @include media-breakpoint-up(lg) {
    padding: 1.5em 1em;
    justify-content: initial;
  }

  .header__h1 {
    font-size: 1.5em;
    font-weight: 300;
    margin: 0;
  }

  .header__icon-menu {
    cursor: pointer;

    @include media-breakpoint-up(lg) {
      display: none;
    }
  }

  .header__icon-logo {
    margin-right: 1em;
  }

  .header__icon--font-bigger {
    font-size: 1.8em;
  }

  .header__menu {
    background-color: map-get($theme-colors, 'white');
    display: none;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 0 auto;
    padding: .5em 1em;

    @include media-breakpoint-up(lg) {
      display: flex;
    }

    .header__menu__item {
      cursor: pointer;
      font-weight: 400;
      padding: 0 1.25em;

      &:hover {
        color: map-get($theme-colors, 'dark-gray');
      }

      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }

      &:not(:last-of-type) {
        border-right: 1px solid map-get($theme-colors, 'gray');
      }
    }
  }
}
</style>
