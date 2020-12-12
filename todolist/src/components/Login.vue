<template>
  <div class="Login">
    <p>EMAIL</p>
    <input type="text" id="email-input" v-model="email" />
    <p>PASSWORD</p>
    <input type="password" id="password-input" v-model="password" />
    <h2 @click="loginUser">Login</h2>
    <h3>{{ loginStatus }}</h3>
    <router-link to="/Home">Home</router-link> |
    <router-link to="/SignUp">Sign Up</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loginStatus: "",


    }
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading"
      axios.request({
        method: "GET",
        url: "http://localhost:5000/api/login",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"

        },
        data: {
          email: this.email,
          password: this.password,

        }
      
      }).then((response) => {
        cookies.get('loginToken');
        console.log(response)
        this.loginStatus ="Success"
        cookies.set('session', response.data.loginToken);
        cookies.set('userId', response.data.userId);
        this.$router.push("/home")
      }).catch((error) => {
        console.log(error),
        this.loginStatus ="Error"
      })
     
      
    }
  },
 
};
</script>


<style lang="css" scoped>
.Login {
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