<script setup>
defineProps({
    title: String,
    subtitle: String,
})
</script>

<template>
    <div class="pantone-blue shadow-2xl rounded-2xl h-auto
                p-2 md:p-3 lg:p-4 xl:p-6
              hover:shadow-blue-500 transition duration-300 ">
        <div class="text-center sm:text-left
                    mb-1 md:mb-2 lg:mb-4 xl:mb-6">
            <h3 class="text-3xl leading-8 font-bold pantone-yellow-text">{{ title }}</h3>
            <p class="text-lg font-semibold text-gray-300">{{ subtitle }}</p>
        </div>
        <div class="flex flex-wrap flex-row gap-2">
            <slot></slot>
        </div>
    </div>
</template>

<style>
</style>