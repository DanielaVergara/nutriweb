<template>
    <div class="container-fluid">
        <div id="home" class="row blue-grey darken-1 white-text">
            <div class="col s12 center">
                <h1>EL PLAN PERFECTO PARA TI</h1>
                <h5><em>Es hora de empezar a comer lo que tu cuerpo realmente necesita</em></h5>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class Banner extends Vue{

}
</script>
<style>
#home{
    padding: 10em;
}
</style>