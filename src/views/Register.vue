<template>
  <div class="form-wrapper">
    <Title title="Register" class="center"/>
    <Form type="Register" @onsubmit="login"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/organisam/Form.vue'

export default {
  name: 'Home',
  components:{
    Form
  },
  setup(){
    function login(user){
      console.log(user)
    }
    return{
      login
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
