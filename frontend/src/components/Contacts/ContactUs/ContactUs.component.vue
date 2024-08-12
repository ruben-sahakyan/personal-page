<script setup lang="ts">
import { ref } from 'vue';
import { validateEmail } from '../../../validateEmail/validateEmail';
import { useI18n } from 'vue-i18n';
import { useStore } from '../../../store';


const store = useStore();

const { locale } = useI18n({useScope: 'global'});

const errorText = ref<string>('');

const email = ref<string>('')
const title = ref<string>('');
const content = ref<string>('');
const emailError = ref(false);
const titleError = ref(false);
const contentError = ref(false);

const contactUs = () => {
    if(email.value.trim() === '') {
        errorText.value = 'Please add email'
        emailError.value = true;
    } else if(!validateEmail(email.value)) {
        errorText.value = 'Incorrect email'
        emailError.value = true;
    } else if(title.value.trim() === '') {
        errorText.value = 'Please add title'
        titleError.value = true;
        emailError.value = false;
    } else if(content.value.trim() === '') {
        errorText.value = 'Please add your text'
        titleError.value = false
        contentError.value = true;
    } else {
        fetch('http://161.35.27.70:5000/contact-us/send-message', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email: email.value, title: title.value, content: content.value
            })
        }).then(resp => resp.json())
        .then(date => {
            if(date.statusCode === 201) {
                emailError.value = false;
                titleError.value = false;
                contentError.value = false;
                errorText.value = '';
                email.value = '';
                title.value = '';
                content.value = '';
                store.addMessage(date.message);
            } else {
                errorText.value = date.message;
            }
        })
    }
}
</script>

<template>
    <section>
        <h3>{{ $t('contactUs.title') }}</h3>
        <p v-show="errorText.trim()" class="error-text">{{ errorText }}</p>
        <form @submit.prevent="contactUs">
            <input :placeholder="$t('contactUs.email')" v-model="email" 
            @click="() => {
                emailError = false;
                errorText = ''
            }"
            :style="emailError ? 'border-bottom: 1px solid red' : ''"/>
            <input :placeholder="$t('contactUs.subject')" v-model="title"
            @click="() => {
                titleError = false;
                errorText = ''
            }" 
            :style="titleError ? 'border-bottom: 1px solid red' : ''"/>
            <textarea :placeholder="$t('contactUs.content')" v-model="content"
            @click="() => {
                contentError = false;
                errorText = '';
            }" 
            :style="contentError ? 'border: 1px solid red' : ''"></textarea>
            <button :style="locale === 'en' ? 'font-size: 64px' : 'font-size: 32px'">
                <p>{{ $t('contactUs.send') }}</p>
            </button>
        </form>
    </section>
</template>


<style scoped lang="scss">
section {
    max-width: 1000px;
    min-height: 200px;
    h3 {
        color: var(--text-color-first-d);
        text-transform: uppercase;
        text-align: center;
        font-size: 32px;
        font-weight: 100;
    }
    .error-text {
        text-align: center;
        font-size: 20px;
        color: red;
    }
    form {
        width: 100%;
        min-height: 200px;
        input {
            margin-top: 10px;
            width: 100%;
            height: 40px;
            font-size: 30px;
            padding-left: 10px;
            background: none;
            border: none;
            border-bottom: 1px solid var(--border-color-second);
            outline: none;
            color: white
        }
        textarea {
            color: white;
            outline: none;
            margin-top: 40px;
            width: 100%;
            min-height: 200px;
            background: none;
            border: 1px solid var(--border-color-second);
            border-radius: 10px;
            padding: 10px;
            font-size: 30px;
            resize: vertical;
        }
        button {
            display: block;
            width: 250px;
            height: 250px;
            border-radius: 50%;
            border: 6px solid var(--border-color-second);
            margin: 30px auto;
            background: rgb(154,154,154);
            background: radial-gradient(circle, rgba(154,154,154,1) 0%, rgba(17,17,17,1) 100%);
            cursor: pointer;
            transition: all ease-in-out .3s;
            &:hover {
                border: 6px solid var(--text-color-green);
                transition: all ease-in-out .3s;
            }
            &:active > p {
                background: #404040;
                background: linear-gradient(to right, #303030 0%, var(--text-color-green) 50%, #303030 100%);
                -webkit-background-clip: text;
            }
            p {
                font-weight: 100;
                background: #404040;
                background: linear-gradient(to right, #303030 0%, #f2f2f2 50%, #303030 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-transform: uppercase;
            }
        }
    }
}
</style>