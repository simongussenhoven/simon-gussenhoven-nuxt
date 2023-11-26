import { defineStore } from 'pinia'
import { paramsToQueryParams } from './utils'
export const useNewsStore = defineStore('news', {
    state: () => ({
        newsItems: [] as NewsItem[],
        numberOfItems: 25 as number,
        searchTerm: 'Amsterdam' as string
    }),
    actions: {
        async getMoreNews() {
            const baseUrl = '/.netlify/functions/get-news'
            const params = {
                offset: this.newsItems.length,
                query: this.searchTerm,
                maxnumberofitems: this.numberOfItems
            }
            const response = await fetch(baseUrl + paramsToQueryParams(params))
                .then(response => response.json()
                )
            this.newsItems = [...this.newsItems, ...response.nieuwsberichten]
        }
    }
})