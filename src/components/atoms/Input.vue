<template>
    <input v-bind="$attrs"  v-model="inputvalue" class="input" autocomplete>
</template>

<script>
import {ref} from 'vue'
export default {
    props:['value'],
    
    setup() {
        const inputvalue=ref('')
        return{
            inputvalue
        }
    },
}
</script>
<style scoped>
.input{
    @apply p-1 focus:outline-none border focus:border-gray-500 border-gray-300 bg-transparent
    text-gray-800  rounded shadow transition-all duration-200 ease-in-out w-full;
}
</style>
