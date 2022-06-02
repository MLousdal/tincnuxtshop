<template>
  <div>
    <Html>
      <Head>
        <Title>NuxtShop</Title>
        <Meta name="description" :content="description" />
      </Head>
    </Html>
    <section class="hero">
      <div class="hero-banner">
        <h1>Start din rejse mod en grønnere hverdag hos TINC</h1>
        <img src="/images/hero1.jpg" alt="" class="hero-img-1 flip-horizon" />
        <img src="/images/hero2.png" alt="" class="hero-img-2" />
        <NuxtLink class="btn flex flex-gap-2 hero-btn" to="/collections/all"
          ><span class="text-nowrap">Shop bæredygtigt</span>
          <img src="/icons/arrow-small.svg" alt=""
        /></NuxtLink>
      </div>
      <div class="hero-info">
        <div class="flex flex-gap-1 flex-align-center">
          <img src="/icons/box.svg" alt="" class="icon" />
          <p class="text-dark">
            Bestil inden kl 12, så har du din vare i morgen
          </p>
        </div>
        <div class="flex flex-gap-1 flex-align-center">
          <img src="/icons/van.svg" alt="" class="icon" />
          <p class="text-dark">Gratis fragt ved køb over 299,-</p>
        </div>
        <div class="flex flex-gap-1 flex-align-center">
          <img src="/icons/shop.svg" alt="" class="icon" />
          <p class="text-dark">Besøg en af vores fysiske butikker</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useShopStore } from "~/stores/shop";

const shopStore = useShopStore();
const { description } = storeToRefs(shopStore);
</script>
