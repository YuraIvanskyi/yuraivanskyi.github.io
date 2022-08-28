<script setup>
defineProps({
    metric: String,
    level: Number,
    note: String
})
</script>
    
<template>
    <div class="">
        <div class="flex items-center justify-between">
            <div>
                <span class="text-xs font-bold inline-block px-1 uppercase rounded-md pantone-blue-text pantone-yellow">
                    {{ metric }}
                </span>
            </div>
            <div class="text-center">
                <span class="text-xs font-bold inline-block pantone-yellow-text">
                    {{ level }}%
                </span>
            </div>
            <div class="text-right">
                <span class="text-xs font-bold inline-block pantone-yellow-text">
                    {{ note }}
                </span>
            </div>
        </div>
        <div class="overflow-hidden h-3 text-xs flex rounded pantone-yellow border-2">
            <div :style="`width: ${level}%`"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center pantone-blue">
            </div>
        </div>
    </div>
</template>
    
<style>
</style>