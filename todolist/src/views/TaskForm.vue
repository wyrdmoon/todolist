<template>
    <div class="task-form">
   
    <create-to-do></create-to-do>
    <view-to-do></view-to-do>
    <delete-to-do></delete-to-do>
   
    </div>
</template>

<script>
import axios from "axios";
import CreateToDo from "../components/CreateToDo.vue";
import ViewToDo from "../components/ViewToDo.vue";
import DeleteToDo from "../components/DeleteTodo.vue"
    export default {
        name: "TaskForm",
        components: {
          CreateToDo,
          ViewToDo,
          DeleteToDo
        },
        props: {
          todo: {
            type: Number,
            default: 0,
          },
        },
        mounted:function () {
          this.$root.$on('createToDo',this.getToDos());
        },
        methods: {
          getToDos: function() {
            axios.request({
              url: "http://localhost:5000/api/mvptodolist",
              method: "GET"
            }).then((response) => {
              console.log(response);
              this.todo = response.data
            }).catch((error) => {
              console.log(error);
            })
            
          }
        },
    }
</script>

<style lang="css" scoped>
.task-form {
  width: 500px;
  height: 700px;
  border: 1px solid black;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(auto-fit, minmax, (250px, 1fr));
  background-color: grey;
  font: Roboto bold;
};
</style>