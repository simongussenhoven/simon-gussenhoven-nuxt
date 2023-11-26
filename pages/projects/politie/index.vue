<template>
    <div class="page flex justify-center">
        <div class="container flex flex-col items-center">
            <h1 class="text-5xl font-extrabold dark:text-white py-5 text-left">Nieuwsberichten</h1>
            <div class="news-cards flex flex-row flex-wrap w-full my-4 gap-3 px-10">
                <news-card v-for="item in highlightedNewsItems" :item="item" :key="item.uid" />
            </div>
            <div class="news-cards-compact pt-5 container max-w-6xl">
                <news-card-compact v-for="item in otherNews" :item="item" />
            </div>
        </div>
    </div>
    <intersection-observer @intersected="onIntersect" :isLoading="isLoading" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useNewsStore } from '@/stores/newsStore';
import IntersectionObserver from '@/components/IntersectionObserver.vue';
import NewsCard from '@/components/politie/NewsCard.vue';
import NewsCardCompact from '@/components/politie/NewsCardCompact.vue'

const newsStore = useNewsStore();
const highlightedNewsItems = computed(() => newsStore.newsItems.slice(0, 6))
const otherNews = computed(() => newsStore.newsItems.slice(6, newsStore.newsItems.length))

const modalVisible = ref(false)

const isLoading = ref(false)
const onIntersect = () => {
    isLoading.value = true
    newsStore.getMoreNews().then(() => {
        isLoading.value = false
    });
}
</script>
