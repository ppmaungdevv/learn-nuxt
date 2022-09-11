<template>
  <div>
    <Hero />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  data() {
    return {
      currencies: {},
      api_route: 'https://api.exchangerate.host/latest'
    }
  },
  async fetch() {
    await this.getCurrencies()
  },
  // mounted(){ 
  //   this.fetchCurrencies()
  // },
  methods: {
    async getCurrencies() {
      const { data } = await axios.get(this.api_route)
      this.currencies = JSON.parse(JSON.stringify(data.rates))
      console.log('-------', this.currencies)
    }
  }
}
</script>
