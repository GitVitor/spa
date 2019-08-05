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
        <tr v-for="data of history" :key="data.id">
          <td>{{ data.type === 'buy' ? '+' : '-' }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.price }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>Total</td>
          <td>R$ 12.909,99</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <small>[LUCRO]</small>
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
      history: [
        {
          id: 1,
          type: 'buy',
          name: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          price: 'R$ 12.999,99'
        },
        {
          id: 2,
          type: 'sell',
          name: 'Lorem ipsum dolor sit amet',
          price: 'R$ 99,99'
        },
        {
          id: 3,
          type: 'buy',
          name: 'Lorem ipsum',
          price: 'R$ 9,99'
        }
      ]
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
  }
}
</style>
