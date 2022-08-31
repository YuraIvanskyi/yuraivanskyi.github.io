<script setup>
import { ref } from 'vue';

defineProps({
    present: Boolean,
    title: String,
    company: String,
    description: String,
    educational: Boolean,
    responsibilities: [],
})

let hovered = ref(false);
</script>
<template>
    <li id="menu" @mouseover="hovered = true" @mouseleave="hovered = false"
        class="mb-4 ml-6 cursor-pointer text-left hover:bg-rose-50 hover:ring-2 ring-rose-300 rounded-xl px-2 py-1">
        <span
            class="flex absolute -left-3 bg-white justify-center items-center w-6 h-6 rounded-full ring-8 ring-white border-2 border-rose-600"
        >
            <svg v-if="!educational" class="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
            <svg v-else class="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
        </span>
        <div v-if="!hovered" class="bg-rose-600 float-right align-middle rounded-full h-2 w-2 animate-pulse right-0"></div>
        <h3 class="flex items-center my-0 text-lg text-gray-900">
            {{ title }}
            <span
                v-if="present"
                class="bg-rose-600 text-white text-sm font-medium mr-2 px-2 py-0 rounded ml-3"
            >Present</span>
        </h3>
        <time class="block mb-1 text-sm font-normal text-gray-500">{{ company }}</time>
            <div id="list">
                <p class="mb-1 text-base font-normal text-gray-500">{{ description }}</p>
                <p class="text-base font-normal text-gray-500">{{ educational ? 'Expertise & Grades' : 'Responsibilities' }}:</p>
                <p v-for="line in responsibilities" class="text-sm font-normal text-gray-500"> - {{ line }}</p>
            </div>
    </li>
</template>

<style>
#menu #list {
    max-height: 0;
    transition: max-height 0.05s ease-out;
    overflow: hidden;
}

#menu:hover #list {
    max-height: 500px;
    transition: max-height 0.5s ease-in;
}
</style>