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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: { TheHeader },
});
</script>

<style lang="scss"></style>
