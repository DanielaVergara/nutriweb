<template>
    <div id="signup" class="row">
    <div class="col s3"></div>
    <div class="col s6 teal lighten-5 z-depth-4 center">
      <h5 style="font-weight:bold">EMPIEZA AQUÍ</h5>
      <div style="margin:15px;" class="row">
        <div class="input-field col s6">
          <div class="input-field line">
            <i class="material-icons prefix">account_circle</i>
            <input type="text" name="names" v-model="newUser.names" id="names" class="validate" />
            <label for="names">Ingrese sus nombres</label>
          </div>
        </div>
        <div class="input-field col s6">
          <div class="input-field line">
            <i class="material-icons prefix">account_box</i>
            <input type="text" name="lastnames" id="lastnames" v-model="newUser.lastnames" class="validate" />
            <label for="lastnames">Ingrese sus apellidos</label>
          </div>
        </div>
        <div class="input-field col s6">
          <div class="input-field line">
            <i class="large material-icons prefix">date_range</i>
            <input
              type="text"
              name="birthdate"
              id="birthdate"
              v-model="newUser.birthdate"
              placeholder=""
              class="validate"
            />
            <label for="birthdate">Fecha de nacimiento (DD/MM/AAAA)</label>
          </div>
        </div>
        <div class="input-field col s3">
          <div class="input-field line">
            <i class="large material-icons prefix">accessibility</i>
            <input
              type="number"
              min="0"
              name="height"
              v-model="newUser.height"
              id="height"
              placeholder="En centimetros"
              class="validate"
            />
            <label for="height">Altura</label>
          </div>
        </div>
        <div class="input-field col s3">
          <div class="input-field line">
            <i class="large material-icons prefix">accessibility</i>
            <input
              type="number"
              min="0"
              name="weight"
              id="weight"
              v-model="newUser.weight"
              placeholder="En kilos"
              class="validate"
            />
            <label for="weight">Peso</label>
          </div>
        </div>
        <div class="col s6 m6">
            <span>¿Cada cuánto hace deporte?</span>
        </div>
        <div class="col s6 m6 left-align">
            <form action="#">
                <label>
                    <input v-model="dLess" class="with-gap" name="group1" type="radio"  />
                    <span>Poco</span>
                </label>
                <p>
                <label>
                    <input v-model="dMedium" class="with-gap" name="group1" type="radio"  />
                    <span>Moderado</span>
                </label>
                </p>
                <p>
                <label>
                    <input v-model="dMuch" class="with-gap" name="group1" type="radio"  />
                    <span>Mucho</span>
                </label>
                </p>
            </form>
        </div>
        <div class="input-field col s12">
          <div class="input-field line">
            <i class="material-icons prefix">email</i>
            <input type="email" v-model="newUser.email" name="email" id="email" class="validate" />
            <label for="email">Ingrese su correo</label>
            <span
              class="helper-text"
              data-error="Introduzca una dirección de correo válida"
              data-success
            ></span>
          </div>
        </div>
        <div class="input-field col s12">
          <div class="input-field line">
            <i class="material-icons prefix">email</i>
            <input type="password" v-model="newUser.password" name="password" id="password" class="validate" />
            <label for="password">Ingrese una contraseña</label>
            <span
              class="helper-text"
              data-error="Introduzca una contraseña"
              data-success
            ></span>
          </div>
        </div>
        <div class="input-field col s12">
          <div class="input-field line">
            <i class="material-icons prefix">email</i>
            <input type="password" v-model="confirmPass" name="confirmPass" id="confirmPass" class="validate" />
            <label for="password">Confirme la contraseña</label>
            <span
              class="helper-text"
              data-error="Introduzca una confirmacion de contraseña"
              data-success
            ></span>
          </div>
        </div>
        <div class="col s12 m12" v-if="errors.length">
              <ul><strong>
              <li class="#f44336 red-text" v-for="(error,index) in errors" :key="index">{{ error }}</li>
              </strong>
              </ul>
        </div>
        <div class="col s12">
            <button @click="checkForm()" class="btn waves-effect waves-light teal" type="submit">
                Continuar
                <i class="material-icons right">send</i>
            </button>
        </div>
      </div>
    </div>
    <div class="col s3"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import {User} from "../../pojo/User"
import axios from 'axios'
import router from '../../router';

@Component
export default class RegisterComponent extends Vue {
    newUser = new User();
    dLess:boolean=true;
    dMedium:boolean=false;
    dMuch:boolean=false;
    confirmPass:string="";
    errors: any[] = [];

    checkForm() {
        this.errors = [];
        if (!this.newUser.getName()) { this.addError("El nombre es requerido.");}
        if(!this.newUser.getLastName()){ this.addError("El apellido es requerido."); }
        if(!this.newUser.getBirthdate()){this.addError("La fecha de nacimiento es requerida."); }
        if(!this.newUser.getHeight()){this.addError("La altura es requerida.");}
        if(!this.newUser.getWeight()){ this.addError("El peso es requerido.")}
        if(!this.newUser.getEmail()){ this.addError("El correo  es requerido.")}
        if(!this.newUser.getPassword()){ this.addError("La contraseña es requerida.")}
        if(!this.confirmPass){ this.addError("Ingrese la confirmación de la contraseña.")}
        if(this.newUser.getPassword()!=this.confirmPass){this.addError("Las contraseñas no coinciden.")}
        if (!this.errors.length) {
            this.saveUser();
        }
    }
    addError(mensaje:any){
        this.errors.push(mensaje);
    }
    
    saveUser(){
        axios.post("http://localhost:8000/createPeople", this.newUser).then(
            result=>{
              if(result.data.code=="0"){
                this.$router.push({name:"Login"})
              }else{
                alert("ERROR AL REGISTRAR EL USUARIO")
              }
            })
            .catch(
              error=>{
                console.log(error)
            });
    }
}
</script>