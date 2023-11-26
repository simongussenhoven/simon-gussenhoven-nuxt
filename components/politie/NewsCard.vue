<template>
    <a href="#"
        class="card flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ item.titel }}
            </h5>
            <p>{{ item.gebied }} | {{ getDateTime(item.publicatiedatum) }}</p>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">
                <img :src="getImage(item.afbeelding.url)" class="float-right pl-10" />
                {{ getMaxChars(item.introductie) }}
            </p>
        </div>
    </a>
</template>
<script lang="ts" setup>
import Default from '@/assets/img/default.png'
import { getDateTime } from '@/utils/date-time-helpers'

const props = defineProps<{
    item: NewsItem
}>()
const getImage = (url: string) => {
    return url ? url : Default
}
const getMaxChars = (string: string) => {
    return string.length > 200 ? `${string.substring(0, 200)}...` : string
}

</script>
<style scoped>
.card {

    overflow: hidden;
}
</style>