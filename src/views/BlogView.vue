<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Titlebar
================================================== -->
    <the-title-bar></the-title-bar>

    <!-- Content
================================================== -->
    <the-content></the-content>

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import TheContent from "../components//BlogComp/TheContent.vue";
import TheTitleBar from "../components//BlogComp/TheTitleBar.vue";

export default defineComponent({
  name: "BlogView",
  components: {
    TheContent,
    TheTitleBar,
  },
  setup() {
    const store = useStore();
    store.dispatch("moduleSignUp/loadUserLoginFromLocalStorage");
  },
});
</script>

<style></style>
