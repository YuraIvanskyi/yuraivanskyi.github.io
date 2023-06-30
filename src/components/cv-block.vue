<script setup>
defineProps({
    title: String,
    content: String,
})
</script>

<template>
    <article>
        <div class="flex justify-start">
            <div class="border-t b-payton my-auto grow lg:w-1/12 max-h-1 align-baseline mx-4"></div>
            <div class=" flex border b-payton grow rounded-lg lg:w-3/12 px-4 py-1 font-semibold items-center ">
                <h1 class="grow">{{ title }}</h1>
            </div>
            <div class="border-t b-payton my-auto grow lg:w-9/12 max-h-1 align-baseline mx-4"></div>
        </div>
        <div class="px-4 py-2">
            <slot></slot>
        </div>

    </article>
</template>
<style></style>