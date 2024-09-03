<template>
 <v-container  >
    <v-card flat class="pa-4 mt-4" >
    <v-row no-gutters>
      <v-col cols="6">
        <v-img
          :src="product.image"
          width="100%"
          height="100%"
          class="rounded"
          contain
        ></v-img>
      </v-col>
      <v-col cols="6" class="d-flex flex-column justify-center">
        <v-card-title class="text-h6 mb-1">
          {{ product.title }}
        </v-card-title>
        <v-card-subtitle class="text-body-2 text-grey mb-2">
          {{ product.category }}
        </v-card-subtitle>
        <v-card-text class="text-body-2 text-grey--text truncate-3-lines">
          {{ product.description }}
        </v-card-text>
        <v-card-text class="text-h6 text-primary mt-2">
          ${{ product.price }}
        </v-card-text>
        <v-card-text class="text-body-2 text-grey--text">
          Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>

  
 </v-container>
  
 
</template>

<script setup>

const route = useRoute();

const { data:product, pending, error, refresh } = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`,{
    
})




</script>
<style scoped>
.v-card {
  border-radius: 12px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}

.v-img {
  border-radius: 8px;
}

.text-primary {
  color: #1976d2;
}

.truncate-3-lines {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>