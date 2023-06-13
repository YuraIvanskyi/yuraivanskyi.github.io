<script setup>
import { reactive, ref } from 'vue';
import Card from './components/card.vue';
import Tile from './components/sub-components/tile.vue';
import TextContent from './components/sub-components/text-content.vue';
import ProgressBar from './components/sub-components/progress-bar.vue';
import IconButton from './components/sub-components/icon-button.vue';

import { education, jobs, languages, photos, primaryContacts, primaryTech, randomFacts, secondaryTech, social, techIcons } from './content';

let state = reactive({ hoveredIcon: '' })
function hoverOn(val) {
  state.hoveredIcon = val;
}
function hoverOff() {
  state.hoveredIcon = '';
}
</script>

<template>
  <div class="container">
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: Raleway, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
