<template>
<div>
    <NavbarGuest/>
   <MainWrapper>
        <template v-slot:routerview>
            <router-view></router-view>
        </template>
    </MainWrapper>
</div>
</template>
<script>
import {defineAsyncComponent} from 'vue'
const NavbarGuest= defineAsyncComponent(()=>import(/*webpackChunkName:"Navbar"*/'@/components/organisam/NavbarGuest.vue'))
const MainWrapper= defineAsyncComponent(()=>import(/*webpackChunkName:"Navbar"*/'@/components/organisam/MainWrapper.vue'))

export default{
    components:{
        NavbarGuest,
        MainWrapper
      
    }

}
</script>
<style scoped>
.mainwrapper{
    @apply h-[70vh] flex bg-white  overflow-auto;
}
.page{
    @apply m-auto w-full;
}
</style>