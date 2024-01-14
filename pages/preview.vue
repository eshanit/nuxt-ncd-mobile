<script setup lang="ts">
import LocalStorageKeys from '@/constants/LocalStorageKeys';
import Routes from '@/constants/Routes';

const district = ref(localStorage.getItem(LocalStorageKeys.DISTRICT));
const facility = ref(localStorage.getItem(LocalStorageKeys.SELECTED_FACILITY));
const comentorsData:any = useProcessLocalStorage().retrieve(LocalStorageKeys.SELECTED_COMENTORS)
const menteeData: any = useProcessLocalStorage().retrieve(LocalStorageKeys.EVALUATED_MENTEE)

const profileData = useUser()

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
                <div class=" text-gray-400"><strong>Preview</strong></div>
            </template>
        </SharedBorderedNavBar>
        <UContainer>
            <div class="pt-5">
                Below is a Preview of whats been <span class="text-rose-500"><strong>planned</strong></span> so far:
            </div>
            <div class="grid grid-cols-2 gap-5 pt-5">
                <div class=" text-sky-600">
                    <strong>Mentee Name:</strong>
                </div>
                <div>
                    {{ menteeData.firstname }} {{ menteeData.lastname }}
                </div>
                <div class=" text-sky-600">
                    <strong>District:</strong>
                </div>
                <div>
                    {{ district }}
                </div>
                <div class=" text-sky-600">
                    <strong>Facility:</strong>
                </div>
                <div>
                    {{ facility }}
                </div>
                <div class=" text-sky-600">
                    <strong>Evaluator:</strong>
                </div>
                <div>
                    {{ profileData.profile.value.firstname }} {{ profileData.profile.value.lastname }}
                </div>
            </div>

            <div class="pt-5">
                <SharedTwCardWithHeader>
                    <template #header>
                        <div class=" text-teal-950"><strong>Co-Mentors selected for the evaluation:</strong> <span
                                class=" text-orange-500">{{ comentorsData.length }}</span></div>
                    </template>

                    <template #body>
                        <TablesSelectedComentors :comentors="comentorsData" />
                    </template>

                </SharedTwCardWithHeader>
            </div>


            <div class="grid grid-cols-2 gap-5 pt-10">

                <div>
                    If you are satisfied with the above information, please click on the right button / card to start
                    evaluation:
                </div>
                <div>
                    <NuxtLink :to="{
                        name: Routes.CHAPTER_MARKER.name,
                        params: {
                            section: 'Introduction and Initial Evaluation',
                            topic: 'Knowledge',
                            chapterMarker: 1
                        }
                    }">
                        <UButton variant="soft" color="orange" size="xl" label="Start Evaluation" :block=true />
                    </NuxtLink>
                </div>

            </div>
        </UContainer>
    </div>
</template>