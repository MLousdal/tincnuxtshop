<template>
  <div class="product-cart">
    <NuxtLink
      :to="`/products/${item.merchandise.product.handle}`"
      class="product-img-link"
    >
      <img
        :src="image"
        :alt="item.merchandise.product.title"
        :width="imageWidth"
        :height="imageHeight"
      />
    </NuxtLink>
    <div>
      <div class="product-text">
        <h5>{{ item.merchandise.product.title }}</h5>
        <div v-for="option in variantOptions" :key="option.value" class="flex">
          <template v-if="option.value !== 'Default Title'">
            <div class="mr-2">{{ option.name }}:</div>
            <div>{{ option.value }}</div>
          </template>
        </div>
        <div class="text-4 bold">{{ formattedPrice }}</div>
        <div>QTY: {{ item.quantity }}</div>
      </div>
      <input
        type="image"
        src="/icons/close.svg"
        class="removeFromCartBtn"
        @click="removeItem"
        @keyup.enter="removeItem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatLocalePrice } from "~/utils/money";
import { useCartStore } from "~/stores/cart";

// TO-DO: Add item type def
const props = defineProps<{
  item: any;
}>();

const cartStore = useCartStore();

const image = props.item?.merchandise?.product?.featuredImage?.thumbnail ?? "";
const imageWidth = props.item?.merchandise?.product?.featuredImage?.width ?? "";
const imageHeight =
  props.item?.merchandise?.product?.featuredImage?.height ?? "";

const id = props.item?.id;
const variantOptions = props.item?.merchandise?.selectedOptions ?? null;

const removeItem = () => cartStore.cartLinesRemove(id);

const price = props.item?.estimatedCost?.totalAmount?.amount ?? "";
const currencyCode = props.item?.estimatedCost?.totalAmount?.currencyCode ?? "";
const formattedPrice = computed(() =>
  formatLocalePrice(price, "en-US", currencyCode)
);
</script>
