import { shallowMount, createLocalVue } from '@vue/test-utils'
import DashboardOrderHistory from '@/components/dashboard/DashboardOrderHistory'
import toCurrency from '@/filters/toCurrency'

const localVue = createLocalVue()
localVue.filter('toCurrency', toCurrency)

const getFakeOrder = () => ({
  name: 'apple watch',
  price: 212,
  type: 'sell'
})

describe('DashboardOrderHistory component', () => {
  it('should exists', () => {
    const cmp = shallowMount(DashboardOrderHistory, { localVue })

    expect(cmp.isVueInstance()).toBeTruthy()
  })
  it('should return history with id prop', () => {
    const cmp = shallowMount(DashboardOrderHistory, { localVue })
    cmp.vm.history = [getFakeOrder()]
    expect(cmp.vm.orderHistory.every(o => !isNaN(o.id))).toBeTruthy()
  })
  it('should return amount of transactions price', () => {
    const cmp = shallowMount(DashboardOrderHistory, { localVue })
    cmp.vm.history = [
      {
        name: 'item one',
        type: 'sell',
        price: 10
      },
      {
        name: 'item two',
        type: 'buy',
        price: 24
      },
      {
        name: 'item three',
        type: 'sell',
        price: 10
      }
    ]
    expect(cmp.vm.total).toBe(-4)
  })
  it('should retrieve order history from localStorage', () => {
    window.localStorage.setItem(
      'orderHistory',
      JSON.stringify([getFakeOrder()])
    )
    const cmp = shallowMount(DashboardOrderHistory, { localVue })
    cmp.vm.loadOrderHistory()
    expect(cmp.vm.history).toEqual([getFakeOrder()])
  })
})
