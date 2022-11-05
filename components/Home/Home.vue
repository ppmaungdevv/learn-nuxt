<template src='./Home.html' />

<script>
import axios from 'axios'
import { anime_api } from '../../apis/animeAPI'
import { DateTime } from "luxon"

export default {
    name: "HomeComponent",
    data() {
        return {
            currently_airing_animes: [],
            top_animes: []
        }
    },
    activated() {
      // Call fetch again if last fetch more than 30 sec ago
      if (this.$fetchState.timestamp <= Date.now() - 100000) {
        this.$fetch()
      }
    },
    async fetch() {
        await this.getData()
    },
    methods: {
        async getData() {
            const get_airing = axios.get(`${anime_api.top}?limit=10&filter=airing`), get_top = axios.get(`${anime_api.top}?limit=10`)

            const result = await Promise.all([get_airing, get_top])
            const { data:airing_response } = result[0], { data:top_response } = result[1]

            this.currently_airing_animes = airing_response.data.map(ele => ele)
            this.top_animes = top_response.data.map(ele => ele)
        },
        getDate(date){
            // date no good need to fix
            const cut_date = date.split('T')[0]
            return DateTime.fromISO(date).toFormat('yyyy-MM-DD')
        }
    },
}
</script>

<style scoped>
.heading {
    @apply bg-teal-200/20 text-left text-white border-l-8 border-green-500 pl-1 py-2 mx-3 shadow-lg
}

.content {
    @apply grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-3
}

.footer {
    @apply flex justify-end px-3
}
</style>