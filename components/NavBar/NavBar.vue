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
        goto(route_name) {
            console.log('sfagfag', route_name)
            this.$router.push({name: route_name})
            this.show_slider = false
        },
        test() {
            console.log('asflgasfasfg')
        }
    },
}
</script>
<style scoped>
a.nuxt-link-exact-active {
    @apply font-semibold bg-slate-600 bg-opacity-90 text-white
}
.active {
    @apply font-semibold bg-teal-700 bg-opacity-90 text-white
}
.mobile-nav-item {
    @apply duration-500 ease-in-out transition-all flex flex-row p-2 items-center justify-center
}
.mobile-nav-item-active {
    @apply font-semibold bg-slate-700 bg-opacity-90
}
</style>