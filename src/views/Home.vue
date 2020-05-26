<template>
  <div>
    <HeaderMainComponent/>
    <BannerComponent/>
    <br>
    <AboutComponent/>
    <CommentsComponent/>
    <ContactsComponent/>
    <FooterMainComponent/> 
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HeaderMainComponent from '../components/public-layout/HeaderMain.vue'
import BannerComponent from '../components/public-layout/Banner.vue'
import AboutComponent from '../components/public-layout/About.vue'
import CommentsComponent from '../components/public-layout/Comments.vue'
import ContactsComponent from '../components/public-layout/Contacts.vue'
import FooterMainComponent from '../components/public-layout/FooterMain.vue'

export default {
  name: 'Home',
  components: {
    HeaderMainComponent,
    CommentsComponent,
    ContactsComponent,
    FooterMainComponent,
    AboutComponent,
    BannerComponent
  }
}
</script>
