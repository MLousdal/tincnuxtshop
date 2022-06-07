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
      <section v-if="collection?.products?.edges">
        <div class="filterSection">
          <p class="text-gray">
            {{ collection?.products?.edges.length }} resultater
          </p>
          <Filter @direction="sortCollection" :selected="selected"></Filter>
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
import { tags } from "~/constants";

const route = useRoute();
const handle = route.params.subSubCollection;
const sortKey = ref("BEST_SELLING");
const reverse = ref(false);
const selected = ref("BEST_SELLING");

const { result, error } = useQuery(collectionByHandle, {
  handle,
  sortKey,
  reverse,
  numProducts: 48,
});
const collection = useResult(result, null, (data) => data.collectionByHandle);

function sortCollection(sortdirection: string) {
  sortKey.value = sortdirection;
  selected.value = sortdirection;

  if (sortdirection === "PRICE_REVERSE") {
    sortKey.value = "PRICE";
  }
  if (sortdirection === "TITLE_REVERSE") {
    sortKey.value = "TITLE";
  }
  if (sortdirection === "PRICE_REVERSE" || sortdirection === "TITLE_REVERSE") {
    reverse.value = true;
    return;
  }
  reverse.value = false;
}
</script>
