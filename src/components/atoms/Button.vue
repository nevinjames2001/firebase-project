<template>
    <button v-bind="$attrs" class="button">
      
     <slot/> 
    </button>
</template>
<style scoped>
.button {
    @apply text-white px-7 py-2 rounded focus:outline-none border-none shadow font-semibold bg-gradient-to-tr;
}
</style>
