<template>
  <div id="app">
    <HeaderMainComponent />
            <router-view/>
    <AboutComponent/>
    <CommentsComponent/>
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
       <router-link to="/login">Login</router-link>
    </div>-->
  </div>
</template>
<script lang="ts">
import HeaderMainComponent from './components/public-layout/HeaderMain.vue'
import CommentsComponent from './components/public-layout/Comments.vue'
import AboutComponent from './components/public-layout/About.vue'
export default{
    components:{
        HeaderMainComponent,
        CommentsComponent,
        AboutComponent,
    },
}

</script>
<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
