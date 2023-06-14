<template>
  <div class="col-lg-12 col-md-12">
    <div class="listing-item-container list-layout" data-marker-id="1">
      <div @click="handleClickRoomDetail(room?._id)" class="listing-item">
        <!-- Image -->
        <div class="listing-item-image">
          <img :src="room?.image" alt="" />
          <span class="tag">Eat & Drink</span>
        </div>

        <!-- Content -->
        <div class="listing-item-content">
          <div class="listing-badge now-open">Now Open</div>

          <div class="listing-item-inner">
            <h3>{{ room?.name }} <i class="verified-icon"></i></h3>
            <span> {{ room?.locationId.province }} </span>
            <div class="star-rating" data-rating="3.5">
              <div class="rating-counter">
                {{ room?.bedRoom }} bedrooms (12 reviews)
              </div>
            </div>
          </div>

          <span class="like-icon"></span>
          <div class="listing-item-details">price: {{ room?.price }} Vnd</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RoomItem",
  props: {
    room: {
      type: Object,
    },
  },
  setup() {
    const router = useRouter();
    const handleClickRoomDetail = (roomId: string) => {
      router.push(`/room-detail/${roomId}`);
    };
    return {
      handleClickRoomDetail,
    };
  },
});
</script>

<style></style>
