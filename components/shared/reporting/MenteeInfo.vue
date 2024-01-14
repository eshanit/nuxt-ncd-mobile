<script setup lang="ts">
defineProps({
    menteeInfo: {
        type: Object,
        required: true
    },
    evaluatorInfo: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <SharedTwCardWithHeader>
        <template #header>
            <div class=" text-orange-500  font-semibold">Mentee information</div>
        </template>
        <template #body>
            <div class="grid grid-cols-2 gap-5">
                <div class="font-bold">Fullname:</div>
                <div>{{ menteeInfo.firstname }} {{ menteeInfo.lastname }}</div>
                <div class="font-bold">Gender:</div>
                <div>{{ menteeInfo.gender }}</div>
                <div class="font-bold">Facility:</div>
                <div>{{ menteeInfo.facility }}</div>
                <div class="font-bold">Evaluator:</div>
                <div>{{  evaluatorInfo.firstname }} {{  evaluatorInfo.lastname }}</div>
            </div>
        </template>
    </SharedTwCardWithHeader>
</template>