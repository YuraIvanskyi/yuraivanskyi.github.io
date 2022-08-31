<script setup>

defineProps({
    type: String,
})
</script>

<template>
    <div class="pantone-yellow m-auto h-14 w-14 flex items-center justify-center
    shadow-xl rounded-md hover:scale-125 transition duration-100 cursor-pointer">
        <slot></slot>
    </div>
</template>

<style>
</style>