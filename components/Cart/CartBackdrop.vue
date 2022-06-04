<template>
  <div class="cartModule-backdrop" @click="closeCart" @keyup.enter="closeCart">
    &nbsp;
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const closeCart = () => cartStore.toggleCart(false);
</script>
