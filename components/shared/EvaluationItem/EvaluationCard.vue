<script setup lang="ts">
defineProps({
    chapter: {
        type: String,
        required: true,
    },
    evalItem: {
        type: String,
        required: true,
    }
})
</script>
<template>
    <SharedTwCardWithHeader>
        <template #header>
            <div class="flex text-3xl">
                <div>
                    <UIcon name="i-heroicons-question-mark-circle" class=" text-orange-500 mt-1 mr-1" />
                </div>
                <div>{{ chapter }} Evaluation</div>
            </div>
        </template>
        <template #body>
            <div class=" text-teal-600"><strong>{{ evalItem }}</strong></div>
        </template>
    </SharedTwCardWithHeader>
</template>  