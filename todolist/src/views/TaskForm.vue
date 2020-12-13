<template>
    <div class="task-form">
    <create-to-do></create-to-do>
    <view-to-do></view-to-do>
    <delete-to-do></delete-to-do>
   
    </div>
</template>

<script>
import CreateToDo from "../components/CreateToDo.vue";
import ViewToDo from "../components/ViewToDo.vue";
import DeleteToDo from "../components/DeleteTodo.vue"
    export default {
        name: "TaskForm",
        components: {
          CreateToDo,
          ViewToDo,
          DeleteToDo
        }
        
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
  background-color: white;
  font: FixedSys;
}

</style>