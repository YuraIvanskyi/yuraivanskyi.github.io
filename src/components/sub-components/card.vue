<script setup>
defineProps({
    title: String,
    subtitle: String,
    socialCard: Boolean
})
</script>

<template>
    <div class="pantone-blue
                shadow-2xl rounded-md hover:rounded-3xl transition duration-300 my-auto h-full">
        <div class="px-4 py-4 text-center sm:text-left sm:px-6">
            <h3 class="text-lg leading-6 font-medium pantone-yellow-text">{{ title }}</h3>
            <p class="text-sm text-gray-300">{{ subtitle }}</p>
        </div>
        <!-- <div class="border-t border-gray-200 px-2 py-2"> -->
        <slot></slot>
        <!-- </div> -->
    </div>
</template>

<style>
.border-1 {
    border-width: 1px;
}
</style>