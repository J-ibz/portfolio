import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Project from "@/views/Project.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    props: true,

    meta: {
      title: "Accueil",
    },
  },

  {
    name: "project",
    path: "/project/:id",
    component: Project,
  },
  {
    name: "thank-you",
    path: "/thanks",
    component: () => import("../views/ThankYou.vue"),
    props: true,
    meta: {
      title: "Merci !",
    },
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../views/About.vue"),
    props: true,
    meta: {
      title: "À propos",
    },
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
    meta: {
      title: "404 - Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to) => {
  document.title = `Jérémie Ibanez | ${to.meta.title}`;
});

export default router;
