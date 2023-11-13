import { createRouter, createWebHistory } from "vue-router";

import ManualHourStudy from "../views/ManualHourStudy.vue";
import HowToUse from "../views/HowToUse.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/manual",
      name: "manual",
      component: ManualHourStudy,
    },
    {
      path: "/how",
      name: "how",
      component: HowToUse,
    },
  ],
});

export default router;
