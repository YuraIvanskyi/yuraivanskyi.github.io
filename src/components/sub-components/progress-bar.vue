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
            <div class="text-left basis-1/3">
                <span class="text-xs font-bold inline-block px-1 rounded-md t-payton">
                    {{ metric }}
                </span>
            </div>
            <div class="text-center basis-1/3">
                <span class="text-xs font-bold inline-block t-payton">
                    {{ level }}%
                </span>
            </div>
            <div class="text-right basis-1/3">
                <span class="text-xs font-bold inline-block t-payton">
                    {{ note }}
                </span>
            </div>
        </div>
        <div class="overflow-hidden h-2 text-xs flex rounded border-2">
            <div :style="`width: ${level}%`"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center payton">
            </div>
        </div>
    </div>
</template>
    
<style></style>