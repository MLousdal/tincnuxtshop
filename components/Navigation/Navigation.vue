<template>
  <nav class="nav-links" ref="menu" v-show="state.isDesktop">
    <div class="sub-menu" v-for="link in navLinks">
      <NuxtLink :to="link.path" class="underline">{{ link.title }}</NuxtLink>
      <div class="sub-menu-content">
        <div class="sub-sub-menu" v-for="subMenu in link.subMenus">
          <NuxtLink :to="subMenu.path">{{ subMenu.title }}</NuxtLink>
          <div class="sub-sub-menu-content">
            <div class="sub-sub-menu-content-filter">
              <p class="text-gray">Shop {{ subMenu.title }}</p>
              <div class="flex flex-column flex-gap-1">
                <NuxtLink :to="subMenu.path">Nyheder</NuxtLink>
                <NuxtLink :to="subMenu.path">Tilbud</NuxtLink>
                <NuxtLink :to="subMenu.path">Gaveideer</NuxtLink>
              </div>
            </div>
            <div class="sub-sub-menu-content-categories">
              <p class="text-gray">Shop efter kategori</p>
              <div class="flex flex-column flex-gap-1">
                <NuxtLink
                  v-for="subSubMenu in subMenu.subSubMenus"
                  :to="subSubMenu.path"
                  >{{ subSubMenu.title }}</NuxtLink
                >
              </div>
            </div>
            <BlogPost
              :author="blogPost.author"
              :date="blogPost.date"
              :img="blogPost.img"
              :link="blogPost.link"
              :title="blogPost.title"
            ></BlogPost>
          </div>
        </div>
      </div>
    </div>
    |
    <div class="sub-menu">
      <a class="underline">Blog</a>
    </div>
    <div class="sub-menu">
      <a class="underline">Om TINC</a>
    </div>
  </nav>
  <nav class="mobile-nav-links" v-show="menuOpen && !state.isDesktop">
    <div class="mobile-nav-links-buttons">
      <Hamburger />
      <button
        v-show="
          JSON.stringify(state.currentLinks) !== JSON.stringify(standardLinks)
        "
        @click="state.currentLinks = standardLinks"
        class="mobile-nav-links-back"
      >
        <img src="/icons/arrow.svg" class="flip" alt="" /><span>Tilbage</span>
      </button>
    </div>
    <input type="text" placeholder="Søgefelt" class="searchfield" />
    <div
      v-for="(link, index) in state.currentLinks"
      :key="index"
      class="mobile-nav-links-link"
      :class="{
        'background-secondary':
          link.path == '/personlig-pleje' ||
          link.path == '/husholdning' ||
          link.path == '/fodevare' ||
          index == 0,
      }"
    >
      <NuxtLink :to="link.path" @click="closeMenu">
        <img
          :src="link.img"
          :alt="link.title"
          class="mobile-nav-links-img"
          v-if="link.img"
        />{{ link.title }}
      </NuxtLink>
      <input
        type="image"
        src="/icons/arrow.svg"
        alt=""
        class="mobile-nav-links-icon"
        @click="updateCurrentLinks(link)"
        v-if="link.subMenus || link.subSubMenus"
      />
    </div>
  </nav>
</template>

<script setup>
import { navLinks } from "~/constants";
import { useShopStore } from "~/stores/shop";

const blogPost = {
  author: "Amalie A.",
  date: "02/04/22",
  img: "/images/diana-light.jpg",
  link: "/",
  title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
};

const shopStore = useShopStore();
const menuOpen = computed(() => shopStore.menuOpen);

const extraLinks = [
  {
    title: "Forside",
    path: "/",
  },
  {
    title: "Blog",
    path: "",
  },
  {
    title: "Om TINC",
    path: "",
  },
];

const standardLinks = navLinks.concat(...extraLinks);

const state = reactive({
  isDesktop: true,
  currentLinks: standardLinks,
});

function updateIsDesktop() {
  const mediaQuery = window.matchMedia("(max-width: 1210px)");

  if (mediaQuery.matches) {
    state.isDesktop = false;
  } else {
    state.isDesktop = true;
  }
}

function closeMenu() {
  shopStore.toggleMenu();
  state.currentLinks = standardLinks;
}

function updateCurrentLinks(link) {
  let newCurrentLinks = [link];
  if (link.subMenus) {
    newCurrentLinks.push(...link.subMenus);
  }
  if (link.subSubMenus) {
    newCurrentLinks.push(...link.subSubMenus);
  }
  state.currentLinks = newCurrentLinks;
}

onMounted(() => {
  window.addEventListener("resize", updateIsDesktop);
  updateIsDesktop();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateIsDesktop);
});
</script>
