<template>
  <div>
    <div>
     
      <p v-for="todos in todos" :key="todos.taskId"></p>
      <p>{{ todos }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ViewToDo: "",
      todos: [],
    };
  },

  methods: {
    viewToDo: function () {
      axios
        .request({
          url: "http://localhost:5000/api/mvptodolist",
          method: "GET",
        })
        .then((response) => {
          console.log(response);
          this.item = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
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
  background: grey;
}
</style>