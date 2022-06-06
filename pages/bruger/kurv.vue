<script setup>
import { useCartStore } from "~/stores/cart";
import { formatLocalePrice } from "~/utils/money";

const cartStore = useCartStore();
const lineItems = computed(() => cartStore.lineItems);
const giftAmount = ref(0);
</script>

<template>
  <div class="cart">
    <Html>
      <Head>
        <Title>
          Kurv | TINC Økologisk Butik med Bæredygtige & Miljøvenlige Produkter
        </Title>
      </Head>
    </Html>
    <header>
      <h1 class="text-brand">Indkøbskurv</h1>
    </header>
    <section class="cart-section">
      <div class="left">
        <CartItem
          v-for="item in lineItems"
          :key="item?.node?.id"
          :item="item?.node ?? {}"
        />
        <article class="flex flex-column flex-gap">
          <h4>Få en gratis gave med i din ordre</h4>
          <div class="product-cart">
            <div class="product-img-link">
              <img src="/images/gift.png" alt="Lille gratis gave - 1 pr. køb" />
            </div>
            <div>
              <div class="product-text">
                <h5>Lille gratis gave - 1 pr. køb</h5>
                <div class="text-4 bold">DKK 0.00</div>
                <div>Antal: {{ giftAmount }}</div>
              </div>
              <input
                type="image"
                src="/icons/close.svg"
                class="removeFromCartBtn"
                @click="removeItem"
                @keyup.enter="removeItem"
              />
              <button class="amountPos" @click="giftAmount++">Tilføj</button>
            </div>
          </div>
        </article>
      </div>
      <div class="right">
        <header>
          <h3>Pris i alt</h3>
        </header>
        <div class="cart-cost">
          <div v-for="item in lineItems" class="flex flex-between">
            <p>{{ item.node.merchandise.product.title }}:</p>
            <span
              >{{
                formatLocalePrice(
                  item.node.estimatedCost.subtotalAmount.amount,
                  "da-DK",
                  item.node.estimatedCost.subtotalAmount.currencyCode
                )
              }}
            </span>
          </div>
        </div>
        <CartSummary />
        <hr />
        <CartCheckout />
      </div>
    </section>
  </div>
</template>
