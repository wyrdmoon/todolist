<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import cookies from 'vue-cookies'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: "Home",
  components: {
        Login,
        SignUp,
  },
};
</script>

<style lang="scss" scoped>

</style>

