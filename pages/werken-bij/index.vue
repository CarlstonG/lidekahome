<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-20">
            <h1 class="mt-1 text-2xl font-bold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl text-center">
                Werken Bij Lideka > Samen Naar Een Betere Toekomst
            </h1>
            <p v-if="vacancies.length === 0" class="mt-6">
                Op dit moment hebben wij geen openstaande vacatures.
            </p>

            <template v-else>
                <h2 class="text-xl font-bold text-gray-900 mt-6">
                    Openstaande vacatures
                </h2>
                <div class="grid grid-cols-4 gap-8">
                    <div v-for="vacancy in vacancies" :key="vacancy.attributes.slug" class="flex flex-col rounded-lg shadow-lg overflow-hidden p-4">
                        <NuxtLink :to="`/werken-bij/${vacancy.attributes.Slug}`" class="text-lg font-bold text-gray-900">
                            {{ vacancy.attributes.title }}
                        </NuxtLink>
                        <NuxtLink :to="`/werken-bij/${vacancy.attributes.Slug}`"
                        class="mt-4 background uppercase tracking-wide shadow-md py-1 px-6 border border-transparent rounded text-md text-white hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Bekijk vacature
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { getAllVacancies } from '~/services/GqlService'
export default Vue.extend({
    data() {
        return {
            vacancies: [],
        }
    },

    async fetch() {
        this.vacancies = await getAllVacancies();
    },
})
</script>

<style lang="scss" scoped>
.background {
    background: linear-gradient(100.91deg, #5AB6E7 -6.75%, #8560CD 111.47%);
}
</style>