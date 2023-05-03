import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import powerView from "../views/powerView.vue";
import rulesView from "../views/rulesView.vue";
import monitorView from "../views/monitorView.vue";
import chatView from "../views/chatView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/power",
      name: "power",
      component: powerView,
    },
    {
      path: "/rules",
      name: "rules",
      component: rulesView,
    },
    {
      path: "/monitor",
      name: "monitor",
      component: monitorView,
    },
    {
      path: "/chat",
      name: "chat",
      component: chatView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
