<template>
  <v-app-bar app color="blue">
    <v-container>
      <v-row align="center" justify="space-between">
        <!-- Left Side: Home Link -->
        <v-col cols="auto" >
          <v-btn text to="/">
            Home
          </v-btn>
        </v-col>

        <v-col v-if="route.fullPath == '/'" cols="5">
         <v-autocomplete density="compact" v-model:search="search" return-object :items="productStore.products" item-title="title" :v-model="product"  @click:clear="_getProducts" clearable label="Search Any Product" variant="outlined" @update:modelValue="selectProduct" flat class="mb-4"  >
          
         </v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>


<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useMyProductStore } from '~/store/productStore';
const productStore = useMyProductStore();
const route = useRoute();
let search = ref('');
let product = ref({});

function selectProduct(selectedProduct:any){
  console.log("this is selected product",selectedProduct);
  productStore.products = [selectedProduct]

}

async function _getProducts(){
 const response = await fetch('https://fakestoreapi.com/products/');
 const result = await response.json();
 productStore.products = result;
}

</script>

<style>


</style>