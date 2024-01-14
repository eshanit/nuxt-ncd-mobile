<script setup lang="ts">
import Routes from '@/constants/Routes';

const useAuth = useAuthStore()

defineProps({
    section: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="flex justify-between p-5 border-b-2">
        <div class="flex ">
            <NuxtLink :to="Routes.PREVIEW">
                <div class="pr-5 text-blue-500 cursor-pointer">
                    <UIcon name="i-heroicons-arrow-small-left" />
                </div>
            </NuxtLink>
            <div class="flex">
                <div class=" text-gray-400">
                    <strong>Diabetes Metillus</strong>
                </div>
                <div class=" text-orange-500 text-md mt-1">
                    <strong>
                        <UIcon name="i-heroicons-chevron-right" />
                    </strong>
                </div>
                <div class=" text-gray-400">
                    <strong>{{ section }}</strong>
                </div>
                <div class=" text-orange-500 text-md mt-1">
                    <strong>
                        <UIcon name="i-heroicons-chevron-right" />
                    </strong>
                </div>
                <div class=" text-gray-400">
                    <strong>{{ chapter }}</strong>
                </div>
                <div class=" text-orange-500 text-md mt-1">
                    <strong>
                        <UIcon name="i-heroicons-chevron-right" />
                    </strong>
                </div>
                <div class=" text-green-400">
                    <strong>{{ item }}</strong>
                </div>
            </div>
        </div>
        <div class=" text-red-500 text-xl">
            <UIcon name="i-heroicons-power" @click="useAuth.signOut()" />
        </div>
    </div>
</template>