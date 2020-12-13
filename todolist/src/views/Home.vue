<template>
  <div class="home">
    <sign-up></sign-up>
    <login-form></login-form>
    <create-to-do></create-to-do>
    <view-to-do></view-to-do>
    <delete-to-do></delete-to-do>
  </div>
</template>

<script>
import LoginForm from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import CreateToDo from "../components/CreateToDo.vue";
import ViewToDo from "../components/ViewToDo.vue";
import DeleteToDo from "../components/DeleteTodo.vue"

export default {
  name: "Home",
  components: {
    LoginForm,
    SignUp,
    CreateToDo,
    ViewToDo,
    DeleteToDo

  }
};
</script>

<style lang="css" scoped>
</style>
