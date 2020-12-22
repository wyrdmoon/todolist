<template>
    <div>
    
     <v-btn depressed elevation="2" medium color=#FFFF00><button @click="DeleteToDo()">Finished</button></v-btn>
     <v-btn depressed elevation="2" medium color=#F44336 v-on:click="counter += 20">Add 20 points</v-btn>
     <p>{{counter}}</p>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "DeleteToDo",
      props: {
          taskId: {
              type: Number,
              required: true,
          },
      },
      data() {
          return {
              counter: 0
          }
      },
    
        methods: {
            DeleteToDo: function() {
                axios.request({
                    url: "http://localhost:5000/api/mvptodolist",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        id: this.taskId,
                    }
                }).then((response) =>{
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
                
            }
        },
        
    }
</script>

<style lang="css" scoped>

</style>