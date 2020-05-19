<template>
  <form id="app" @submit="checkForm" method="post" novalidate="true">
    <div id="signup" class="row">
      <div class="col s3"></div>
      <div class="col s6 teal lighten-5 z-depth-4 center">
        <h5 style="font-weight:bold">EMPIEZA AQUÍ</h5>
        <div style="margin:15px;" class="row">
          <div class="input-field col s6">
            <div class="input-field line">
              <i class="material-icons prefix">account_circle</i>
              <input type="text" name="names" v-model="names" id="names" class="validate" />
              <label for="names">Ingrese sus nombres</label>
            </div>
          </div>
          <div class="input-field col s6">
            <div class="input-field line">
              <i class="material-icons prefix">account_box</i>
              <input type="text" name="lastnames" id="lastnames" v-model="lastnames" class="validate" />
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
                v-model="birthdate"
                placeholder="DD/MM/AAAA"
                class="validate"
              />
              <label for="birthdate">Ingrese su fecha de nacimiento</label>
            </div>
          </div>
          <div class="input-field col s3">
            <div class="input-field line">
              <i class="large material-icons prefix">accessibility</i>
              <input
                type="number"
                min="0"
                name="height"
                v-model="height"
                id="height"
                placeholder="En centimetros"
                class="validate"
              />
              <label for="height">Ingrese su altura</label>
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
                v-model="weight"
                placeholder="En kilos"
                class="validate"
              />
              <label for="weight">Ingrese su peso</label>
            </div>
          </div>
          <div class="input-field col s12">
            <div class="input-field line">
              <i class="material-icons prefix">email</i>
              <input type="email" v-model="email" name="email" id="email" class="validate" />
              <label for="email">Ingrese su correo</label>
              <span
                class="helper-text"
                data-error="Introduzca una dirección de correo válida"
                data-success
              ></span>
            </div>
          </div>
          <div v-if="errors.length">
                <ul><strong>
                <li class="#f44336 red-text" v-for="(error,index) in errors"     :key="index">{{ error }}</li>
                </strong>
                </ul>
          </div>
          <div class="col s12">
            <button class="btn waves-effect waves-light teal" type="submit">
              Continuar
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
      <div class="col s3"></div>
    </div>
  </form>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class SignUpComponent extends Vue {
  errors: any[] = [];
  names = null;
  lastnames = null;
  birthdate = null;
  height = null;
  weight = null;
  email = null;

  checkForm(e: any) {
    this.errors = [];
    if (!this.names) { this.addError("El nombre es requerido.");}
    if(!this.lastnames){ this.addError("El apellido es requerido."); }
    if(!this.birthdate){this.addError("La fecha de nacimiento es requerida."); }
    if(!this.height){this.addError("La altura es requerida.");}
    if(!this.weight){ this.addError("El peso es requerido.")}
    if(!this.email){ this.addError("El correo  es requerido.")}
    if (!this.errors.length) {
      return true;
    }
    e.preventDefault();
  }
  addError(mensaje:any){
    this.errors.push(mensaje);
  }
}
</script>