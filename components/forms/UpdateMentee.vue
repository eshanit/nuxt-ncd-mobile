<script setup lang="ts">
import * as yup from "yup";
import LocalStorageKeys from "~/constants/LocalStorageKeys";

const user = useUser()
const useMentee = useMenteeStore()
const toast = useToast()

const props = defineProps({
    menteeData: {
        type: Object,
        required: true,
    }
})

const schema = yup.object({
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    gender: yup.string().required().label("Gender"),
    facility: yup.string().required().label("Facility"),
    profession: yup.string().required().min(1).label("Profession"),
});


const init = {
    _id: props.menteeData.id,
    _rev: props.menteeData.rev,
    firstName: props.menteeData.firstname,
    lastName: props.menteeData.lastname,
    facility: props.menteeData.facility,
    gender: props.menteeData.gender,
    profession: props.menteeData.profession,
    createdAt: props.menteeData.createdAt,
    createdBy: props.menteeData.createdBy,
    updatedAt: Date.now(),
    updatedBy: user.profile.value._id
}

const state = reactive(init)

const { values, defineField, handleSubmit, resetForm, errors } = useForm({
    validationSchema: schema,
    initialValues: init,
});


const nuxtUiConfig = (state: { errors: any[] }) => {
    return {
        props: {
            error: state.errors[0],
        },
    };
};

const [firstName, firstNameProps] = defineField("firstName", nuxtUiConfig);
const [lastName, lastNameProps] = defineField("lastName", nuxtUiConfig);
const [gender, genderProps] = defineField("gender", nuxtUiConfig);
const [facility, facilityProps] = defineField("facility", nuxtUiConfig);
const [profession, professionProps] = defineField("profession", nuxtUiConfig);

const onSubmit = handleSubmit(async (values) => {
    const update = await useMentee.updateMentee(values);
    console.log('create front', update)
    if(update === true) {
        toast.add({
            title: `You have successifully updated ${values.firstName}`,
            color: 'amber'
        })
        emit('showUpdateUserForm',false)
        resetForm()
    }

});

const genderOptions = [
    'Male',
    'Female',
    'Other'
]


const facilityOptions: any = useProcessLocalStorage().retrieve(LocalStorageKeys.FACILITIES)

const emit = defineEmits(['showUpdateUserForm'])

</script>
<template>
    <!-- {{ values }} -->
    <UForm :state="state" @submit="onSubmit" class="space-y-4">
        <UFormGroup label="First name" name="firstName" v-bind="firstNameProps">
            <UInput v-model="firstName" />
        </UFormGroup>

        <UFormGroup label="Last name" name="lastName" v-bind="lastNameProps">
            <UInput v-model="lastName" />
        </UFormGroup>

        <UFormGroup label="Gender" name="gender" v-bind="genderProps">
            <USelect v-model="gender" :options="genderOptions" />
        </UFormGroup>

        <UFormGroup label="Facility" name="facility" v-bind="facilityProps">
            <USelect v-model="facility" :options="facilityOptions" />
        </UFormGroup>

        <UFormGroup label="Profession   " name="profession" v-bind="professionProps">
            <UInput v-model="profession" />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>

        <UButton class="ml-4" color="white" variant="outline" type="button" @click="resetForm()">
            Reset
        </UButton>
    </UForm>
</template>