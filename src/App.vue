<script setup>
import rightSection from './components/right-section.vue';
import leftSection from './components/left-section.vue';
import { KinesisContainer } from 'vue-kinesis';
</script>

<template>
  <kinesis-container :perspective="1800"
    class="lg:columns-2 pattern-circles bg-fixed h-screen w-screen relative overflow-hidden">
    <div class="h-screen px-6 py-6 z-500 overflow-y-auto scroll-smooth scrollbar-hide">
      <left-section />
    </div>
    <div class="h-screen overflow-y-auto">
      <right-section />
    </div>
  </kinesis-container>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.pattern-circles {
  background-image: url("data:image/svg+xml,%3Csvg width='450' height='270' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='rgb(225, 29, 72)' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
}
.name-font {
  font-family: "Lobster", cursive;
}
</style>
