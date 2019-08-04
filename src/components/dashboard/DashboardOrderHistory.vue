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
        <tr>
          <td>+</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing </td>
          <td>R$ 12.999,99</td>
        </tr>
        <tr>
          <td>-</td>
          <td>Lorem ipsum dolor sit amet </td>
          <td>R$ 99,99</td>
        </tr>
        <tr>
          <td>+</td>
          <td>Lorem ipsum</td>
          <td>R$ 9,99</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>Total</td>
          <td>R$ 12.909,99</td>
        </tr>
      </tfoot>
    </table>
  </section>
</template>
<style lang="scss" scoped>
@import '~@/styles/colors';

.dashboard-order-history {
  &__title {
    text-align: center;
    width: 100%;
  }

  &__table {
    border-collapse: collapse;
    text-align: left;
    width: 100%;

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
      border-top: 1px solid map-get($theme-colors, 'dark-gray');
      font-weight: bold;
      margin-top: 0.5em;
    }
  }
}

</style>
