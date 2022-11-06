<template>
  <div>
    <Loading v-if="$fetchState.pending" />
    <div class="container mx-auto text-white my-2" v-else>
      <div class="flex mx-auto justify-around">
        <div class="flex w-full lg:w-3/4">
          <button class="p-2 text-emerald-200" @click="$router.back()">
            <font-awesome-icon :icon="['fa-solid', 'fa-chevron-left']" /> back
          </button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-center p-2">
        <div class="lg:w-1/5 flex justify-center">
          <img :src="anime_data.images.jpg.image_url" alt="topImage" class="">
        </div>
        <div class="w-full md:p-2 md:w-3/5 mt-3">
          <h2 class="text-left my-1"> {{ anime_data.title_english }} </h2>
          <h2 class="text-left my-1"> {{ anime_data.title_japanese }} </h2>
          <p class="font-light my-1"><font-awesome-icon :icon="['fa-regular', 'fa-star']" /> {{ anime_data.score }} </p>
          <p class="text-sm font-light my-1" :class="anime_data.rating[0] === 'R' ? 'text-red-500' : '' "> {{ anime_data.rating }} </p>
          <p class="text-sm font-light pb-1 text-emerald-300 my-1" v-if="anime_data.airing">{{ anime_data.status }}</p>
        </div>
      </div>
      <div class="flex justify-center">
        <p class="w-full lg:w-3/4 p-2 font-light"> {{ anime_data.synopsis }} </p>
      </div>
      <div class="flex justify-center mt-4">
        <iframe class="w-full p-1 md:w-2/3 lg:w-2/4 h-72 lg:h-96" :src="anime_data.trailer.embed_url" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { anime_api } from '@/apis/animeAPI'
export default {
  name: 'DetailPage',
  data() {
    return {
      id: this.$route.params.id,
      anime_data: {}
    }
  },
  async fetch() {
    console.log(this.id)
    await this.getAnimeData()
  },
  methods: {
    async getAnimeData() {
      console.log(anime_api.anime)
      const { data } = await axios.get(anime_api.anime+this.id)
      this.anime_data = data.data
      console.log('this.top_animes', this.anime_data.synopsis)
    }
  }
}
</script>

<style>

</style>