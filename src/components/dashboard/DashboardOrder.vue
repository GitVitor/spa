<template>
  <section class="dashboard-order">
    <vv-field label="Tipo de transação">
      <vv-select
        v-model="order.type"
        placeholder="Selecione um tipo de transação"
        @change="evt => updateOrder('type', evt.target.value)"
      >
        <option
          v-for="type of transactionsType"
          :key="type.value"
          :value="type.value"
          >{{ type.label }}</option
        >
      </vv-select>
    </vv-field>
    <vv-field label="Nome da mercadoria">
      <vv-input @change="evt => updateOrder('name', evt.target.value.trim())"/>
    </vv-field>
    <vv-field label="Valor">
      <vv-input />
    </vv-field>
    {{order}}
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
::v-deep .vv-field {
  margin: 0.5em 0;
}
</style>
