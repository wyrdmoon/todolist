<template>
  <div class="task-form">
    <div v-for="todo in tasks" :key="todo[0]">
      <!-- <input type="checkbox" id="checkbox" v-model="checked" /> -->
      <!-- <label for="checkbox">{{ checked }}</label> -->

      <v-card elevation="2" color=#F44336><p class="font-weight-black">{{ todo[2] }}</p></v-card>
      
      <v-card elevation="2" color=#FFFF00><p class="font-color-black">{{ todo[3] }}</p></v-card>
      <flip-countdown :deadline="getTime()" :showDays= "false"></flip-countdown>
      <delete-to-do :taskId="todo[0]"></delete-to-do>
    </div>
    
    <create-to-do></create-to-do>
    <view-to-do></view-to-do>
  </div>
</template>

<script>
import axios from "axios";
import FlipCountdown from "vue2-flip-countdown";
import CreateToDo from "../components/CreateToDo.vue";
import ViewToDo from "../components/ViewToDo.vue";
import DeleteToDo from "../components/DeleteTodo.vue";
export default {
  name: "TaskForm",
  components: {
    FlipCountdown,
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
    getTime: function() {
            let d = new Date()
            d.setTime(d.getTime()+d.getTimezoneOffset()*60*1000)
            d.setHours(d.getHours()+1-14)
            return d.toISOString().replace("T"," ").replace("Z","")
    },
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