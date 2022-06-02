<script setup>
import { Links } from "~/constants";

const blogPost = {
  author: "Amalie A.",
  date: "02/04/22",
  img: "/images/diana-light.jpg",
  link: "/",
  title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
};

const extraLinks = [
  {
    title: "Forside",
    to: "",
  },
  {
    title: "Blog",
    to: "",
  },
  {
    title: "Om TINC",
    to: "",
  },
];

const standardLinks = Links.concat(...extraLinks);

const state = reactive({
  isDesktop: true,
  mobileNavOpen: false,
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
  state.mobileNavOpen = false;
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

<template>
  <nav class="navbar">
    <input id="navbar_checkbox" v-model="state.mobileNavOpen" type="checkbox" />
    <label for="navbar_checkbox" class="navBtn" v-show="!state.isDesktop">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <NuxtLink to="/" aria-label="Hjem" class="logo">
      <img src="/logo.svg" alt="" />
    </NuxtLink>
    <div class="nav-links" v-show="state.isDesktop">
      <div class="sub-menu" v-for="link in Links">
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
      |
      <div class="sub-menu">
        <NuxtLink class="underline">Blog</NuxtLink>
      </div>
      <div class="sub-menu">
        <NuxtLink class="underline">Om TINC</NuxtLink>
      </div>
    </div>
    <div class="mobile-nav-links" v-if="state.mobileNavOpen">
      <div class="mobile-nav-links-buttons">
        <input
          id="navbar_checkbox"
          v-model="state.mobileNavOpen"
          type="checkbox"
        />
        <label
          for="navbar_checkbox"
          class="navBtn"
          v-show="!state.isDesktop"
          @click="state.currentLinks = standardLinks"
        >
          <div></div>
          <div></div>
          <div></div>
        </label>
        <button
          v-show="
            JSON.stringify(state.currentLinks) !== JSON.stringify(standardLinks)
          "
          @click="state.currentLinks = standardLinks"
          class="mobile-nav-links-back"
        >
          <img src="/icons/arrow.svg" class="flip" alt="" />Tilbage
        </button>
      </div>
      <input type="text" placeholder="Søgefelt" class="searchfield" />
      <div
        v-for="(link, index) in state.currentLinks"
        :key="index"
        class="mobile-nav-links-link"
        :class="{
          'background-secondary':
            link.path == '/Personlig pleje/' ||
            link.path == '/Husholdning/' ||
            link.path == '/Fødevare/' ||
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
    </div>
    <div class="user-links">
      <NuxtLink to="/bruger" aria-label="Bruger" class="user-links-icon"
        ><img src="/icons/user.svg"
      /></NuxtLink>
      <NuxtLink
        to="/bruger/onskeliste"
        aria-label="Ønskeliste"
        class="user-links-icon"
        ><img src="/icons/heart.svg"
      /></NuxtLink>
      <NuxtLink to="/bruger/kurv" aria-label="Kurv" class="user-links-icon"
        ><img src="/icons/basket.svg"
      /></NuxtLink>
    </div>
  </nav>
</template>
