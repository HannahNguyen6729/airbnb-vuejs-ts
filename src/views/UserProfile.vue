<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Titlebar
================================================== -->
    <div id="titlebar" class="gradient">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="user-profile-titlebar">
              <div class="user-profile-avatar">
                <img src="images/user-profile-avatar.jpg" alt="" />
              </div>
              <div class="user-profile-name">
                <h2>Tom Perrin</h2>
                <div class="star-rating" data-rating="5">
                  <div class="rating-counter">
                    <a href="#listing-reviews">(60 reviews)</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content
================================================== -->
    <div class="container">
      <div class="row sticky-wrapper">
        <!-- Sidebar
		================================================== -->
        <user-detail-side-bar></user-detail-side-bar>
        <!-- Sidebar / End -->

        <!-- Content
		================================================== -->
        <booked-rooms></booked-rooms>
      </div>
    </div>

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import UserDetailSideBar from "../components/UserDetailSideBar.vue";
import BookedRooms from "../components/BookedRooms.vue";

export default defineComponent({
  name: "SignIn",
  components: {
    UserDetailSideBar,
    BookedRooms,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
  },
});
</script>
