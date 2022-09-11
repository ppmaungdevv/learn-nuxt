<template>
  <div>
    <Hero />
    <nuxt-link class="border rounded-md bg-green-300 px-3 py-2 mx-3 my-44" :to="{name: 'movies-movieid', params: {id: 1}}">Go to route with movie id inside movies folder</nuxt-link>
    <!-- <div class="text-white" v-for="(currency, index) in currencies">
      <span class="mr-5">{{index}}: </span>{{ currency }}
    </div> -->
    <div class="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div class="text-white border rounded-md flex flex-col" v-for="top_anime in top_animes">
        <div class="flex w-full items-center justify-center">
          <img :src="top_anime.images.jpg.image_url" alt="topImage">
          <!-- test -->
        </div>
        <div>
         <p>{{ top_anime.title_english }}</p>
         <p>{{ top_anime.title_japanese }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  data() {
    return {
      currencies: {},
      api_route: 'https://api.exchangerate.host/latest',
      anime_api_route: 'https://api.jikan.moe/v4/top/anime',
      top_animes: [],
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
      const { data: anime } = await axios.get(this.anime_api_route)
      this.currencies = JSON.parse(JSON.stringify(data.rates))
      this.top_animes = anime.data.map(ele => ele)
      // console.log('-------', this.top_animes )
    }
  }
}
</script>
