<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper #ffffff white">
                <a href="" class="brand-logo #d84315 deep-orange-text darken-3-text"><strong>NutriWeb</strong></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a class="#000000 black-text" href="#home">Inicio</a></li>
                    <li><a class="#000000 black-text" href="#signup">Empieza aquí</a></li>
                    <li><a class="#000000 black-text" href="#about">Acerca de</a></li>
                    <li><a class="#000000 black-text" href="#comments">Comentarios</a></li>
                    <li><a class="#000000 black-text" href="#contacts">Contáctenos</a></li>
                    <li>
                        <router-link  class="waves-effect waves-light btn" to="/login">Ingresar
                        <i class="material-icons right">person </i>
                        </router-link>   
                    </li>
                    <li>
                        <a href="#signup" class="waves-light btn #66bb6a green lighten-1">
                        REGISTRAR <i class="material-icons right">person_add
                        </i></a>
                    </li>   
                </ul>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class HeaderMain extends Vue{

}
</script>

<style>
    *{
        scroll-behavior: smooth;
    }
</style>