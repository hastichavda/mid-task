<template>
  <div id="app">
    <div
      class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Mid Task
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for=""
                class="block text-sm font-medium text-left text-gray-700"
              >
                MSRP
              </label>

              <div class="mt-1">
                <money
                  v-model="msrp"
                  v-bind="money"
                  name="msrp"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for=""
                class="block text-sm font-medium text-left  text-gray-700"
              >
                Rebates
              </label>

              <div class="mt-1">
                <money
                  v-model="rebates"
                  v-bind="money"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for=""
                class="block text-sm font-medium text-left  text-gray-700"
              >
                Down / Das
              </label>
              <div class="mt-1">
                <money
                  v-model="down_das"
                  v-bind="money"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for=""
                class="block text-sm font-medium text-left  text-gray-700"
              >
                Term
              </label>
              <div class="mt-1">
                <select
                  name="cars"
                  id="cars"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="volvo">12</option>
                  <option value="saab">24</option>
                  <option value="opel">36</option>
                  <option value="audi">48</option>
                  <option value="audi">60</option>
                  <option value="audi">72</option>
                </select>
              </div>
            </div>

            <div>
              <label
                for=""
                class="block text-sm font-medium text-left text-gray-700"
              >
                Sale Price
              </label>
              <div class="mt-1">
                <money
                  v-model="sales_price"
                  v-bind="money"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for=""
                class="block text-sm font-medium text-left  text-gray-700"
              >
                Dealer Discount
              </label>

              <div class="mt-1">
                <money
                  v-model="dealer_discount"
                  v-bind="money"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Input Table Data -->

    <div class="flex flex-col px-10">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200 shadow-lg">
              <thead class="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    MSRP
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SALES_PRICE
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    DOWN_DAS
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rebates
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    DEALER_DISCOUNT
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr class="bg-gray-50">
                  <td
                    class="px-6 text-left py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ msrp }}
                  </td>
                  <td
                    class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {{ sales_price }}
                  </td>
                  <td
                    class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {{ down_das }}
                  </td>
                  <td
                    class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {{ rebates }}
                  </td>
                  <td
                    class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    ${{ dealer_discount }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Money } from 'v-money'
export default {
  name: 'app',
  components: {
    Money,
  },
  data() {
    return {
      msrp: null,
      dealer_discount: null,
      rebates: null,
      down_das: null,
      sales_price: null,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '$ ',
        precision: 2,
        masked: false,
      },
    }
  },

  watch: {
    msrp(val) {
      localStorage.msrp = val
    },
    dealer_discount(val) {
      localStorage.dealer_discount = val
    },
    rebates(val) {
      localStorage.rebates = val
    },
    down_das(val) {
      localStorage.down_das = val
    },
    sales_price(val) {
      localStorage.sales_price = val
    },
  },

  computed() {
    return {
      dealerDisCalculation() {
        this.sumDealerDiscount = this.dealer_discount
      },
    }
  },

  methods: {
    sumDealerDiscount() {
      this.dealer_discount = this.msrp - this.sales_price - this.rebates
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
