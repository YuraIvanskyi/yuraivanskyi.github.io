<script setup>
defineProps({
    title: String,
    subtitle: String,
    contentFlow: String,
})
</script>

<template>
    <div class="pantone-blue my-auto h-full
                p-2 md:p-3 lg:p-4 xl:p-6
                shadow-2xl rounded-2xl hover:scale-105 transition duration-300 ">
        <div class="text-center sm:text-left
                    mb-1 md:mb-2 lg:mb-4 xl:mb-6">
            <h3 class="text-3xl leading-8 font-medium pantone-yellow-text">{{ title }}</h3>
            <p class="text-lg text-gray-300">{{ subtitle }}</p>
        </div>
        <div class="grid gap-2 grid-flow-row">
            <slot></slot>
        </div>
    </div>
</template>

<style>
</style>