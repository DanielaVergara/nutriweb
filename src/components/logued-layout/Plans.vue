<template>
  <div id="comments" class="container">
      <div class="row">
          <div class="col s12">
                 <h4 class="header">Seguridos para {{user.names}}</h4>
          </div>
      </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import axios from 'axios'
import { User } from '../../pojo/User'
import {Route} from 'vue-router'

@Component
export default class PlansHeader extends Vue {

  user = new User();
    created(){
        axios.get('http://localhost:8000/searchPersonByUserId/'+this.$route.params.userId).then(
            result=>{
                this.user=result.data;
            }
        ).catch(
            error=>{
                console.log(error);
            }
        )
    }

}
</script>