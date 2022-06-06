<template>
  <div class="cart-cost">
    <div class="flex flex-between">
      <p>Forsendelse:</p>
      <span>Fra 49 kr.</span>
    </div>
    <label for="discountCode" class="bold"
      >Tilføj rabatkode
      <input
        type="text"
        placeholder="Tilføj rabatkode"
        name="discountCode"
        id="discountCode"
      />
    </label>
    <slot></slot>
    <div class="flex flex-between">
      <p>Subtotal:</p>
      <p>
        {{ subtotalAmount }}
      </p>
    </div>
    <!-- <div class="flex flex-between">
      <p>Estimeret Skat:</p>
      <p>
        {{ totalTaxAmount }}
      </p>
    </div>
    <div v-if="totalDutyAmount" class="flex flex-between">
      <p>Duties:</p>
      <p>
        {{ totalDutyAmount }}
      </p>
    </div> -->
    <label for="shipping"
      ><span>
        Handel for
        <span class="text-brand bold"
          >{{
            299 - parseInt(subtotalAmount.replace("DKK ", "")) > 0
              ? 299 - parseInt(subtotalAmount.replace("DKK ", ""))
              : 0
          }}
          kr.</span
        >
        mere og få gratis fragt
      </span>
      <progress
        id="shipping"
        :value="parseInt(subtotalAmount.replace('DKK ', ''))"
        max="299"
        name="shipping"
      ></progress>
    </label>
    <div class="flex flex-between">
      <h3>Estimeret Total:</h3>
      <p class="text-4 bold">
        {{
          parseInt(subtotalAmount.replace("DKK ", "")) > 299
            ? totalAmount
            : `DKK ${parseInt(totalAmount.replace("DKK ", "") + 49)}`
        }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "~/stores/cart";
import { formatLocalePrice } from "~/utils/money";

const cartStore = useCartStore();
const { subtotalAmount, totalTaxAmount, totalDutyAmount, totalAmount } =
  storeToRefs(cartStore);
</script>
