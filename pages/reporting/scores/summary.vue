<script setup lang="ts">
import Routes from '@/constants/Routes';

const useEvalData = useEvalDataStore()
const scoreData = useEvalData.menteeEvalReportData

const toast = useToast()

const saveScores = async () => {
    const saveResult = await useEvalData.saveEvaluations(29)

    if (saveResult.ok === true) {
        toast.add({ title: `You have successifully evaluating` })
        navigateTo('/dashboard')

    }
}

</script>
<template>
    <div>
        <SharedBorderedNavBar>
            <template #lead>
                <NuxtLink :to="Routes.MENTEES">
                    <div class="pr-5 text-blue-500 cursor-pointer">
                        <UIcon name="i-heroicons-arrow-small-left" />
                    </div>
                </NuxtLink>
                <div class=" text-gray-400"><strong>Evaluation Report</strong></div>
            </template>
        </SharedBorderedNavBar>
        <UContainer>
            <div class="pb-5">
                <SharedReportingMenteeInfo :mentee-info="scoreData.mentee" :evaluator-info="scoreData.evaluator" />
            </div>

            <div class="pb-5">
                <SharedReportingComentorsList :comentors="scoreData.selectedCoMentors" />
            </div>

            <div class=" pb-5">
                <SharedReportingScoreBreakDown 
                :scores="scoreData.scores" 
                :score-statistics="scoreData.scoreStats"
                :date="scoreData.dateSaved"
                />
            </div>

            <div class=" flex justify-end pb-10">
                <NuxtLink :to="Routes.DASHBOARD">
                    <UButton variant="solid" label="Save" size="xl" type="button" @click="saveScores()" />
                </NuxtLink>
            </div>
        </UContainer>

    </div>
</template>