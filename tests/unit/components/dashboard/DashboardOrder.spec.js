import { shallowMount, createLocalVue } from '@vue/test-utils'
import DashboardOrder from '@/components/dashboard/DashboardOrder'
import money from 'v-money'

const localVue = createLocalVue()
localVue.use(money, {
  precision: 2,
  decimal: ',',
  thousands: '.',
  prefix: 'R$ '
})

const getFakeOrder = () => ({
  name: 'apple watch',
  price: 212,
  type: 'sell'
})

describe('dashboardOrder component', () => {
  it('should exists', () => {
    const cmp = shallowMount(DashboardOrder, { localVue })

    expect(cmp.isVueInstance()).toBeTruthy()
  }),
    it('should clean order attributes', () => {
      const cmp = shallowMount(DashboardOrder, { localVue })
      const expectedOrder = {
        name: undefined,
        price: undefined,
        type: undefined
      }

      cmp.vm.order = getFakeOrder()

      cmp.vm.cleanOrder()
      expect(cmp.vm.order).toEqual(expectedOrder)
    }),
    it('should call cleanOrder, setOrderHistory, getOrderHistory and emit an Event', () => {
      const cmp = shallowMount(DashboardOrder, { localVue })
      cmp.vm.order = getFakeOrder()

      cmp.vm.cleanOrder = jest.fn()
      cmp.vm.setOrderHistory = jest.fn()
      cmp.vm.getOrderHistory = jest.fn(() => ([]))
      cmp.vm.$root.$emit = jest.fn()

      cmp.vm.addOrder()

      expect(cmp.vm.cleanOrder).toBeCalled()
      expect(cmp.vm.setOrderHistory).toBeCalledWith([cmp.vm.order])
      expect(cmp.vm.getOrderHistory).toBeCalled()
      expect(cmp.vm.$root.$emit).toBeCalledWith('updateOrderHistory')
    }),
    it('should set order history on localStorage', () => {
      window.localStorage.removeItem('orderHistory')
      const cmp = shallowMount(DashboardOrder, { localVue })
      const order = getFakeOrder()
      cmp.vm.setOrderHistory([order])

      expect(window.localStorage.getItem('orderHistory')).toEqual(JSON.stringify([order]))
    }),
    describe('Should retrieve orderHistory', () => {
      beforeEach(() => (window.localStorage.removeItem('orderHistory')))
      it('should retrieve order history from localStorage', () => {
        const cmp = shallowMount(DashboardOrder, { localVue })
        
        const expectedData = getFakeOrder()
        window.localStorage.setItem('orderHistory', JSON.stringify([expectedData]))

        const retrieveData = cmp.vm.getOrderHistory()
        expect(retrieveData).toEqual([expectedData])
      })
      it('should retrieve an empty array', () => {
        const cmp = shallowMount(DashboardOrder, { localVue })
        const retrieveData = cmp.vm.getOrderHistory()
        expect(retrieveData).toEqual([])
      })
    }),
    describe('Should update oder', () => {
      it('should update order price', () => {
        const cmp = shallowMount(DashboardOrder, { localVue })
        const expectedPrice = getFakeOrder().price
        cmp.vm.updateOrder('price', expectedPrice)
        expect(cmp.vm.order.price).toBe(expectedPrice)
      }),
        it('should update order type', () => {
          const cmp = shallowMount(DashboardOrder, { localVue })
          const expectedType = getFakeOrder().type
          cmp.vm.updateOrder('type', expectedType)
          expect(cmp.vm.order.type).toBe(expectedType)
        }),
        it('should update order name', () => {
          const cmp = shallowMount(DashboardOrder, { localVue })
          const expectedName = getFakeOrder().name
          cmp.vm.updateOrder('name', expectedName)
          expect(cmp.vm.order.name).toBe(expectedName)
        })
    })
})
