<script setup>
defineEmits(["direction", "newFilters"]);
const props = defineProps(["selected", "filters"]);

const options = [
  { value: "BEST_SELLING", label: "Mest populære" },
  { value: "CREATED", label: "Nyeste" },
  { value: "PRICE", label: "Pris stigende" },
  { value: "PRICE_REVERSE", label: "Pris faldende" },
  { value: "TITLE", label: "A - Z" },
  { value: "TITLE_REVERSE", label: "Z - A" },
];

const filterMenuOpen = ref(false);

const newFilters = ref([
  {
    price: { min: props.filters[0].price.min, max: props.filters[0].price.max },
  },
  { productType: props.filters[1].productType },
  { productVendor: props.filters[2].productVendor },
]);
</script>

<template>
  <div class="flex flex-gap-1">
    <button class="filter-btn" @click="filterMenuOpen = !filterMenuOpen">
      <img src="/icons/filter.svg" alt="" /> Filter
    </button>
    <form v-show="filterMenuOpen" class="filterMenu">
      <div class="flex flex-between">
        <p class="text-5 text-serif bold">Filtrering</p>
        <input
          type="image"
          src="/icons/close.svg"
          alt=""
          @click.prevent="filterMenuOpen = !filterMenuOpen"
        />
      </div>
      <hr />
      <p class="bold text-serif text-4">Pris:</p>
      <label for="priceMin"
        >Mindste pris:
        <input
          id="priceMin"
          type="number"
          min="0"
          max="999"
          :placeholder="`Før: ${filters[0].price.min}`"
          v-model="newFilters[0].price.min"
        />
      </label>
      <label for="priceMax"
        >Max pris:
        <input
          id="priceMax"
          type="number"
          min="0"
          max="999"
          :placeholder="`Før: ${filters[0].price.max}`"
          v-model="newFilters[0].price.max"
        />
      </label>
      <hr />
      <p class="bold text-serif text-4">Produkt type:</p>
      <label for="productTypePerson"
        >Personlig pleje
        <input
          id="productTypePerson"
          type="radio"
          value="Personlig pleje"
          v-model="newFilters[1].productType"
        />
      </label>
      <label for="productTypeHus"
        >Husholdning
        <input
          id="productTypeHus"
          type="radio"
          value="Husholdning"
          v-model="newFilters[1].productType"
        />
      </label>
      <label for="productTypeFøde"
        >Fødevare
        <input
          id="productTypeFøde"
          type="radio"
          value="Fødevare"
          v-model="newFilters[1].productType"
        />
      </label>
      <hr />
      <p class="bold text-serif text-4">Brand:</p>
      <label for="productVendorZa"
        >Zao
        <input
          id="productVendorZa"
          type="radio"
          value="Zao"
          v-model="newFilters[2].productVendor"
        />
      </label>
      <label for="productVendorAv"
        >Avril
        <input
          id="productVendorAv"
          type="radio"
          value="Avril"
          v-model="newFilters[2].productVendor"
        />
      </label>
      <hr />
      <button
        @click="$emit('newFilters', newFilters), (filterMenuOpen = false)"
        class="filterMenu-btn"
      >
        Gem filtre
      </button>
    </form>
    <select
      name="sorting-rules"
      id="sorting"
      class="filter-select"
      @change="$emit('direction', $event.target.value)"
    >
      <option
        :value="option.value"
        :selected="option.value === selected"
        v-for="option in options"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
