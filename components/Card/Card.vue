<template src="./Card.html" />

<script>
export default {
    name: 'Card',
    props: ['tops'],
    data() {
        return {
            test: 'This is card component...',
            top_anime: this.tops,
        }
    }
}
</script>

<style>

</style>