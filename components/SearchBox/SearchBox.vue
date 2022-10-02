<template src="./SearchBox.html" />

<script>
export default {
    name: 'SearchBox',
    props: ['value'],
    methods: {
        emitEvent(event_name){
            this.$emit(event_name)
        }
    },
}
</script>

<style>

</style>