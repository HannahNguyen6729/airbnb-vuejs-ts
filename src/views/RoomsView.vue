<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Content
================================================== -->
    <div class="fs-container">
      <div class="fs-inner-container content">
        <div class="fs-content">
          <!-- Search -->
          <section class="search">
            <div class="row">
              <div class="col-md-12">
                <!-- Row With Forms -->
                <div class="row with-forms">
                  <!-- Main Search Input -->
                  <div class="col-fs-6">
                    <div class="input-with-icon">
                      <i class="sl sl-icon-magnifier"></i>
                      <input
                        type="text"
                        placeholder="What are you looking for?"
                        value=""
                      />
                    </div>
                  </div>

                  <!-- Main Search Input -->
                  <div class="col-fs-6">
                    <div class="input-with-icon location">
                      <div id="autocomplete-container">
                        <input
                          id="autocomplete-input"
                          type="text"
                          placeholder="Location"
                        />
                      </div>
                      <a href="#"><i class="fa fa-map-marker"></i></a>
                    </div>
                  </div>

                  <!-- Filters -->
                  <div class="col-fs-12">
                    <!-- Panel Dropdown / End -->
                    <div class="panel-dropdown">
                      <a href="#">Categories</a>
                      <div class="panel-dropdown-content checkboxes categories">
                        <!-- Checkboxes -->
                        <div class="row">
                          <div class="col-md-6">
                            <input
                              id="check-1"
                              type="checkbox"
                              name="check"
                              checked
                              class="all"
                            />
                            <label for="check-1">All Categories</label>

                            <input id="check-2" type="checkbox" name="check" />
                            <label for="check-2">Shops</label>

                            <input id="check-3" type="checkbox" name="check" />
                            <label for="check-3">Hotels</label>
                          </div>

                          <div class="col-md-6">
                            <input id="check-4" type="checkbox" name="check" />
                            <label for="check-4">Eat & Drink</label>

                            <input id="check-5" type="checkbox" name="check" />
                            <label for="check-5">Fitness</label>

                            <input id="check-6" type="checkbox" name="check" />
                            <label for="check-6">Events</label>
                          </div>
                        </div>

                        <!-- Buttons -->
                        <div class="panel-buttons">
                          <button class="panel-cancel">Cancel</button>
                          <button class="panel-apply">Apply</button>
                        </div>
                      </div>
                    </div>
                    <!-- Panel Dropdown / End -->

                    <!-- Panel Dropdown -->
                    <div class="panel-dropdown wide">
                      <a href="#">More Filters</a>
                      <div class="panel-dropdown-content checkboxes">
                        <!-- Checkboxes -->
                        <div class="row">
                          <div class="col-md-6">
                            <input id="check-a" type="checkbox" name="check" />
                            <label for="check-a">Elevator in building</label>

                            <input id="check-b" type="checkbox" name="check" />
                            <label for="check-b">Friendly workspace</label>

                            <input id="check-c" type="checkbox" name="check" />
                            <label for="check-c">Instant Book</label>

                            <input id="check-d" type="checkbox" name="check" />
                            <label for="check-d">Wireless Internet</label>
                          </div>

                          <div class="col-md-6">
                            <input id="check-e" type="checkbox" name="check" />
                            <label for="check-e"
                              >Free parking on premises</label
                            >

                            <input id="check-f" type="checkbox" name="check" />
                            <label for="check-f">Free parking on street</label>

                            <input id="check-g" type="checkbox" name="check" />
                            <label for="check-g">Smoking allowed</label>

                            <input id="check-h" type="checkbox" name="check" />
                            <label for="check-h">Events</label>
                          </div>
                        </div>

                        <!-- Buttons -->
                        <div class="panel-buttons">
                          <button class="panel-cancel">Cancel</button>
                          <button class="panel-apply">Apply</button>
                        </div>
                      </div>
                    </div>
                    <!-- Panel Dropdown / End -->

                    <!-- Panel Dropdown -->
                    <div class="panel-dropdown">
                      <a href="#">Distance Radius</a>
                      <div class="panel-dropdown-content">
                        <input
                          class="distance-radius"
                          type="range"
                          min="1"
                          max="100"
                          step="1"
                          value="50"
                          data-title="Radius around selected destination"
                        />
                        <div class="panel-buttons">
                          <button class="panel-cancel">Disable</button>
                          <button class="panel-apply">Apply</button>
                        </div>
                      </div>
                    </div>
                    <!-- Panel Dropdown / End -->
                  </div>
                  <!-- Filters / End -->
                </div>
                <!-- Row With Forms / End -->
              </div>
            </div>
          </section>
          <!-- Search / End -->

          <section class="listings-container margin-top-30">
            <!-- Sorting / Layout Switcher -->
            <div class="row fs-switcher">
              <div class="col-md-6">
                <!-- Showing Results -->
                <p class="showing-results">14 Results Found</p>
              </div>
            </div>

            <!-- Listings: Room list-->
            <room-list></room-list>
            <!-- Listings Container / End -->

            <!-- Pagination Container -->
            <div class="row fs-listings">
              <div class="col-md-12">
                <!-- Pagination -->
                <div class="clearfix"></div>
                <div class="row">
                  <div class="col-md-12">
                    <!-- Pagination -->
                    <div
                      class="pagination-container margin-top-15 margin-bottom-40"
                    >
                      <nav class="pagination">
                        <ul>
                          <li><a href="#" class="current-page">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li>
                            <a href="#"
                              ><i class="sl sl-icon-arrow-right"></i
                            ></a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <!-- Pagination / End -->

                <!-- Copyrights -->
                <div class="copyrights margin-top-0">
                  © 20213 Hannah. All Rights Reserved.
                </div>
              </div>
            </div>
            <!-- Pagination Container / End -->
          </section>
        </div>
      </div>
      <div class="fs-inner-container map-fixed">
        <!-- Map -->
        <div id="map-container">
          <div id="map" data-map-zoom="9" data-map-scroll="true">
            <!-- map goes here -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119318.69483062306!2d107.06722692659346!3d20.843445596426626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a5796518cee87%3A0x55c6b0bcc85478db!2zSOG6oSBMb25nIEJheQ!5e0!3m2!1sen!2sfi!4v1686741548816!5m2!1sen!2sfi"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Wrapper / End -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import RoomList from "../components/RoomsComp/RoomList.vue";

export default defineComponent({
  name: "RoomsView",
  components: {
    RoomList,
  },
  setup() {
    const router = useRoute();
    //get params from url
    console.log(router.params.locationId);
  },
});
</script>

<style></style>
