<template>
  <div>
    <h1 class="text-white">Learn Nuxt with Anime API</h1>
    <!-- <Hero /> -->
    <!-- <nuxt-link class="border rounded-md bg-green-300 px-3 py-2 mx-3 my-44" :to="{name: 'movies-movieid', params: {id: 1}}">Go to route with movie id inside movies folder</nuxt-link> -->
    <!-- <div class="text-white" v-for="(currency, index) in currencies">
      <span class="mr-5">{{index}}: </span>{{ currency }}
    </div> -->
    <p v-if="$fetchState.pending" class="text-white">Kuchiyose no Jutsu...</p>
    <!-- <div v-else class="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-3"> -->
    <div v-else>
      <TopAnime />
    <!-- this will be card component -->
      <!-- <div class="transition-all group relative text-white border bg-gray-100 flex flex-col h-auto rounded-md cursor-pointer" v-for="top_anime in top_animes">
        <div class="z-0 flex w-full items-center justify-center h-full rounded-md">
          <img :src="top_anime.images.jpg.image_url" alt="topImage" class="object-contian w-96 h-full rounded-md">
        </div>
        <div class="absolute bottom-0 p-2 z-10 h-1/5 group-hover:h-full group-hover:rounded-t-md text-ellipsis overflow-hidden bg-gray-700 bg-opacity-95 duration-500 w-full ease-in-out rounded-b-md">
         <p class="line-clamp-2 group-hover:line-clamp-none text-xl">{{ top_anime.title }}</p>
          <div class="invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:transition-all duration-500 ease-in-out my-2">
            <p class=" text-sm font-light pb-1"  v-if="top_anime.airing"> <small class="text-xs text-emerald-300"> {{ top_anime.status }} </small></p>
            <p class=" text-sm font-light pb-1"> {{ top_anime.episodes }} episode(s)</p>
            <p class=" text-sm font-light pb-1"> {{ top_anime.duration }} </p>
            <p class=" text-sm font-light pb-1"> {{ top_anime.rating }} </p>
            <p class="text-sm font-light pb-1">{{ top_anime.aired.string }}</p>
            <button class="my-3 btn-emerald-light bottom-0 absolute">Detail</button>
          </div>
        </div>
      </div> -->
        <!-- <div class="text-white border rounded-md" v-for="top_anime in top_animes">
          <div class="group h-72 rounded-md flex w-full items-end" :style="{ 'background-image': `url(${top_anime.images.jpg.image_url})`, 'background-repeat': 'no-repeat', 'background-position': 'center' }">
            <div class="h-1/5 group-hover:h-3/5 bg-gray-700 bg-opacity-80 duration-500 w-full ">
              <p class="">{{ top_anime.title }}</p>
              <button class="invisible group-hover:visible btn-emerald-light">Detail</button>
            </div>
          </div>
        </div> -->

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
    getBgImg(url) {
      return `bg-[url('${url}')]`
    },
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
