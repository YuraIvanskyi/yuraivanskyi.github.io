<script setup>
defineProps({
    paragraph: String,
    text: String,
    list: Array
})
</script>

<template>
    <div class="text-left">
        <h3 class="text-lg leading-6 font-bold pantone-yellow-text ">{{ paragraph }}</h3>
        <p v-if="text" class="text-sm text-justify font-semibold text-gray-300">{{ text }}</p>
        <div v-if="list" v-for="line, index in list" :key="index" class="pantone-yellow-text flex flex-row">
            <svg style="width:20px;height:20px" viewBox="0 0 24 24" class="flex-none">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
            <p :class="`text-sm text-justify font-semibold text-gray-300`">
                {{ line }}</p>
        </div>

    </div>
</template>

<style>
</style>