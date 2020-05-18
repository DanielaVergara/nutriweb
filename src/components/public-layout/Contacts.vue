<template>
  <div id="contacts" class="row" style="color:white;">
    <div class="col s3"></div>
    <div class="col s6 cyan darken-4" style="border-radius:3px;">
      <h5 style="font-weight:bold;text-align:center;">CONTÁCTENOS</h5>
      <div style="margin:15px; " class="row">
        <div class="input-field col s12">
            <p>
                Escribe todas las inquietudes, quejas o reclamos junto con tu correo.
                Estaremos en contacto contigo lo más pronto posible.
            </p>
        </div>
        <div class="input-field col s12">
          <div class="input-field line">
            <i class="material-icons prefix">email</i>
            <input type="text" name="email" id="email" class="validate" />
            <label for="email">Ingrese su correo</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <div class="input-field line">
             <i class="material-icons prefix">comment</i>
              <input type="text" name="comments" id="comments" class="validate" />
              <label for="comments">Escribe aquí</label>
            </div>
          </div>
        </div>
        <div class="col s12" style="text-align:center">
          <button class="btn waves-effect waves-light cyan accent-4" type="submit" name="action">
            Enviar
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

@Component
export default class Contacts extends Vue {}
</script>