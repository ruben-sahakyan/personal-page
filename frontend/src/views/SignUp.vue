<script setup lang="ts">
import { reactive, ref, onBeforeMount } from "vue";
import InputComponent from "../components/Input/Input.component.vue";
import { validateEmail } from "../validateEmail/validateEmail";
import ButtonComponent from "../components/Button/Button.component.vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";

const router = useRouter();
const store = useStore();

const errorText = ref<string>('');

const email = reactive<{value: string}>({value: ''});
const password = reactive<{value: string}>({value: ''});
const confirmPassword = reactive<{value: string}>({value: ''});
const emailError = ref<boolean>(false);
const passwordError = ref<boolean>(false);
const confirmPasswordError = ref<boolean>(false);

onBeforeMount(() => {
    fetch('http://161.35.27.70:5000/users/auth', {
        method: "GET",
        credentials: 'include',
    })
    .then(resp => resp.json())
    .then(date => {
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
        errorText.value = 'Please add correct email';
        emailError.value = true
    } else if(password.value.trim() === '') {
        errorText.value = 'Please add password';
        passwordError.value = true;
    } else if(confirmPassword.value.trim() === '') {
        errorText.value = 'Please confirm password';
        confirmPasswordError.value = true
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        errorText.value = 'Incorrect confirm password';
        confirmPasswordError.value = true
    } else {
        fetch('http://161.35.27.70:5000/users/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email.value, password: password.value})
        })
        .then(resp => resp.json())
        .then(date => {
            if(date.statusCode === 201) {
                email.value = '';
                password.value = '';
                confirmPassword.value = '';
                errorText.value = '';
                console.log('succes');
                store.addMessage('You have successfully registered');
                router.push({name: 'SignIn'});
            } else {
                if(Array.isArray(date.message)) {
                    errorText.value = date.message[0];
                    password.value = '';
                    confirmPassword.value = '';
                } else {
                    errorText.value = date.message
                }
            }
        })
    };
}
</script>


<template>
    <div class="sign-up">
        <h1>SIGNUP</h1>
        <p class="error-text">{{ errorText }}</p>
        <form @submit.prevent="signInHandle">
            <InputComponent placeholder="email" type="text"
            @click="() => {
                emailError = false;
                errorText = '';
            }"
            :style="emailError ? 'border-bottom: 1px solid red' : ''"
            @value="(date: string) => email.value = date"/>
            <InputComponent placeholder="password" type="password" 
            @click="() => {
                passwordError = false;
                errorText = '';
            }"
            :style="passwordError ? 'border-bottom: 1px solid red' : ''"
            @value="(date: string) => password.value = date"/>
            <InputComponent placeholder="confirm password" type="password"
            @click="() => {
                confirmPasswordError = false;
                errorText = '';
            }"
            :style="confirmPasswordError ? 'border-bottom: 1px solid red' : ''" 
            @value="(date: string) => confirmPassword.value = date"/>
            <ButtonComponent name="signup" size="150"/>
        </form>
    </div>
</template>


<style scoped lang="scss">
.sign-up {
    margin: auto;
    max-width: 800px;
    // height: calc(100vh - 215px);
    height: 100vh;
    h1 {
        text-align: center;
        font-size: 50px;
        padding-top: 30px;
        color: var(--text-color-first-l);
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
        width: 100%;
        min-height: 200px;
        margin-bottom: 0px;
    }
}
// 30 + 70 + 50 + 70
</style>