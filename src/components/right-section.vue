<script setup>
import socialCard from './sub-components/social-card.vue';
import iconButton from './sub-components/icon-button.vue';
import decorCircle from './sub-components/decor-circle.vue';
import DecorCircle from './sub-components/decor-circle.vue';
import { KinesisElement } from 'vue-kinesis';
</script>

<template>
  <kinesis-element :strength="10" axis="x" class="absolute items-end h-screen lg:visible lg:flex hidden">
    <img alt="main photo" src="/src/assets/crop_photo_outline.png" class="lg:object-right-bottom drop-shadow-2xl" />
  </kinesis-element>
  <kinesis-element :strength="10" axis="x" class="lg:hidden absolute flex items-start top-0 right-0 h-screen z-20">
    <img alt="main photo" src="/src/assets/photo.jpg" class="object-right-top h-40 w-40 object-cover border-8 border-white rounded-full drop-shadow-2xl" />
  </kinesis-element>
  <kinesis-element :strength="15" class="lg:visible hidden absolute lg:flex items-end -bottom-10 -right-20 h-screen z-20">
    <social-card>
      <div class="grid columns-2 gap-2 justify-center">
        <div class="flex justify-center gap-2">
          <icon-button icon="twitter" href="https://twitter.com/i1skyi"></icon-button>
          <icon-button icon="facebook" href="https://www.facebook.com/yuriy.ivanskyi"></icon-button>
          <icon-button icon="instagram" href="https://www.instagram.com/yuriyivanskyi/"></icon-button>
        </div>
        <div class="flex justify-center gap-2">
          <icon-button icon="linkedin" href="https://www.linkedin.com/in/yuraivanskyi/"></icon-button>
          <icon-button icon="github" href="https://github.com/YuraIvanskyi"></icon-button>
        </div>
      </div>
    </social-card>
  </kinesis-element>
  <kinesis-element :strength="25" class="z-200 hidden lg:visible md:visible absolute lg:flex right-0 h-screen">
    <decor-circle size="big" position="absolute top-96 right-72"></decor-circle>
  </kinesis-element>
  <kinesis-element :strength="35" class="z-200 hidden lg:visible md:visible absolute lg:flex right-0 h-screen">
    <decor-circle size="medium" position="absolute top-80 right-32"></decor-circle>
  </kinesis-element>
  <kinesis-element :strength="35" class="z-200 hidden lg:visible md:visible absolute lg:flex right-0 h-screen">
    <decor-circle size="medium" position="absolute bottom-4 right-80"></decor-circle>
  </kinesis-element>
  <kinesis-element :strength="50" class="z-200 hidden lg:visible md:visible absolute lg:flex right-0 h-screen">
    <decor-circle size="small" position="absolute top-72 right-72"></decor-circle>
  </kinesis-element>
  <kinesis-element :strength="50" class="z-200 hidden lg:visible md:visible absolute lg:flex right-0 h-screen">
    <decor-circle size="small" position="absolute top-48 right-48"></decor-circle>
  </kinesis-element>
</template>