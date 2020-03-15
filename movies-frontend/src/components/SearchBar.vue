<template>
    <form id="search-bar-form" @submit.prevent="search">
        <h2>Search Movies</h2>
        <input id="search-input" type="text" v-model="query" /><button type="submit">Search</button>
    </form>
</template>

<script>
    export default {
        name: 'SearchBar',
        data() {
            return {
                query: '',
            }
        },
        methods: {
            search() {
                this.$router.push({ name: 'search-movie', query: { query: this.query } });
                this.query = '';
            },
        },
    }
</script>
<style scoped>
#search-input {
    margin-right: 10px;
}
#search-bar-form {
    margin-left: auto;
    margin-right: auto;
    padding-top: 2px;
    padding-bottom: 30px;
    background-color: lightgray;
}
</style>