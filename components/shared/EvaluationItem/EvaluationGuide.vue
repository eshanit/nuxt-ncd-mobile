<script setup lang="ts">
defineProps({
    itemGuides: {
        type: Array<any>,
        required: true
    }
})
</script>
<template>
        <SharedTwCardWithHeader>
            <template #header>
                <div class="flex text-3xl">
                    <div>
                        <UIcon name="i-heroicons-light-bulb" class=" text-orange-500 mt-1 mr-1" />
                    </div>
                    <div>Evaluation: Guide</div>
                </div>
            </template>

            <template #body>
                <div v-if="itemGuides.length > 1">
                    <div v-for="item in itemGuides" class="border-b">
                        <div v-if="item.subItems" class="pt-2.5 pb-2.5">
                            <UAccordion :items="[
                                {
                                    label: '- ' + item.item,
                                    slot: item.slug
                                }]">
                                <template #sub-items>
                                    <div v-for="subItem in item.subItems">
                                        <div class="flex pb-1.5 pt-1.5">
                                            <div>
                                                <UIcon name="i-heroicons-chevron-right" class="text-green-500 pr-1" />
                                            </div>
                                            <div>{{ subItem }}</div>
                                        </div>
                                    </div>
                                </template>
                            </UAccordion>
                        </div>
                        <div v-else class="pt-2.5 pb-2.5">
                            - {{ item.item }}
                        </div>
                    </div>
                </div>
                <div v-else>
                    {{ itemGuides[0].item }}
                </div>
            </template>
        </SharedTwCardWithHeader>
</template>