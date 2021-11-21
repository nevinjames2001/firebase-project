<template>
    <div class="mainwrapper">
        <div class="page">
            <slot name="routerview"></slot>
        </div>
    </div>
</template>
<style scoped>
.mainwrapper{
    @apply h-[70vh] flex bg-white  overflow-auto;
}
.page{
    @apply m-auto w-full;
}
</style>