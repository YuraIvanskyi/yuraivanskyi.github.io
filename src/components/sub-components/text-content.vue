<script setup>
defineProps({
    paragraph: String,
    text: String,
    list: Array
})
</script>

<template>
    <div class="text-center sm:text-left">
        <h3 class="text-lg leading-6 font-bold pantone-yellow-text ">{{ paragraph }}</h3>
        <p v-if="text" class="text-sm text-justify font-semibold text-gray-300">{{ text }}</p>
        <p v-if="list" v-for="line, index in list" :key="index"
            :class="`text-sm text-justify font-semibold text-gray-300`">
            {{ line }}</p>
    </div>
</template>

<style>
</style>