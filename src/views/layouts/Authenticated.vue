<template>
<div>
    <NavbarAuthenticated/>
    <MainWrapper>
        <template v-slot:routerview>
            <router-view></router-view>
        </template>
    </MainWrapper>
</div>
</template>
<script>
import {defineAsyncComponent} from 'vue'
const NavbarAuthenticated = defineAsyncComponent(()=>import(/*webpackChunkName:"Navbar"*/'@/components/organisam/NavbarAuthenticated.vue'))
const MainWrapper= defineAsyncComponent(()=>import(/*webpackChunkName:"Navbar"*/'@/components/organisam/MainWrapper.vue'))

export default{
    components:{
        NavbarAuthenticated,
        MainWrapper
      
    }

}
</script>
