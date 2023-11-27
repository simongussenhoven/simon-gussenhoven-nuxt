<template>
    <filter-bar />
    <div class="page flex justify-center">
        <div class="container">
            <div class="card pt-16 text-left">
                <h1 class="text-4xl font-extrabold text-left">{{ item?.titel }}</h1>
                <h2 class="text-left py-4 text-2xl"><span>{{ item?.gebied }}</span> | {{ getDateTime(item?.publicatiedatum
                    ??
                    'onbekend') }}</h2>
                <div class="content">
                    <p v-for="alinea in item?.alineas" v-html="alinea.opgemaaktetekst" class="par text-xl text-left" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useNewsStore } from '../../../../stores/newsStore';
import FilterBar from '@/components/politie/FilterBar.vue'

const route = useRoute()
const newsStore = useNewsStore();
const item = newsStore.newsItems.find((item) => {
    return item.uid === route.params.id
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
