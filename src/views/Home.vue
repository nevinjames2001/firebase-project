<template>
  <div class="form-wrapper">
    <Title title="Login" class="center"/>
    <Prompt type="error" v-if="loginError" :message="loginError" />
    <Form type="Login" @onsubmit="login"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/organisam/Form.vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//import {defineAsyncComponent} from 'vue';
//const Prompt=defineAsyncComponent(()=>import(/*webpackChunkName:"Prompt"*/ "@/components/atoms/Prompt.vue"))

export default {
  name: 'Home',
  components:{
    Form,
   // Prompt
  },
  setup(){
    
    function login(user){
      console.log('hello')
      const auth = getAuth();
      console.log('hello')
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in 
        const authenticatedUser = userCredential.user;
        console.log(authenticatedUser);
        // ...
      })
      .catch((error) => {
        console.error(error.code);
      });
      console.log(user);
    }
     
    
    return{
      login,
    };
  },
  
};
</script>
<style scoped>
.form-wrapper {
  @apply w-full md:w-1/4 md:mx-auto;
}
.center{
  @apply text-center ;
}
</style>
