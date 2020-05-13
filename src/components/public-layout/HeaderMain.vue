<template>
    <nav>
        <div class="nav-wrapper #ffffff white">
            <a href="" class="brand-logo #d84315 deep-orange-text darken-3-text"><strong>NutriWeb</strong></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="" class="#000000 black-text">Inicio</a></li>
            <li><router-link class="#000000 black-text" to="/signup">Empieza aquí</router-link></li>
            <li><router-link class="#000000 black-text" to="/about">Acerca de</router-link></li>
            <li><router-link class="#000000 black-text" to="/comments">Comentarios</router-link></li>
            <li><a href="" class="#000000 black-text">Contáctenos</a></li>
            <li>
                <router-link  class="waves-effect waves-light btn" to="/login">Ingresar
                <i class="material-icons right">person </i>
                </router-link>   
            </li>
            <li><a class="waves-light btn #66bb6a green lighten-1">
               REGISTRAR <i class="material-icons right">person_add
            </i></a>
            </li>   
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class HeaderMain extends Vue{

}
</script>