<template>
    <filter-bar />
    <div class="page flex justify-center">
        <div class="container">
            <div class="card pt-16 text-left">
                <h1 class="text-4xl font-extrabold text-left">{{ item?.titel }}</h1>
                <h2 class="text-left py-4 text-2xl"><span>{{ item?.gebied }}</span> | {{ getDateTime(item?.publicatiedatum
                    ??
                    'onbekend') }}</h2>
                <div class="content pb-5 ">
                    <p v-for="alinea in item?.alineas" v-html="alinea.opgemaaktetekst" class="par text-xl text-left" />
                </div>
                <hr class="" />
            </div>
            <!-- <h2 class="text-left pt-4 text-2xl">Meer items</h2>
            <div class="news-cards flex flex-row justify-center flex-wrap w-full my-4 gap-3 max-w-8xl pt-5">
                <news-card v-for="item in moreItems" :item="item" :key="item.uid" />
            </div> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useNewsStore } from '../../../../stores/newsStore';
import FilterBar from '@/components/politie/FilterBar.vue'
import NewsCard from '@/components/politie/NewsCard.vue';

const route = useRoute()
const newsStore = useNewsStore();
const item = newsStore.newsItems.find((item) => {
    return item.uid === route.params.id
})
const moreItems = computed(() => {
    return newsStore.newsItems.filter((item) => {
        return item.uid !== route.params.id
    }).slice(0, 6)
})

</script>
<style scoped lang="scss">
.par {
    text-align: left;

    :deep(h2) {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        margin-top: 15px;
    }

    :deep(h3) {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        margin-top: 15px;
    }

    :deep(b) {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        margin-top: 15px;
    }

    :deep(p) {
        margin-top: 15px;
    }
}
</style>
