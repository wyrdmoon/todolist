<template>
    <div class ="task">
      <p>Task</p>
      <input v-model="createToDo" type="test" />
      <p>Task</p>
      <textarea v-model="task"></textarea>
      <button click="createToDo">Submit</button>

    </div>
</template>

<script>
import axios from "axios"
    export default {
        data() {
            return {
                task: "",
                createdAt: "",

            }
        },
        methods: {
            createToDo: function() {
                axios.request({
                    url: "http://localhost:5000/api/mvptodolist",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        createdAt: [],
                        task: this.task,
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
                
            },
        },
    }
</script>

<style lang="css" scoped>
.task {
  width: 500px;
  height: 700px;
  border: 1px solid black;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
}

</style>