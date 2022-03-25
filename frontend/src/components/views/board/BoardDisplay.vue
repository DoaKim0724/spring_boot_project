<template>
    <img :src = 'image'/>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
        image: "https://reqres.in/img/faces/1-image.jpg"
    })
})
</script>