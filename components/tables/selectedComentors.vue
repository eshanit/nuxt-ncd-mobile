<script setup lang="ts">
defineProps({
    comentors: {
        type: Array<Object>,
        required: true
    }
})

const columns = [
    {
        key: 'name',
        label: 'First Name',
    },
    {
        key: 'surname',
        label: 'Last Name',
    },
    {
        key: 'gender',
        label: 'Gender',
    },
    {
        key: 'profession',
        label: 'Profession'
    }

]

</script>
<template>
    <UTable :columns="columns" :rows="comentors">
    </UTable>
</template>