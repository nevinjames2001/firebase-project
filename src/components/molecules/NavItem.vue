<template>
    <ListItem>
        <router-link :to="to">{{text}}</router-link>
    </ListItem>
</template>
<script>
import {defineAsyncComponent} from 'vue'

const ListItem = defineAsyncComponent(()=>import(/*webpackChunkName:"ListItem"*/'@/components/atoms/ListItem.vue'));
export default{
    components:{
        ListItem
    },
    props:{
        to:String,
        text:String
    }
}
</script>
<style scoped>
*{
    @apply
    text-gray-50;
}
</style>