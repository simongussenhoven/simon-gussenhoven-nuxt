<template>
    <a href="#"
        class="card flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-100 max-w-s">
        <div class="flex flex-col justify-between p-4 leading-normal h-full">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ item.titel }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-200 mb-2">
                <span>{{ item.gebied }} | {{ getDateTime(item.publicatiedatum) }}</span>
                <img :src="getImage(item.afbeelding.url)" class="float-right pl-10" />
                {{ getMaxChars(item.introductie) }}
            </p>
            <icon-button class="w-24 mb-0 mt-auto">Lees</icon-button>
        </div>

    </a>
</template>
<script lang="ts" setup>
import Default from '@/assets/img/default.png'
import { getDateTime } from '@/utils/date-time-helpers'
import IconButton from '@/components/IconButton.vue';

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