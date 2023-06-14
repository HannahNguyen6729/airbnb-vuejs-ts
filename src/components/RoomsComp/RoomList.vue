<template>
  <div class="row fs-listings">
    <!-- Listing Item -->
    <room-item
      v-for="(room, index) in rooms"
      :key="index"
      :room="room"
    ></room-item>

    <!-- Listing Item / End -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import RoomItem from "../RoomsComp/RoomItem.vue";

export default defineComponent({
  name: "RoomList",
  components: {
    RoomItem,
  },
  setup() {
    const store = useStore();
    const rooms = computed(() => store.state.moduleRoom.roomList);
    console.log("rooms", rooms);
    return { rooms };
  },
});
</script>

<style></style>
