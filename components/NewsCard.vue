<template>
    <a href="#"
        class="card flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 max-w-50">

        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ item.titel }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-10">
                {{ item.introductie }}
            </p>
        </div>
    </a>
</template>
<script lang="ts" setup>
import Default from '@/assets/img/default.png'
const props = defineProps<{
    item: NewsItem
}>()
const getImage = (url: string) => {
    return url
}
</script>
<style scoped>
.card {
    max-width: 400px;
    max-height: 250px;
    overflow: hidden;
}
</style>