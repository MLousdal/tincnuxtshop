import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
  state: () => {
    return {
      wishlist: [],
    };
  },
  actions: {
    addProductToWishlist(product) {
      this.wishlist.unshift(product);
    },
    removeProductFromWishlist(product) {
      let index = this.wishlist.findIndex((object) => {
        return object.id === product.id;
      });
      this.wishlist.splice(index, 1);
    },
  },
});
