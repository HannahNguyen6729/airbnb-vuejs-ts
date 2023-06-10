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
    <section
      class="fullwidth padding-top-75 padding-bottom-70"
      data-background-color="#f9f9f9"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h3 class="headline centered headline-extra-spacing">
              <strong class="headline-with-separator"
                >Plan The Vacation of Your Dreams</strong
              >
              <span class="margin-top-25"
                >Explore some of the best tips from around the world from our
                partners and friends. Discover some of the most popular
                listings!</span
              >
            </h3>
          </div>
        </div>

        <div class="row icons-container">
          <!-- Stage -->
          <div class="col-md-4">
            <div class="icon-box-2 with-line">
              <i class="im im-icon-Map2"></i>
              <h3>Find Interesting Place</h3>
              <p>
                Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                luctus, finibus tellus ut, convallis eros sollicitudin.
              </p>
            </div>
          </div>

          <!-- Stage -->
          <div class="col-md-4">
            <div class="icon-box-2 with-line">
              <i class="im im-icon-Mail-withAtSign"></i>
              <h3>Contact a Few Owners</h3>
              <p>
                Maecenas pulvinar, risus in facilisis dignissim, quam nisi
                hendrerit nulla, id vestibulum metus nullam viverra purus.
              </p>
            </div>
          </div>

          <!-- Stage -->
          <div class="col-md-4">
            <div class="icon-box-2">
              <i class="im im-icon-Checked-User"></i>
              <h3>Make a Reservation</h3>
              <p>
                Faucibus ante, in porttitor tellus blandit et. Phasellus
                tincidunt metus lectus sollicitudin feugiat consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Info Section / The Plan Section / End -->

    <!-- Recent Blog Posts -->
    <section
      class="fullwidth margin-top-0 padding-top-75 padding-bottom-75"
      data-background-color="#fff"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="headline centered margin-bottom-55">
              <strong class="headline-with-separator">From The Blog</strong>
            </h3>
          </div>
        </div>

        <div class="row">
          <!-- Blog Post Item -->
          <div class="col-md-4">
            <a href="pages-blog-post.html" class="blog-compact-item-container">
              <div class="blog-compact-item">
                <img src="images/blog-compact-post-01.jpg" alt="" />
                <span class="blog-item-tag">Tips</span>
                <div class="blog-compact-item-content">
                  <ul class="blog-post-tags">
                    <li>22 August 2019</li>
                  </ul>
                  <h3>Hotels for All Budgets</h3>
                  <p>
                    Sed sed tristique nibh iam porta volutpat finibus. Donec in
                    aliquet urneget mattis lorem. Pellentesque pellentesque.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <!-- Blog post Item / End -->

          <!-- Blog Post Item -->
          <div class="col-md-4">
            <a href="pages-blog-post.html" class="blog-compact-item-container">
              <div class="blog-compact-item">
                <img src="images/blog-compact-post-02.jpg" alt="" />
                <span class="blog-item-tag">Tips</span>
                <div class="blog-compact-item-content">
                  <ul class="blog-post-tags">
                    <li>18 August 2019</li>
                  </ul>
                  <h3>The 50 Greatest Street Arts In London</h3>
                  <p>
                    Sed sed tristique nibh iam porta volutpat finibus. Donec in
                    aliquet urneget mattis lorem. Pellentesque pellentesque.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <!-- Blog post Item / End -->

          <!-- Blog Post Item -->
          <div class="col-md-4">
            <a href="pages-blog-post.html" class="blog-compact-item-container">
              <div class="blog-compact-item">
                <img src="images/blog-compact-post-03.jpg" alt="" />
                <span class="blog-item-tag">Tips</span>
                <div class="blog-compact-item-content">
                  <ul class="blog-post-tags">
                    <li>10 August 2019</li>
                  </ul>
                  <h3>The Best Cofee Shops In Sydney Neighborhoods</h3>
                  <p>
                    Sed sed tristique nibh iam porta volutpat finibus. Donec in
                    aliquet urneget mattis lorem. Pellentesque pellentesque.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <!-- Blog post Item / End -->

          <div class="col-md-12 centered-content">
            <a href="pages-blog.html" class="button border margin-top-10"
              >View Blog</a
            >
          </div>
        </div>
      </div>
    </section>
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

export default defineComponent({
  name: "HomeView",
  components: {
    TheBanner,
    TheCategories,
    ThePlaces,
    TheReviews,
  },
});
</script>
