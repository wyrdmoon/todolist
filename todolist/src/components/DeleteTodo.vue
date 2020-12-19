<template>
    <div>
    
     <v-btn depressed elevation="2" medium outlined><button @click="DeleteToDo()">Finished</button></v-btn>
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