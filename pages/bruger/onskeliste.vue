<script setup>
import { wishProducts } from "~/constants";
import { useLastSeenStore } from "~/stores/lastSeen";
const lastSeenStore = useLastSeenStore();
const lastSeenProducts = computed(() => lastSeenStore.lastSeenProducts);
</script>

<template>
  <div class="onskeliste">
    <Html>
      <Head>
        <Title>
          Ønskeliste | TINC Økologisk Butik med Bæredygtige & Miljøvenlige
          Produkter
        </Title>
      </Head>
    </Html>
    <header>
      <h1 class="text-brand">Ønskeliste</h1>
    </header>
    <ProductGrid>
      <ProductCard
        v-for="(product, index) in wishProducts.edges"
        :index="index"
        :key="product.id"
        :product="product"
        wishlist
      />
    </ProductGrid>
    <hr />
    <section>
      <SectionHeader title="Sidst set" to="/all"></SectionHeader>
      <ProductSlider :products="lastSeenProducts" last-seen></ProductSlider>
    </section>
  </div>
</template>
