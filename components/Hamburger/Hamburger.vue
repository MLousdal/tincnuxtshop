<template>
  <input id="navbar_checkbox" v-model="shopStore.menuOpen" type="checkbox" />
  <label for="navbar_checkbox" class="navBtn" aria-label="Menu">
    <div></div>
    <div></div>
    <div></div>
  </label>
</template>

<script setup lang="ts">
import { useShopStore } from "~/stores/shop";

const shopStore = useShopStore();

function handleClick() {
  shopStore.toggleMenu();
}
</script>
