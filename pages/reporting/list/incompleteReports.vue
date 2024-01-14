<script setup lang="ts">
import { format } from "date-fns";
import type IFinalEvaluation from '@/interfaces/IFinalEvaluation';
import DatabaseNames from "@/constants/DatabaseNames";
import Routes from "@/constants/Routes";


const user = useUser();

const useEvalData = useEvalDataStore()

const evaluations: Array<IFinalEvaluation> = await useEvalData.fetchEvaluationScores(DatabaseNames.INCOMPLETE_EVALUATIONS)

const columns = [
    {
        key: "mentee.firstname",
        label: "Firstname",
    },
    {
        key: "mentee.lastname",
        label: "Lastname",
    },
    {
        key: "mentee.profession",
        label: "Profession",
    },
    {
        key: "mentee.facility",
        label: "Facility",
    },
    {
        key: 'actions',
        label: 'Last Eval Item'
    }
]

const q = ref('')
const page = ref(1)
const pageCount = 10

const rows = computed(() => {
    return evaluations.filter((evaluation: IFinalEvaluation) => {
        return Object.values(evaluation.mentee).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        });
    }).slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

</script>
<template>
    <div>
        <!-- {{ evaluations}} -->
        <SharedBorderedNavBar>
            <template #lead>
                <NuxtLink :to="Routes.DASHBOARD">
                    <div class="pr-5 text-blue-500 cursor-pointer">
                        <UIcon name="i-heroicons-arrow-small-left" />
                    </div>
                </NuxtLink>
                <div class=" text-gray-400"><strong>InComplete Evaluations </strong></div>
            </template>
        </SharedBorderedNavBar>

        <UContainer>
            <div class=" pt-5">
                <SharedTwCardWithHeader>
                    <template #header>
                        <span class=" font-semibold text-orange-500">List of incompleted reports by :</span> <span
                            class=" text-teal-500">{{ user.profile.value.firstname }} {{ user.profile.value.lastname
                            }}</span>
                    </template>
                    <template #body>
                        <div class="flex justify-between pt-3 px-3 pb-3.5 border-b border-gray-200 dark:border-gray-700">
                            <div>
                                <UInput v-model="q" placeholder="Filter Mentees..." />
                            </div>
                        </div>

                        <UTable :columns="columns" :rows="rows">

                            <template #actions-data="{ row }">
                                <UButton variant="soft" color="rose"
                                    @click="useEvalData.fetchMenteeIncompleteEval(row._id)">
                                    dmQ{{ row.lastQuestion }} | <span class=" text-sky-500">{{ format(row.dateSaved,
                                        'yyyy-MM-dd') }}</span>
                                </UButton>
                            </template>
                        </UTable>

                        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                            <UPagination v-model="page" :page-count="pageCount" :total="evaluations.length" />
                        </div>
                    </template>
                </SharedTwCardWithHeader>
            </div>
        </UContainer>

    </div>
</template>