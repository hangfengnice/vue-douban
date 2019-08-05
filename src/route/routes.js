export default [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
    meta: {
      title: "豆瓣"
    }
  },
  {
    path: "/movie",
    name: "movie",
    redirect: "/movie/homepage",
    component: () => import("../views/movie/movie.vue"),
    meta: {
      title: "电影"
    },
    children: [
      {
        path: "homepage",
        name: "movieHomepage",
        component: () => import("../views/movie/homepage.vue"),
        meta: {
          title: "电影"
        }
      },
      {
        path: "more/:title",
        name: "moreMovie",
        component: () => import("../views/movie/more.vue"),
        meta: {
          title: "更多电影"
        }
      },
      {
        path: "detail/:id",
        name: "movieDetail",
        component: () => import("../views/movie/detail.vue"),
        meta: {
          title: "电影详情"
        }
      }
    ]
  },
  {
    path: "/read",
    name: "read",
    redirect: "/read/homepage",
    component: () => import("../views/read/read.vue"),
    children: [
      {
        path: "homepage",
        name: "readHomepage",
        component: () => import("../views/read/homepage.vue"),
        meta: {
          title: "读书"
        }
      },
      {
        path: "detail/:id",
        name: "musicDetail",
        component: () => import("../views/read/detail.vue"),
        meta: {
          title: "书籍详情"
        }
      }
    ]
  },
  {
    path: "/music",
    name: "music",
    redirect: "/music/homepage",
    component: () => import("../views/music/music.vue"),
    children: [
      {
        path: "homepage",
        name: "musicHomepage",
        component: () => import("../views/music/homepage.vue"),
        meta: {
          title: "音乐"
        }
      },
      {
        path: "detail/:id",
        name: "detail",
        component: () => import("../views/music/detail.vue"),
        meta: {
          title: "音乐详情"
        }
      }
    ]
  }
];
