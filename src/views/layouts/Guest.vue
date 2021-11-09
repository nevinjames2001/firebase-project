<template>
<div>
    <NavbarGuest/>
    <div class="mainwrapper">
        <div class="page">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>
<script>
import {defineAsyncComponent} from 'vue'
const NavbarGuest= defineAsyncComponent(()=>import(/*webpackChunkName:"Navbar"*/'@/components/organisam/NavbarGuest.vue'))

export default{
    components:{
        NavbarGuest,
      
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