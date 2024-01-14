<script setup lang="ts">
const useAuth = useAuthStore();
const showAlert = ref(false)
const isRegistered = computed(() => useAuth.isRegistered);
</script>
<template>
    <div class="bg-[url('/assets/img/solidarmed.png')] bg-cover bg-no-repeat">
        <UContainer>
            <div class=" flex items-center justify-center h-screen">
                <UCard>
                    <FormsLogin />
                </UCard>
            </div>
        </UContainer>
    </div>
</template>