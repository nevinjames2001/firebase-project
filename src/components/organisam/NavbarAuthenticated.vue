<template>
    <Navbar>
        <template v-slot:menuitems>
            <NavItem text="logout" to="/" userouterlink="false" @click="logout">Logout</NavItem>
            </template>
    </Navbar>
</template>
<script>
import {defineAsyncComponent} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {getAuth,signOut} from 'firebase/auth'
const Navbar= defineAsyncComponent(()=>import(/*webpackChunkName:"Navbar"*/'@/components/molecules/Navbar.vue'))
const NavItem= defineAsyncComponent(()=>import(/*webpackChunkName:"NavItem"*/'@/components/molecules/NavItem.vue'))
export default{
    components:{
        Navbar,
       NavItem,
    },
    setup()
    {
        const router=useRouter()
        const store=useStore()
        const auth=getAuth()
        function logout(){

            signOut(auth).then(() => {
                localStorage.removeItem('user')
                store.commit('user/resetUserValues')
                router.replace('/')
            
            }).catch((error) => {
            console.log(error);
            });

        }
        return{
            logout
        }
    }

}
</script>
