<script setup>
defineEmits(["direction"]);
defineProps(["selected"]);

const options = [
  { value: "BEST_SELLING", label: "Mest populære" },
  { value: "CREATED", label: "Nyeste" },
  { value: "PRICE", label: "Pris stigende" },
  { value: "PRICE_REVERSE", label: "Pris faldende" },
  { value: "TITLE", label: "A - Z" },
  { value: "TITLE_REVERSE", label: "Z - A" },
];
</script>

<template>
  <div class="flex flex-gap-1">
    <button class="filter-btn">
      <img src="/icons/filter.svg" alt="" /> Filter (0)
    </button>
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
