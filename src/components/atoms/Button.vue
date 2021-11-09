<template>
    <button v-bind="$attrs" class="button">
      
     <slot/> 
    </button>
</template>
<style scoped>
.button {
    @apply text-gray-500 px-7 py-7 rounded focus:outline-none border-none shadow font-semibold bg-gradient-to-tr;
}
</style>
