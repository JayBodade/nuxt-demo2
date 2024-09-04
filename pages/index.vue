<template>
  <div>
    <v-row class="pa-4"> 
        <v-col cols="auto" v-for="product in productStore.products" :key="product.id">
           <NuxtLink :to="`/product/${product.id}`"> <ProductCard :product="product"/></NuxtLink> 
        </v-col>
    </v-row>
  </div>
</template>

<script  setup>

import { useMyProductStore } from '~/store/productStore';
let productStore = useMyProductStore();

const { data, pending, error, refresh } = await useFetch('https://fakestoreapi.com/products/',{
    method:'GET',
    headers:{
        'content-type':'application/json',
    }
})
productStore.products = data;


</script>

<style>
a{
    text-decoration: none;
}

</style>