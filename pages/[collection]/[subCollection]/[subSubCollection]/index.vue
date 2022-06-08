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
          <Filter
            @direction="sortCollection"
            @newFilters="setFilters"
            :selected="selected"
            :filters="filters"
          ></Filter>
        </div>
        <div class="flex flex-gap-1 flex-wrap">
          <Tag
            v-if="filters[0].price.min != 0"
            :filter="filters[0].price.min"
            @emit="setPriceMin(0)"
            >Mindste pris:
          </Tag>
          <Tag
            v-if="filters[0].price.max != 999"
            :filter="filters[0].price.max"
            @emit="setPriceMax(999)"
            >Max pris:
          </Tag>
          <Tag
            v-if="filters[1].productType"
            :filter="filters[1].productType"
            @emit="setType(null)"
            >Produkt type:
          </Tag>
          <Tag
            v-if="filters[2].productVendor"
            :filter="filters[2].productVendor"
            @emit="setVendor(null)"
            >Brand</Tag
          >
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

const route = useRoute();
const handle = route.params.subSubCollection;
const sortKey = ref("BEST_SELLING");
const reverse = ref(false);
const selected = ref("BEST_SELLING");

const filters = reactive([
  { price: { min: 0, max: 999 } },
  { productType: null },
  { productVendor: null },
]);

const { result, error } = useQuery(collectionByHandle, {
  handle,
  sortKey,
  reverse,
  filters,
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

function setFilters(value: Array<object>) {
  setPriceMin(value[0].price.min);
  setPriceMax(value[0].price.max);
  setType(value[1].productType);
  setVendor(value[2].productVendor);
}

function setPriceMin(value: number) {
  filters[0].price.min = value;
}
function setPriceMax(value: number) {
  filters[0].price.max = value;
}

function setType(value: string) {
  filters[1].productType = value;
}

function setVendor(value: string) {
  filters[2].productVendor = value;
}
</script>
