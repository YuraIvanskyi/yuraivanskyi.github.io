<script setup>
defineProps({
    paragraph: String,
    text: String,
    list: Array
})
</script>

<template>
    <div class="text-center sm:text-left">
        <h3 class="text-lg leading-6 font-bold pantone-yellow-text">{{ paragraph }}</h3>
        <p v-if="text" class="text-sm text-justify font-semibold text-gray-300">{{ text }}</p>
        <p v-if="list" v-for="line, index in list" :key="index"
            class="text-sm text-justify font-semibold text-gray-300">
            {{ line }}</p>
    </div>
</template>

<style>
.hover\:scale-101:hover {
    --tw-scale-x: 1.01;
    --tw-scale-y: 1.01;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>