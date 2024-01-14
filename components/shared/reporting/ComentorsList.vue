<script setup lang="ts">
defineProps({
    comentors: {
        type: Array<Object>,
        required: true
    }
})

</script>
<template>
    <SharedTwCardWithHeader>
        <template #header>
            <div class=" text-orange-500"><strong>Co-Mentors selected for the evaluation:</strong> <span
                    class=" text-teal-500">{{ comentors.length }}</span></div>
        </template>

        <template #body>
            <TablesSelectedComentors :comentors="comentors" />
        </template>

    </SharedTwCardWithHeader>
</template>