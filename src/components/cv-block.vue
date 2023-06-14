<script setup>
defineProps({
    title: String,
    content: String,
})
</script>

<template>
    <article>
        <div class="flex justify-start">
            <div class="border-t-2 my-auto w-1/12 max-h-1 align-baseline"></div>
            <h1 class="border-2 rounded-full px-4 py-1">
                {{ title }}
            </h1>
            <div class="border-t-2 my-auto w-11/12 max-h-1 align-baseline"></div>
        </div>
        <div class="p-2">
            <slot></slot>
        </div>

    </article>
</template>
<style></style>