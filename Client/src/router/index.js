import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home.vue";
import Form from "../views/form.vue"
import Detail from "../views/detail.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.length === 0) {
//     next({ name: 'Home' });
//   } else {
//     next();
//   }
// });

export default router
