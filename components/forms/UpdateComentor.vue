<script setup lang="ts">
import * as yup from "yup";

const user = useUser()
const useComentor = useCoMentorsStore();
const toast = useToast()

const props = defineProps({
    comentorData: {
        type: Object,
        required: true,
    }
})

const schema = yup.object({
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    gender: yup.string().required().label("Gender"),
    profession: yup.string().required().min(1).label("Profession"),
});


const init = {
    _id: props.comentorData.id,
    _rev: props.comentorData.rev,
    firstName: props.comentorData.firstname,
    lastName: props.comentorData.lastname,
    gender: props.comentorData.gender,
    profession: props.comentorData.profession,
    createdAt: props.comentorData.createdAt,
    createdBy: props.comentorData.createdBy,
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
const [profession, professionProps] = defineField("profession", nuxtUiConfig);

const onSubmit = handleSubmit(async (values) => {
    const update = await useComentor.updateCoMentor(values);
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

        <UFormGroup label="Profession   " name="profession" v-bind="professionProps">
            <UInput v-model="profession" />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>

        <UButton class="ml-4" color="white" variant="outline" type="button" @click="resetForm()">
            Reset
        </UButton>
    </UForm>
</template>