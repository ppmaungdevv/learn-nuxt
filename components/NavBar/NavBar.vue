<template src='./NavBar.html' />
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            search_data: '',
            show_slider: false,
        }
    },
    async fetch() {
        console.log(this.$route.name)
    },
    methods: {
        test() {
            console.log(this.search_data)
        }
    },
}
</script>