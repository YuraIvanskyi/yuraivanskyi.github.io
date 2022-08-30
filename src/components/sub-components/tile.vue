<script setup>

defineProps({
    type: String,
    size: Number,
})
</script>

<template>
    <div v-if="size !== undefined" :class="`pantone-yellow m-auto h-${size} w-${size} flex items-center justify-center
    shadow-xl rounded-md hover:scale-150 transition duration-100 cursor-pointer`">
        <slot></slot>
    </div>
    <div v-else class="pantone-yellow m-auto h-14 w-14 flex items-center justify-center
    shadow-xl rounded-md hover:scale-125 transition duration-100 cursor-pointer">
        <slot></slot>
    </div>
</template>

<style>
</style>