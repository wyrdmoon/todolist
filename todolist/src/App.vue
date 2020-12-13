<template>
  <div id="app">
   
      <router-link to="/Login">Login</router-link>|

      <router-link to='/SignUp'>SignUp</router-link>|
 
      <router-link to='/Home'>Home</router-link>
      <router-link to='/task-form'>TaskForm</router-link>
      <router-view></router-view>
     
      
    </div>
</template>

<script>

export default {
name: "landing-page",

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
}

</style>
