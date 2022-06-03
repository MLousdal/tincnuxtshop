<template>
  <div class="product" v-if="product">
    <NuxtLink :to="productPath" class="product-img-link">
      <ProductImage
        :alt="product.handle"
        :lazy="index > lazyLoadingThreshold"
        :src="src"
      />
    </NuxtLink>
    <FavoriteBtn />
    <ProductAddToCart :product="product" small />
    <NuxtLink :to="productPath" class="product-text" tabindex="-1">
      <ProductTitle
        tag="p"
        :title="product.title"
        class="text-sm font-medium"
      />
      <ProductPrice
        :priceRange="product.priceRange"
        :compareAtPriceRange="product.compareAtPriceRange"
        class="bold"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import FavoriteBtn from "../FavoriteBtn.vue";
import ProductAddToCart from "../ProductAddToCart/ProductAddToCart.vue";
const props = defineProps<{
  product: ProductCard;
  index?: number;
}>();

const productPath = `/products/${props.product.handle}`;

const lazyLoadingThreshold = 7;
const src = props.product?.images?.edges[0]?.node?.url ?? "";
</script>
