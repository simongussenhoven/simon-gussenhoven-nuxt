<template>
    Politie project page
    <default-button @click="clickButton">Click me!</default-button>
</template>
<script lang="ts" setup>
import DefaultButton from '../../../components/DefaultButton.vue'

const clickButton = async () => {
    const response = await fetch('/.netlify/functions/hello-world')
        .then(response => response.json()
        )

    console.log(response)
}
</script>