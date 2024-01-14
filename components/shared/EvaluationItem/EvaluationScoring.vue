<script setup lang="ts">
import * as yup from "yup";

const useEvalData = useEvalDataStore()

const props = defineProps({
    evalItemNumber:{
        type: Number,
        required: true,
    },
    evalItemScoring:{
        type: Array<Object>,
        required: true,
    },
    sectionParameter: {
        type:  String ,
        required: true,
    },
    chapterParameter: {
        type: String ,
        required: true,
    },
    topicParameter: {
        type: String,
        required: true,
    }
})

const schema = yup.object({
    score: yup.string().required()
})

const init = {
    score: -1
}

const state = reactive(init)

const { values, defineField, handleSubmit, resetForm, errors } = useForm({
    validationSchema: schema,
    initialValues: init,
});

const nuxtUiConfig = (state: { errors: any[] }) => {
    return {
        props: {
            error: state.errors[0],
        },
    };
};

const onSubmit = handleSubmit(async (values) => {

const data = {
    evalItem: 'dmQ' +  props.evalItemNumber,
    evalScore: values.score
}
console.log('value: ', data)

const save = useEvalData.storeScore(data)


if (save) {

    if (props.evalItemNumber === 7) {
        navigateTo('/evaluation/Introduction and Initial Evaluation/topic/Acquired Skill/8')
    } else if (props.evalItemNumber === 10) {
        navigateTo('/evaluation/Introduction and Initial Evaluation/topic/Behaviour/11')
    } else if (props.evalItemNumber === 13) {
        navigateTo('/evaluation/Management of Diabetes Mellitus/topic/Knowledge/14')
    } else if (props.evalItemNumber === 22) {
        navigateTo('/evaluation/Management of Diabetes Mellitus/topic/Acquired Skill/23')
    } else if (props.evalItemNumber === 28) {
        navigateTo('/evaluation/Management of Diabetes Mellitus/topic/Behaviour/29')
    } else if (props.evalItemNumber === 29) {

        navigateTo('/reporting/scores/summary')


    }else {
        navigateTo(`/evaluation/${props.sectionParameter}/${props.chapterParameter}/${props.evalItemNumber + 1}`)
    }

}
});

const saveAndExit = async () => {

const data = {
    evalItem: 'dmQ' + props.evalItemNumber,
    evalScore: values.score
}

useEvalData.storeScore(data)

///
 const save = await useEvalData.saveEvaluations(props.evalItemNumber)

 if(save.ok === true) {

    navigateTo('/reporting/list/incompleteReports')
    
 }


}




const [score, scoreProps] = defineField("score", nuxtUiConfig);

</script>
<template>
     <SharedTwCardWithHeader>
                <template #header>
                    <div class="flex text-3xl">
                        <div>
                            <UIcon name="i-heroicons-book-open" class=" text-orange-500 mt-1 mr-1" />
                        </div>
                        <div>Scoring Guide</div>
                    </div>
                </template>
                <template #body>

                    <UForm :state="state" @submit="onSubmit" class="space-y-4">
                        <div class="grid grid-cols-2 gap-5">
                            <div class=" border-r">
                                <UFormGroup name="score" v-bind="scoreProps">
                                    <!-- <URadioGroup :options="evalItem?.scoring" option-attribute="description" value-attribute="score" v-model="score"/> -->
                                    <URadioGroup :options="evalItemScoring" option-attribute="description"
                                        value-attribute="score" v-model="score">
                                        <template #label="{ option }">
                                            <div class=" pb-5">
                                                {{ option.description }}
                                            </div>
                                        </template>
                                    </URadioGroup>
                                </UFormGroup>
                            </div>

                            <div class="flex justify-center items-center text-7xl">
                                <div class=" text-gray-300 " v-if="values.score === 0">{{ values.score }}</div>
                                <div class=" text-red-500 " v-if="values.score === 1">{{ values.score }}</div>
                                <div class=" text-orange-500 " v-if="values.score === 2">{{ values.score }}</div>
                                <div class=" text-green-500 " v-if="values.score === 3">{{ values.score }}</div>
                            </div>

                        </div>
                        <div class="grid grid-cols-3 gap-5">
                            <div class="flex justify-start">
                                <div v-if="evalItemNumber === 1">
                                    <NuxtLink :to="{
                                        name: 'evaluation-section-topic-topic-chapterMarker',
                                        params: {
                                            section: sectionParameter,
                                            topic: chapterParameter,
                                            chapterMarker: evalItemNumber
                                        }
                                    }">
                                        <UButton type="submit" label="Previous" variant="outline" size="xl" color="rose" />
                                    </NuxtLink>

                                </div>
                                <div v-else>
                                    <NuxtLink :to="{
                                        name: 'evaluation-section-chapter-evaluationItem',
                                        params: {
                                            section: sectionParameter,
                                            chapter: chapterParameter,
                                            evaluationItem: evalItemNumber - 1

                                        }
                                    }">
                                        <UButton type="submit" label="Previous" variant="outline" size="xl" color="rose" />
                                    </NuxtLink>
                                </div>

                            </div>
                            <div class="flex justify-center" v-if="values.score >= 0">
                                <UButton type="button" label="Save and Exit" variant="outline" size="xl" color="orange"
                                    @click="saveAndExit()" />
                            </div>
                            <div class="flex justify-end" v-if="values.score >= 0">
                                <UButton type="submit" label="Submit and Next" variant="outline" size="xl" />
                            </div>
                        </div>


                    </UForm>
                </template>
            </SharedTwCardWithHeader>
</template>