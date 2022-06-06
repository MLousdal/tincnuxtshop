<script setup>
import { wishProducts, baseProducts } from "~/constants";

const tags = ["Tør/moden", "Fedet"];

const state = reactive({ desktop: true });
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
        :key="product.node.id"
        :product="product.node"
        wishlist
      />
    </ProductGrid>
    <hr />
    <section>
      <SectionHeader title="Sidst set" to="/all"></SectionHeader>
      <ProductSlider :products="baseProducts.edges"></ProductSlider>
    </section>
  </div>
</template>
