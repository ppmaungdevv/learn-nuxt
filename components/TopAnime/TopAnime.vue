<template src='./TopAnime.html' />

<script>
import axios from 'axios'
import { anime_api } from '../../apis/animeAPI'
import { DateTime } from "luxon";
export default {
    name: 'TopAnimeComponent',
    data() {
        return {
            top_animes: []
        }
    },
    activated() {
      // Call fetch again if last fetch more than 30 sec ago
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch()
      }
    },
    async fetch() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.getTopAnimes();
    },
    methods: {
        async getTopAnimes() {
            const { data } = await axios.get(anime_api.top)
            this.top_animes = data.data.map(ele => ele)
            console.log('this.top_animes')
        },
        getDate(date){
            // date no good need to fix
            const cut_date = date.split('T')[0]
            console.log(cut_date)
            console.log('--------------', DateTime.fromSQL(cut_date).toFormat('yyyy-M-D'))
            return DateTime.fromISO(date).toFormat('yyyy-MM-DD')
        }
    }
}
</script>

<style scoped>
.heading {
    @apply bg-teal-200/20 text-left text-white border-l-8 border-green-500 pl-1 py-2 shadow-lg
}
</style>