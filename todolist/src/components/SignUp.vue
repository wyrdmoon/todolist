<template>
    <div class="signup">
    <h1>Sign Up</h1>
     <p>Email</p>
     <input type="text" id="email-input" v-model="email">
     <p>Username</p>
     <input type="text" id="username-input" v-model="username">
     <p>Password</p>
     <input type="text" id="password-input" v-model="password">
     <button @click="signupUser">Sign Up</button>
     <router-link @click="signupUser" to="/home">Home</router-link>


    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        name: "signup",
        data() {
            return {
              email: "",
              username: "",
              password: "",
            }
        },
        methods: {
                signup: function() {
                    axios.request({
                        method: "POST",
                        url: "https://http://localhost:5000/api/user",
                        headers: {
                             "Content-Type": "application/json",
                             "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                        },
                        data: {
                            email: this.email,
                            username: this.username,
                            password: this.password,
                        }
                    }).then((response) =>{
                        if (response.data.loginToken == undefined){
                          //error
                        }
                        else {
                            console.log(response.data);
                            cookies.set('session', response.data.loginToken);
                            cookies.set('userId', response.data.userId)
                            }this.$router.push("/home")
                        
                    }).catch((error) =>{
                        console.log(error)
                    })
                
            }
        },
    }
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