<template>
    <div class="container">
        <div class="row">
            <div class="col s3">
            </div>
            <div id="sct-login" class="col s8 blue lighten-5  z-depth-4 ">
                <h5  style="font-weight:bold;text-align:center">INICIAR SESIÓN</h5>
                <div class="row">
                    <div class="input-field col s6">
                        <div class="input-field inline">
                            <i class="material-icons prefix">email</i>
                            <input id="email" type="email" class="validate">
                            <label for="email">Ingrese el correo</label>
                        </div>
                    </div>
                    <div class="input-field col s6">
                        <div class="input-field inline">
                            <i class="material-icons prefix">lock</i>
                            <input id="password" type="password" class="validate">
                            <label for="password">Ingrese la contraseña</label>
                        </div>
                    </div>
                    <div class="col s12" style="text-align:center">
                        <label>
                        <input type="checkbox" />
                        <span>Recordarme</span>
                    </label>
                    </div>
                    <div class="col s12" style="padding:30px; text-align:center">
                        <button class="btn waves-effect waves-light black" type="submit" name="action">INGRESAR
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col s3">

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class LoginBodyComponent extends Vue{

}

</script>