<template>
  <section class="dashboard-order">
    <h3 class="dashboard-order__title">Nova transação</h3>
    <vv-field class="dashboard-order__vv-field" label="Tipo de transação">
      <vv-select
        v-model="order.type"
        placeholder="Selecione"
        @change="evt => updateOrder('type', evt.target.value)"
      >
        <option
          v-for="type of transactionsType"
          :key="type.value"
          :value="type.value"
        >{{ type.label }}</option>
      </vv-select>
    </vv-field>
    <vv-field
      class="dashboard-order__vv-field dashboard-order__vv-field-name"
      label="Nome da mercadoria"
    >
      <vv-input @change="evt => updateOrder('name', evt.target.value.trim())" />
    </vv-field>
    <vv-field class="dashboard-order__vv-field" label="Valor">
      <money class="dashboard-order__v-money" v-model="order.price"></money>
    </vv-field>
    <div class="dashboard-order__wrapper-add-order">
      <button class="dashboard-order__btn-add-order btn btn-dark-gray">Adicionar transação</button>
    </div>
  </section>
</template>
<script>
import vvField from '@/components/ui/VvField.vue'
import vvSelect from '@/components/ui/VvSelect.vue'
import vvInput from '@/components/ui/VvInput.vue'

export default {
  components: {
    vvField,
    vvSelect,
    vvInput
  },
  data() {
    return {
      transactionsType: [
        { label: 'Compra', value: 'buy' },
        { label: 'Venda', value: 'sell' }
      ],
      order: {
        type: undefined,
        name: undefined,
        price: undefined
      }
    }
  },
  methods: {
    updateOrder(type, newValue) {
      Object.keys(this.order).includes(type) &&
        (() => (this.order[type] = newValue))()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/colors';
@import '~@/styles/variables';
@import '~@/styles/mixins';

.dashboard-order {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @include media-breakpoint-up(md) {
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid map-get($theme-colors, 'gray');
    padding: 1em;
  }

  @include media-breakpoint-up(lg) {
    flex-direction: column;
    width: 25em;
  }

  ::v-deep &__vv-field {
    margin: 0.5em 0;

    @include media-breakpoint-up(md) {
      flex-basis: 200px;
      margin: 0 1em;
    }

    @include media-breakpoint-up(lg) {
      flex-basis: auto;
      margin: 0 0 1em;
    }

    &:first-of-type {
      @include media-breakpoint-up(md) {
        margin-left: 0;
      }
    }

    &:nth-last-of-type(2) {
      @include media-breakpoint-up(md) {
        margin-right: 0;
      }
    }
  }

  ::v-deep &__vv-field-name {
    @include media-breakpoint-up(md) {
      flex-grow: 1;
    }
  }

  &__title {
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
      flex: 0 0 100%;
      text-align: center;
    }

    @include media-breakpoint-up(lg) {
      flex: 0 0 auto;
    }
  }

  &__wrapper-add-order {
    flex: 0 0 100%;
    display: flex;
    justify-content: flex-end;

    @include media-breakpoint-up(lg) {
      // display: none;
      flex: 0 0 auto;
    }
  }

  &__btn-add-order {
    width: 100%;

    @include media-breakpoint-up(md) {
      margin-top: 1em;
      width: 300px;
    }

    @include media-breakpoint-up(lg) {
      margin-top: 0;
      width: 100%;
    }
  }
}
</style>
