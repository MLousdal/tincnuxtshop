<template>
  <div class="landing">
    <Html>
      <Head>
        <Title>NuxtShop</Title>
        <Meta name="description" :content="description" />
      </Head>
    </Html>
    <section class="hero">
      <div class="hero-banner">
        <h1>Start din rejse mod en grønnere hverdag hos TINC</h1>
        <img src="/images/hero1.jpg" alt="" class="hero-img-1 flip-horizon" />
        <img src="/images/hero2.png" alt="" class="hero-img-2" />
        <NuxtLink class="btn flex flex-gap-2 hero-btn" to="/collections/all"
          ><span class="text-nowrap">Shop bæredygtigt</span>
          <img src="/icons/arrow-small.svg" alt=""
        /></NuxtLink>
      </div>
      <div class="hero-info">
        <div class="flex flex-gap-1 flex-align-center">
          <img src="/icons/box.svg" alt="" class="icon" />
          <p class="text-dark">
            Bestil inden kl 12, så har du din vare i morgen
          </p>
        </div>
        <div class="flex flex-gap-1 flex-align-center">
          <img src="/icons/van.svg" alt="" class="icon" />
          <p class="text-dark">Gratis fragt ved køb over 299,-</p>
        </div>
        <div class="flex flex-gap-1 flex-align-center">
          <img src="/icons/shop.svg" alt="" class="icon" />
          <p class="text-dark">Besøg en af vores fysiske butikker</p>
        </div>
      </div>
    </section>
    <section>
      <SectionHeader title="Nyheder" to="/collections/all"></SectionHeader>
      <ProductSlider :products="baseProducts.edges"></ProductSlider>
    </section>
    <section>
      <SectionHeader
        title="Kategorier"
        to="/collections/all"
        noLink
      ></SectionHeader>
      <CategorySlider :categories="baseCategories"></CategorySlider>
    </section>
    <section>
      <SectionHeader title="Populært" to="/collections/all"></SectionHeader>
      <ProductSlider :products="baseProducts.edges"></ProductSlider>
    </section>
    <section>
      <SectionHeader title="Blog indlæg" to="/"></SectionHeader>
      <div class="blog-posts">
        <BlogPost
          v-for="blogPost in blogPosts"
          :author="blogPost.author"
          :date="blogPost.date"
          :img="blogPost.img"
          :link="blogPost.link"
          :title="blogPost.title"
        ></BlogPost>
      </div>
    </section>
    <section>
      <header>
        <h2>Det siger vores kunder</h2>
      </header>
      <TestimonialCarousel :testimonials="testimonials"></TestimonialCarousel>
    </section>
    <section>
      <SectionHeader title="Om TINC" to="/" more="læs mere"></SectionHeader>
      <div class="om-tinc">
        <article>
          <h3>
            Velkommen til TINC – bæredygtig webshop med alt i miljøvenlige
            produkter
          </h3>

          <p>
            Hos TINC er vi Danmarks største bæredygtige webshop, og det er os en
            sand fornøjelse at byde dig indenfor i vores univers af miljøvenlige
            produkter. Vi er en bæredygtig butik med håndplukkede brands og
            produkter, der er nøje udvalgt med omtanke for mennesker og miljø,
            og du kan derfor gå på opdagelse hos os med god samvittighed og
            finde lige det, du står og mangler.
          </p>
        </article>
        <article>
          <h3>Din Zero Waste-butik online</h3>

          <p>
            Økologisk butik. Bæredygtig butik. Zero Waste-butik. TINC lever op
            til det hele og kan imødekomme de behov, du har for miljøvenlige
            produkter i din hverdag. Vores produkter er fremstillet af
            miljøvenlige materialer gennem miljøvenlige processer og pakket i
            miljøvenlig emballage, og der er i det hele taget tænkt i
            bæredygtighed hele vejen rundt. Vi vil være dit foretrukne sted at
            handle miljøvenlige produkter, og vi håber, at du vil nyde dit besøg
            her i vores bæredygtige webshop.
          </p>
        </article>
        <article>
          <h3>Besøg os også i butikkerne i Aalborg og Aarhus</h3>

          <p>
            Du finder os ikke kun online. Kan du slet ikke få nok af
            TINC-universet, og vil du gerne selv kunne mærke varerne i hænderne,
            før du køber, glæder vi os til at møde dig i vores bæredygtige
            butikker i Aalborg og Aarhus, hvor endnu flere miljøvenlige
            produkter venter på dig.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useShopStore } from "~/stores/shop";
import {
  baseProducts,
  baseCategories,
  blogPosts,
  testimonials,
} from "~/constants";

const shopStore = useShopStore();
const { description } = storeToRefs(shopStore);
</script>
