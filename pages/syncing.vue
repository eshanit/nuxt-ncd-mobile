<script setup lang="ts">
import DatabaseNames from '@/constants/DatabaseNames';
import Routes from '@/constants/Routes';

const toast = useToast()

const syncTo = async (databaseName: string) => {
   const synced = await useReplicateToCouchDB(databaseName)
}

const syncFrom = async (databaseName: string) => {
   const synced = await useReplicateFromCouchDB(databaseName)
}

</script>
<template>
    <div>
        <UContainer>

        <SharedBorderedNavBar>
            <template #lead>
                <NuxtLink :to="Routes.DASHBOARD">
                    <div class="pr-5 text-blue-500 cursor-pointer">
                        <UIcon name="i-heroicons-arrow-small-left" />
                    </div>
                </NuxtLink>
                <div class=" text-gray-400"><strong> Sync your Data</strong></div>
            </template>
        </SharedBorderedNavBar>

            <div class=" pt-5">
                <div class="w-1/2 text-center" @click="syncTo(DatabaseNames.COMPLETED_EVALUTATIONS)">
                    <SharedTwCard>
                        <template #body>
                            Sync <span class=" text-pretty text-fuchsia-500 font-bold italic">Completed Evaluations</span>
                        </template>
                    </SharedTwCard>
                </div>
            </div>
            <div class=" pt-5">
                <div class="w-1/2 text-center" @click="syncTo(DatabaseNames.INCOMPLETE_EVALUATIONS)">
                    <SharedTwCard>
                        <template #body>
                            Sync <span class=" text-pretty text-teal-500 font-bold italic">Incomplete Evaluations</span> 
                        </template>
                    </SharedTwCard>
                </div>
            </div>
            <div class=" pt-5">
                <div class="w-1/2 text-center" @click="syncFrom(DatabaseNames.DISTRICTS)">
                    <SharedTwCard>
                        <template #body>
                            Sync <span class=" text-pretty text-sky-500 font-bold italic">Districts</span>
                        </template>
                    </SharedTwCard>
                </div>
            </div>
            <!-- <div class=" pt-5">
                <div class="w-1/2 text-center" @click="">
                    <SharedTwCard>
                        <template #body>
                            Sync <span class=" text-pretty text-rose-500 font-bold italic">All</span> data
                        </template>
                    </SharedTwCard>
                </div>
            </div> -->
          


        </UContainer>
    </div>
</template>