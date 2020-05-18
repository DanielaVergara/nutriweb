<template>
  <div id="app">
    <div id="nav">
     <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
       <router-link to="/login">Login</router-link>-->
       
    </div>
    <router-view/>
    <div class="container-fluid">
      <HeaderMainComponent/>
      <BannerComponent/>
      <br>
      <SignUpComponent/>
      <AboutComponent/>
      <CommentsComponent/>
      <ContactsComponent/>
      <FooterMainComponent/> 
    </div> 
  </div>
</template>

<script lang="ts">
import HeaderMainComponent from './components/public-layout/HeaderMain.vue'
import BannerComponent from './components/public-layout/Banner.vue'
import SignUpComponent from './components/public-layout/SignUp.vue'
import AboutComponent from './components/public-layout/About.vue'
import CommentsComponent from './components/public-layout/Comments.vue'
import ContactsComponent from './components/public-layout/Contacts.vue'
import FooterMainComponent from './components/public-layout/FooterMain.vue'
export default {
  components:{
        HeaderMainComponent,
        SignUpComponent,
        CommentsComponent,
        ContactsComponent,
        FooterMainComponent,
        AboutComponent,
        BannerComponent
    }
}
</script>
