<template>
    <div class="app">
        <nav-bar />
        <div class="pages">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </div>
    </div>
</template>
<script lang="ts" setup>
import NavBar from './components/NavBar.vue';
</script>