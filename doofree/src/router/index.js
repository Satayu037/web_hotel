import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue"; // เชื่อมโยง Home
import HotelRating from "../components/HotelRating.vue";
import Payment from "../components/Payment.vue";

const routes = [
  { path: "/", component: Login, name: "Login" },
  { path: "/home", component: Home, name: "Home" }, // เส้นทาง Home
  { path: "/rating", component: HotelRating, name: "HotelRating" },
  { path: "/payment", component: Payment, name: "Payment" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
