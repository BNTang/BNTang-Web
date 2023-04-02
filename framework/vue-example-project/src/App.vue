<template>
    <div id="app">
        <Container/>
    </div>
</template>

<script>
import Container from "@/components/Container/Container";
export default {
    name: 'App',
    components: {
        Container
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 100%;
}

* {
    margin: 0;
    padding: 0;
}
</style>