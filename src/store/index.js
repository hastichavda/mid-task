import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msrp: null,
    sales_price: '',
    dealer_discount: '',
    down_das: '',
    rebates: '',
  },

  actions: {
    updateValue() {
      this.sales_price
    },
  },
})
