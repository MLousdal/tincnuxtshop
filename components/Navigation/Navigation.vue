<template>
  <nav class="nav-links" ref="menu">
    <div class="sub-menu" v-for="link in navLinks">
      <NuxtLink :to="link.path" class="underline">{{ link.title }}</NuxtLink>
      <div class="sub-menu-content">
        <div class="sub-sub-menu" v-for="subMenu in link.subMenus">
          <NuxtLink :to="subMenu.path">{{ subMenu.title }}</NuxtLink>
          <div class="sub-sub-menu-content">
            <div class="sub-sub-menu-content-filter">
              <p class="text-gray">Shop {{ subMenu.title }}</p>
              <div class="flex flex-column flex-gap-2">
                <NuxtLink :to="subMenu.path">Nyheder</NuxtLink>
                <NuxtLink :to="subMenu.path">Tilbud</NuxtLink>
                <NuxtLink :to="subMenu.path">Gaveideer</NuxtLink>
              </div>
            </div>
            <div class="sub-sub-menu-content-categories">
              <p class="text-gray">Shop efter kategori</p>
              <div class="flex flex-column flex-gap-2">
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
  </nav>
</template>

<script setup>
import { navLinks } from "~/constants";

const blogPost = {
  author: "Amalie A.",
  date: "02/04/22",
  img: "/images/diana-light.jpg",
  link: "/",
  title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
};

// const shopStore = useShopStore();
// const menuOpen = computed(() => shopStore.menuOpen);

const route = useRoute();
const menu = ref(null);

// watch(route, () => (isMobileUI ? shopStore.pathggleMenu(false) : null));
</script>

<style lang="postcss">
.isOpen {
  display: block !important;
}
</style>
