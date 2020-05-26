<template>
    <div>
        <LoginHeader/>
        <br>
        <br>
        <RegisterComponent/>
    </div>
</template>
<script lang="ts">
import RegisterComponent from '../../components/public-layout/Register.vue'
import LoginHeader from '../../components/public-layout/LoginHeader.vue'

export default{
    components:{
        RegisterComponent,
        LoginHeader
    },
}

</script>