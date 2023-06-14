<template>
  <div class="main-search-input">
    <div class="main-search-input-item">
      <input type="text" placeholder="What are you looking for?" value="" />
    </div>

    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input id="autocomplete-input" type="text" placeholder="Location" />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
    </div>

    <div class="main-search-input-item">
      <select data-placeholder="All Categories" class="chosen-select">
        <option>All Categories</option>
        <option>Shops</option>
        <option>Hotels</option>
        <option>Restaurants</option>
        <option>Fitness</option>
        <option>Events</option>
      </select>
    </div>

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss"></style>
