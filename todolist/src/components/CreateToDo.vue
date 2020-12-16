<template>
  <div class="task">
    <h1>Tasks</h1>
    
  
    <v-text-field
      type="task-input"
      label="tasks"
      id="task-input"
      v-model="task"
    />
    <p @click="createToDos">Submit</p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data: function () {
    return {
      
      task: "",
      
     
    };
  },
  methods: {
    notifyRoot() {
      this.$root.$emit("createToDo",{});
    },
    createToDos: function () {
      axios
        .request({
          url: "http://localhost:5000/api/mvptodolist",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("session"),
            task: this.task,
          },
        })
        .then((response) => {
          
          console.log(response);
          this.notifyRoot();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
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
  font: Roboto bold;
  color: white;
}
.task-item {
  background: white;
  padding: 10px;
  border-bottom: 2px grey dotted;
}
.task-complete {
  text-decoration: line-through;
}
</style>