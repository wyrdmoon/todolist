<template>
  <div id="app">
   <router-link to='/task-form'> <a href="https://imgur.com/OzLZ4z2"><img src="https://i.imgur.com/OzLZ4z2.jpg" title="source: imgur.com"/></a></router-link> 
   <div class ="app2">
   <router-link to="/Login"><v-icon>mdi-alpha-l-box-outline</v-icon></router-link> |
   <router-link to='/SignUp'><v-icon>mdi-alpha-s-box-outline</v-icon></router-link> |
   <router-view></router-view> 
 
      
    </div>
    </div>
</template>

<script>


export default {
name: "landing-page",
data() {
  return {
   tasks: [
     {
       id: 0,
       task: "",
       completed: false
     },
     {
       id: 1,
       task: "",
       completed: false
     },
     {
       id: 2,
       task: "",
       completed: false
     }
   ]
  }
},

}

</script>
<style lang="css" scoped>
#app {
  width: 500px;
  height: 700px;
  border: 1px solid black;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(auto-fit, minmax,(250px, 1fr));
  grid-template-columns: 100%;
}
.app2{
  
  justify-items: center;
  align-items: center;
  font: Arial sans-serif;


}

</style>
