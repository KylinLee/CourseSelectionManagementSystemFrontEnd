<template>
    <div class="app">
        <router-view/>
    </div>
</template>

<script>
    
    export default {
        name: "app",
        data() {
            return {
                role: "admin"
            };
        },
        components: {
         
        }
    }
</script>

<style>
</style>
