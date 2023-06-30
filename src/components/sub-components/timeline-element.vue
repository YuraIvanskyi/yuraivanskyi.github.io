<script setup>

defineProps({
    present: Boolean,
    title: String,
    start: String,
    end: String,
    company: String,
    logo: String,
    description: String,
    educational: Boolean,
    responsibilities: [],
})

</script>
<template>
    <li class="mb-2 ml-6 text-left rounded-xl px-4 py-1">
        <div class="flew flex-col">
            <span class="flex absolute -left-3 bg-white justify-center items-center w-6 h-6 rounded-full ring-8 ring-white">
                <font-awesome-icon v-if="!educational" class="t-payton" icon="fa-solid fa-briefcase" />
                <font-awesome-icon v-else class="t-payton" icon="fa-solid fa-graduation-cap" />
            </span>
            <!-- <div v-if="!hovered" class="payton float-right align-middle rounded-full h-2 w-2 animate-pulse right-0"></div> -->
            <h3 class="flex flex-col md:flex-row md:items-center font-semibold my-0 text-lg text-gray-900">
                <span class="text-left">{{ title }}</span>
                <div class="md:border-t border-gray-200 my-auto max-h-1 grow align-baseline mx-4"></div>
                <span class="md:text-right">{{ company }}</span>
            </h3>
            <time class="block mb-1 text-sm font-normal t-payton">{{ start }} - {{ end }}</time>
            <div class="flex flex-col gap-2 xl:flex-row xl:gap-8">
                <p class="lg:basis-1/3 mb-1 text-base font-normal t-payton text-justify">{{ description }}</p>
                <div class="grow">
                    <p v-if="!educational" class="text-sm font-normal t-payton">Responsibilities:</p>
                    <p v-for="line in responsibilities" class="text-sm font-normal text-justify"> - {{ line }}
                    </p>
                </div>
                <img class="shrink m-auto rounded-md right-0 object-right object-contain h-20 w-20" v-if="!educational"
                    :src="logo" alt="">
            </div>
        </div>

    </li>
</template>

<style></style>