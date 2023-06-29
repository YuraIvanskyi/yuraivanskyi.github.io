<script setup>
import { reactive } from 'vue';
import CvBlock from './components/cv-block.vue';
import timelineElement from './components/sub-components/timeline-element.vue';
import progressBar from './components/sub-components/progress-bar.vue';
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
  <div class="container m-auto sm:py-4 lg:py-8 b-payton">
    <cv-block title="Contacts & Social">
      <div class="flex flex-row flex-wrap">
        <div class="flex basis-1/4 justify-center items-center">
          <font-awesome-icon icon="fa-regular fa-envelope" class="mr-2 t-payton" />
          <a :href="`mailto:${primaryContacts.email}`">{{ primaryContacts.email }}</a>
        </div>
        <div class="flex basis-1/4 justify-center items-center">
          <font-awesome-icon icon="fa-brands fa-skype" class="mr-2 t-payton" />
          <a :href="`skype:username?chat:${primaryContacts.skype}`">{{ primaryContacts.skype }}</a>
        </div>
        <div v-for="brand in social" class="flex basis-1/4 justify-center items-center">
          <font-awesome-icon :icon="`fa-brands fa-${brand.icon}`" class="mr-2 t-payton" />
          <a :href="brand.link">{{ brand.link.split('/').at(-1) }}</a>
        </div>

      </div>
    </cv-block>
    <cv-block title="Trivia">
      <div v-for="fact in randomFacts" class="flex justify-center items-center">
        <span> ⁃ {{ fact }} ⁃ </span>
      </div>
    </cv-block>
    <cv-block title="Skills">
      <div class="flex flex-row flex-wrap justify-center">
        <div class="lg:basis-1/3 flex flex-col flex-wrap">
          <h1>Primary Skills:</h1>
          <div class="flex flex-col flex-wrap">
            <div v-for="fact in primaryTech">
              <span> ⁃ {{ fact }} ⁃ </span>
            </div>
          </div>
        </div>
        <div class="lg:basis-1/3 flex flex-col flex-wrap">
          <h1>Secondary Skills:</h1>
          <div class="flex flex-col flex-wrap">
            <div v-for="fact in secondaryTech">
              <span> ⁃ {{ fact }} ⁃ </span>
            </div>
          </div>
        </div>
        <div class="lg:basis-1/3 flex flex-row flex-wrap items-center justify-center">
          <h1>The Big Icons: if you know, you know :)</h1>
          <div class="flex flex-row flex-wrap justify-center">
            <div v-for="item, index in techIcons" :key="index" @mouseenter="hoverOn(item.tooltip)"
              @mouseleave="hoverOff()">
              <i :class="`${item.code} t-payton text-5xl align-middle rounded-full`"></i>
            </div>
          </div>
        </div>
      </div>
    </cv-block>
    <cv-block title="Experience">
      <div class="flex flex-col gap-4 justify-left px-4">
        <ol class="relative border-l border-gray-200">
          <timeline-element v-for="period in jobs" :title="period.title" :company="period.company" :educational="false"
            :responsibilities="period.responsibilities" :description="period.desc" :start="period.start"
            :logo="period.logo" :end="period.end" />
        </ol>
      </div>
    </cv-block>
    <cv-block title="Education">
      <div class="flex flex-row">
        <div class="flex flex-col gap-4 justify-left px-4">
          <ol class="relative border-l border-gray-200">
            <timeline-element v-for="period in education" :title="period.title" :company="period.company"
              :educational="true" :description="period.subtitle" :start="period.start" :end="period.end" />
          </ol>
        </div>
        <div class="flex flex-col gap-2 justify-left px-2">
          <h1>Languages (not great not terrible)</h1>
          <progress-bar v-for="lang in languages" :metric="lang.lang" :level="lang.level" :note="lang.note" />
        </div>
      </div>
    </cv-block>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


#app {
  font-family: Raleway, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1A1914;
  font-size: 16px;
}

body {
  background-color: #FFFEFA;
}
</style>
