<script setup>
// Inspired by https://kinoshita.eti.br/2019/11/09/dynamic-breadcrumbs-with-vue-router-nested-routes-and-vuetify-breadcrumb-component.html

const router = useRouter();
const route = useRoute();

function goToPrev() {
  router.back();
}

const crumbs = computed(() => {
  let pathArray = route.path.split("/");
  pathArray.shift();
  let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
    breadcrumbArray.push({
      disabled: pathArray[pathArray.length - 1] === path ? true : false,
      path: path,
      to: breadcrumbArray[idx - 1]
        ? "/" + breadcrumbArray[idx - 1].path + "/" + path
        : "/" + path,
    });
    return breadcrumbArray;
  }, []);
  return breadcrumbs;
});
</script>

<template>
  <nav class="breadcrumb">
    <div class="flex flex-gap-1">
      <NuxtLink
        v-for="crumb in crumbs"
        class="small"
        :class="{ disabled: crumb.disabled }"
        :to="crumb.disabled ? '' : crumb.to"
        >{{ crumb.path }}</NuxtLink
      >
    </div>
    <button @click="goToPrev" class="">
      <img src="/icons/arrow.svg" alt="" class="flip" />Tilbage
    </button>
    <hr />
  </nav>
</template>
