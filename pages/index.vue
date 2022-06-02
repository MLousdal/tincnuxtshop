<template>
  <Html>
    <Head>
      <Title>NuxtShop</Title>
      <Meta name="description" :content="description" />
    </Head>
  </Html>

  <div class="wrapper app">
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
      <ProductSlider :products="products"></ProductSlider>
    </section>
    <section>
      <SectionHeader
        title="Kategorier"
        to="/collections/all"
        noLink
      ></SectionHeader>
      <CategorySlider :categories="categories"></CategorySlider>
    </section>
    <section>
      <SectionHeader title="Populært" to="/collections/all"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
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
      <SectionHeader
        title="Om TINC"
        to="/collections/all"
        more="læs mere"
      ></SectionHeader>
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

const shopStore = useShopStore();
const { description } = storeToRefs(shopStore);

const products = [
  {
    __typename: "ProductEdge",
    cursor: "eyJsYXN0X2lkIjo3NzA5MjAxMTA1MTMxLCJsYXN0X3ZhbHVlIjoiMCJ9",
    node: {
      __typename: "Product",
      availableForSale: true,
      compareAtPriceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
      },
      description:
        "Denttabs er 100% naturlige og veganske tandpastatabletter, der både giver dig rene tænder og sparer miljøet for en masse unødig plastikemballage. Denttabs indeholder ikke traditionelt slibemiddel, men derimod cellulose mikrofibre. Fibrene giver en meget nænsom polering af tænderne i stedet for den sædvanlige slibning, men med en fremragende virkning. Med frisk smag af mint. AnvendelseKnus en Denttabs tablet mellem tænderne, tabletten opløses med dit spyt og giver en pasta, som du med en fugtig tandbørste fordeler let i munden før du børster. Børst nænsomt og skyl munden fuldstændigt som du plejer - gerne i 2 minutter. Fås også med fluor. Hvor mange Denttabs skal du bruge? 40 g. svarer til ca. 120 tabletter. Dette er nok til én person i 2 måneder. Vi pakker dine Denttabs i en papirspose. Ønsker du ikke at opbevare dem i posen, anbefaler vi, at hælde dem over i en lufttæt emballage.Ingidienser Microcrystalline cellulose, sodium bicarbonate, citric acid, silica, sodium laurel glutamate, magnesium stearate, natural mint aroma of menthol, stevia, xantham gum, eugenol. Zero Waste Vegansk / vegan",
      handle: "denttabs-tandpastapiller-uden-fluor-pris-pr-gram",
      id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MDkyMDExMDUxMzE=",
      images: {
        __typename: "ImageConnection",
        edges: [
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 1000,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDg0NzkxNzI4NDM=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/8206002-sw_1-sw_1000x1000_ba4634d5-b832-4744-be62-699457f3bdce.jpg?v=1653985983",
              width: 1000,
            },
          },
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 1000,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDg0NzkyMDU2MTE=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/8206002-3-sw_1_1-sw_1000x1000_14c10c39-c116-4100-9d3c-203b071dfcb5.jpg?v=1653985983",
              width: 1000,
            },
          },
        ],
      },
      priceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "1.2",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "1.2",
          currencyCode: "DKK",
        },
      },
      productType: "Personlig pleje",
      tags: ["Tandpleje"],
      title: "Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
      variants: {
        __typename: "ProductVariantConnection",
        edges: [
          {
            __typename: "ProductVariantEdge",
            node: {
              __typename: "ProductVariant",
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80Mjg5MDI1Nzg1ODc5NQ==",
              title: "Default Title",
              availableForSale: true,
              sku: "102",
            },
          },
        ],
      },
    },
  },
  {
    __typename: "ProductEdge",
    cursor: "eyJsYXN0X2lkIjo3NzA5MTgyMjMwNzYzLCJsYXN0X3ZhbHVlIjoiMCJ9",
    node: {
      __typename: "Product",
      availableForSale: true,
      compareAtPriceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
      },
      description:
        "Håndlavet og smuk gul håndsæbebar med en frisk duft af citrus og appelsin og med tørrede appelsinskiver på toppen. Håndskåret i butikken. Husk en sæbeskål til din sæbebar, så den kan tørre ud mellem hvert brug. Læs om 5 lette ændringer som gør dit badeværelse mere bæredygtigt her. 100% håndlavet Ingredienser: Aqua, Glycerin, Sorbitol, Sodium Stearate, Sodium Laurate, Propylene Glycol, Sodium Oleate, Sodium Myristate, Sodium Chrloride, Citrus Sinensis Oil, Citrus Sinensis Fruit (Orange Slice), Cocos Nucifera (Coconut) Oil, Glyceryl Laurate, Cocamidopropyl Betaine, Sodium Thiosulfate, Sodium Citrate, Citric Acid, Trisodium Sulfosuccinate, Pentasodium Pentetate, Tetrasodium Etidronate, CI 77891, CI 19140, Limonene, Cinnamal, Citral, Linalool, Eugenol.",
      handle: "handskaret-handsaebe-slice-of-sunshine-110-g",
      id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MDkxODIyMzA3NjM=",
      images: {
        __typename: "ImageConnection",
        edges: [
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 349,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDg0Mjk0NjM3ODc=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302059-sw_349x349_1b0e7e99-f119-4680-9099-745976a2e528.webp?v=1653985449",
              width: 349,
            },
          },
        ],
      },
      priceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "29.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "29.0",
          currencyCode: "DKK",
        },
      },
      productType: "Personlig pleje",
      tags: [
        "Bad og sæbe",
        "Håndsæbe",
        "Kropspleje",
        "Personlig pleje",
        "Sæber og sæbeskåle",
      ],
      title: "Håndskåret Håndsæbe Slice of Sunshine (110 g)",
      variants: {
        __typename: "ProductVariantConnection",
        edges: [
          {
            __typename: "ProductVariantEdge",
            node: {
              __typename: "ProductVariant",
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80Mjg5MDIyOTgwOTM4Nw==",
              title: "Default Title",
              availableForSale: true,
              sku: "",
            },
          },
        ],
      },
    },
  },
  {
    __typename: "ProductEdge",
    cursor: "eyJsYXN0X2lkIjo3NzA5MTc5NzczMTYzLCJsYXN0X3ZhbHVlIjoiMCJ9",
    node: {
      __typename: "Product",
      availableForSale: true,
      compareAtPriceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
      },
      description:
        "Håndlavet og smuk sæbebar med jasmin og grøn te, der plejer dine hænder. Grøn te har en beroligende effekt på tør hud. Med en skøn sød duft af jasmin. Håndskåret i butikken. Husk en sæbeskål til din sæbebar, så den kan tørre ud mellem hvert brug. Læs om 5 lette ændringer som gør dit badeværelse mere bæredygtigt her. 100% håndlavet Ingredienser: Aqua, Glycerine, Sodium Stearate, Propylene Glycol, Sorbitol, Sodium Laurate, Sodium Laureth Sulfate, Disoduim Laureth Sulfosuccinate, Silica, Sodium Chloride, Titanium Dioxide, Stearic Acid, Lauric Acid, Tetrasodium EDTA, Parfum, CI 77891, CI 74160, CI 51319, CI 21108, CI 77266, Limonene, Linalool, Citronellol, Hydroxycitronellal, Geraniol, Benzyl Benzoate, Benzyl Salicylate, Farnesol, Citral, Eugenol, Isoeugenol.",
      handle: "handskaret-handsaebe-jasmine-green-tea-swivel-ca-110-g",
      id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MDkxNzk3NzMxNjM=",
      images: {
        __typename: "ImageConnection",
        edges: [
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 349,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDg0MjMxNzIzMzE=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302284-sw_349x349_3fcf5431-69b9-4336-8901-d1b323c4ceb6.webp?v=1653985381",
              width: 349,
            },
          },
        ],
      },
      priceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "29.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "29.0",
          currencyCode: "DKK",
        },
      },
      productType: "Personlig pleje",
      tags: ["Bad og sæbe", "Håndsæbe", "Kropspleje", "Sæber og sæbeskåle"],
      title: "Håndskåret Håndsæbe Jasmine & Green Tea Swivel (ca 110 g)",
      variants: {
        __typename: "ProductVariantConnection",
        edges: [
          {
            __typename: "ProductVariantEdge",
            node: {
              __typename: "ProductVariant",
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80Mjg5MDIyNjU2NTM1NQ==",
              title: "Default Title",
              availableForSale: true,
              sku: "",
            },
          },
        ],
      },
    },
  },
  {
    __typename: "ProductEdge",
    cursor: "eyJsYXN0X2lkIjo3NzA5MTcyNjI5NzM5LCJsYXN0X3ZhbHVlIjoiMCJ9",
    node: {
      __typename: "Product",
      availableForSale: true,
      compareAtPriceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
      },
      description:
        "Balsambar med en opkvikkende duft af grøn te, håndlavet i Holland. Den vidunderlige sød duft af grøn te, den smukke farve og sammensætningen af naturlige ingredienser vil automatisk give dig et stort smil på læben. De naturlige ingredienser fugter og nærer også dit hår, gør dit hår vidunderligt blødt og sikrer, at det falder godt. For en god hårdag hver dag! Indeholder 5 vigtige ingredienser: grøn te, sheasmør, kakaosmør, arganolie og olivenolie. Grøn te har udover en dejlig duft også en beroligende virkning og modvirker tør hovedbund. Sheasmør har en beroligende effekt på din hud. Kakaosmør lindrer irritation, holder hovedbunden ung og er rig på vitaminer, der giver sundt hår. Arganolie er fyldt med vitamin E, der styrker håret og får det til at skinne. Olivenolie er rig på antioxidanter, der aktivt bekæmper aldring af huden. Balsambaren er PH neutral, uden SLS og SLES og uden palmeolie. Én bar er nok til 90 - 110 hårvask. Husk en sæbeskål til din balsambar, så den kan tørre ud mellem hvert brug. Ingredienser: Cetyl Alcohol, Butyrospermum Parkii Butter, Sunfloweroyl Methyl Glucamide, Aqua, Parfum, Theobroma Cacao Seed Butter, Olea Europaea Fruit Oil, Hexyl Cinnamal, Linalool, Limonene, Citronellol, Geraniol, Argania Spinosa Kernel Oil, Glycerin, Citral, CI 11680, Hydroxycitronellal, Camellia Sinensis Leaf Extract, CI 74260. Zero Waste Vegansk / vegan Uden palmeolie",
      handle: "happysoaps-green-tea-happiness-balsambar-65-g",
      id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MDkxNzI2Mjk3Mzk=",
      images: {
        __typename: "ImageConnection",
        edges: [
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 349,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDg0MDUxODI2OTk=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1904071-sw_349x349_726bd6c4-f143-410c-9c7b-ac907de8a049.webp?v=1653985184",
              width: 349,
            },
          },
        ],
      },
      priceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "89.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "89.0",
          currencyCode: "DKK",
        },
      },
      productType: "Personlig pleje",
      tags: [
        "Bad og sæbe",
        "Håndsæbe",
        "Personlig pleje",
        "Shampoo",
        "Shampoo - Balsam bar",
        "Sæber og sæbeskåle",
      ],
      title: "HappySoaps - Green Tea Happiness Balsambar (65 g)",
      variants: {
        __typename: "ProductVariantConnection",
        edges: [
          {
            __typename: "ProductVariantEdge",
            node: {
              __typename: "ProductVariant",
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80Mjg5MDIxNzYxOTY5MQ==",
              title: "Default Title",
              availableForSale: true,
              sku: "",
            },
          },
        ],
      },
    },
  },
  {
    __typename: "ProductEdge",
    cursor: "eyJsYXN0X2lkIjo3NzA5MTY2OTkzNjQzLCJsYXN0X3ZhbHVlIjoiMCJ9",
    node: {
      __typename: "Product",
      availableForSale: true,
      compareAtPriceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
      },
      description:
        "Vegansk og naturlig shampoobar med frisk duft af lemongræs og vanilje. Renser håret og hovedbunden forsigtigt. Giver fugt og glans tilbage til tørt og stresset hår. Fri for phthalater, peroxider, parabener og mikroplast. Læs meget mere om shampoobarer på vores blog her. Ingredienser: Sodium Coco – Sulfate, Cetearyl Alcohol, Glyceryl Stearate, Theobroma Cacao Seed Butter, Cocamidopropyl Betaine, Aqua, Sodium Cocoyl Hydrolyzed Pea Protein, Parfum (Fragrance), Sodium Phytate, Citric Acid, Alcohol, Spirulina Platensis Extract (and) Trehalose, CI 77492, Citral, Linalool, Limonene.",
      handle: "b-a-shampoobar-fugt-glans-lemongrass-60g",
      id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MDkxNjY5OTM2NDM=",
      images: {
        __typename: "ImageConnection",
        edges: [
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 349,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDgzODkzNTU3NTU=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901202-1_349x349_902df7e0-87ff-414a-ba13-ca0e9200145a.webp?v=1653985036",
              width: 349,
            },
          },
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 349,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDgzODk0MjEyOTE=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1904079-2_349x349_c3f51280-0fe6-403e-988f-5e2075240112.webp?v=1653985036",
              width: 349,
            },
          },
        ],
      },
      priceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "69.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "69.0",
          currencyCode: "DKK",
        },
      },
      productType: "Personlig pleje",
      tags: ["Hår", "Hårpleje", "Shampoo", "Shampoo - Balsam bar"],
      title: "B&A Shampoobar Fugt - Glans Lemongrass 60G",
      variants: {
        __typename: "ProductVariantConnection",
        edges: [
          {
            __typename: "ProductVariantEdge",
            node: {
              __typename: "ProductVariant",
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80Mjg5MDIxMDU3NDU3MQ==",
              title: "Default Title",
              availableForSale: true,
              sku: "",
            },
          },
        ],
      },
    },
  },
  {
    __typename: "ProductEdge",
    cursor: "eyJsYXN0X2lkIjo3NzA5MTYxOTgwMTM5LCJsYXN0X3ZhbHVlIjoiMCJ9",
    node: {
      __typename: "Product",
      availableForSale: true,
      compareAtPriceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
      },
      description:
        "Balsambuds til trætte, behandlede og trængende lokker. En balsam der plejer det fine skandinaviske og behandlede hår, med keratin, troldnød og det regenererende provitamin B5 og Vitamin E. Med en mild og feminin duft. En pakke indeholder 5 stk BalsamBuds (a 20 g.) Anvendelse: Til Buds på 20 g. anvendes 1,5-2,2 dl kogt vand. Lad Bud’n opløse sig og rør godt i ca. 3-7 min. Lad afkøle og den er klar til brug. Påføres de fugtige hårspidser. Lad det virke 2-5 min. og skyl efter med rigeligt vand, til massen er helt ude af håret. Balsammassen kan gemmes i et par dage, hvis der skulel være balsam i overskud. Husk en sæbeskål til din balsambuds, så den kan tørre ud mellem hvert brug. Ingredienser: Cetearyl Alcohol, Cetanol Alcohol, sodium cocoyl isethionate, Coco glycosid, Theobroma cacao (seed butter), Coconut oil - Cocos nucifera, Keratin (Water, Glycerin, Ceratonia Siliqua (Carob) Seed Extract, Hydrolyzed Soy Protein, Zea Mays (Corn) Starch, Polyquaternium-16), Hamamelis Virginiara Linne`plant extract (Glycerine, Aqua, Hamamelis Virginiara Linne`plant extract, Potassium sorbate, Sodium benzoate), Sodium lactate, Panthenol, Cetrimonium Chloride, Tocopheryl Acetate, Potassium sorbate, Parfum Uden parabener og SLS/SLES. Balsambuds'ene er pH neutral og kræver derfor ingen tilvænningsperiode. Emballage i 100% FSC-certificeret genbrugskarton. Zero Waste Vegansk / vegan",
      handle: "birk-balsambuds-troldnod-5-stk-a-20-g",
      id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MDkxNjE5ODAxMzk=",
      images: {
        __typename: "ImageConnection",
        edges: [
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 349,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDgzNzU1Mjc2NTk=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/Birk_BalsamBuds-sw_349x349_58c658d0-cb56-4638-8910-921f62be8226.webp?v=1653984889",
              width: 349,
            },
          },
        ],
      },
      priceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "48.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "48.0",
          currencyCode: "DKK",
        },
      },
      productType: "Personlig pleje",
      tags: [
        "Bad og sæbe",
        "Balsam",
        "Håndsæbe",
        "Shampoo - Balsam bar",
        "Sæber og sæbeskåle",
      ],
      title: "Birk - BalsamBuds Troldnød (5 stk a 20 g)",
      variants: {
        __typename: "ProductVariantConnection",
        edges: [
          {
            __typename: "ProductVariantEdge",
            node: {
              __typename: "ProductVariant",
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80Mjg5MDIwNDE1MjA0Mw==",
              title: "Default Title",
              availableForSale: true,
              sku: "",
            },
          },
        ],
      },
    },
  },
  {
    __typename: "ProductEdge",
    cursor: "eyJsYXN0X2lkIjo3NzA5MTU0NTc0NTcxLCJsYXN0X3ZhbHVlIjoiMCJ9",
    node: {
      __typename: "Product",
      availableForSale: false,
      compareAtPriceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
      },
      description:
        "Rig, cremet shampoo der blidt renser og fjerner snavs uden at påvirke hovedbundens sarte fugtbalance. Den indeholder etisk og bæredygtigt produceret kokosolie og høje niveauer af naturligt forekommende fedtsyrer og proteiner, som er afgørende for at holde håret strålende og sund. Indeholder også tahitisk monoï olie og tiaré-blomsterblade. Disse rå, naturlige ingredienser fugter håret i dybden, reparerer skader og giver håret utrolig glans. God til tørt, skadet eller farvet hår. Uden parabener, phthalates gluten, palmeolie og sulfater. Ingredienser Made with Natural Vitamin E (Tocopherol) Water (Aqua), Sodium C14-16 Olefin Sulfonate, Cocos Nucifera (Coconut) Fruit Extract, Glycol Stearate, Cocamidopropyl Betaine, Cocamide DIPA, Sodium Chloride, PEG-120 Methyl Glucose Dioleate, Cocos Nucifera (Coconut) Oil, Gardenia Tahitensis Flower Extract, Tocopheryl, Helianthus Annuus (Sunflower) Seed Oil, Hydrolyzed Keratin, Phenoxyethanol, Ethylhexylglycerin, Hydroxypropyl Methylcellulose, Polyquaternium-10, Tetrasodium EDTA, Glycerin, Phosphoric Acid, Fragrance (Parfum), Coumarin.",
      handle: "palmers-coconut-oil-formula-conditioning-shampoo-400-ml",
      id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MDkxNTQ1NzQ1NzE=",
      images: {
        __typename: "ImageConnection",
        edges: [
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 349,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDgzNTcyNDMxMTU=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901064-sw_349x349_117d87f3-f0e5-4ed3-b84b-6b29c32e1b78.webp?v=1653984687",
              width: 349,
            },
          },
        ],
      },
      priceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "49.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "49.0",
          currencyCode: "DKK",
        },
      },
      productType: "Personlig pleje",
      tags: ["Hår", "Shampoo", "Shampoo - Balsam", "Shampoo - Balsam flydende"],
      title: "Palmers - Coconut Oil Formula Conditioning Shampoo (400 ml)",
      variants: {
        __typename: "ProductVariantConnection",
        edges: [
          {
            __typename: "ProductVariantEdge",
            node: {
              __typename: "ProductVariant",
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80Mjg5MDE5NTE3MzYxMQ==",
              title: "Default Title",
              availableForSale: false,
              sku: "",
            },
          },
        ],
      },
    },
  },
  {
    __typename: "ProductEdge",
    cursor: "eyJsYXN0X2lkIjo3NzA5MTUyMTgyNTA3LCJsYXN0X3ZhbHVlIjoiMCJ9",
    node: {
      __typename: "Product",
      availableForSale: true,
      compareAtPriceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "0.0",
          currencyCode: "DKK",
        },
      },
      description:
        "Økologisk balsam til tørt og skadet hår. Denne balsam er fremstillet med aloe vera og sheabutter, som sørger for at reparere dit hår, og give det smidigheden og de bløde lokker tilbage. Certificeret økologisk. 98% af de samlede ingredienser er af naturlig oprindelse. 10% af de samlede ingredienser stammer fra økologisk landbrug. Ingredienser: Aqua (water), cetearyl alcohol, glycerin, ricinus communis (castor) seed oil, glyceryl stearate citrate, coco-caprylate, butyrospermum parkil (shea) butter, sodium stearoyl glutamate, benzyl alcohol, xanthan gum, dicaprylyl ether, lactic acid, bentonite, hydrogenated castor oil, parfum (fragrance), aloe barbadensis leaf juice powder, tocopherol, helianthus annuus (sunflower) seed oil, caesalpina spinosa gum, linalool, argan oil aminopropanediol esters, potassium sorbate, sodium hydroxide. Økologisk",
      handle: "avril-okologisk-balsam-repair-til-t-skadet-har-200-ml",
      id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MDkxNTIxODI1MDc=",
      images: {
        __typename: "ImageConnection",
        edges: [
          {
            __typename: "ImageEdge",
            node: {
              __typename: "Image",
              height: 349,
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzczNDgzNDEyODUwOTk=",
              url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1904078_349x349_0b0a24f7-0c8c-4c77-86fb-bf213b9c80b7.webp?v=1653984467",
              width: 349,
            },
          },
        ],
      },
      priceRange: {
        __typename: "ProductPriceRange",
        maxVariantPrice: {
          __typename: "MoneyV2",
          amount: "69.0",
          currencyCode: "DKK",
        },
        minVariantPrice: {
          __typename: "MoneyV2",
          amount: "69.0",
          currencyCode: "DKK",
        },
      },
      productType: "Personlig pleje",
      tags: ["Flyende balsam", "Hår", "Hårpleje", "Shampoo - Balsam flydende"],
      title: "Avril - Økologisk Balsam Repair til Til Skadet Hår (200 ml)",
      variants: {
        __typename: "ProductVariantConnection",
        edges: [
          {
            __typename: "ProductVariantEdge",
            node: {
              __typename: "ProductVariant",
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80Mjg5MDE5MTQ3MDgyNw==",
              title: "Default Title",
              availableForSale: true,
              sku: "65",
            },
          },
        ],
      },
    },
  },
];
const categories = [
  {
    img: "/images/anh-nguyen.jpg",
    title: "Fødevare",
    to: "/Fødevare/",
  },
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Kropspleje",
    to: "/Personlig pleje/Kropspleje/",
  },
  {
    img: "/images/ella-olsson.jpg",
    title: "Madopbevaring og servering",
    to: "/Husholdning/Madopbevaring/",
  },
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Naturlig duft",
    to: "/Personlig pleje/Natulige olier & kosmetriske råvare/Naturlig duft",
  },
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Shampoo - Balsam flydende",
    to: "/Personlig pleje/Hår/Shampoo - Balsam flydende",
  },
  {
    img: "/images/ella-olsson.jpg",
    title: "Opvask",
    to: "/Husholdning/Rengøring(sartikler)/Opvask",
  },
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Kosmetik",
    to: "/Personlig pleje/Kosmetik/",
  },
];
const blogPosts = [
  {
    author: "Amalie A.",
    date: "02/04/22",
    img: "/images/diana-light.jpg",
    link: "/",
    title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
  },
  {
    author: "Amalie A.",
    date: "02/04/22",
    img: "/images/ella-olsson.jpg",
    link: "/",
    title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
  },
  {
    author: "Amalie A.",
    date: "02/04/22",
    img: "/images/anh-nguyen.jpg",
    link: "/",
    title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
  },
];
const testimonials = [
  {
    date: "23/04/22",
    img: "/images/irene-strong.jpg",
    name: "Jerry Motylinski",
    rating: 5,
    review:
      "Meget interessant butik for krævende økologisk orienteret kunder. Anbefales!",
    verified: true,
  },
  {
    date: "05/10/21",
    name: "Malene Bech",
    rating: 4,
    review: "Meget tæt butik men er flot udnyttet.",
    verified: true,
  },
  {
    date: "03/10/21",
    img: "/images/womanA.jpg",
    name: "Anne K. G. Farcuh",
    rating: 5,
    review:
      "Var der på en søndag, en relativ ung medarbejder ekspederede mig. Hun var meget behjælpelig og kunne svare på alle mine spørgsmål omkring produkterne, meget hjælpsom og flink. Kan kun anbefale butikken 😊",
    verified: true,
  },
  {
    date: "23/09/21",
    img: "/images/jonathan-borba.jpg",
    name: "Rikke Gleerup Lerche",
    rating: 5,
    review:
      "Virkelig fin og dejlig butik med mulighed for specialiteter som tager hensyn til miljøet. Der er virkelig mange lækre sæber, olier, make-up, duftolier Sæbebær, opvasketing m.m. Priserne er rimelige Ekspedienten var meget imødekommende smilende og rar.😃 En dejlig oplevelse, kan varmt anbefales ⭐⭐⭐⭐⭐",
    verified: true,
  },
  {
    date: "11/07/21",
    img: "/images/edward-cisneros.jpg",
    name: "Lone Bang",
    rating: 5,
    review:
      "Super skønt specialorretning. Med fantastisk behagelig service. Kan varmt anbefales",
    verified: true,
  },
];
</script>
