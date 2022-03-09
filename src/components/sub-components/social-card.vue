<script setup>

</script>

<template>
  <div class="bg-transparent border-solid border-white thick-border shadow-2xl rounded-full h-96 w-96 overflow-hidden flex justify-center transition duration-500 ease-in-out delay-75 hover:scale-110">
      <div class="bg-white shadow-2xl mx-10 my-10 w-full overflow-hidden rounded-full flex flex-col justify-center">
        <div class="">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Need more info?</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">follow me on social media:</p>
        </div>
        <div class="w-full px-2 py-2">
        </div>
        <slot></slot>
        </div>
  </div>
</template>

