<template>
  <div id="comments" class="container">
      <div class="row">
          <div class="col s12">
                 <h4 class="header">Daniela {{user.names}}: <strong>{{plans[0].goalDescription}}</strong>. Calorías a consumir: <strong>{{plans[0].goalCalories}}</strong></h4>
          </div>
      </div>
      <div class="row">
          <div class="col s4 m4" v-for="(plan,index) in plans" :key="index">
              <ul class="collection with-header">
                <li class="collection-header"><h4>{{plan.hour}}</h4></li>
                <li class="collection-item">{{plan.names}}</li>
            </ul>
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

  user:any=[];
  plans:any=[];
    created(){
        axios.get('http://localhost:8000/searchPersonByUserId/'+this.$route.params.userId).then(
            result=>{
                this.user=result.data;
                console.log(this.user);
                axios.get('http://localhost:8000/plan/'+this.user.id).then(
                    plan=>{
                        this.plans=plan.data;
                    }
                ).catch(
                    error=>{
                        console.log(error);
                    }
                )
            }
        ).catch(
            error=>{
                console.log(error);
            }
        )
    }

}
</script>