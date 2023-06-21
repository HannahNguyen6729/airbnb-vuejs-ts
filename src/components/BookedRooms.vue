<template>
  <div class="col-lg-8 col-md-8 padding-left-30">
    <h3 class="margin-top-0 margin-bottom-40">Tom's Listings</h3>

    <!-- Listings Container -->
    <div class="row">
      <!-- Listing Item -->
      <div v-for="(room, key) in rooms" :key="key" class="col-lg-12 col-md-12">
        <room-item :room="room"></room-item>
      </div>
      <!-- Listing Item / End -->

      <div class="col-md-12 browse-all-user-listings">
        <a href="#">Browse All Listings <i class="fa fa-angle-right"></i> </a>
      </div>
    </div>
    <!-- Listings Container / End -->

    <!-- Reviews -->
    <div id="listing-reviews" class="listing-section">
      <h3 class="margin-top-60 margin-bottom-20">Reviews</h3>

      <div class="clearfix"></div>

      <!-- Reviews -->
      <section class="comments listing-reviews">
        <ul>
          <li>
            <div class="avatar">
              <img
                src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                alt=""
              />
            </div>
            <div class="comment-content">
              <div class="arrow-comment"></div>
              <div class="comment-by">
                Kathy Brown
                <div class="comment-by-listing">
                  on <a href="#">Burger House</a>
                </div>
                <span class="date">June 2019</span>
                <div class="star-rating" data-rating="5"></div>
              </div>
              <p>
                Morbi velit eros, sagittis in facilisis non, rhoncus et erat.
                Nam posuere tristique sem, eu ultricies tortor imperdiet vitae.
                Curabitur lacinia neque non metus
              </p>

              <div class="review-images mfp-gallery-container">
                <a href="images/review-image-01.jpg" class="mfp-gallery"
                  ><img src="images/review-image-01.jpg" alt=""
                /></a>
              </div>
            </div>
          </li>

          <li>
            <div class="avatar">
              <img
                src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                alt=""
              />
            </div>
            <div class="comment-content">
              <div class="arrow-comment"></div>
              <div class="comment-by">
                John Doe
                <div class="comment-by-listing">
                  on <a href="#">Tom's Restaurant</a>
                </div>
                <span class="date">May 2019</span>
                <div class="star-rating" data-rating="4"></div>
              </div>
              <p>
                Commodo est luctus eget. Proin in nunc laoreet justo volutpat
                blandit enim. Sem felis, ullamcorper vel aliquam non, varius
                eget justo. Duis quis nunc tellus sollicitudin mauris.
              </p>
            </div>
          </li>

          <li>
            <div class="avatar">
              <img
                src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                alt=""
              />
            </div>
            <div class="comment-content">
              <div class="arrow-comment"></div>
              <div class="comment-by">
                Kathy Brown
                <div class="comment-by-listing">
                  on <a href="#">Burger House</a>
                </div>
                <span class="date">June 2019</span>
                <div class="star-rating" data-rating="5"></div>
              </div>
              <p>
                Morbi velit eros, sagittis in facilisis non, rhoncus et erat.
                Nam posuere tristique sem, eu ultricies tortor imperdiet vitae.
                Curabitur lacinia neque non metus
              </p>

              <div class="review-images mfp-gallery-container">
                <a href="images/review-image-02.jpg" class="mfp-gallery"
                  ><img src="images/review-image-02.jpg" alt=""
                /></a>
                <a href="images/review-image-03.jpg" class="mfp-gallery"
                  ><img src="images/review-image-03.jpg" alt=""
                /></a>
              </div>
            </div>
          </li>

          <li>
            <div class="avatar">
              <img
                src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                alt=""
              />
            </div>
            <div class="comment-content">
              <div class="arrow-comment"></div>
              <div class="comment-by">
                John Doe
                <div class="comment-by-listing">
                  on <a href="#">Hotel Govendor</a>
                </div>
                <span class="date">May 2019</span>
                <div class="star-rating" data-rating="5"></div>
              </div>
              <p>
                Commodo est luctus eget. Proin in nunc laoreet justo volutpat
                blandit enim. Sem felis, ullamcorper vel aliquam non, varius
                eget justo. Duis quis nunc tellus sollicitudin mauris.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <!-- Pagination -->
      <div class="clearfix"></div>
      <div class="row">
        <div class="col-md-12">
          <!-- Pagination -->
          <div class="pagination-container margin-top-30">
            <nav class="pagination">
              <ul>
                <li><a href="#" class="current-page">1</a></li>
                <li><a href="#">2</a></li>
                <li>
                  <a href="#"><i class="sl sl-icon-arrow-right"></i></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <!-- Pagination / End -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import RoomItem from "../components/RoomsComp/RoomItem.vue";

export default defineComponent({
  name: "BookedRooms",
  components: { RoomItem },
  setup() {
    const store = useStore();
    const rooms = computed(() => store.state.moduleTicket.roomsByUser);
    console.log("rooms:", rooms);
    return { rooms };
  },
});
</script>

<style></style>
