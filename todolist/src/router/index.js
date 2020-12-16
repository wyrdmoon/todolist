import Vue from "vue";
import VueRouter from "vue-router";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";

import TaskForm from "../views/TaskForm.vue";
import LoginPage from "../views/LoginPage";

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
    path: "/task-form",
    name: "task-form",
    component: TaskForm
  },
  {
    path: "/login-page",
    name: "login-page",
    component: LoginPage
  },

];

const router = new VueRouter({
  routes
});
export default router;
