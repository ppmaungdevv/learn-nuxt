<template src='./TopAnime.html' />

<script>
import axios from 'axios'
import { anime_api } from '../../apis/animeAPI'
export default {
    name: 'TopAnime',
    data() {
        return {
            top_animes: []
        }
    },
    async fetch() {
        console.log(anime_api)
        await this.getTopAnimes();
    },
    methods: {
        async getTopAnimes() {
            const { data } = await axios.get(anime_api.top)
            this.top_animes = data.data.map(ele => ele)
            console.log('this.top_animes')
        }
    }
}
</script>

<style>

</style>