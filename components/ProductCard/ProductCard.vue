<template>
  <div class="product">
    <NuxtLink :to="productPath" class="product-img-link">
      <img :src="src" :alt="product.handle" />
    </NuxtLink>
    <!-- <div v-if="tag" class="product-tag" :class="tag">{{ tag }}</div> -->
    <FavoriteBtn></FavoriteBtn>
    <input type="image" src="/icons/addCart.svg" class="addToCartBtn" />
    <NuxtLink :to="productPath" class="product-text" tabindex="-1">
      <p>{{ product.title }}</p>
      <p class="bold">{{ product.priceRange.minVariantPrice.amount }} kr.</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: ProductCard;
  index?: number;
}>();

const productPath = `/products/${props.product.handle}`;

const lazyLoadingThreshold = 7;
const src = props.product?.images?.edges[0]?.node?.url ?? "";
</script>
