<script setup lang="ts">
import * as yup from "yup";

const useAuth = useAuthStore();

const schema = yup.object({
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    userName: yup.string().required().label("User name"),
    password: yup.string().required().min(6).label("Password"),
    passwordConfirm: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "Passwords must match")
        .label("Password confirmation"),
    terms: yup
        .boolean()
        .required()
        .isTrue("You must agree to terms and conditions")
        .label("terms agreement"),
    // type: yup.string().required().label("Account type"),
});


const init = {
    terms: false,
    _id: '',
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    passwordConfirm: '',
    profession: '',
    gender: '',
    createdAt: Date.now(),
    createdBy: ''
    // type: undefined,
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
const [userName, userNameProps] = defineField("userName", nuxtUiConfig);
const [password, passwordProps] = defineField("password", nuxtUiConfig);
const [passwordConfirm, passwordConfirmProps] = defineField("passwordConfirm", nuxtUiConfig);
const [terms, termsProps] = defineField("terms", nuxtUiConfig);
//const type = defineComponentBinds("type", nuxtUiConfig);

const onSubmit = handleSubmit(async (values) => {
    useAuth.registerUser(values).then(() => {
        resetForm()
    });

});

</script>
<template>
    <UForm :state="state" @submit="onSubmit" class="space-y-4">
        <div class="text-center">
            <div>
                <strong>Register to use the:</strong>
            </div>
            <div>
                <span class="text-orange-400">NCD Monitoring Tool</span>
            </div>
        </div>
        <UFormGroup label="First name" name="firstName" v-bind="firstNameProps">
            <UInput v-model="firstName" />
        </UFormGroup>

        <UFormGroup label="Last name" name="lastName" v-bind="lastNameProps">
            <UInput v-model="lastName" />
        </UFormGroup>

        <UFormGroup label="Username" name="username" v-bind="userNameProps">
            <UInput v-model="userName" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" v-bind="passwordProps">
            <UInput v-model="password" type="password" />
        </UFormGroup>

        <UFormGroup label="Confirm password" name="passwordConfirm" v-bind="passwordConfirmProps">
            <UInput v-model="passwordConfirm" type="password" />
        </UFormGroup>

        <UFormGroup label="" name="terms" v-bind="termsProps">
            <UCheckbox name="terms" v-model="terms" label="I agree to terms and conditions" />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>

        <UButton class="ml-4" color="white" variant="outline" type="button" @click="resetForm()">
            Reset
        </UButton>
        <div class="text-sm">
            Are you already registered? click here to
            <nuxt-link :to="{ name: 'index' }">
                <UButton color="sky" variant="outline" type="button" label="Login" />
            </nuxt-link>
        </div>
    </UForm>
</template>