export default [
  { path: "/", redirect: "/home" },
  { path: "/home",
    name: "home",
    component: () => import('../views/home.vue')
   },
   {
     path: '/movie',
     name: "movie",
     component: () => import('../views/movie.vue')
   }
];
