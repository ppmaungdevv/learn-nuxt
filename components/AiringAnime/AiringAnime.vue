<template src='./AiringAnime.html' />

<script>
import axios from 'axios'
import { anime_api } from '../../apis/animeAPI'
export default {
    name: 'AiringAnimeComponent',
    data() {
        return {
            airing_animes: []
        }
    },
    async fetch() {
        await this.getAiringAnimeData()
    },
    methods: {
        async getAiringAnimeData() {
            const { data } = await axios.get(`${anime_api.top}?filter=airing`)
            this.airing_animes = data.data.map(ele => ele)
            console.log('this.airing', data)
        }
    },
}
</script>

<style>
.heading {
    @apply bg-teal-200/20 text-left text-white border-l-8 border-green-500 pl-1 py-2 shadow-lg
}
</style>