<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Banner
================================================== -->
    <the-banner></the-banner>

    <!-- Content
================================================== -->
    <the-categories></the-categories>
    <!-- Category Boxes / End -->

    <!-- Fullwidth Section/ The Places -->
    <the-places></the-places>
    <!-- Fullwidth Section / The Places/ End -->

    <!-- The reviews Section -->
    <the-reviews></the-reviews>
    <!-- The reviews Section / End -->

    <!-- Info Section / The Plan Section-->
    <the-plans></the-plans>
    <!-- Info Section / The Plan Section / End -->

    <!-- Recent Blog Posts -->
    <the-blog></the-blog>
    <!-- Recent Blog Posts / End -->

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheBanner from "../components/TheBanner.vue";
import TheCategories from "../components/TheCategories.vue";
import ThePlaces from "../components/ThePlaces.vue";
import TheReviews from "../components/TheReviews.vue";
import ThePlans from "../components/ThePlans.vue";
import TheBlog from "../components/TheBlog.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HomeView",
  components: {
    TheBanner,
    TheCategories,
    ThePlaces,
    TheReviews,
    ThePlans,
    TheBlog,
  },
  setup() {
    const store = useStore();
    store.dispatch("moduleSignUp/loadUserLoginFromLocalStorage");
  },
});
</script>
