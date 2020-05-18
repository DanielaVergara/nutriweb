<template>
    <div id="about" class="container">
        <div class="row">
            <div class="col s12">
                <h5>Acerca de</h5>
            </div>
            <div class="col s4">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Novedades</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, euismod tempor dictum tortor porta cum, senectus fames ante luctus blandit tempus.</p>
                    </div>
                    <div class="card-action">
                        <a href="#">Experiencias</a>
                    </div>
                </div>  
            </div>
            <div class="col s4">
                <div style="height:100%;" class="card deep-orange darken-3">
                    <div class="card-content white-text">
                        <span class="card-title">Web recomendada</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, euismod tempor dictum tortor porta cum, senectus fames ante luctus blandit tempus. 
                            Ultrices integer nunc sociosqu in congue feugiat eget, nullam montes dignissim fusce vulputate vel sem cras, curae nibh suspendisse et lobortis habitasse.</p>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
            <div class="col s4">
                <div style="height:100%;" class="card pink darken-4">
                    <div class="card-content white-text">
                        <span class="card-title">El cambio es ahora</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
            <div class="col s12">
                <div style="height:100%;" class="card  purple darken-3">
                    <div class="card-content white-text">
                        <span class="card-title">Más de 100 recetas</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, euismod tempor dictum tortor porta cum, senectus fames ante luctus blandit tempus. 
                            Ultrices integer nunc sociosqu in congue feugiat eget, nullam montes dignissim fusce vulputate vel sem cras, curae nibh suspendisse et lobortis habitasse.
                            Facilisi quisque leo luctus cras condimentum convallis hac cursus ultricies fermentum, parturient velit risus pellentesque eros mi nunc lobortis potenti, non per dapibus pharetra dis ridiculus magnis morbi eleifend.</p>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class AboutComponent extends Vue{

}
</script>