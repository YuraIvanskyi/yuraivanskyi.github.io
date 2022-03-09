<script setup>
import socialCard from './sub-components/social-card.vue';
import iconButton from './sub-components/icon-button.vue';
import decorCircle from './sub-components/decor-circle.vue';
import DecorCircle from './sub-components/decor-circle.vue';
import { KinesisElement } from 'vue-kinesis';
</script>

<template>
  <kinesis-element :strength="10" axis="x" class="absolute flex items-end h-screen">
    <img alt="main photo" src="src/assets/crop_photo.png" class="lg:object-right-bottom drop-shadow-2xl" />
  </kinesis-element>
  <kinesis-element :strength="15" class="absolute flex items-end -bottom-10 -right-20 h-screen z-20">
    <social-card>
      <div class="grid columns-2 gap-2 justify-center">
        <div class="flex justify-center gap-2">
          <icon-button icon="facebook"></icon-button>
          <icon-button icon="twitter"></icon-button>
          <icon-button icon="instagram"></icon-button>
        </div>
        <div class="flex justify-center gap-2">
          <icon-button icon="linkedin"></icon-button>
          <icon-button icon="github"></icon-button>
        </div>
      </div>
    </social-card>
  </kinesis-element>
  <kinesis-element :strength="20" class="z-200 absolute flex right-0 h-screen">
    <decor-circle size="big" position="absolute top-96 right-72"></decor-circle>
  </kinesis-element>
  <kinesis-element :strength="25" class="z-200 absolute flex right-0 h-screen">
    <decor-circle size="medium" position="absolute top-80 right-32"></decor-circle>
  </kinesis-element>
  <kinesis-element :strength="25" class="z-200 absolute flex right-0 h-screen">
    <decor-circle size="medium" position="absolute bottom-4 right-80"></decor-circle>
  </kinesis-element>
  <kinesis-element :strength="30" class="z-200 absolute flex right-0 h-screen">
    <decor-circle size="small" position="absolute top-72 right-72"></decor-circle>
  </kinesis-element>
  <kinesis-element :strength="30" class="z-200 absolute flex right-0 h-screen">
    <decor-circle size="small" position="absolute top-48 right-48"></decor-circle>
  </kinesis-element>
</template>