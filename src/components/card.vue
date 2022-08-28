<script setup>
defineProps({
    title: String,
    subtitle: String,
})
</script>

<template>
    <div class="pantone-blue shadow-2xl rounded-2xl h-auto m-auto
                p-2 md:p-3 lg:p-4 xl:p-6
              hover:shadow-blue-500 transition duration-300 ">
        <div class="mb-1 md:mb-2 lg:mb-4 xl:mb-6">
            <div class="flex justify-between">
                <p class="text-3xl text-center sm:text-left leading-8 font-bold pantone-yellow-text">{{ title }}</p>
                <div class="text-right pantone-yellow-text">
                    <slot name="icon"></slot>
                </div>
            </div>
            <p class="text-lg text-center sm:text-left font-semibold text-gray-300">{{ subtitle }}</p>
        </div>

        <div class="flex flex-wrap flex-row gap-2">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style>
</style>