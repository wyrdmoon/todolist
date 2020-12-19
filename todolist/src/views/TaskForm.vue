<template>
  <div class="task-form">
    <div v-for="todo in tasks" :key="todo[0]">
      <!-- <input type="checkbox" id="checkbox" v-model="checked" /> -->
      <!-- <label for="checkbox">{{ checked }}</label> -->
      <v-card elevation="2" loading
        ><p>{{ todo[2] }}</p></v-card
      >
      <v-card elevation="2" loading
        ><p>{{ todo[3] }}</p></v-card
      >
      <delete-to-do :taskId="todo[0]"></delete-to-do>
    </div>
    <Countdown deadline ="600"></Countdown>
    <create-to-do></create-to-do>
    <view-to-do></view-to-do>
  </div>
</template>

<script>
import axios from "axios";
import Countdown from 'vuejs-countdown'
import CreateToDo from "../components/CreateToDo.vue";
import ViewToDo from "../components/ViewToDo.vue";
import DeleteToDo from "../components/DeleteTodo.vue";
export default {
  name: "TaskForm",
  components: {
    Countdown,
    CreateToDo,
    ViewToDo,
    DeleteToDo,
  },
  props: {
    task: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tasks: [],
      
    };
  },
  mounted: function () {
    this.$root.$on("createToDo", this.getToDos);
  },
  methods: {
    getToDos: function () {
      axios
        .request({
          url: "http://localhost:5000/api/mvptodolist",
          method: "GET",
        })
        .then((response) => {
          this.tasks = response.data;
          console.log(this.tasks);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.task-form {
  width: 500px;
  height: 800px;
  border: 1px solid black;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(auto-fit, minmax, (250px, 1fr));
  background-color: grey;
  font: Roboto bold;
}
</style>