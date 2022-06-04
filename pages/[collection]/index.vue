<template>
  <section>
    <section v-if="collection" class="oversigt">
      <Html>
        <Head>
          <Title>{{
            `${collection?.title} | TINC Økologisk Butik med Bæredygtige & Miljøvenlige
          Produkter` ?? ""
          }}</Title>
        </Head>
      </Html>
      <Breadcrumbs />
      <CategorySlider :categories="categories"></CategorySlider>
      <section v-if="collection?.products?.edges">
        <div class="flex flex-between flex-align-center">
          <p class="text-gray">
            {{ collection?.products?.edges.length }} resultater
          </p>
          <Filter></Filter>
        </div>
        <div class="flex flex-gap-1">
          <Tag v-for="tag in tags" :filter="tag"></Tag>
        </div>
        <ProductGrid>
          <ProductCard
            v-for="(product, index) in collection?.products?.edges"
            :index="index"
            :key="product.node.id"
            :product="product.node"
          />
        </ProductGrid>
      </section>
      <section v-else></section>
    </section>
    <section v-else>Loading</section>
    <section v-if="error">Error</section>
  </section>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { collectionByHandle } from "~/apollo/queries/collectionByHandle";
import { navLinks, tags } from "~/constants";

const route = useRoute();
const handle = route.params.collection;

const { result, error } = useQuery(collectionByHandle, {
  handle,
  numProducts: 48,
});
const collection = useResult(result, null, (data) => data.collectionByHandle);

const categoryLinks = navLinks.find(
  (link) => link.path.split("/")[link.path.split("/").length - 1] == handle
);

const categories = categoryLinks.subMenus;

// For at hente alle de anvendte tags i kollektionen ville jeg have anvendt denne funktion,
// som laver et array af produkterne, og looper over dem, og kigger på deres tags.
// Hvorefter den igen looper over disse tags og tjekker om tagget findes på tagArray og tilføjer dem hvis de ikke er

// let tagArray = []
// const edgesArray = Array.from(collection?.value.products.edges);
// edgesArray.forEach(edge => {
//   edge.node.tags.forEach(tag) => {
//     tagArray.indexOf(tag) === -1 ? tagArray.push(tag) : console.log(tag, "already added");
//   }
// });
</script>
