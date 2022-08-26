<script setup>
defineProps({
    type: String,
})
</script>

<template>
    <div class="pantone-yellow m-auto h-full w-full
                shadow-xl rounded-md hover:scale-101 transition duration-100 ">
        <slot></slot>
    </div>
</template>

<style>
.hover\:scale-101:hover {
    --tw-scale-x: 1.01;
    --tw-scale-y: 1.01;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>