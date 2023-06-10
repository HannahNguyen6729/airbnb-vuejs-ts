<template>
  <div class="row fs-listings">
    <!-- Listing Item -->
    <room-item></room-item>
    <room-item></room-item>
    <room-item></room-item>
    <!-- Listing Item / End -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoomItem from "../RoomsComp/RoomItem.vue";

export default defineComponent({
  name: "RoomList",
  components: {
    RoomItem,
  },
});
</script>

<style></style>
