<template src='./AiringAnime.html' />

<script>
import axios from 'axios'
import { anime_api } from '../../apis/animeAPI'
export default {
    name: 'AiringAnimeComponent',
    data() {
        return {
            
        }
    },
    async fetch() {

    },
    methods: {
        async getAiringAnimeData() {
            const { data } = await axios.get(`${anime_api.top}?filter=airing`)
            // this.top_animes = data.data.map(ele => ele)
            console.log('this.airing', data)
        }
    },
}
</script>

<style>

</style>