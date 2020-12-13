<template>
    <div>
    
     <button @click="Delete">Delete</button>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: "DeleteToDo",
        props: {
            task_id: {
                type: Number,
                default: 0,
            },
        },
        methods: {
            Delete: function() {
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