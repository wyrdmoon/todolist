import Vue from "vue";
import VueRouter from "vue-router";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import Home from "../views/Home.vue";
import TaskForm from "../views/TaskForm.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home-page",
    component: Home
  },
  {
    path: "/task-form",
    name: "task-form",
    component: TaskForm
  },
];

const router = new VueRouter({
  routes
});
export default router;
