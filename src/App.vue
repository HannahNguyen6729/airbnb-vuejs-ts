<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <!-- Header Container
================================================== -->
  <the-header></the-header>
  <!-- Header Container / End -->

  <router-view />

  <!-- Footer
================================================== -->
  <the-footer></the-footer>
  <!-- Footer / End -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default defineComponent({
  name: "App",
  components: { TheHeader, TheFooter },
});
</script>

<style lang="scss"></style>
