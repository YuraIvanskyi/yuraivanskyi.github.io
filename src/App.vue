<script setup>
import { reactive, ref } from 'vue';
import Card from './components/card.vue';
import Tile from './components/sub-components/tile.vue';
import TextContent from './components/sub-components/text-content.vue';
import ProgressBar from './components/sub-components/progress-bar.vue';
import IconButton from './components/sub-components/icon-button.vue';
import InversedBorder from './components/sub-components/inversed-border.vue';

const randomFacts = [
  'Experienced gamer: MMORPGs, MOBAs, RPGs, FPS, mobile arcades. In the end, why not?',
  'I love spicy food and sour drinks! Barbeque with hot sauces up to 2M SHU, thai food along with some lemon fresh)',
  'Youtube gourmet: watch actors & movie-making things, astrophysics, science, mythology & history, memes',
  'Listen-to-maniac, literally spend hours listening to various metal genres (power, sympho, core, heavy, folk, japanese etc.), rock, composers like Antti Martikainen, Christian Friedrich Johannes Büttner, Trevor Moris.',
  'Love sports: football, volleyball, tennis, snooker. Can also easily dare you in table-football!',
  'Fan of MCU movies & series, fantasy books, great fan of manga and anime (but not a weeb). And "The Boys" - that one is dope as well.'
];

const primaryContacts = [
  'email: yuraivanskyi@gmail.com',
  'skype: y.ivanskyi'
]

const social = [
  { link: 'https://twitter.com/i1skyi', icon: 'twitter' },
  { link: 'https://www.facebook.com/yurii.ivanskyi', icon: 'facebook' },
  { link: 'https://www.instagram.com/yuriyivanskyi/', icon: 'instagram' },
  { link: 'https://www.linkedin.com/in/yuraivanskyi/', icon: 'linkedin' },
  { link: 'https://github.com/YuraIvanskyi', icon: 'github' },
  { link: 'https://www.twitch.tv/i1sky', icon: 'twitch' },
]

const techIcons = [
  { code: 'devicon-python-plain-wordmark', tooltip: 'Python, 3y. exp.' },
  { code: 'devicon-javascript-plain', tooltip: 'JavaScript, 2y. exp.' },
  { code: 'devicon-pytest-plain-wordmark', tooltip: 'Pytest' },
  { code: 'devicon-selenium-original', tooltip: 'Selenium' },
  { code: 'devicon-html5-plain-wordmark', tooltip: 'HTML5' },
  { code: 'devicon-css3-plain-wordmark', tooltip: 'CSS3' },
  { code: 'devicon-vuejs-plain-wordmark', tooltip: 'Vue.js 2/3' },
  { code: 'devicon-vuetify-line', tooltip: 'Vuetify' },
  { code: 'devicon-tailwindcss-plain', tooltip: 'Tailwind CSS' },
  { code: 'devicon-opencv-plain-wordmark', tooltip: 'OpenCV (python)' },
  { code: 'devicon-firebase-plain-wordmark', tooltip: 'Firebase' },
  { code: 'devicon-amazonwebservices-original', tooltip: 'AWS Features' },
  { code: 'devicon-microsoftsqlserver-plain', tooltip: 'MSSQL Server' },
  { code: 'devicon-docker-plain-wordmark', tooltip: 'Docker' },
  { code: 'devicon-kubernetes-plain-wordmark', tooltip: 'Kubernetes' },
  { code: 'devicon-git-plain-wordmark', tooltip: 'Git' },
  { code: 'devicon-gitlab-plain-wordmark', tooltip: 'Gitlab' },
  { code: 'devicon-jenkins-line', tooltip: 'Jenkins' },
  { code: 'devicon-jira-plain', tooltip: 'Jira' },
  { code: 'devicon-confluence-original-wordmark', tooltip: 'Confluence' },
]

const primaryTech = [
  'game quality assuarance: desktop, web, mobile',
  'E2E, functional, performance etc. testing on target product',
  'automation testing using Python, less JavaScript, ',
  'visual automation testing with opencv',
  'documentation, test plans, test strategies, reporting',
]

const secondaryTech = [
  'a bit of front-end development (mostly on Vue, Vite, Vuetify)',
  'handle, organize and lead small team',
  'nonchalantly talk on meetings',
]

const languages = [
  { lang: 'Ukrainian', level: 100, note: 'Native' },
  { lang: 'English', level: 90, note: 'Fluent' },
  { lang: 'Russian', level: 70, note: 'Proffessional' },
  { lang: 'Japanese', level: 15, note: 'N5 (Beginner)' },
  { lang: 'German', level: 10, note: 'Beginner' },
  { lang: 'Polish', level: 10, note: 'Beginner' },
  { lang: 'Korean', level: 5, note: 'Elementary' },
]

const photos = [
  'src\\assets\\me2.jpg',
  'src\\assets\\m4.jpg',
  'src\\assets\\me1.png',
  'src\\assets\\m3.jpg',
]

const jobs = [
  {
    title: 'Senior Automation QA - VisiQuate',
    trivia: 'Career #5: Revamp',
    start: '08/2022',
    end: 'Now',
    desc: 'My role is being a part of an AQA team that strives to optimise QA procedures.',
    responsibilities: ['contributing to the general test codebase', 'upgrading and supporting automation framework & infrastructure'],
    current: true
  },
  {
    title: 'Volunteer - Ukraine/IT army of Ukraine',
    trivia: 'Career #4.5: Fair job',
    start: '02/2022',
    end: 'Victory',
    desc: 'Standing in IT frontline of war. Helped with such tiny yet needed things like using ddos methods to take down Russian civil & military web resourses, showing & sharing the truth about crimes of Russia to the world.',
    responsibilities: [],
    current: true
  },
  {
    title: 'Server Test Engineer - Amazon Games',
    trivia: 'Career #4: Level-up',
    start: '03/2022',
    end: '04/2022',
    desc: 'Cancelled due to russian invasion and inability to relocate to Germany.',
    responsibilities: ['leading any server test related tasks in Europe',
      'investigating bugs on live, scale test problems, or other server/service bugs that need more info/logs/metrics'],
    current: false
  },
  {
    title: 'QA R&D Lead - Gameloft',
    trivia: 'Career #3: Apex',
    start: '03/2020',
    end: '02/2022',
    desc: 'My main activity was to test the game, find and describe the bugs on assigned tasks.',
    responsibilities: ['identify and isolate bugs on assigned tasks',
      'describe found bugs clearly and concisely',
      'organize and prioritize assigned tasks', 'provide clear and correct task results',
      'produce valid test cases based on documentation',
      'create own test cases based on gaming experience and creative point of view', 'coaching and mentoring junior members'],
    current: false
  },
  {
    title: 'QA Automation - Gameloft',
    trivia: 'Career #2: Upshift',
    start: '01/2018',
    end: '03/2020',
    desc: 'My role included being both team and tech lead in QA R&D team, creating and delivering solutions for QA process optimisation/automation by means of scripting and/or development.',
    responsibilities: ['creating E2E scripts for testing purposes',
      'using internal tools & services to perform automation testing for GUI and server-side cases',
      'contributing to traditional automation approaches within company',
      'participating in various game automation initiatives'],
    current: false
  },
  {
    title: 'QA Tester - Gameloft',
    trivia: 'Career #1: Init',
    start: '03/2017',
    end: '01/2018',
    desc: 'My main activity was to test the game, find and describe the bugs on assigned tasks.',
    responsibilities: ['identify and isolate bugs on assigned tasks',
      'describe found bugs clearly and concisely',
      'organize and prioritize assigned tasks', 'provide clear and correct task results',
      'produce valid test cases based on documentation',
      'create own test cases based on gaming experience and creative point of view', 'coaching and mentoring junior members'],
    current: false
  },

]

const education = [
  { title: 'Master\'s Degree - Software Engineering', time: '2018-2020', subtitle: 'Lviv Polytechnic National University' },
  { title: 'Bachelor\'s Degree - Software Engineering', time: '2014-2018', subtitle: 'Lviv Polytechnic National University' },
  { title: 'Student', time: '2003-2014', subtitle: 'Horodok Gymnasium, Horodok' },
]

let state = reactive({ hoveredIcon: '' })
function hoverOn(val) {
  state.hoveredIcon = val;
}
function hoverOff() {
  state.hoveredIcon = '';
}
</script>

<template>
  <div class="h-auto w-auto m-auto pantone-yellow
              p-4 md:p-4 lg:p-6 xl:p-10 
              flex flex-wrap 
              gap-4 lg:gap-6 xl:gap-10">
    <card title="Yuriy Ivanskyi" subtitle="all about me, my skills, pros and cons"
      class="basis-6/6 md:basis-6/6 lg:basis-6/12 xl:basis-7/12 2xl:basis-4/12">
      <template v-slot:icon>
        <svg style="width:40px;height:40px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" />
        </svg>
      </template>
      <template v-slot:content>
        <text-content paragraph="Prologue..."
          text="I bring my gaming experience, automation and test-engineering industry expertise together, while being able to shapeshift for upcoming challenges to enhance your next product.">
        </text-content>
        <text-content paragraph="Random facts" :list=randomFacts>
        </text-content>
      </template>
    </card>

    <card title="Gallery" subtitle="those times I got busted:"
      class="basis-6/6 md:basis-4/6 lg:basis-4/12 xl:basis-4/12 2xl:basis-2/12 md:flex-grow ">
      <template v-slot:icon>
        <svg style="width:40px;height:40px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
        </svg>
      </template>
      <template v-slot:content>
        <tile v-for="item, index in photos" :key="index" :size="44">
          <img :src="item"
            class="border-2 pantone-yellow-border object-contain pantone-blue-text text-5xl align-middle rounded-md">
        </tile>
      </template>
    </card>

    <card title="Contacts" class="basis-6/6 md:basis-1/6 lg:basis-2/12 xl:basis-1/12">
      <template v-slot:icon>
        <svg style="width:40px;height:40px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
        </svg>
      </template>
      <template v-slot:content>
        <text-content paragraph="Business inquiries:" :list="primaryContacts">
        </text-content>
        <text-content paragraph="Social networks" text="find me on popular sites:">
        </text-content>
        <div class="flex flex-wrap flex-row gap-2">
          <tile v-for="item, index in social" :key="index">
            <icon-button :icon="item.icon" :href="item.link" class="pantone-blue-text text-5xl align-middle">
            </icon-button>
          </tile>
        </div>
      </template>
    </card>

    <card title="Languages" class="basis-6/6 md:basis-5/12 lg:basis-3/12 xl:basis-1/12 md:flex-grow lg:flex-shrink">
      <template v-slot:icon>
        <svg style="width:40px;height:40px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M11 1H3C1.9 1 1 1.9 1 3V15L4 12H9V11C9 8.8 10.79 7 13 7V3C13 1.9 12.1 1 11 1M11 4L9.5 4C9.16 5.19 8.54 6.3 7.68 7.26L7.66 7.28L8.92 8.53L8.55 9.54L7 8L4.5 10.5L3.81 9.77L6.34 7.28C5.72 6.59 5.22 5.82 4.86 5H5.85C6.16 5.6 6.54 6.17 7 6.68C7.72 5.88 8.24 4.97 8.57 4L3 4V3H6.5V2H7.5V3H11V4M21 9H13C11.9 9 11 9.9 11 11V18C11 19.1 11.9 20 13 20H20L23 23V11C23 9.9 22.1 9 21 9M19.63 19L18.78 16.75H15.22L14.38 19H12.88L16.25 10H17.75L21.13 19H19.63M17 12L18.22 15.25H15.79L17 12Z" />
        </svg>
      </template>
      <template v-slot:content>
        <text-content paragraph="I keep saying hi in:" text="(approximate self evaluation)">
        </text-content>
        <progress-bar v-for="item, index in languages" :key="index" :metric="item.lang" :level="item.level"
          :note="item.note" class="w-full">
        </progress-bar>
      </template>
    </card>

    <card title="Key Tools" :subtitle="`I know and use: ${state.hoveredIcon}`"
      class="basis-6/6 md:basis-6/12 lg:basis-4/12 xl:basis-3/12 lg:flex-grow">
      <template v-slot:icon>
        <svg style="width:40px;height:40px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z" />
        </svg>
      </template>
      <template v-slot:content>
        <tile v-for="item, index in techIcons" :key="index" @mouseenter="hoverOn(item.tooltip)"
          @mouseleave="hoverOff()">
          <i :class="`${item.code} pantone-blue-text text-5xl align-middle`"></i>
        </tile>
        <tile @mouseenter="hoverOn('Apache Airflow')" @mouseleave="hoverOff()">
          <svg class="w-14 h-14 px-1 py-1 pantone-blue-text fill-current" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32">
            <path
              d="m16.041 14.287c-.916 0-1.681.749-1.681 1.672 0 .916.765 1.681 1.681 1.681 2.24 0 2.24-3.353 0-3.353zm0 1.062c.344 0 .609.265.609.609s-.265.609-.609.609-.609-.265-.609-.609.265-.609.609-.609zm-15.177-15.349c-.093 0-.14.016-.463.052-.328.041-.437.432-.36.844.073.416.095.276.261.516.167.239 5.635 5.52 8.468 8.285l-5.021 5.147c-1.667 1.708-2.547 4.339-3.061 7.244-.516 2.907-.647 6.125-.688 9.048.005.421.317.776.74.823.052.005.104.005.156 0 .192-.016.375-.104.511-.245h.009l8.281-8.495c5.36 4.964 5.491 6.776 12.391 8.093 2.907.511 6.125.647 9.048.688.416 0 .771-.312.823-.729l.011-.011c.004-.057 0-.12-.011-.177-.021-.187-.104-.359-.235-.495v-.009l-8.505-8.276 4.844-4.969c.063-.057.12-.12.177-.177l.011-.011c1.667-1.708 2.556-4.328 3.072-7.233.511-2.912.636-6.125.677-9.048 0-.416-.312-.771-.729-.823l-.011-.015c-.057 0-.12 0-.177.009-.187.021-.359.104-.489.24h-.009l-8.281 8.489-5.147-5.016c-1.708-1.667-4.333-2.556-7.244-3.072-3.005-.328-6.021-.631-9.048-.677zm.641 1.115c2.719.052 5.62.161 8.219.62 2.807.495 5.24 1.375 6.683 2.787h.009l.141.145c.031.031.063.073.099.109 0 .005.005.005.005.011l.016.011.016.02v.011c.004.005.009.005.009.011.172.235.475.692.563.885.063.136.12.276.177.432.24.693.36 1.557.276 2.647v.009c-.021.245-.052.495-.088.761-.021.124-.047.265-.068.411-.057.292-.12.573-.188.86-.036.151-.077.307-.12.463v.011c-.172.62-.4 1.303-.681 2.027-.068.183-.136.359-.213.552-.063.145-.131.297-.199.453l-.344.067c-1.167-2.208-2.443-3.733-3.583-4.609-.579-.437-1.115-.719-1.636-.833h-.005c-.515-.113-1.067-.036-1.427.333l.047.1.427-.319zm29.38.385c-.047 2.719-.156 5.625-.62 8.224-.495 2.807-1.369 5.24-2.787 6.688l-.145.135c-.036.037-.083.079-.125.115l-.02.027h-.011c-.229.167-.704.479-.896.567-.136.063-.281.136-.432.188h-.011c-.688.235-1.552.349-2.641.265-.239-.02-.5-.041-.765-.077l-.401-.068h-.009c-.292-.057-.573-.12-.86-.188h-.011c-.156-.041-.307-.088-.457-.129-.688-.188-1.365-.412-2.032-.667-.183-.073-.369-.152-.563-.229-.14-.057-.281-.115-.421-.177.016-.084-.104.131 0 0 .005-.131-.016-.26-.068-.38 2.183-1.161 3.708-2.423 4.579-3.557.443-.579.729-1.125.843-1.641.12-.515.037-1.077-.333-1.437l.011.011.147.469zm-12.354 5.093 3.381 3.292.015.021.021.015c.052.052.104.152.041.443-.031.131-.192.355-.276.521-.109.224-.156.401-.364.672-.729.932-2.156 2.088-4.183 3.172.063-.145.12-.287.177-.427.077-.193.151-.391.224-.579.292-.76.536-1.473.719-2.136.129-.468.24-.943.328-1.416v-.011c.021-.145.057-.287.079-.432.036-.281.067-.557.088-.839.068-.901-.093-1.593-.251-2.292zm-8.167 3.423c2.125.957 3.511 3.229 4.371 4.823-.147-.068-.287-.12-.432-.183-.199-.077-.391-.151-.584-.224-.692-.276-1.407-.515-2.125-.719h-.005c-.167-.047-.328-.088-.484-.129-.317-.079-.635-.141-.932-.199-.145-.021-.297-.041-.443-.068v-.011c-.281-.036-.557-.067-.839-.088-.907-.068-1.604.088-2.303.245l3.297-3.376.036-.041c.052-.052.152-.104.443-.036zm-1.557 4.271c.24.016.496.047.761.088h.011c.124.021.26.041.4.068.276.052.557.115.86.188l.235.057c.077.02.151.036.229.057h.004c.631.176 1.303.4 2.032.681.183.068.369.141.557.213.161.068.323.141.484.209l.021.353c-2.188 1.161-3.719 2.428-4.589 3.563-.443.579-.729 1.115-.843 1.636v.011c-.12.515-.037 1.067.333 1.427h-.011l-.251-.448-7.916 8.093c.052-2.713.151-5.609.609-8.208.495-2.807 1.375-5.235 2.787-6.683v-.009c.031-.037.067-.063.104-.1l.041-.036c.036-.041.079-.079.12-.109h.011c.005-.005.009-.016.015-.021.229-.167.715-.489.907-.583.145-.063.292-.125.443-.177.693-.24 1.557-.36 2.651-.276zm6.876.265c-.557.177-.933.557-1.115 1.109l.588-.651zm.724.036.239.433.199.124.536.423c-.192-.469-.495-.808-.968-.975zm-.38.693c.411 0 .733.323.733.735.005.411-.328.744-.733.739-.412.005-.745-.328-.74-.739 0-.412.323-.735.74-.735zm-1.402 1.151c.187.485.511.813.995.995l-.317-.369-.272-.312zm2.75.047-.38.157-.077.239-.381.432c.385-.187.661-.432.839-.823zm-.099.682c.14.057.281.131.421.188.199.077.391.151.584.224.749.291 1.464.525 2.125.708.172.052.339.088.489.131.323.077.635.151.937.208.14.02.292.041.443.068.287.036.568.072.839.099.907.068 1.599-.093 2.301-.251l-3.296 3.381-.021.015-.02.021c-.048.052-.152.099-.433.041h-.009c-.287-.068-.709-.271-1.193-.651-.932-.729-2.088-2.156-3.167-4.183zm-2.443.12-.177.421c-.077.193-.151.391-.229.579-.271.697-.505 1.407-.708 2.125-.047.172-.088.339-.125.495-.077.317-.151.635-.208.932-.025.151-.047.297-.068.448-.041.276-.072.552-.099.833-.068.907.093 1.604.245 2.301l-3.376-3.296-.02-.032-.021-.009v-.011c-.052-.052-.099-.136-.036-.423 0-.005 0-.005 0-.009.068-.287.276-.709.651-1.193.724-.932 2.151-2.088 4.172-3.167zm1.386.344c1.156 2.167 2.417 3.697 3.547 4.568.579.443 1.115.728 1.636.843h.011c.515.115 1.061.037 1.427-.333l-.047-.093-.407.36 8.12 7.921c-2.719-.052-5.631-.161-8.229-.625-2.807-.495-5.24-1.369-6.683-2.781h-.009l-.073-.072c-.011-.011-.016-.027-.027-.043l-.041-.036c-.031-.036-.073-.079-.104-.12v-.011c-.005-.005-.021-.015-.021-.02-.213-.287-.405-.589-.583-.907-.068-.14-.125-.292-.177-.443-.24-.693-.36-1.552-.276-2.645.021-.24.052-.491.088-.761v-.011c.021-.124.047-.26.068-.4.052-.276.115-.557.188-.86v-.011l.063-.224.057-.228v-.011c.172-.625.395-1.297.681-2.027.068-.183.147-.369.224-.557.063-.156.131-.307.199-.463l.369-.021z" />
          </svg>
        </tile>
        <tile @mouseenter="hoverOn('Appium')" @mouseleave="hoverOff()">
          <svg class="w-14 h-14 px-1 py-1 pantone-blue-text fill-current" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
            <path fill="currentColor"
              d="M.295 119.397c24.814 57.004 87.778 66.563 162.925 18.246c34.66 32.08 43.295 70.11 14.374 108.392C162.341 252.451 145.586 256 128 256C57.308 256 0 198.692 0 128c0-2.89.106-5.758.295-8.602Zm117.058-24.744c11.206-46.695 42.495-73.48 91.678-65.737c28.67 23.474 46.97 59.14 46.97 99.084c0 50.395-29.127 93.979-71.46 114.857c38.456-54.784 7.03-112.584-67.188-148.204ZM128.001 0c27.435 0 52.85 8.635 73.687 23.33c-69.951-8.132-102.984 50.175-98.37 130.694c-45.452 13.941-82.48 3.669-102.048-44.047C10.03 47.819 63.427 0 128 0Z" />
          </svg>
        </tile>
      </template>
    </card>

    <card title="Technical Skills" subtitle="things I do on daily basis"
      class="basis-6/6 md:basis-6/12 lg:basis-5/12 xl:basis-3/12 md:flex-grow">
      <template v-slot:icon>
        <svg style="width:40px;height:40px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M15.58,17L12,14.84L8.42,17L9.37,12.93L6.21,10.2L10.38,9.84L12,6L13.62,9.83L17.79,10.19L14.63,12.92L15.58,17M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M5,5V19H19V5H5Z" />
        </svg>
      </template>
      <template v-slot:content>
        <text-content paragraph="Primary - qa & automation" :list="primaryTech">
        </text-content>
        <text-content paragraph="Secondary & soft" :list=secondaryTech>
        </text-content>
      </template>
    </card>

    <card title="Education" subtitle="Major stages"
      class="basis-6/6 md:basis-5/12 lg:basis-4/12 xl:basis-3/12 lg:flex-grow">
      <template v-slot:icon>
        <svg style="width:40px;height:40px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
        </svg>
      </template>
      <template v-slot:content>
        <text-content v-for="item, index in education" :key="index" :paragraph="item.title"
          :text="`${item.subtitle}: (${item.time})`">
        </text-content>
      </template>
    </card>

    <!-- Jobs -->
    <card v-for="job, index in jobs" :key="index" :title="job.trivia" :subtitle="`${job.start} - ${job.end}`"
      class="basis-6/6 md:basis-6/12 lg:basis-5/12 xl:basis-3/12 md:flex-grow">
      <template v-slot:icon>
        <svg v-if="!job.current" style="width:40px;height:40px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z" />
        </svg>
        <svg v-else style="width:40px;height:40px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
        </svg>
      </template>
      <template v-slot:content>
        <text-content :paragraph="job.title" :text="`${job.desc} ${job.responsibilities[0] ? 'Responsibilities:' : ''}`"
          :list="job.responsibilities">
        </text-content>
      </template>
    </card>

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

.pantone-yellow-border {
  border-color: rgb(255, 213, 0);
}

.pantone-blue {
  background-color: rgb(0, 91, 187);
}

.pantone-blue-text {
  color: rgb(0, 91, 187);
}

.pantone-blue-border {
  border-color: rgb(0, 91, 187);
}
</style>
