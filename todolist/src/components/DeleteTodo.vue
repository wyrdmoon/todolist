<template>
    <div>
    
     <v-btn depressed elevation="2" medium outlined><button @click="DeleteToDo()">Delete</button></v-btn>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: "DeleteToDo",
        data() {
            return {
                id: this.task_id
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
                        id: this.task_id,
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