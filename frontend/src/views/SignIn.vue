<script setup lang="ts">
import { reactive, ref, onBeforeMount } from 'vue';
import InputComponent from '../components/Input/Input.component.vue';
import { validateEmail } from '../validateEmail/validateEmail';
import ButtonComponent from "../components/Button/Button.component.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const errorText = ref<string>('');
const email = reactive<{value: string}>({value: ''});
const password = reactive<{value: string}>({value: ''});
const emailError = ref<boolean>(false);
const passwordError = ref<boolean>(false);

onBeforeMount(() => {
    fetch('http://161.35.27.70/users/auth', {
        method: "GET",
        credentials: 'include',
    })
    .then(resp => resp.json())
    .then(date => {
        console.log(date);
        if(date.message === 'authorized') {
            router.push({name: 'Home'})
        }
    })
});

const signInHandle = () => {
    if(email.value.trim() === '') {
        errorText.value = 'Please add email';
        emailError.value = true;
    } else if(!validateEmail(email.value)) {
        errorText.value = 'Please add correct email'
        emailError.value = true
    } else if(password.value.trim() === '') {
        errorText.value = 'Please add password'
        passwordError.value = true
    } else {
        fetch('http://localhost:5000/users/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({email: email.value, password: password.value})
        })
        .then(resp => resp.json())
        .then(date => {
            if(date?.status === 200) {
                email.value = '';
                password.value = '';
                router.push({name: 'Home'});
            } else {
                errorText.value = date.message;
            }
        })
    }
}
</script>


<template>
    <div class="sign-in">
        <h1>{{ $t('signIn.title') }}</h1>
        <p class="error-text">{{ errorText }}</p>
        <form @submit.prevent="signInHandle">
            <InputComponent :placeholder="$t('signIn.email')" type="text"
            @value="(date: string) => email.value = date"
            @click="() => {
                errorText = '';
                emailError = false
            }"
            :style="emailError ? 'border-bottom: 1px solid red' : ''"/>
            <InputComponent :placeholder="$t('signIn.password')" type="password"
            @value="(date: string) => password.value = date"
            @click="() => {
                errorText = '';
                passwordError = false
            }"
            :style="passwordError ? 'border-bottom: 1px solid red' : ''"/>
            <ButtonComponent :name="$t('signIn.button')" size="150"/>
        </form>
    </div>
</template>


<style scoped lang="scss">
.sign-in {
    margin: auto;
    max-width: 800px;
    // height: calc(100vh - 215px);
    height: 100vh;
    h1 {
        text-align: center;
        font-size: 50px;
        padding-top: 50px;
        color: var(--text-color-first-l);
        text-transform: uppercase;
    }
    .error-text {
        width: 100%;
        height: 30px;
        color: red;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form {
        margin: 30px auto;
        margin-bottom: 0px;
        width: 100%;
        min-height: 200px;
    }
}
</style>