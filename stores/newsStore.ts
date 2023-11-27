import { defineStore } from 'pinia'
import { paramsToQueryParamString } from '@/utils/api-helpers'
export const useNewsStore = defineStore('news', {
    state: () => ({
        newsItems: [] as NewsItem[],
        numberOfItems: 25 as number,
        searchTerm: '' as string,
        isLast: false as boolean
    }),
    actions: {
        async getMoreNews() {
            if (this.isLast) return
            const baseUrl = '/.netlify/functions/get-news'
            const params = {
                offset: this.newsItems.length,
                query: this.searchTerm,
                maxnumberofitems: this.numberOfItems
            }
            const response = await fetch(baseUrl + paramsToQueryParamString(params))
                .then(response => response.json()
                )
            if (!response.iterator || response.iterator.last) {
                this.isLast = true
                return
            }
            this.newsItems = [...this.newsItems, ...response.nieuwsberichten]
        },
        setSearchTerm(string: string) {
            this.searchTerm = string
        },
        clearNewsItems() {
            this.newsItems = [];
        }
    }
})