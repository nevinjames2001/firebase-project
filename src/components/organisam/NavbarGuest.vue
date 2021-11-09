<template>
    <Navbar>
        <template v-slot:menuitems>
            <NavItem to="/" text="Login"/>
            <NavItem to="/register" text="Register"/>
            </template>
    </Navbar>
</template>
<script>
import {defineAsyncComponent} from 'vue'
const Navbar= defineAsyncComponent(()=>import(/*webpackChunkName:"Navbar"*/'@/components/molecules/Navbar.vue'))
const NavItem= defineAsyncComponent(()=>import(/*webpackChunkName:"NavItem"*/'@/components/molecules/NavItem.vue'))
export default{
    components:{
        Navbar,
        NavItem,
    }

}
</script>
