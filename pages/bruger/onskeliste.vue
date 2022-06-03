<script setup>
import { wishProducts, baseProducts } from "~/constants";

const tags = ["Tør/moden", "Fedet"];

const state = reactive({ desktop: true });
</script>

<template>
  <div class="onskeliste">
    <header>
      <h1 class="text-brand">Ønskeliste</h1>
    </header>
    <section>
      <div class="flex flex-between flex-align-center">
        <p class="text-gray" v-if="state.desktop">
          {{ wishProducts.edges.length }} resultater
        </p>
        <Filter></Filter>
      </div>
      <div class="flex flex-gap-1">
        <Tag v-for="tag in tags" :filter="tag"></Tag>
      </div>
    </section>
    <ProductGrid>
      <ProductCard
        v-for="(product, index) in wishProducts.edges"
        :index="index"
        :key="product.node.id"
        :product="product.node"
      />
    </ProductGrid>
    <hr />
    <section>
      <SectionHeader title="Sidst set" to="/all"></SectionHeader>
      <ProductSlider :products="baseProducts.edges"></ProductSlider>
    </section>
  </div>
</template>
