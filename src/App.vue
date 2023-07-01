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
  <div class="container m-auto py-4 lg:py-8 b-payton">
    <cv-block title="Contacts & Social">
      <div class="flex flex-col lg:flex-row gap-4 justify-around items-center">
        <div class="border border-gray-200 rounded-2xl p-1">
          <img class="shrink drop-shadow-md rounded-xl min-h-60 min-w-60 h-60 w-60" :src="photos[0]" alt="">
        </div>
        <span class="font-light tracking-widest drop-shadow-md my-auto text-6xl text-gray-900">
          Yurii Ivanskyi
        </span>
        <div class="flex flex-wrap gap-x-8 lg:flex-col mx-4 items-start">
          <a :href="`mailto:${primaryContacts.email}`">
            <font-awesome-icon icon="fa-regular fa-envelope" class="t-payton align-middle" />
            {{ primaryContacts.email }}
          </a>
          <a :href="`skype:username?chat:${primaryContacts.skype}`">
            <font-awesome-icon icon="fa-brands fa-skype" class=" t-payton align-middle" />
            {{ primaryContacts.skype }}
          </a>
          <a v-for="brand in social" :href="brand.link">
            <font-awesome-icon :icon="`fa-brands fa-${brand.icon}`" class="t-payton align-middle" />
            {{ brand.link.split('/').at(-1) }}
          </a>
        </div>
      </div>
    </cv-block>
    <cv-block title="Trivia">
      <div class="flex flex-col text-justify">{{ randomFacts.join(' ✤ ') }}</div>
    </cv-block>
    <cv-block title="Skills">
      <div class="flex flex-col lg:flex-row flex-wrap justify-center gap-4">
        <div class="flex flex-col flex-wrap items-center">
          <div class="flex flex-col">
            <h1>Primary:</h1>
            <span v-for="fact in primaryTech" class="text-justify"> ✤ {{ fact }}</span>
          </div>
        </div>
        <div class="border-t visible lg:hidden border-gray-200 my-auto max-h-1 grow align-baseline mx-4">
        </div>
        <div class="flex flex-col flex-wrap items-center">
          <div class="flex flex-col">
            <h1>Secondary:</h1>
            <span v-for="fact in secondaryTech" class="text-justify"> ✤ {{ fact }}</span>
          </div>
        </div>
        <div class="border-t visible lg:hidden border-gray-200 my-auto max-h-1 grow align-baseline mx-4">
        </div>
        <div class="flex flex-col lg:basis-1/3 2xl:basis-1/6 items-center justify-center gap-2">
          <h1>
            <font-awesome-icon icon="fa-solid fa-bug" class="t-payton align-middle mr-2" />
            The Big Tech
            <font-awesome-icon icon="fa-solid fa-code-branch" class="t-payton align-middle ml-2" />
          </h1>
          <div class="flex flex-row flex-wrap justify-center">
            <div v-for="item, index in techIcons" :key="index">
              <i :class="`${item.code} t-payton text-4xl md:text-5xl align-middle rounded-full`"></i>
            </div>
          </div>
        </div>
        <div class="border-t visible lg:hidden border-gray-200 my-auto max-h-1 grow align-baseline mx-4">
        </div>
        <div class="flex flex-col md:basis-1/2 lg:basis-1/3 2xl:basis-1/6 justify-left grow lg:grow-0 px-4">
          <h1>
            <font-awesome-icon icon="fa-solid fa-globe" class="t-payton align-middle mr-2" />
            Languages
            <font-awesome-icon icon="fa-solid fa-language" class="t-payton align-middle ml-2" />
          </h1>
          <progress-bar v-for="lang in languages" :metric="lang.lang" :level="lang.level" :note="lang.note" />
        </div>
      </div>
    </cv-block>
    <cv-block title="Experience">
      <div class="flex flex-col gap-4 justify-left px-2 md:px-4">
        <ol class="relative border-l border-gray-200">
          <timeline-element v-for="period in jobs" :title="period.title" :company="period.company" :educational="false"
            :responsibilities="period.responsibilities" :description="period.desc" :start="period.start"
            :logo="period.logo" :end="period.end" />
        </ol>
      </div>
    </cv-block>
    <cv-block title="Education">
      <div class="flex flex-col">
        <div class="flex flex-col gap-4 justify-left px-2 md:px-4">
          <ol class="relative border-l border-gray-200">
            <timeline-element v-for="period in education" :title="period.title" :company="period.company"
              :educational="true" :description="period.desc" :start="period.start" :end="period.end" />
          </ol>
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
