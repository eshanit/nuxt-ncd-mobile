<script setup lang="ts">
import Routes from "@/constants/Routes";
import LocalStorageKeys from "@/constants/LocalStorageKeys";

const showFacilityForm = ref(false)

const useFacilities = useFacilitiesStore()

const showAlert = ref(false)

//const facilities = computed(() => JSON.parse(useFacilities.facilities));

const facilities: any = useProcessLocalStorage().retrieve(LocalStorageKeys.FACILITIES_FOR_SELECTED_DISTRICT)

const nextStep = async () => {
    //step 1 check to see if there is an entry in selected CoMentors

    const selectedFacility: any = useProcessLocalStorage().retrieve(LocalStorageKeys.SELECTED_FACILITY)

    if (selectedFacility) {
        //if there is an entry in selected CoMentors do not change the entry go to next step

        await navigateTo(Routes.MENTEES)

    } else {
        //if there is no entry in selected CoMentors insert an empty entry and proceed

        showAlert.value = true

    }
}

</script>
<template>
  <div>
    <SharedBorderedNavBar>
        <template #lead>
            <div v-show="!showFacilityForm">
            <NuxtLink :to="Routes.DISTRICTS">
                <div class="pr-5 text-blue-500 cursor-pointer">
                    <UIcon name="i-heroicons-arrow-small-left" />
                </div>
            </NuxtLink>
        </div>
        <div v-show="showFacilityForm">
            <div class="pr-5 text-blue-500 cursor-pointer" @click="showFacilityForm = false">
                <UIcon name="i-heroicons-arrow-small-left" />
            </div>
        </div>

        <div class=" text-gray-400"><strong>Planning</strong></div>
        </template>
    </SharedBorderedNavBar>

    <UContainer>
        <div class="pt-5 pb-10">
            <div class='pb-5' v-if="showAlert">
                <UAlert icon="i-heroicons-command-line" color=" red" variant="outline" title="Heads up!"
                    description="You have'nt selected a facility to go to, please do so" 
                    :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"
                    />
            </div>
            <div v-show="!showFacilityForm">
                <!-- {{ districts }} -->
                <div class="flex justify-between pb-5">
                    <div class="flex">
                        <div class="text-gray-600 pr-1"> Step 3: </div>
                        <div class="text-orange-500"><strong>Select Facility you are doing evaluations</strong></div>
                    </div>
                    <div>
                        <!-- <nuxt-link :to="{ name: 'planning-facilities' }"> -->
                        <UButton variant="outline" @click="nextStep()">Skip | Next Step</UButton>
                        <!-- </nuxt-link> -->
                    </div>

                </div>
                <TablesFacilities :facilities="facilities" />
            </div>
        </div>
    </UContainer>
  </div>
</template>