<template>
  <div class="home">
<SignUp></SignUp>
<Login></Login>
  </div>
</template>

<script>

import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'



export default {
  name: "Home",
  components: {
        Login,
        SignUp,
     
  },
};
</script>

<style lang="css" scoped>

</style>

