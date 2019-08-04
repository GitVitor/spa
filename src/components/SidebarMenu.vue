<template>
  <transition name="fade">
    <div class="sidebar-menu d-flex" v-if="open">
      <header class="sidebar-menu__header">
        <i
          class="material-icons sidebar-menu__header__icon-close c-pointer"
          @click="$emit('close')"
          >close</i>
      </header>
      <ul class="sidebar-menu__list">
        <li class="sidebar-menu__list__item">
          <span>Resumo</span>
        </li>
        <li class="sidebar-menu__list__item">
          <span>Dashboard</span>
        </li>
        <li class="sidebar-menu__list__item">
          <span>Configurações</span>
        </li>
      </ul>
    </div>
  </transition>
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
@import '~@/styles/colors';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

.sidebar-menu {
  background-color: map-get($theme-colors, 'dark-gray');
  height: 100vh;
  flex-direction: column;
  max-width: 20em;
  padding: 0.5em 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 75vw;

  &__header {
    padding-left: 1em;

    &__icon-close {
      color: map-get($theme-colors, 'white');
      font-weight: bold;
      font-size: 1.5em;
      padding: 1em 0;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    text-align: right;
  }

  &__list__item {
    color: map-get($theme-colors, 'white');
    cursor: pointer;
    font-weight: 600;
    padding: 0.5em;

    &:hover {
      color: map-get($theme-colors, 'dark-gray');
      background-color: map-get($theme-colors, 'gray');
    }

    span {
      padding-right: 1em;
    }
  }
}
</style>
