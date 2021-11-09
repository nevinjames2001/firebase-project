<template>
<component :is="layout">
  </component>
</template>
<script>
import {ref,watch,defineAsyncComponent} from 'vue'
import {useRoute} from 'vue-router';
const Guest=defineAsyncComponent(()=>import(/*webpackChunkName:"guest"*/ '@/views/layouts/Guest.vue'))
export default {
  components:{
    Guest
  },
  setup(){

    const layout=ref('')
    const route=useRoute()

    watch(route,(to)=>{
      if(to.meta.layout){
        layout.value=to.meta.layout
      }
    })
    return{
      layout
    }
  }
}
</script>

<style>

</style>
