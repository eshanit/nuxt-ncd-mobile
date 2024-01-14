<script setup lang="ts">
import Routes from "@/constants/Routes";
import LocalStorageKeys from "@/constants/LocalStorageKeys";
const showMenteeForm = ref(false)
const showUserUpdateForm = ref(false)
const showAlert = ref(false)
const menteeData = ref()
const useMentees = useMenteeStore()
await useMentees.fetchAllMentees()
const mentees = computed(() => useMentees.mentees)

watch(menteeData, (newValue, Oldvalue) => {
    if (newValue.show === true) {
        showUserUpdateForm.value = newValue.show
    }
})

const nextStep = async () => {
    //step 1 check to see if there is an entry in selected CoMentors

    const selectedMentee: any = useProcessLocalStorage().retrieve(LocalStorageKeys.EVALUATED_MENTEE)

    if(selectedMentee) {
        //if there is an entry in selected CoMentors do not change the entry go to next step

        await navigateTo(Routes.PREVIEW)
    }else {
        //if there is no entry in selected CoMentors insert an empty entry and proceed

        showAlert.value = true

    }
}

onMounted(async () => {
    await useMentees.fetchAllMentees()
})

onUpdated(async () => {
    await useMentees.fetchAllMentees()
})

</script>
<template>
  <div>
    <SharedBorderedNavBar>
        <template #lead>
            <div v-show="!showMenteeForm">
            <div id="mentees-list" v-if="showUserUpdateForm === false">
                <NuxtLink :to="Routes.FACILITIES">
                    <div class="pr-5 text-blue-500 cursor-pointer">
                        <UIcon name="i-heroicons-arrow-small-left" />
                    </div>
                </NuxtLink>
            </div>
            <div id="mentee-update-form" v-else>

                <div class="pr-5 text-blue-500 cursor-pointer">
                    <UIcon name="i-heroicons-arrow-small-left" @click="showUserUpdateForm = false" />
                </div>

            </div>

        </div>
        <div v-show="showMenteeForm">
            <div class="pr-5 text-blue-500 cursor-pointer" @click="showMenteeForm = false">
                <UIcon name="i-heroicons-arrow-small-left" />
            </div>
        </div>

        <div class=" text-gray-400"><strong>Planning</strong></div>
        </template>
    </SharedBorderedNavBar>

    <UContainer>
        <!-- {{ Mentees }} -->
        <div class=" pt-5 pb-10">
            <div class="pb-5" v-if="showAlert">
                <UAlert icon="i-heroicons-command-line" color="rose" variant="outline" title="Heads up!"
                    description="You have'nt selected a mentee to evaluate" 
                    :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"
                    />
            </div>
            <div v-show="!showMenteeForm">
                <div id="mentees-list" v-if="showUserUpdateForm === false">
                    <div class="flex justify-between pb-5">
                        <div class="flex">
                            <div class="text-gray-600 pr-1"> Step 4: </div>
                            <div class="text-orange-500"><strong>Select the mentee to be evaluated</strong></div>
                        </div>
                        <div>
                            <!-- <nuxt-link :to="{ name: 'planning-districts' }"> -->
                                <UButton variant="outline" @click="nextStep()">Skip | Next Step</UButton>
                            <!-- </nuxt-link> -->
                        </div>

                    </div>
                    <TablesMentees :mentees="mentees" @show-create-user-form="showMenteeForm = $event" @mentee-data="menteeData = $event" />
                </div>
                <div id="mentee-update-form" v-else>
                    <div class="flex justify-between pb-5">
                        <div class="flex">
                            <div class="text-gray-600 pr-1"> Step 4: </div>
                            <div class="text-orange-500"><strong>Update Mentees</strong></div>
                        </div>
                    </div>
                    <FormsUpdateMentee :mentee-data="menteeData" @show-update-user-form="showUserUpdateForm = $event" /> 
                </div>

            </div>
            <div v-show="showMenteeForm">
                <SharedTwCardWithHeader>
                    <template #header>
                        <div class="text-sm text-cyan-800"><strong>Create New Mentee</strong></div>
                    </template>
                    <template #body>
                        <FormsCreateMentee @show-create-user-form="showMenteeForm = $event" />
                    </template>
                </SharedTwCardWithHeader>

            </div>
        </div>

    </UContainer>
  </div>
</template>