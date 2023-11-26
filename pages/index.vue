<template>
    <div class="home container flex flex-col justify-center items-center h-full">
        <h1 class="text-7xl">Simon Gussenhoven</h1>
        <h2 class="text-6xl">Frontend developer</h2>
        <div class="cards d-flex flex-wrap justify-center max-w-5xl">
            <Card v-for="(card, index) in cards" :cardContent="card" :key="index" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import Card from '@/components/Card.vue'
import ts from '../assets/img/ts.png'
import vue from '../assets/img/vue.png'
import nuxt from '../assets/img/nuxt.png'
import scrum from '../assets/img/scrum.png'
import tw from '../assets/img/tailwind.png'

const cards = [
    {
        title: 'Typescript',
        subTitle: 'Creating robust apps in Typescript',
        image: ts
    },
    {
        title: 'Vue.js',
        subTitle: 'Specialized in Vue.js',
        image: vue
    },
    {
        title: 'Nuxt.js',
        subTitle: 'Server side rendering with Nuxt',
        image: nuxt
    },
    {
        title: 'Scrum',
        subTitle: 'Comfortable working Agile with Scrum',
        image: scrum
    },
    {
        title: 'Tailwind/Bootstrap',
        subTitle: 'Css library enjoyer',
        image: tw
    },

] as CardContent[]
</script>
<style scoped lang="scss">
.cards {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 3rem;
}
</style>