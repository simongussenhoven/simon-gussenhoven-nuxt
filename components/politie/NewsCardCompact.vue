<template>
    <div class="news-card-compact items-start">
        <h1 class="text-4xl font-extrabold dark:text-white truncate text-left">{{ item.titel }}</h1>
        <p class="pt-2">{{ item.gebied }} | {{ getDateTime(item.publicatiedatum) }}</p>
        <p class="text-left py-8">{{ item.introductie }}</p>
        <hr class="mb-10" />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    item: NewsItem
}>()
</script>