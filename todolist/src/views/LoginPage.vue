<template>
    <div id="login-page">
        <Header></Header>
     <Login></Login>

    </div>
</template>

<script>
import Header from "../components/Header.vue"
import Login from "../components/Login.vue"
    export default {
        name: "LoginPage", 
        components: {
           Login,
           Header,
        },
        
    }
</script>

<style lang="css" scoped>

</style>