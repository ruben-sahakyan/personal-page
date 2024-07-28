<script setup lang="ts">
import ContactUsComponent from "../Contacts/ContactUs/ContactUs.component.vue";
import { useStore } from "../../store";

const store = useStore();

const copyContact = (name: string) => {
    const contacts = store.contacts;
    for(let contact of contacts) {
        if(contact.name === name) {
            navigator.clipboard.writeText(contact.date);
        }
    }
}
</script>


<template>
    <section>
        <div class="top-line">
            <h3>{{ $t('contacts') }}</h3>
        </div>
        <ul class="contacts">
            <li @click="copyContact('linkedIn')" class="contact">
                <img src="../../assets/linkedIn.png"/>
            </li>
            <li @click="copyContact('github')" class="contact">
                <img src="../../assets/github.png"/>
            </li>
            <li @click="copyContact('email')" class="contact">
                <img src="../../assets/email.png"/>
            </li>
            <li @click="copyContact('telegram')" class="contact">
                <img src="../../assets/telegram.png"/>
            </li>
        </ul>
    </section>
    <ContactUsComponent />
</template>


<style scoped lang="scss">
section {
    margin: 100px auto;
    max-width: 1200px;
    min-height: 200px;
    .top-line {
        max-width: 100%;
        height: 2px;
        background: rgb(0,0,0);
        background: linear-gradient(108deg, rgb(150, 150, 150) 0%, rgb(0, 0, 0) 100%);
        margin-left: 40%;
        position: relative;
        h3 {
            position: absolute;
            font-size: 30px;
            color: var(--text-color-first-d);
            text-transform: uppercase;
        }
    }
    .contacts {
        margin: 100px auto;
        max-width: 574px;
        min-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        .contact {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 1px solid var(--color-green-opacity);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all ease-in-out .5s;
            cursor: pointer;
            position: relative;
            img {
                width: 50px;
                height: 50px;
                cursor: pointer;
            }
            &:hover {
                border: 1px solid var(--text-color-green);
                transition: all ease-in-out .3s;
                box-shadow: 0px 0px 8px var(--text-color-green);
            }
            &:active {
                border: 1px solid #00ffa200;
                box-shadow: 0px 0px 16px var(--text-color-green);
                transition: all ease-in-out .1s;
            }
        }
    }
}
@media only screen and (max-width: 700px) {
    section {
        .contacts {
            .contact {
                width: 80px;
                height: 80px;
                margin-top: 10px;
                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
}
@media only screen and (max-width: 430px) {
    section {
        .contacts {
            width: 80px;
            display: block;
            .contact {
                width: 80px;
                height: 80px;
                margin-top: 10px;
                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
}
</style>