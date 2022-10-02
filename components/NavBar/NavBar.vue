<template src='./NavBar.html' />
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            search_data: '',
        }
    },
    methods: {
        test() {
            console.log(this.search_data)
        }
    },
}
</script>