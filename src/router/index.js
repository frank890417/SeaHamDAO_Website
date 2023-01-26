import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { TweenMax } from "gsap";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/news",
    name: "News",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
  },
  {
    path: "/artist",
    name: "Artist",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Artist.vue"),
  },
  {
    path: "/memes",
    name: "Memes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Memes.vue"),
  },
  {
    path: "/hamiverse",
    name: "Hamiverse",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hamiverse.vue"),
  },
  {
    path: "/crafthams",
    name: "crafthams",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Crafthams.vue"),
  },
  {
    path: "/crafthams/:id",
    name: "crafthams",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Crafthams.vue"),
  },
  {
    path: "/contributions",
    name: "Contributions",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contributions.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  let selector = `h1 span, h1 div,h2 span, h2 div`;
  console.log(to);
  setTimeout(() => {
    Array.from(document.querySelectorAll(selector)).forEach((el) => {
      console.log(el);
      el.innerHTML = el.innerText
        .split("")
        .map((char) => `<span class='split_char'>${char}</span>`)
        .join("");
    });
    TweenMax.from(".split_char", 0.4, {
      delay: "random(0,1)",
      css: {
        opacity: 0,
        filter: "blur(15px)",
      },
    });
  }, 100);
});

export default router;
