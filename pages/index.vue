<template>
  <div>
    <v-row class="pa-4"> 
        <v-col cols="auto" v-for="product in data" :key="product.id">
           <NuxtLink :to="`/product/${product.id}`"> <ProductCard :product="product"/></NuxtLink> 
        </v-col>
    </v-row>
  </div>
</template>

<script  setup>


const { data, pending, error, refresh } = await useFetch('https://fakestoreapi.com/products/',{
    method:'GET',
    headers:{
        'content-type':'application/json',
    }
})

console.log("this is data",pending)

</script>

<style>
a{
    text-decoration: none;
}

</style>