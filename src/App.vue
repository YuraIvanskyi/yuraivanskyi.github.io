<script setup>
import { reactive } from 'vue';
import CvBlock from './components/cv-block.vue';
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
  <div class="container m-auto">
    <cv-block title="Contacts">
      <div>
        <font-awesome-icon icon="fa-solid fa-user-secret" />
      </div>
    </cv-block>
    <cv-block title="Facts">{{ randomFacts }}</cv-block>
    <cv-block title="Skills">{{ primaryTech }}</cv-block>
    <cv-block title="Tech">{{ secondaryTech }}</cv-block>
    <cv-block title="Jobs">{{ jobs }}</cv-block>
    <cv-block title="Languages">{{ languages }}</cv-block>
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
  font-size: 14px;
}
</style>
