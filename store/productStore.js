import { defineStore } from 'pinia'

export const useMyProductStore = defineStore({
  id: 'myProductStore',
  state: () => ({
    products:[],
   }),
  actions: {}
})
