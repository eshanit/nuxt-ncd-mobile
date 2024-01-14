<script setup lang="ts">
const route = useRoute();

</script>
<template>
    <div>
        <SharedNavBar />
        <UContainer>
            <div class="flex justify-between items-center h-screen">
                <div>
                    <div class=" text-green-500 text-2xl">
                        {{ route.params.section }}
                    </div>
                    <div class="text-cyan-950">
                        <strong> {{ route.params.topic }}</strong>
                    </div>
                </div>
                <div>
                    <NuxtLink :to="{
                        name: 'evaluation-section-chapter-evaluationItem',
                        params: {
                            section: route.params.section,
                            chapter: route.params.topic,
                            evaluationItem: route.params.chapterMarker
                        }
                    }">
                        <SharedTwCard class="bg-yellow-300 cursor-pointer">
                            <template #body>
                                <div class="flex">
                                    <div class="p-8 text-xl text-gray-600">
                                        <strong>Evaluation Item : {{ route.params.chapterMarker }}</strong>
                                    </div>
                                    <UIcon name="i-heroicons-chevron-double-right" class="text-5xl mt-6 text-red-400" />
                                </div>
                            </template>
                        </SharedTwCard>
                    </NuxtLink>
                </div>
            </div>
        </UContainer>
    </div>
</template>