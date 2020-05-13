<template>
    <div>
        <LoginBodyComponent/>
    </div>
</template>
<script lang="ts">
import LoginHeaderComponent from '../../components/public-layout/LoginHeader.vue'
import LoginBodyComponent from '../../components/public-layout/LoginBody.vue'

export default{
    components:{
        LoginHeaderComponent,
        LoginBodyComponent
    },
}

</script>