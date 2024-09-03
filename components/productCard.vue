<template>
    <div>
      <v-card width="400" class="pa-4">
        <v-row no-gutters>
          <v-col cols="6">
            <v-img
              :src="product.image"
              width="160"
              height="160"
              class="rounded"
              contain
            ></v-img>
          </v-col>
          <v-col cols="6" class="d-flex flex-column justify-center">
            <v-card-title class="text-h6 mb-2 d-inline-block ">
              {{ product.title }}
            </v-card-title>
            <v-card-subtitle class="text-body-2 text-grey">
              {{ product.category }}
            </v-card-subtitle>
            <v-card-text class="text-h6 text-primary mt-auto">
              ${{ product.price }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </template>
  
  <script setup>
  const { product } = defineProps(['product'])
  </script>
  
  <style scoped>
  .v-card {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .v-img {
    border-radius: 8px;
  }
  
  .v-card-title {
    font-weight: bold;
  }
  
  .text-primary {
    color: #1976d2;
  }
  </style>
  