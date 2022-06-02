<script setup>
import { reactive } from "vue";

const state = reactive({ filters: 3 });

function increment() {
  state.filters++;
}
</script>

<template>
  <div class="flex flex-gap-1">
    <button @click="increment" class="filter-btn">
      <img src="/icons/filter.svg" alt="" /> Filter ({{ state.filters }})
    </button>
    <select name="sorting-rules" id="sorting" class="filter-select">
      <option value="pop">Mest populære</option>
      <option value="new">Nyeste</option>
      <option value="dis">Tilbud</option>
      <option value="rise">Pris stigende</option>
      <option value="fall">Pris faldende</option>
      <option value="AZ">A-Å</option>
      <option value="ZA">Å-A</option>
    </select>
  </div>
</template>
