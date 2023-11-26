<template>
    <div class="news-cards flex flex-row flex-wrap w-full my-4 gap-3 px-10">
        <news-card v-for="item in newsItems" :item="item" :key="item.uid" />
    </div>
    <intersection-observer @intersected="onIntersect" :isLoading="isLoading" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useNewsStore } from '@/stores/newsStore';
import IntersectionObserver from '@/components/IntersectionObserver.vue';
import NewsCard from '@/components/NewsCard.vue';

const newsStore = useNewsStore();
const newsItems = computed(() => newsStore.newsItems)

const modalVisible = ref(false)

const isLoading = ref(false)
const onIntersect = () => {
    isLoading.value = true
    newsStore.getMoreNews().then(() => {
        isLoading.value = false
    });
}
</script>
<style scoped></style>