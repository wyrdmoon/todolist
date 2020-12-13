<template>
    <div>
        <div>
        <h1 @click="ViewToDo"></h1>
        <div class ="task-container" v-for="item in item" :key="item[4]">
            <h2>{{ item[0] }}</h2>
            <p>{{ item[1] }}</p>
          
        <delete-to-do :task_id="item[4]"></delete-to-do>
        </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
             ViewToDo: "",
             item: [],
            }
        },
     
        methods: {
            viewToDo: function() {
                axios.request({
                    url:"http://localhost:5000/api/mvptodolist",
                    method: "GET",
                }).then((response) => {
                    console.log(response);
                    this.item = response.data
                }).catch((error) => {
                    console.log(error);
                });
                
            },
        },
    }
</script>

<style lang="css" scoped>
.task-container {
 width: 500px;
  height: 700px;
  border: 1px solid black;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
}

</style>