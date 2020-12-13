<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <p>Email</p>
    <v-text-field label="email" id="signup-input" v-model="email" />
    <p>Username</p>
    <v-text-field id="username-input" v-model="username" />
    <p>Password</p>
    <v-text-field  label="password" id="signup-input" v-model="password" />
    <button @click="signup">Sign Up</button>
    
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "signup",
  data() {
    return {
      email: "",
      username: "",
      password: ""
    };
  },
  methods: {
    signup: function() {
      axios
        .request({
          method: "POST",
          url: "http://localhost:5000/api/signup",
          headers: {
            "Content-Type": "application/json",
            
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          if (response.data.loginToken == undefined) {
            //error
          } else {
            console.log(response.data);
            cookies.set("session", response.data.loginToken);
            cookies.set("userId", response.data.userId);
          }
          this.$router.push("/home");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="css" scoped>
.SignUp {
  width: 500px;
  height: 700px;
  border: 1px solid black;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(auto-fit, minmax, (250px, 1fr));
  background-color: white;
  font: FixedSys;
}
</style>
