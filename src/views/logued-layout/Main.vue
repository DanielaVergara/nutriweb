<template>
    <div>
        <MainHeaderComponent/>
        <PlansHeaderComponent/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import MainHeaderComponent from '../../components/logued-layout/MainHeader.vue'
import PlansHeaderComponent from '../../components/logued-layout/Plans.vue'
export default {
    components:{
        MainHeaderComponent,
        PlansHeaderComponent
    }   
}
</script>