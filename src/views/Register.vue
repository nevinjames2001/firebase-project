<template>
  <div class="form-wrapper">
    <Prompt type="success" v-if="success" :message="success"/>
    <Title title="Register" class="center"/>
    <Form type="Register" @onSubmit="register"/>
    
  </div>
</template>

<script>
import {defineAsyncComponent,ref} from 'vue';
// @ is an alias to /src
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from '@/components/organisam/Form.vue'
const Prompt=defineAsyncComponent(()=>
  import(/*webpackChunkName*/"@/components/atoms/Prompt.vue")
);
export default {
  name: 'Home',
  components:{
    Form,
    Prompt,
  },
  setup(){
    const success =ref("");
    function register(user){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          const registeredUser = userCredential.user;
          console.log("registered user: " , registeredUser);
          success.value="You are registered sucessfully.";
          // ...
        })
        .catch((error) => {
          console.error(error);
          // ..
        });
    }
    return{
      register
    }
  }
  
}
</script>
<style scoped>
.form-wrapper {
  @apply w-full md:w-1/4 md:mx-auto;
}
.center{
  @apply text-center;
}
</style>
