export default [
  { path: "/", redirect: "/home" },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meta: {
      title: "登录"
    }
  },
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
  },
  {
    path: "/study",
    name: "study",
    component: () => import("../views/study/study.vue"),
    children: [
      {
        path: "html",
        name: "html",
        component: () => import("../views/study/html/html.vue"),
        meta: {
          title: "html"
        },
        children: [
        {  path: 'domscroll',
           name: "domscroll",
           component: () => import("../views/study/html/domscroll.vue"),
          }
        ]
      },
      {
        path: "css",
        name: "css",
        component: () => import("../views/study/css/css.vue"),
        meta: {
          title: "css"
        },
        children: [
          {  path: 'fluid',
             name: "fluid",
             component: () => import("../views/study/css/fluid.vue"),
            }
          ]
      },
      {
        path: "javascript",
        name: "javascript",
        component: () => import("../views/study/js/javascript.vue"),
        meta: {
          title: "javascript"
        },
        children: [
          {  path: 'array',
             name: "array",
             component: () => import("../views/study/js/array.vue"),
            }
          ]
      }
    ]
  },

];
