<script setup>
const products = [
  {
    amount: 2,
    title: "Mikrogrønt - Frøsamling Mikrogrønt Øko 5Ps.",
    tags: ["Kolonial", "Mad - Kolonial"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "125.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9017011_428x428_44620d8f-1945-44ee-a241-ce0a4940f600.webp?v=1653984642",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Kolonial" }] },
  },
  {
    amount: 1,
    title: "Mikrogrønt - Bukkenhorn Øko",
    tags: ["Kolonial", "Mad - Kolonial"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "25.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9017007_428x428_df459806-f498-4d73-9ac9-a75b6341636d.webp?v=1653984578",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Kolonial" }] },
  },
];

const subTotal = ref(0);

function addToTotal(amount, price) {
  subTotal.value += amount * price;
}

onMounted(() => {
  products.forEach((product) => {
    addToTotal(
      product.amount,
      parseInt(product.priceRange.minVariantPrice.amount)
    );
  });
});

useHead({
  title: "Kurv",
});
</script>

<template>
  <div class="cart">
    <header>
      <h1 class="text-brand">Indkøbskurv</h1>
    </header>
    <section class="cart-section">
      <div class="left">
        <Product
          v-for="product in products"
          :title="product.title"
          :price="product.priceRange.minVariantPrice.amount"
          :img="product.images.nodes[0].url"
          :link="`/${product.productType}/${product.title}`"
          :tag="product.tag"
          :amount="product.amount"
          type="cart"
        ></Product>
        <article class="flex flex-column flex-gap">
          <h4>Få en gratis gave med i din ordre</h4>
          <Product
            title="Lille gratis gave - 1 pr. køb"
            price="0"
            img="/images/gift.png"
            link=""
            type="cart"
            gift
          ></Product>
        </article>
      </div>
      <div class="right">
        <header>
          <h3>Pris i alt</h3>
        </header>
        <div class="cart-cost">
          <p>Forsendelse:</p>
          <span>Fra 49 kr.</span>
          <template v-for="product in products">
            <p>{{ product.title }}:</p>
            <span
              >{{
                product.amount *
                parseInt(product.priceRange.minVariantPrice.amount)
              }}
              kr.</span
            >
          </template>
        </div>
        <form>
          <label for="discountCode" class="bold"
            >Tilføj rabatkode
            <input
              type="text"
              placeholder="Tilføj rabatkode"
              name="discountCode"
              id="discountCode"
            />
          </label>
          <label for="shipping"
            ><span>
              Handel for
              <span class="text-brand bold"
                >{{ 299 - subTotal > 0 ? 299 - subTotal : 0 }} kr.</span
              >
              mere og få gratis fragt
            </span>
            <progress
              id="shipping"
              :value="subTotal"
              max="299"
              name="shipping"
            ></progress>
          </label>
        </form>
        <div class="end-overlay">
          <div class="flex flex-row flex-between flex-align-center">
            <h3>Subtotal</h3>
            <p class="text-4 bold">
              {{ subTotal > 299 ? subTotal : subTotal + 49 }} kr.
            </p>
          </div>
          <hr />
          <input type="submit" value="Gå til kassen" />
        </div>
      </div>
    </section>
  </div>
</template>
