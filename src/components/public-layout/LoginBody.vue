<template>
    <div id="img-nutri" class="container-fluid">
        <div class="row">
            <div class="col s7">
            </div>
            <div id="sct-login" class="col s5 white center">
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <h5  style="font-weight:bold">INICIAR SESIÓN</h5>
                <div class="row">
                    <div class="input-field col s6">
                        <div class="input-field inline">
                            <i class="material-icons prefix">email</i>
                            <input id="email" type="email" class="validate" v-model="user.email">
                            <label for="email">Ingrese el correo</label>
                        </div>
                    </div>
                    <div class="input-field col s6">
                        <div class="input-field inline">
                            <i class="material-icons prefix">lock</i>
                            <input id="password" type="password" class="validate" v-model="user.password">
                            <label for="password">Ingrese la contraseña</label>
                        </div>
                    </div>
                    <div class="col s12">
                        <label>
                        <input type="checkbox" />
                        <span>Recordarme</span>
                    </label>
                    </div>
                    <div class="col s12" style="padding:30px">
                        <button @click="loginUp()" class="btn waves-effect waves-light black" type="submit" name="action">INGRESAR
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
                <div v-if="errors.length" class="row">
                    <div class="col s12">
                        <div class="card-panel red darken-3">
                            <i class="material-icons left">warning</i>
                            <span class="white-text left-align" v-for="(error,index) in errors" :key="index">
                                {{error}} <br>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {User} from '../../pojo/User'

@Component
export default class LoginBodyComponent extends Vue{
    user = new User();
    errors:string[] = [];

    loginUp(){
        console.log("HERE")
        if(this.checkFields()){
            alert("LOGUEADO");
        }
        
    }

    checkFields(){
        this.errors=[];
        if(this.user.getEmail()==""){
            this.errors.push("El email está vacío");
        }
        if(this.user.getPassword()==""){
            this.errors.push("La contraseña está vacía");
        }
        if(this.errors.length==0){
            return true
        }else{
            return false;
        }
    }
}

</script>

<style>
    #sct-login{
        height: 40em;
        opacity: 0.9;
    }
    #sct-login>*{
        opacity: 1.0;
    }
    #img-nutri{
        height: 40em;
        width: 100%;
        left: 0;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(https://functionalfeel.com/wp-content/uploads/2018/02/180101-nutricion-importancia.jpg);
    }
</style>