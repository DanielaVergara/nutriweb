<template>
    <div class="row deep-orange-text darken-3-text">
        <nav>
            <div class="col s8 m8">
                   <router-link  to="/" class="brand-logo #d84315 deep-orange-text darken-3-text">
                    <strong>NutriWeb</strong>
                  </router-link>
            </div>
            <div class="col s2 m2">
                ¡Bienvenido <strong>{{user.names}}</strong>!
            </div>
            <div id="notification" class="col s1 m1">
                <i class="material-icons">notifications</i>
                <i class="material-icons">mode_comment</i>
                <i class="material-icons">notifications</i>
            </div>
            <div class="col s1 m1 right-align">
                <i class="material-icons">subdirectory_arrow_right</i>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import { User } from '../../pojo/User'
import {Route} from 'vue-router'
import axios from 'axios'

@Component
export default class MainHeader extends Vue{
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

<style>
    #notification>i{
        display: inline;
        margin: 2px;    
    }
</style>
