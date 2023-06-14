<template>
  <div class="main-search-input">
    <!-- <div class="main-search-input-item">
      <input type="text" placeholder="What are you looking for?" value="" />
    </div> -->

    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input
          v-model="keyWord"
          id="autocomplete-input"
          type="text"
          placeholder="Location"
        />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
      <ul v-if="keyWord && locationList.length > 0" class="list-location">
        <li v-for="(location, index) in locationList" :key="index">
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-title"> {{ location.name }} </span>
        </li>
      </ul>
    </div>
    <!-- 
    <div class="main-search-input-item">
      <select data-placeholder="All Categories" class="chosen-select">
        <option>All Categories</option>
        <option>Shops</option>
        <option>Hotels</option>
        <option>Restaurants</option>
        <option>Fitness</option>
        <option>Events</option>
      </select>
    </div> -->

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const keyWord = ref("");

    watch(keyWord, (newKeyWord, oldKeyWord) => {
      store.dispatch("moduleLocation/getLocations", newKeyWord);
    });

    const locationList = computed(
      () => store.state.moduleLocation.locationList
    );
    //console.log("locationList", locationList);
    return { locationList, keyWord };
  },
});
</script>

<style lang="scss">
.main-search-input-item.location {
  position: relative;
  .list-location {
    position: absolute;
    top: 150%;
    list-style: none;
    background: #fff;
    color: #5e5c5c;
    width: 100%;
    padding: 7px;
    border-radius: 20px;
    z-index: 1;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    li {
      padding: 10px;
      font-size: 20px;
      &:hover {
        cursor: pointer;
        background: #f7f7f7;
      }
      .location-item-title {
        margin-left: 20px;
      }
    }
  }
}
</style>
