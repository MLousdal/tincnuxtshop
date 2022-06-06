<template>
  <section v-if="cartStore.cartOpen" ref="cart">
    <div class="cartModule">
      <div class="flex flex-between">
        <p class="text-5 text-serif bold">Tilføjet til kurv</p>
        <input
          type="image"
          src="/icons/close.svg"
          alt=""
          @click="closeCart"
          @keyup.enter="closeCart"
        />
      </div>
      <div class="cartModule-items">
        <CartItem
          v-for="item in lineItems"
          :key="item?.node?.id"
          class="cartModule-item"
          :item="item?.node ?? {}"
        />
      </div>
      <!-- <CartCheckout /> -->
      <NuxtLink
        to="/bruger/kurv"
        class="btn text-light fit flex-align-self-end"
        @click="closeCart"
        >Gå til kurv</NuxtLink
      >
    </div>
    <CartBackdrop />
  </section>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useCartStore } from "~/stores/cart";
import CartBackdrop from "./CartBackdrop.vue";

const cartStore = useCartStore();

const lineItems = computed(() => cartStore.lineItems);

const cart = ref(null);
const closeCart = () => cartStore.toggleCart(false);
onClickOutside(cart, () => closeCart);
</script>
