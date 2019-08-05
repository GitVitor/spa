<template>
  <section class="dashboard-order-history">
    <h3 class="dashboard-order-history__title">Extrato de transações</h3>
    <table class="dashboard-order-history__table">
      <thead>
        <tr>
          <th></th>
          <th>Mercadoria</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data of orderHistory" :key="data.id">
          <td>{{ data.type === 'buy' ? '-' : '+' }}</td>
          <td>{{ data.name }}</td>
          <td>R$ {{ data.price | toCurrency }}</td>
        </tr>
        <tr v-if="!orderHistory.length">
          <td
            class="dashboard-order-history__table__empty-item"
            colspan="3"
          >Nenhuma transação realizada</td>
        </tr>
      </tbody>
      <tfoot v-if="orderHistory.length">
        <tr>
          <td></td>
          <td>Total</td>
          <td>R$ {{ total | toCurrency }}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <small>[{{ total > 0 ? 'LUCRO' : 'PREJUIZO' }}]</small>
          </td>
        </tr>
      </tfoot>
    </table>
  </section>
</template>
<script>
export default {
  data() {
    return {
      history: []
    }
  },
  mounted() {
    this.loadOrderHistory()
    this.$root.$on('updateOrderHistory', this.loadOrderHistory)
  },
  computed: {
    orderHistory() {
      return this.history.map((o, id) => ({ ...o, id }))
    },
    total() {
      const sum = (x, y) => x + y
      const subtract = (x, y) => x - y
      return this.orderHistory.reduce(
        (acc, cur) =>
          cur.type === 'buy'
            ? subtract(acc, parseFloat(cur.price))
            : sum(acc, parseFloat(cur.price)),
        0
      )
    }
  },
  methods: {
    loadOrderHistory() {
      const orderHistory = window.localStorage.getItem('orderHistory')
      this.history = orderHistory ? JSON.parse(orderHistory) : []
      return this.history
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/colors';

$table-border: 1px solid map-get($theme-colors, 'gray');

.dashboard-order-history {
  &__title {
    text-align: center;
    width: 100%;
  }

  &__table {
    border-collapse: collapse;
    text-align: left;
    width: 100%;

    tbody tr {
      border-bottom: $table-border;
    }

    td {
      padding: 0.2em;
    }

    td:first-of-type {
      width: 1.5em;
    }
    td:last-of-type {
      text-align: right;
      width: 5.99em;
    }

    tfoot {
      border-top: $table-border;
      font-weight: bold;
      margin-top: 0.5em;

      small {
        font-weight: normal;
      }

      td:last-of-type {
        text-align: right;
      }
    }

    &__empty-item {
      text-align: center !important;
    }
  }
}
</style>
