<template>
    <Navbar>
        <template v-slot:menuitems>
            <NavItem text="logout" to="/" userouterlink="false" @click="logout">Logout</NavItem>
            <div id='usericon'></div>
            </template>
    </Navbar>
</template>
<script>
import {defineAsyncComponent,onMounted,computed} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {getAuth,signOut} from 'firebase/auth'
import {userinitial} from 'adi-userinitials'
import Navbar from '@/components/molecules/Navbar.vue'
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
        const email=computed(()=>store.getters['user/getEmail'])

        onMounted(()=>{
            userinitial({
                root:'#usericon',
                height:'50px',
                width:'50px',
                backGround:'red',
                fontColor:'white',
                name:email.value
            })

        })
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
