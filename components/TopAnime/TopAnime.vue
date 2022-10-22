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
        // ppmgSGhuntjob2312
        // ppmTHhunt2312
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

<style>

</style>