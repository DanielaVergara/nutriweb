<template>
    <div>
        <LoginHeaderComponent/>

        <LoginBodyComponent/>
    </div>
</template>
<script lang="ts">
import LoginHeaderComponent from '../components/LoginHeader.vue'
import LoginBodyComponent from '../components/LoginBody.vue'

export default{
    components:{
        LoginHeaderComponent,
        LoginBodyComponent
    },
}

</script>