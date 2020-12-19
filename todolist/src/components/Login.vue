<template>
  <div class="Login">
    <Header></Header>
    <p>EMAIL</p>
    <v-text-field label= "email" id="login-input" v-model="email" />
    <p>PASSWORD</p>
    <v-text-field type="password" label ="password" id="login-input" v-model="password" />
     <v-btn rounded color="primary" dark><p @click="loginUser">Login</p></v-btn>
    <h3>{{ loginStatus }}</h3>
      <v-btn depressed elevation="2" medium outlined><router-link to="/SignUp">Sign Up</router-link></v-btn>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import Header from "../components/Header.vue"

export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading";
      axios
        .request({
          method: "POST",
          url: "http://localhost:5000/api/login",
          headers: {
            "Content-Type": "application/json",
            
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
         
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
          cookies.set("userId", response.data.userId);
          this.$router.push("/task-form");
        })
        .catch(error => {
          console.log(error), (this.loginStatus = "Error");
        });
    }
  }
};
</script>

<style lang="css" scoped>
.Login {
  width: 500px;
  height: 700px;
  border: 3px solid black;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(auto-fit, minmax, (250px, 1fr));
  background-color: grey;
  font: Roboto;
  color: white;
}
</style>
