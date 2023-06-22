<script setup>
defineProps({
    title: String,
    content: String,
})
</script>

<template>
    <article>
        <div class="flex justify-start">
            <div class="border-t-2 b-payton my-auto w-1/12 max-h-1 align-baseline"></div>
            <div class=" flex border-2 b-payton rounded-full w-2/12 px-4 py-1 font-semibold items-center">
                ✦<h1 class="grow">{{ title }}</h1>✦
            </div>
            <div class="border-t-2 b-payton my-auto w-10/12 max-h-1 align-baseline"></div>
        </div>
        <div class="p-1">
            <slot></slot>
        </div>

    </article>
</template>
<style></style>