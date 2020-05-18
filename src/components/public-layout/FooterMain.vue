<template>
     <footer class="page-footer white">
        <div class="container-fluid">
            <div class="row">
                <div class="col s10">
                <h5 class="deep-orange-text darken-3-text">Nutriweb</h5>
                </div>
                <div class="col s2">
                    <a href="sass.html"><i class="material-icons red-text">linked_camera</i></a>
                    <a href="badges.html"><i class="material-icons red-text">library_books</i></a>
                    <a href="collapsible.html"><i class="material-icons red-text">local_parking</i></a>
                </div>
            </div>
        </div>
        <div class="footer-copyright red lighten-1">
            <div class="container">
            © 2020 Copyright
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class HeaderMain extends Vue{

}
</script>

<style>
a{
    margin: 10px;
}
</style>