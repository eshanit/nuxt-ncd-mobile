<script setup lang="ts">
import LocalStorageKeys from '@/constants/LocalStorageKeys'

const route = useRoute()

const params = computed(()=> {
  return {
    section: (route.params.section).toString(),
    chapter: (route.params.chapter).toString(),
    item: (route.params.evaluationItem).toString(),
  }

})

const mentee: any = useProcessLocalStorage().retrieve(LocalStorageKeys.EVALUATED_MENTEE );

</script>
<template>
 <div>
    <SharedFormNavBar :section="params.section" :chapter="params.chapter" :item="params.item" />
    <UContainer>
        <div class=" pt-5 pb-5">
            <div class="pb-1"><strong>Connection Status:</strong>
            </div>
            <div class="flex ">
                <div class="mr-5"><strong>Mentee:</strong></div>
                <div class=" text-orange-500">{{ mentee.firstname }} {{ mentee.lastname }}</div>
            </div>
        </div>
        <NuxtPage />
    </UContainer>
 </div>
</template>