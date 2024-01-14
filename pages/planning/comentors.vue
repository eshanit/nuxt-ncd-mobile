<script setup lang="ts">
import LocalStorageKeys from '@/constants/LocalStorageKeys';
import Routes from '@/constants/Routes';

const showComentorForm = ref(false)
const showUserUpdateForm = ref(false)
const comentorData = ref()
const useComentors = useCoMentorsStore()
await useComentors.fetchCoMentors()
const comentors = computed(() => useComentors.comentors)

watch(comentorData, (newValue, Oldvalue) => {
    if (newValue.show === true) {
        showUserUpdateForm.value = newValue.show
    }
})

const nextStep = async () => {
    //step 1 check to see if there is an entry in selected CoMentors

    ///const selectedCoMentors =  useGetLocalStorageData(localStorage.getItem('selectedCoMentors'))
    const selectedCoMentors = useProcessLocalStorage().retrieve(LocalStorageKeys.SELECTED_COMENTORS)


    if(selectedCoMentors != null) {
        //if there is an entry in selected CoMentors do not change the entry go to next step

        await navigateTo(Routes.DISTRICTS)

    }else {
        //if there is no entry in selected CoMentors insert an empty entry and proceed

        useProcessLocalStorage().store(LocalStorageKeys.SELECTED_COMENTORS,'')
        
        await navigateTo(Routes.DISTRICTS)

    }
}

onMounted(async () => {
    await useComentors.fetchCoMentors()
})

onUpdated(async () => {
    await useComentors.fetchCoMentors()
})

</script>
<template>
<div>
    <SharedBorderedNavBar>
        <template #lead>
            <div v-show="!showComentorForm">
            <div id="comentors-list" v-if="showUserUpdateForm === false">
                <NuxtLink :to="{ name: Routes.DASHBOARD.name }">
                    <div class="pr-5 text-blue-500 cursor-pointer">
                        <UIcon name="i-heroicons-arrow-small-left" />
                    </div>
                </NuxtLink>
            </div>
            <div id="comentor-update-form" v-else>
             
                    <div class="pr-5 text-blue-500 cursor-pointer">
                        <UIcon name="i-heroicons-arrow-small-left" @click="showUserUpdateForm = false" />
                    </div>
      
            </div>
        </div>
        <div v-show="showComentorForm">
            <div class="pr-5 text-blue-500 cursor-pointer" @click="showComentorForm = false">
                <UIcon name="i-heroicons-arrow-small-left" />
            </div>
        </div>
        <div class=" text-gray-400"><strong>Planning</strong></div>
        </template>
    </SharedBorderedNavBar>

    <UContainer>
        <!-- {{ comentors }} -->
        <div class=" pt-5 pb-10">
            <div v-show="!showComentorForm">
                <div id="comentors-list" v-if="showUserUpdateForm === false">
                    <div class="flex justify-between pb-5">
                        <div class="flex">
                            <div class="text-gray-600 pr-1"> Step 1: </div>
                            <div class="text-orange-500"><strong>Choose accompanying Co-Mentors</strong></div>
                        </div>
                        <div>
                            <!-- <nuxt-link :to="{ name: 'planning-districts' }"> -->
                                <UButton variant="outline" @click="nextStep()">Skip | Next Step</UButton>
                            <!-- </nuxt-link> -->
                        </div>

                    </div>
                    <TablesComentors :comentors="comentors" @show-create-user-form="showComentorForm = $event"
                        @comentor-data="comentorData = $event" />

                </div>
                <div id="comentor-update-form" v-else>
                    <div class="flex justify-between pb-5">
                        <div class="flex">
                            <div class="text-gray-600 pr-1"> Step 1: </div>
                            <div class="text-orange-500"><strong>Update Co-Mentors</strong></div>
                        </div>
                    </div>
                    <FormsUpdateComentor :comentor-data="comentorData"
                        @show-update-user-form="showUserUpdateForm = $event" />
                </div>



            </div>
            <div v-show="showComentorForm">
                <SharedTwCardWithHeader>
                    <template #header>
                        <div class="text-sm text-cyan-800"><strong>Create New Co-Mentor</strong></div>
                    </template>
                    <template #body>
                        <FormsCreateComentor @show-create-user-form="showComentorForm = $event" />
                    </template>
                </SharedTwCardWithHeader>

            </div>
        </div>

    </UContainer>
</div>
</template>
<style scoped></style>