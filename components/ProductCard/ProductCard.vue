<template>
  <div class="product" v-if="product">
    <NuxtLink :to="productPath" class="product-img-link">
      <ProductImage
        :alt="product.handle"
        :lazy="index > lazyLoadingThreshold"
        :src="src"
      />
      <div v-if="product.tags.includes('Nyhed')" class="product-tag Nyhed">
        Nyhed
      </div>
      <div v-if="product.tags.includes('Nedsat')" class="product-tag Nedsat">
        Nedsat
      </div>
      <div v-if="!product.availableForSale" class="product-tag Udsolgt">
        Udsolgt
      </div>
    </NuxtLink>
    <FavoriteBtn />
    <ProductAddToCart
      :product="product"
      small
      :disabled="!product.availableForSale"
    />
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
const props = defineProps<{
  product: ProductCard;
  index?: number;
}>();

const productPath = `/products/${props.product.handle}`;

const lazyLoadingThreshold = 7;
const src = props.product?.images?.edges[0]?.node?.url ?? "";
</script>
