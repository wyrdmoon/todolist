<template>
  <div id="app">
    <Login></Login>
      <router-link to="/Login">Login</router-link>|
      <SignUp></SignUp>
      <router-link to='/SignUp'>SignUp</router-link>|
      
    </div>
    
  
</template>
<script>
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";

export default {
name: "landing-page",
components: {
    Login,
    SignUp,

  },
}
</script>

<style>
#app {
  width: 500px;
  height: 700px;
  border: 1px solid black;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(auto-fit, minmax,(250px, 1fr));
}

</style>
