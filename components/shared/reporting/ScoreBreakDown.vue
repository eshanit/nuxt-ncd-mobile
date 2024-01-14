<script setup lang="ts">
import { format } from "date-fns";
import type IScoreStats from '@/interfaces/IScoreStats';
import type IEvalScore from '@/interfaces/IEvalScore';

defineProps({
    scores: {
        type: Array<IEvalScore>,
        required: true
    },
    scoreStatistics: {
        type: Object as PropType<IScoreStats>,
        requred: true,
        default: null
    },
    date: {
        type: Number,
        required: true
    }

})

</script>
<template>
    <SharedTwCardWithHeader>
        <template #header>
            <div class=" grid grid-cols-2 gap-1">
                <div class=" text-orange-500 font-bold">Scores</div>
                <div class=" flex justify-end">
                    <div class=" grid grid-cols-3 gap-1">
                        <div class=" border-r pr-3">
                            <span v-if="scoreStatistics.totalScore > 44" class="text-blue-500">{{
                                scoreStatistics.totalScore }}</span>
                            <span v-else class="text-rose-500">{{ scoreStatistics.totalScore }}</span>
                            out of <span class="font-bold">87</span>
                        </div>
                        <div class=" text-center border-r pr-3">
                            <span v-if="scoreStatistics.percTotal > 50" class="text-blue-500">{{
                                (scoreStatistics.percTotal).toFixed(1) }}%</span>
                            <span v-else class="text-rose-500">{{ (scoreStatistics.totalScore).toFixed(1)
                            }}%</span>
                        </div>
                        <div>
                            Mean: <span class=" font-bold">{{
                                (scoreStatistics.totalaverageScore).toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #body>
            <div class=" border-b pb-5 ">
                Below are the scores breakdown for the evaluation dated :  <span class=" text-rose-500">{{ format(date, 'yyyy-MM-dd') }}</span>
            </div>
            <div class=" border-b pb-5 pt-5">
                <span class="">Section A:</span> <span class=" font-bold"> Introduction and Initial
                    Evaluation</span>
            </div>
            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b">
                <div id="iie-knowledge" class="text-center  border-r">
                    <div class="font-semibold text-gray-500">Knowledge</div>
                    <div class=" text-sm">Average Score: <span class=" font-bold">{{
                        (scoreStatistics.averageIIEKnowledgeScore).toFixed(1) }}</span></div>
                </div>
                <div id="iie-acquired-skill" class="text-center  border-r">
                    <div class="font-semibold text-gray-500">Acquired Skill</div>
                    <div class=" text-sm">Average Score: <span class=" font-bold">{{
                        (scoreStatistics.averageIIEAcquiredSkillScore).toFixed(1) }}</span></div>
                </div>
                <div id="iie-behaviour" class="text-center">
                    <div class="font-semibold text-gray-500">Behaviour</div>
                    <div class=" text-sm">Average Score: <span class=" font-bold">{{
                        (scoreStatistics.averageIIEBehaviourScore).toFixed(1) }}</span></div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
                <div id="q1" class="text-center border-r border-green-500 ">

                    Q1 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[0].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[0].evalScore
                    }}</span>
                    <span v-else-if="scores[0].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[0].evalScore
                    }}</span>
                    <span v-else-if="scores[0].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[0].evalScore }}</span>
                    <span v-else-if="scores[0].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[0].evalScore }}</span>
                </div>
                <div id="q8" class="text-center border-r border-green-500 ">
                    Q8 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[7].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[7].evalScore
                    }}</span>
                    <span v-else-if="scores[7].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[7].evalScore
                    }}</span>
                    <span v-else-if="scores[7].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[7].evalScore }}</span>
                    <span v-else-if="scores[7].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[7].evalScore }}</span>
                </div>
                <div id="q11" class="text-center">
                    Q11 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[10].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[10].evalScore
                    }}</span>
                    <span v-else-if="scores[10].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[10].evalScore }}</span>
                    <span v-else-if="scores[10].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[10].evalScore }}</span>
                    <span v-else-if="scores[10].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[10].evalScore }}</span>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
                <div id="q2" class="text-center border-r border-green-500 ">
                    Q2 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[1].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[1].evalScore
                    }}</span>
                    <span v-else-if="scores[1].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[1].evalScore
                    }}</span>
                    <span v-else-if="scores[1].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[1].evalScore }}</span>
                    <span v-else-if="scores[1].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[1].evalScore }}</span>
                </div>
                <div id="q9" class="text-center border-r border-green-500 ">
                    Q9 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[8].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[8].evalScore
                    }}</span>
                    <span v-else-if="scores[8].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[8].evalScore
                    }}</span>
                    <span v-else-if="scores[8].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[8].evalScore }}</span>
                    <span v-else-if="scores[8].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[8].evalScore }}</span>
                </div>
                <div id="q12" class="text-center">
                    Q12 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[10].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[10].evalScore
                    }}</span>
                    <span v-else-if="scores[10].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[10].evalScore }}</span>
                    <span v-else-if="scores[10].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[10].evalScore }}</span>
                    <span v-else-if="scores[10].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[10].evalScore }}</span>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b">
                <div id="q3" class="text-center border-r border-green-500 ">
                    Q3 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[2].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[1].evalScore
                    }}</span>
                    <span v-else-if="scores[2].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[1].evalScore
                    }}</span>
                    <span v-else-if="scores[2].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[1].evalScore }}</span>
                    <span v-else-if="scores[2].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[1].evalScore }}</span>
                </div>
                <div id="q10" class="text-center border-r border-green-500 ">
                    Q10 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[9].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[9].evalScore
                    }}</span>
                    <span v-else-if="scores[9].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[9].evalScore
                    }}</span>
                    <span v-else-if="scores[9].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[9].evalScore }}</span>
                    <span v-else-if="scores[9].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[9].evalScore }}</span>
                </div>
                <div id="q13" class="text-center">
                    Q13 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[12].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[12].evalScore
                    }}</span>
                    <span v-else-if="scores[12].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[12].evalScore }}</span>
                    <span v-else-if="scores[12].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[12].evalScore }}</span>
                    <span v-else-if="scores[12].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[12].evalScore }}</span>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b">
                <div id="q4" class="text-center border-r border-green-500 ">
                    Q4 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[3].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[3].evalScore
                    }}</span>
                    <span v-else-if="scores[3].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[3].evalScore
                    }}</span>
                    <span v-else-if="scores[3].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[3].evalScore }}</span>
                    <span v-else-if="scores[3].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[3].evalScore }}</span>
                </div>
                <div class="text-center border-r border-green-500 ">
                    -
                </div>
                <div class="text-center">
                    -
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b">
                <div id="q5" class="text-center border-r border-green-500 ">
                    Q5 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[4].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[4].evalScore
                    }}</span>
                    <span v-else-if="scores[4].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[4].evalScore
                    }}</span>
                    <span v-else-if="scores[4].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[4].evalScore }}</span>
                    <span v-else-if="scores[4].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[4].evalScore }}</span>
                </div>
                <div class="text-center border-r border-green-500 ">
                    -
                </div>
                <div class="text-center">
                    -
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b">
                <div id="q6" class="text-center border-r border-green-500 ">
                    Q6 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[5].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[5].evalScore
                    }}</span>
                    <span v-else-if="scores[5].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[5].evalScore
                    }}</span>
                    <span v-else-if="scores[5].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[5].evalScore }}</span>
                    <span v-else-if="scores[5].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[5].evalScore }}</span>
                </div>
                <div class="text-center border-r border-green-500 ">
                    -
                </div>
                <div class="text-center">
                    -
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b">
                <div id="q6" class="text-center border-r border-green-500 ">
                    Q7 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[6].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[6].evalScore
                    }}</span>
                    <span v-else-if="scores[6].evalScore === 1" class="text-red-500 font-extrabold"> {{ scores[6].evalScore
                    }}</span>
                    <span v-else-if="scores[6].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[6].evalScore }}</span>
                    <span v-else-if="scores[6].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[6].evalScore }}</span>
                </div>
                <div class="text-center border-r border-green-500 ">
                    -
                </div>
                <div class="text-center">
                    -
                </div>
            </div>

            <!--section B -->
            <div class=" border-b pb-5 pt-5">
                <span class="">Section B:</span> <span class=" font-bold"> Management of Diabete Mellitus</span>
            </div>
            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b">
                <div id="iie-knowledge" class="text-center  border-r">
                    <div class="font-semibold text-gray-500">Knowledge</div>
                    <div class=" text-sm">Average Score: <span class=" font-bold">{{
                        (scoreStatistics.averageMgntKnowledgeScore).toFixed(1) }}</span></div>
                </div>
                <div id="iie-acquired-skill" class="text-center  border-r">
                    <div class="font-semibold text-gray-500">Acquired Skill</div>
                    <div class=" text-sm">Average Score: <span class=" font-bold">{{
                        (scoreStatistics.averageMgntAcquiredSkillScore).toFixed(1) }}</span></div>
                </div>
                <div id="iie-behaviour" class="text-center">
                    <div class="font-semibold text-gray-500">Behaviour</div>
                    <div class=" text-sm">Average Score: <span class=" font-bold">{{
                        (scoreStatistics.averageMgntBehaviourScore).toFixed(1) }}</span></div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
                <div id="q14" class="text-center border-r border-green-500 ">
                    Q14 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[13].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[13].evalScore
                    }}</span>
                    <span v-else-if="scores[13].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[13].evalScore }}</span>
                    <span v-else-if="scores[13].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[13].evalScore }}</span>
                    <span v-else-if="scores[13].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[13].evalScore }}</span>
                </div>
                <div id="q23" class="text-center border-r border-green-500 ">
                    Q23 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[22].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[22].evalScore
                    }}</span>
                    <span v-else-if="scores[22].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[22].evalScore }}</span>
                    <span v-else-if="scores[22].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[22].evalScore }}</span>
                    <span v-else-if="scores[22].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[22].evalScore }}</span>
                </div>
                <div id="q29" class="text-center">
                    Q29 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[28].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[28].evalScore
                    }}</span>
                    <span v-else-if="scores[28].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[28].evalScore }}</span>
                    <span v-else-if="scores[28].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[28].evalScore }}</span>
                    <span v-else-if="scores[28].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[28].evalScore }}</span>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
                <div id="q15" class="text-center border-r border-green-500 ">
                    Q15 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[14].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[14].evalScore
                    }}</span>
                    <span v-else-if="scores[14].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[14].evalScore }}</span>
                    <span v-else-if="scores[14].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[14].evalScore }}</span>
                    <span v-else-if="scores[14].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[14].evalScore }}</span>
                </div>
                <div id="q24" class="text-center border-r border-green-500 ">
                    Q24 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[23].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[23].evalScore
                    }}</span>
                    <span v-else-if="scores[23].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[23].evalScore }}</span>
                    <span v-else-if="scores[23].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[23].evalScore }}</span>
                    <span v-else-if="scores[23].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[23].evalScore }}</span>
                </div>
                <div class="text-center">
                    -
                </div>
            </div>

            <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
                <div id="q16" class="text-center border-r border-green-500 ">
                    Q16 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[15].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[15].evalScore
                    }}</span>
                    <span v-else-if="scores[15].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[15].evalScore }}</span>
                    <span v-else-if="scores[15].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[15].evalScore }}</span>
                    <span v-else-if="scores[15].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[15].evalScore }}</span>
                </div>
                <div id="q25" class="text-center border-r border-green-500 ">
                    Q25 <span class=" pr-3 pl-3">
                        <UIcon name="i-heroicons-arrow-long-right" />
                    </span>
                    <span v-if="scores[24].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[24].evalScore
                    }}</span>
                    <span v-else-if="scores[24].evalScore === 1" class="text-red-500 font-extrabold"> {{
                        scores[24].evalScore }}</span>
                    <span v-else-if="scores[24].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                        scores[24].evalScore }}</span>
                    <span v-else-if="scores[24].evalScore === 3" class="text-green-500 font-extrabold"> {{
                        scores[24].evalScore }}</span>
            </div>
            <div class="text-center">
                -
            </div>
        </div>

        <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
            <div id="q17" class="text-center border-r border-green-500 ">
                Q17 <span class=" pr-3 pl-3">
                    <UIcon name="i-heroicons-arrow-long-right" />
                </span>
                <span v-if="scores[16].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[16].evalScore
                    }}</span>
                <span v-else-if="scores[16].evalScore === 1" class="text-red-500 font-extrabold"> {{
                    scores[16].evalScore }}</span>
                <span v-else-if="scores[16].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                    scores[16].evalScore }}</span>
                <span v-else-if="scores[16].evalScore === 3" class="text-green-500 font-extrabold"> {{
                    scores[16].evalScore }}</span>
            </div>
            <div id="q26" class="text-center border-r border-green-500 ">
                Q26 <span class=" pr-3 pl-3">
                    <UIcon name="i-heroicons-arrow-long-right" />
                </span>
                <span v-if="scores[25].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[25].evalScore
                    }}</span>
                <span v-else-if="scores[25].evalScore === 1" class="text-red-500 font-extrabold"> {{
                    scores[25].evalScore }}</span>
                <span v-else-if="scores[25].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                    scores[25].evalScore }}</span>
                <span v-else-if="scores[25].evalScore === 3" class="text-green-500 font-extrabold"> {{
                    scores[25].evalScore }}</span>
            </div>
            <div class="text-center">
                -
            </div>
        </div>

        <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
            <div id="q18" class="text-center border-r border-green-500 ">
                Q18 <span class=" pr-3 pl-3">
                    <UIcon name="i-heroicons-arrow-long-right" />
                </span>
                <span v-if="scores[17].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[17].evalScore
                    }}</span>
                <span v-else-if="scores[17].evalScore === 1" class="text-red-500 font-extrabold"> {{
                    scores[17].evalScore }}</span>
                <span v-else-if="scores[17].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                    scores[17].evalScore }}</span>
                <span v-else-if="scores[17].evalScore === 3" class="text-green-500 font-extrabold"> {{
                    scores[17].evalScore }}</span>
            </div>
            <div id="q26" class="text-center border-r border-green-500 ">
                Q27 <span class=" pr-3 pl-3">
                    <UIcon name="i-heroicons-arrow-long-right" />
                </span>
                <span v-if="scores[26].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[26].evalScore
                    }}</span>
                <span v-else-if="scores[26].evalScore === 1" class="text-red-500 font-extrabold"> {{
                    scores[26].evalScore }}</span>
                <span v-else-if="scores[26].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                    scores[26].evalScore }}</span>
                <span v-else-if="scores[26].evalScore === 3" class="text-green-500 font-extrabold"> {{
                    scores[26].evalScore }}</span>
            </div>
            <div class="text-center">
                -
            </div>
        </div>

        <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
            <div id="q19" class="text-center border-r border-green-500 ">
                Q19 <span class=" pr-3 pl-3">
                    <UIcon name="i-heroicons-arrow-long-right" />
                </span>
                <span v-if="scores[18].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[18].evalScore
                    }}</span>
                <span v-else-if="scores[18].evalScore === 1" class="text-red-500 font-extrabold"> {{
                    scores[18].evalScore }}</span>
                <span v-else-if="scores[18].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                    scores[18].evalScore }}</span>
                <span v-else-if="scores[18].evalScore === 3" class="text-green-500 font-extrabold"> {{
                    scores[18].evalScore }}</span>
            </div>
            <div id="q28" class="text-center border-r border-green-500 ">
                Q28 <span class=" pr-3 pl-3">
                    <UIcon name="i-heroicons-arrow-long-right" />
                </span>
                <span v-if="scores[27].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[27].evalScore
                    }}</span>
                <span v-else-if="scores[27].evalScore === 1" class="text-red-500 font-extrabold"> {{
                    scores[27].evalScore }}</span>
                <span v-else-if="scores[27].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                    scores[27].evalScore }}</span>
                <span v-else-if="scores[27].evalScore === 3" class="text-green-500 font-extrabold"> {{
                    scores[27].evalScore }}</span>
            </div>
            <div class="text-center">
                -
            </div>
        </div>


        <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
            <div id="q19" class="text-center border-r border-green-500 ">
                Q20 <span class=" pr-3 pl-3">
                    <UIcon name="i-heroicons-arrow-long-right" />
                </span>
                <span v-if="scores[19].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[19].evalScore
                    }}</span>
                <span v-else-if="scores[19].evalScore === 1" class="text-red-500 font-extrabold"> {{
                    scores[19].evalScore }}</span>
                <span v-else-if="scores[19].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                    scores[19].evalScore }}</span>
                <span v-else-if="scores[19].evalScore === 3" class="text-green-500 font-extrabold"> {{
                    scores[19].evalScore }}</span>
            </div>
            <div id="q28" class="text-center border-r border-green-500 ">
                -
            </div>
            <div class="text-center">
                -
            </div>
        </div>

        <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
            <div id="q19" class="text-center border-r border-green-500 ">
                Q21 <span class=" pr-3 pl-3">
                    <UIcon name="i-heroicons-arrow-long-right" />
                </span>
                <span v-if="scores[20].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[20].evalScore
                    }}</span>
                <span v-else-if="scores[20].evalScore === 1" class="text-red-500 font-extrabold"> {{
                    scores[20].evalScore }}</span>
                <span v-else-if="scores[20].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                    scores[20].evalScore }}</span>
                <span v-else-if="scores[20].evalScore === 3" class="text-green-500 font-extrabold"> {{
                    scores[20].evalScore }}</span>
            </div>
            <div id="q28" class="text-center border-r border-green-500 ">
                -
            </div>
            <div class="text-center">
                -
            </div>
        </div>

        <div class="grid grid-cols-3 gap-5 pb-5 pt-5 border-b ">
            <div id="q19" class="text-center border-r border-green-500 ">
                Q22 <span class=" pr-3 pl-3">
                    <UIcon name="i-heroicons-arrow-long-right" />
                </span>
                <span v-if="scores[21].evalScore === 0" class="text-gray-500 font-extrabold"> {{ scores[21].evalScore
                    }}</span>
                <span v-else-if="scores[21].evalScore === 1" class="text-red-500 font-extrabold"> {{
                    scores[21].evalScore }}</span>
                <span v-else-if="scores[21].evalScore === 2" class="text-orange-500 font-extrabold"> {{
                    scores[21].evalScore }}</span>
                <span v-else-if="scores[21].evalScore === 3" class="text-green-500 font-extrabold"> {{
                    scores[21].evalScore }}</span>
            </div>
            <div id="q28" class="text-center border-r border-green-500 ">
                -
            </div>
            <div class="text-center">
                -
            </div>
        </div>

    </template>
</SharedTwCardWithHeader></template>