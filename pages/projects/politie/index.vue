<template>
    Politie project page
    <default-modal v-model:modalVisible="modalVisible" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import DefaultButton from '../../../components/DefaultButton.vue'
import DefaultModal from '../../../components/DefaultModal.vue'
const modalVisible = ref(true)
const clickButton = async () => {
    const response = await fetch('/.netlify/functions/hello-world')
        .then(response => response.json()
        )

    console.log(response)
}
</script>