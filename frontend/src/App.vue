<script setup lang="ts">
import HeaderComponent from "./components/Header/Header.component.vue";
import { RouterView } from "vue-router";
import FooterComponent from "./components/Footer/Footer.component.vue";
</script>

<template>
  <main>
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  margin: auto;
  max-width: 1530px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
