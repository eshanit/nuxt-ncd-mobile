<script setup lang="ts">
import Routes from "@/constants/Routes";
import LocalStorageKeys from "@/constants/LocalStorageKeys";
import DatabaseNames from "@/constants/DatabaseNames";

const showDistrictForm = ref(false)
const useDistricts = useDistrictsStore()
await useDistricts.fetchDistricts()

const districts = computed(() => useDistricts.districts)

const nextStep = async () => {
    //check if no district has been chose
    const selectedDistrict: any = useProcessLocalStorage().retrieve(LocalStorageKeys.DISTRICT)

    if (selectedDistrict) {

        await navigateTo(Routes.FACILITIES)

    } else {

        localStorage.setItem(LocalStorageKeys.DISTRICT, '')


        await navigateTo(Routes.FACILITIES)

    }
}

onMounted(async () => {
    await useDistricts.fetchDistricts()
})
</script>
<template>
    <div>
        <SharedBorderedNavBar>
            <template #lead>
                <div class="flex">
                    <div v-show="!showDistrictForm">
                        <NuxtLink :to="Routes.COMENTORS">
                            <div class="pr-5 text-blue-500 cursor-pointer">
                                <UIcon name="i-heroicons-arrow-small-left" />
                            </div>
                        </NuxtLink>
                    </div>
                    <div v-show="showDistrictForm">
                        <div class="pr-5 text-blue-500 cursor-pointer" @click="showDistrictForm = false">
                            <UIcon name="i-heroicons-arrow-small-left" />
                        </div>
                    </div>

                    <div class=" text-gray-400"><strong>Planning</strong></div>
                </div>
            </template>
         
        </SharedBorderedNavBar>
        <UContainer>
         
            <div class="pt-5 pb-10">
                <div v-show="!showDistrictForm">
                    <!-- {{ districts }} -->
                    <div class="flex justify-between pb-5">
                        <div class="flex">
                            <div class="text-gray-600 pr-1"> Step 2: </div>
                            <div class="text-orange-500"><strong>Select District you are doing evaluations</strong></div>
                        </div>
                        <div class="flex font-extrabold gap-3">
                            <!-- <nuxt-link :to="{ name: 'planning-facilities' }"> -->
                            <UButton variant="soft" color="sky" @click="useReplicateFromCouchDB(DatabaseNames.DISTRICTS)">Sync Districts
                            </UButton>
                            <!-- </nuxt-link> -->
                            <div>
                <!-- <nuxt-link :to="{ name: 'planning-facilities' }"> -->
                <UButton variant="outline" @click="nextStep()">Skip | Next Step</UButton>
                <!-- </nuxt-link> -->
            </div>
                        </div>

                    </div>
                    <TablesDistricts :districts="districts" />
                </div>
            </div>
        </UContainer>
    </div>
</template>