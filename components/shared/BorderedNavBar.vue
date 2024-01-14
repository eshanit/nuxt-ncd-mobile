<script setup lang="ts">
const useAuth = useAuthStore()
const user = useUser()

</script>
<template>
    <div class="flex justify-between p-5 border-b-2">
        <div class="flex">
            <slot name="lead" />
        </div>
        <div class="flex">
            <div class=" text-gray-500 pr-1">
                {{ user.profile.value.username }}
            </div>
            <div class=" text-red-500 text-lg font-bold">

                <UIcon name="i-heroicons-power" @click="useAuth.signOut()" />
            </div>
        </div>

    </div>
</template>

