import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import RoomsView from "../views/RoomsView.vue";
import RoomDetailView from "../views/RoomDetailView.vue";
import ContactView from "../views/ContactView.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import BookingView from "../views/BookingView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogView,
  },
  {
    path: "/rooms/:locationId",
    name: "Rooms",
    component: RoomsView,
  },
  {
    path: "/room-detail/:roomId",
    name: "RoomDetail",
    component: RoomDetailView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/booking/:roomId",
    name: "Booking",
    component: BookingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

export default router;
