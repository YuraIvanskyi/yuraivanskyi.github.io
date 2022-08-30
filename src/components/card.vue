<script setup>
defineProps({
    title: String,
    subtitle: String,
})
</script>

<template>
    <div class="pantone-blue shadow-2xl rounded-2xl h-auto w-auto mx-auto
                p-4 md:p-5 lg:p-6 xl:p-8
                align-middle flex flex-col
              hover:shadow-blue-500 transition duration-300 ">
        <div class="mb-1 md:mb-2 lg:mb-4 xl:mb-6 flex-shrink">
            <div class="flex justify-between">
                <p class="text-3xl text-left leading-8 font-bold pantone-yellow-text">{{  title  }}</p>
                <div class="text-right pantone-yellow-text">
                    <slot name="icon"></slot>
                </div>
            </div>
            <p class="text-lg text-left font-semibold text-gray-300">{{  subtitle  }}</p>
        </div>

        <div class="flex flex-wrap flex-row gap-2 flex-grow">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style>
</style>