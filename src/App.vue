<script setup>
import Card from './components/sub-components/card.vue';
</script>

<template>
  <div class="h-screen w-auto p-4 
            pantone-yellow">
    <div class="grid h-full grid-rows-4 grid-cols-4 gap-4">
      <div class="">
        <card title="1" />
      </div>
      <div class="">
        <card :title="2" />
      </div>
      <div class="">
        <card :title="3" />
      </div>
      <div class="row-start-1 row-end-3 row-span-2">
        <card :title="4" />
      </div>
      <div class="col-span-2">
        <card :title="5" />
      </div>
      <div class="">
        <card :title="6" />
      </div>
      <div class="">
        <card :title="7" />
      </div>
      <div class="">
        <card :title="8" />
      </div>
      <div class="">
        <card :title="9" />
      </div>
      <div class="">
        <card :title="10" />
      </div>
      <div class="">
        <card :title="11" />
      </div>
      <div class="">
        <card :title="12" />
      </div>
      <div class="col-span-2">
        <card :title="13" />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.pantone-yellow {
  background-color: rgb(255, 213, 0);
}

.pantone-yellow-text {
  color: rgb(255, 213, 0);
}

.pantone-blue {
  background-color: rgb(0, 91, 187);
}

.pantone-vlue-text {
  color: rgb(0, 91, 187);
}
</style>
