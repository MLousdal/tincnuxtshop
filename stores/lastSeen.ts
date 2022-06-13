import { defineStore } from "pinia";

export const useLastSeenStore = defineStore("lastSeen", {
  state: () => {
    return {
      lastSeenProducts: [],
    };
  },
  actions: {
    addLastSeenProducts(product) {
      this.lastSeenProducts.unshift(product);
    },
  },
});
