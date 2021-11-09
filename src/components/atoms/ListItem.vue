
<template>
    <li class='list-item' v-bind="$atrrs">
     
        <slot/>
    </li>
</template>
<style scoped>
.list-item{
    @apply text-lg text-xl text-gray-800 ;
}
</style>