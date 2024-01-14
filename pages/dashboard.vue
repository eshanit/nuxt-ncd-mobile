<script setup lang="ts">
import Routes from '@/constants/Routes';

definePageMeta({
    middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
</script>
<template>
    <div>
        <SharedNavBar>
            <template #lead>

            </template>

        </SharedNavBar>
        <UContainer>
            <div class="flex items-center justify-center h-screen">
                <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5">
                    <div class="text-center">
                        <nuxt-link :to="Routes.COMENTORS">
                            <SharedTwCard>
                                <template #body>
                                    <div class="flex items-center justify-center text-green-500">
                                        <div class="pb-5 pt-5 text-xl">
                                            <UIcon name="i-heroicons-square-3-stack-3d" />
                                        </div>
                                        <div class="p-3 pb-5 pt-5">
                                            |
                                        </div>
                                        <div class="pb-5 pt-5">
                                            PLANNING
                                        </div>
                                    </div>
                                </template>
                            </SharedTwCard>
                        </nuxt-link>
                    </div>
                    <div class="text-center">
                        <nuxt-link :to="Routes.INCOMPLETE_REPORTS">
                            <SharedTwCard>
                                <template #body>
                                    <div class="flex items-center justify-center text-gray-500">
                                        <div class="pb-5 pt-5 text-xl">
                                            <UIcon name="i-heroicons-inbox" />
                                        </div>
                                        <div class="pl-3 pr-3 pb-5 pt-5">
                                            |
                                        </div>
                                        <div class="pb-5 pt-5">
                                            INCOMPLETE EVALUATIONS
                                        </div>
                                    </div>
                                </template>
                            </SharedTwCard>
                        </nuxt-link>
                    </div>
                    <div class="text-center">
                        <nuxt-link :to="Routes.SYNC">
                            <SharedTwCard>
                                <template #body>
                                    <div class="flex items-center justify-center text-cyan-500">
                                        <div class="pb-5 pt-5 text-xl">
                                            <UIcon name="i-heroicons-arrow-path" />
                                        </div>
                                        <div class="pl-3 pr-3 pb-5 pt-5">
                                            |
                                        </div>
                                        <div class="pb-5 pt-5">
                                            SYNC
                                        </div>
                                    </div>
                                </template>
                            </SharedTwCard>
                        </nuxt-link>
                    </div>
                    <div class="text-center ">
                        <nuxt-link :to="Routes.COMPLETE_REPORTS">
                            <SharedTwCard>
                                <template #body>
                                    <div class="flex items-center justify-center text-rose-500">
                                        <div class="pb-5 pt-5 text-xl">
                                            <UIcon name="i-heroicons-chart-bar" />
                                        </div>
                                        <div class="pl-3 pr-3 pb-5 pt-5">
                                            |
                                        </div>
                                        <div class="pb-5 pt-5">
                                            Reports
                                        </div>
                                    </div>
                                </template>
                            </SharedTwCard>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>
</template>
<style scoped></style>