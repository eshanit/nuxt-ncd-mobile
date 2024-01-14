<script setup lang="ts">
import Routes from '@/constants/Routes';

const route = useRoute()
const evalId = route.params.id

const useEvalData = useEvalDataStore()

const scoreData = await useEvalData.fetchUserEval(evalId.toString())

</script>

<template>
    <div>
        <SharedBorderedNavBar>
            <template #lead>
                <NuxtLink :to="Routes.COMPLETE_REPORTS">
                <div class="pr-5 text-blue-500 cursor-pointer">
                    <UIcon name="i-heroicons-arrow-small-left" />
                </div>
            </NuxtLink>
            <div class=" text-gray-400"><strong>Evaluation Report</strong> <span class=" text-"></span></div>
            </template>
        </SharedBorderedNavBar>
        <UContainer>
            <div class="pb-5">
               <SharedReportingMenteeInfo 
                    :mentee-info="scoreData.mentee"  
                    :evaluator-info="scoreData.evaluator"
                />
            </div>

            <div class="pb-5">
              <SharedReportingComentorsList :comentors="scoreData.selectedCoMentors" />
            </div>

            <div class=" pb-5">
                <SharedReportingScoreBreakDown :scores="scoreData.scores" :score-statistics="scoreData.scoreStats" :date="scoreData.dateSaved" />
            </div>

            <div class=" flex justify-end pb-10">
                <NuxtLink :to="Routes.DASHBOARD">
                    <UButton variant="solid" label="Exit" size="xl"  type="button"/>
                </NuxtLink>
            </div>
        </UContainer>

    </div>
</template>