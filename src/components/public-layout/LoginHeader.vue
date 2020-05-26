<template>
    <nav>
        <div class="nav-wrapper white">
               <router-link  to="/" class="brand-logo #d84315 deep-orange-text darken-3-text">
                    <strong>NutriWeb</strong>
                </router-link>
        </div>
    </nav>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class LoginHeaderComponent extends Vue{

}
</script>