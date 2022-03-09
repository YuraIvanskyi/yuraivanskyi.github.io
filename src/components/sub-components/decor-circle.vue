<script setup>
defineProps({
  size: String,
  position: String,
})
 
</script>

<template>
  <div :class="position + ' transition duration-500 ease-in-out delay-75 hover:scale-110'">
    <div v-if="size === 'big'"
      class="h-56 w-56 bg-transparent drop-shadow-2xl rounded-full border-solid border-white thick-border overflow-hidden z-10 flex justify-center"
    >
      <div
        class="bg-white drop-shadow-2xl mx-10 my-10 w-full overflow-hidden rounded-full flex flex-col justify-center"
      ></div>
    </div>
    <div v-else-if="size === 'medium'"
      class="h-32 w-32 bg-transparent drop-shadow-2xl rounded-full border-solid border-white medium-border overflow-hidden z-10 flex justify-center"
    >
      <div
        class="bg-white drop-shadow-2xl mx-6 my-6 w-full overflow-hidden rounded-full flex flex-col justify-center"
      ></div>
    </div>
    <div v-else-if="size === 'small'"
      class="h-16 w-16 bg-transparent drop-shadow-2xl rounded-full border-solid border-white thin-border overflow-hidden z-10 flex justify-center"
    >
      <div
        class="bg-white drop-shadow-2xl mx-3 my-3 w-full overflow-hidden rounded-full flex flex-col justify-center"
      ></div>
    </div>
  </div>
</template>
<style>
.thick-border {
  border-width: 40px;
}
.medium-border {
  border-width: 24px;
}

.thin-border {
  border-width: 10px;
}

</style>