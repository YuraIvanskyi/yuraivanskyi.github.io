<script setup>
import Card from './components/sub-components/card.vue';
import Tile from './components/sub-components/tile.vue';
import TextContent from './components/sub-components/text-content.vue';

const randomFacts = [
  'Experienced gamer: MMORPGs, MOBAs, RPGs, FPS, mobile arcades. In the end, why not?',
  'Apart from being QA-oriented, my secondary directions are webdev, mobile, etc.',
  'Youtube gourmet: watch actors & movie-making things, astrophysics, science, mythology & history, memes',
  'Listen-to-maniac, literally spend hours listening to various metal genres (power, sympho, core, heavy, folk, japanese etc.), rock, composers like Antti Martikainen, Christian Friedrich Johannes Büttner, Trevor Moris.',
  'Love sports: football, volleyball, tennis, snooker. Can also easily dare you in table-football!',
  'Kinda like MCU movies & series, fantasy books, great fan of manga and anime (but not a weeb)'
];

const primaryContacts = [
  'email: yuraivanskyi@gmail.com',
  'skype: y.ivanskyi'
]

const techIcons = [
  { code: 'devicon-python-plain-wordmark', tooltip: '' },
  { code: 'devicon-javascript-plain', tooltip: '' },
  { code: 'devicon-pytest-plain-wordmark', tooltip: '' },
  { code: 'devicon-selenium-original', tooltip: '' },
  { code: 'devicon-html5-plain-wordmark', tooltip: '' },
  { code: 'devicon-css3-plain-wordmark', tooltip: 'CSS3' },
  { code: 'devicon-vuejs-plain-wordmark', tooltip: '' },
  { code: 'devicon-vuetify-line', tooltip: '' },
  { code: 'devicon-tailwindcss-plain', tooltip: '' },
  { code: 'devicon-opencv-plain-wordmark', tooltip: '' },
  { code: 'devicon-firebase-plain-wordmark', tooltip: '' },
  { code: 'devicon-amazonwebservices-original', tooltip: '' },
  { code: 'devicon-microsoftsqlserver-plain', tooltip: '' },
  { code: 'devicon-docker-plain-wordmark', tooltip: 'Docker' },
  { code: 'devicon-kubernetes-plain-wordmark', tooltip: '' },
  { code: 'devicon-git-plain-wordmark', tooltip: '' },
  { code: 'devicon-gitlab-plain-wordmark', tooltip: '' },
  { code: 'devicon-jenkins-line', tooltip: '' },
  { code: 'devicon-jira-plain', tooltip: '' },
  { code: 'devicon-confluence-original-wordmark', tooltip: '' },

]

</script>

<template>
  <div class="h-auto w-auto pantone-yellow
              p-3 md:p-4 lg:p-6 xl:p-10">
    <div class="h-auto flex
                gap-3 md:gap-4 lg:gap-6 xl:gap-10">

      <div class="h-auto flex flex-col gap-3 md:gap-4 lg:gap-6 xl:gap-10">
        <card title="Yuriy Ivanskyi" subtitle="all about me, my skills, pros and cons">
          <text-content paragraph="Prologue..."
            text="I bring my gaming experience, automation and test-engineering industry expertise together, while being able to shapeshift for upcoming challenges to enhance your next product.">
          </text-content>
          <text-content paragraph="Random facts" :list=randomFacts>
          </text-content>
        </card>
        <card title="Contacts">
          <text-content paragraph="Business inquiries:" :list="primaryContacts">
          </text-content>
        </card>
      </div>


      <div class="h-auto flex flex-col gap-3 md:gap-4 lg:gap-6 xl:gap-10">
        <card title="Contacts">
          <text-content paragraph="Business inquiries:" :list="primaryContacts">
          </text-content>
        </card>
        <card title="Key Tools" subtitle="I know and use:">
          <tile v-for="item, index in techIcons" :key="index">
            <i :class="`${item.code} pantone-blue-text text-5xl align-middle`"></i>
          </tile>
        </card>
      </div>

      <div class="h-auto flex flex-col gap-3 md:gap-4 lg:gap-6 xl:gap-10">
        <card title="Key Tools" subtitle="I know and use:">
          <tile v-for="item, index in techIcons" :key="index">
            <i :class="`${item.code} pantone-blue-text text-5xl align-middle`"></i>
          </tile>
        </card>
      </div>

      <div class="h-auto flex flex-col gap-3 md:gap-4 lg:gap-6 xl:gap-10">
        <card title="Contacts">
          <text-content paragraph="Business inquiries:" :list="primaryContacts">
          </text-content>
        </card>
      </div>

    </div>
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

.pattern {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='346.41' height='300' viewBox='0 0 34.64101615137755 30' patternUnits='userSpaceOnUse' patternTransform='rotate(213)'%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 91, 187,1)'/%3E%3Cpath d='M-20-20h200v200h-200M34.21 25.25L25.98 20.5L17.75 25.25L17.75 34.75L25.98 39.5L34.21 34.75zM16.89 25.25L8.66 20.5L0.43 25.25L0.43 34.75L8.66 39.5L16.89 34.75zM8.23 10.25L0 5.5L-8.23 10.25L-8.23 19.75L0 24.5L8.23 19.75zM16.89-4.75L8.66-9.5L0.43-4.75L0.43 4.75L8.66 9.5L16.89 4.75zM34.21-4.75L25.98-9.5L17.75-4.75L17.75 4.75L25.98 9.5L34.21 4.75zM42.87 10.25L34.64 5.5L26.41 10.25L26.41 19.75L34.64 24.5L42.87 19.75zM25.55 10.25L17.32 5.5L9.09 10.25L9.09 19.75L17.32 24.5L25.55 19.75z' fill='rgba(247, 250, 252,1)'/%3E%3Cpath d='M-20-20h200v200h-200M25.21 25.25L16.98 20.5L8.75 25.25L8.75 34.75L16.98 39.5L25.21 34.75zM7.89 25.25L-0.34 20.5L-8.57 25.25L-8.57 34.75L-0.34 39.5L7.89 34.75zM-0.77 10.25L-9 5.5L-17.23 10.25L-17.23 19.75L-9 24.5L-0.77 19.75zM7.89-4.75L-0.34-9.5L-8.57-4.75L-8.57 4.75L-0.34 9.5L7.89 4.75zM25.21-4.75L16.98-9.5L8.75-4.75L8.75 4.75L16.98 9.5L25.21 4.75zM33.87 10.25L25.64 5.5L17.41 10.25L17.41 19.75L25.64 24.5L33.87 19.75zM42.53 25.25L34.3 20.5L26.07 25.25L26.07 34.75L34.3 39.5L42.53 34.75zM16.55 40.25L8.32 35.5L0.09 40.25L0.09 49.75L8.32 54.5L16.55 49.75zM-9.43 25.25L-17.66 20.5L-25.89 25.25L-25.89 34.75L-17.66 39.5L-9.43 34.75zM-9.43-4.75L-17.66-9.5L-25.89-4.75L-25.89 4.75L-17.66 9.5L-9.43 4.75zM16.55-19.75L8.32-24.5L0.09-19.75L0.09-10.25L8.32-5.5L16.55-10.25zM42.53-4.75L34.3-9.5L26.07-4.75L26.07 4.75L34.3 9.5L42.53 4.75zM33.87 40.25L25.64 35.5L17.41 40.25L17.41 49.75L25.64 54.5L33.87 49.75zM-0.77 40.25L-9 35.5L-17.23 40.25L-17.23 49.75L-9 54.5L-0.77 49.75zM-18.09 10.25L-26.32 5.5L-34.55 10.25L-34.55 19.75L-26.32 24.5L-18.09 19.75zM-0.77-19.75L-9-24.5L-17.23-19.75L-17.23-10.25L-9-5.5L-0.77-10.25zM33.87-19.75L25.64-24.5L17.41-19.75L17.41-10.25L25.64-5.5L33.87-10.25zM51.19 10.25L42.96 5.5L34.73 10.25L34.73 19.75L42.96 24.5L51.19 19.75zM16.55 10.25L8.32 5.5L0.09 10.25L0.09 19.75L8.32 24.5L16.55 19.75z' fill='rgba(255, 213, 0,1)' filter='url(%23filter-doodad-2)'/%3E%3C/pattern%3E%3Cfilter id='filter-doodad-2'%3E%3CfeTurbulence baseFrequency='0.7000000000000001' numOctaves='2' type='fractalNoise' result='result1'/%3E%3CfeDisplacementMap in2='result1' scale='16' result='result2' xChannelSelector='R' in='SourceGraphic'/%3E%3CfeComposite in2='result2' in='SourceGraphic' operator='atop' result='fbSourceGraphic'/%3E%3C/filter%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")
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

.pantone-blue-text {
  color: rgb(0, 91, 187);
}

.border-1 {
  border-width: 1px;
}
</style>
