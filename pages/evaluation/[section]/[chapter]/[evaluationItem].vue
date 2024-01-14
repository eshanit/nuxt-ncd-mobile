<script setup lang="ts">
const evalData = useEvaluation();
const route = useRoute();
const chapter = ref('')
const evalItemTitle = ref('')
const evalItemNumber = ref(0)
const evalItemScoring = ref([{}])
const itemGuides = ref()

const section = computed(() => {
    return evalData.find((e) => e.section.title === route.params.section)
})

const itemChapters = computed(() => {
    const chapters = section.value?.section.chapters

    return chapters?.find((e) => e.title === route.params.chapter)

})


const evalItem = computed(() => {
    const evaluations = itemChapters.value?.evaluationItems

    return evaluations?.find((e) => (e.number).toString() === route.params.evaluationItem)
})


chapter.value = (route.params.chapter).toString()

if (evalItem.value) {
    evalItemTitle.value = evalItem.value.title
    evalItemNumber.value = evalItem.value.number
    evalItemScoring.value = evalItem.value.scoring
    itemGuides.value = evalItem.value.guide

}


</script>
<template>
    <div>
        <!-- {{ evalItem }} -->
        <div class="pt-5 pb-5">
            <SharedEvaluationItemEvaluationCard :chapter="chapter" :eval-item="evalItemTitle" />
        </div>
        <div class="pb-5">
            <SharedEvaluationItemEvaluationGuide :item-guides="itemGuides" />
        </div>
        <div class="pb-5">
            <SharedEvaluationItemEvaluationScoring 
                :eval-item-number="evalItemNumber" 
                :eval-item-scoring="evalItemScoring"
                :section-parameter="(route.params.section).toString()"
                :chapter-parameter="(route.params.chapter).toString()" 
                :topic-parameter="route.params.chapter.toString()" />
        </div>
    </div>
</template>