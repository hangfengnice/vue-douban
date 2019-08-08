import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router =  new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  if(to.path == '/login'){
    next()
  } else{
    if(localStorage.getItem('author')){
      next()
    }else{
      next('/login')
    }
  }
})

export default router
