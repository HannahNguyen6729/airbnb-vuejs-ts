import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import RoomsView from "../views/RoomsView.vue";
import RoomDetailView from "../views/RoomDetailView.vue";
import ContactView from "../views/ContactView.vue";
import AuthView from "../views/AuthView.vue";

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
    path: "/rooms",
    name: "Rooms",
    component: RoomsView,
  },
  {
    path: "/room-detail",
    name: "RoomDetail",
    component: RoomDetailView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

export default router;
