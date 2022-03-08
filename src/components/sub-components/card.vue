<script setup>

defineProps({
    title: String,
    subtitle: String,
    socialCard: Boolean
})

</script>

<template>
  <div class="bg-white shadow rounded-3xl my-auto">
    <div class="object-bottom">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">{{ title }}</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">{{ subtitle }}</p>
      </div>
      <div class="border-t border-gray-200 px-2 py-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>

</style>