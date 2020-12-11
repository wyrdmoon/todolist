<template>
  <div class="Login">
    <p>EMAIL</p>
    <input type="text" id="email-input" v-model="email" />
    <p>PASSWORD</p>
    <input type="password" id="password-input" v-model="password" />
    <h2 @click="loginUser">Login</h2>
    <h3>{{ loginStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {};
</script>

<style lang="scss" scoped>
.Login {
  width: 500px;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(auto-fit, minmax, (250px, 1fr));
  background-color: white;
  font: FixedSys;
}
</style>