<script setup lang="ts">
import AboutMeComponent from "../components/AboutMe/AboutMe.component.vue";
import AboutProject from "../components/AboutProject/AboutProject.vue";
import SkillsComponent from "../components/Skills/Skills.component.vue";
import ContactsComponent from "../components/Contacts/Contacts.component.vue";
import ExperienceTimeComponent from "../components/ExperienceTime/ExperienceTime.component.vue";
import { useStore, useStyleStore } from "../store";
import { onBeforeMount } from "vue";
import CVButtonComponent from "../components/CVButton/CVButton.component.vue";

const store = useStore();
const styleStore = useStyleStore();

const copyContact = (date: string) => {
    navigator.clipboard.writeText(date);
}


onBeforeMount(() => {
    fetch(`https://rubensahakyan.com/api/users/auth`, {
        method: "GET",
        credentials: 'include',
    })
    .then(resp => resp.json())
    .then(date => {
        if(date.message === 'authorized') {
            store.userAuth.status = true;
            store.userAuth.email = date.email
        } else {
            store.userAuth.status = false;
            store.userAuth.email = ''; 
        }
    })
})

</script>

<template>
    <div class="home">
        <h3 :style="styleStore.lightTheme ? 'color: var(--light-text-color-first)' : 'color: var(--dark-text-color-first)'">{{ $t('hi.hi') }}</h3>
        <h2 :style="styleStore.lightTheme ? 'color: var(--light-text-color-first)' : 'color: var(--dark-text-color-first)'">{{ $t('hi.name') }}</h2>
        <p :style="styleStore.lightTheme ? 'color: var(--light-text-color-first)' : 'color: var(--dark-text-color-first)'">{{ $t('hi.softwareengineer') }}</p>
        <CVButtonComponent />
        
        <ExperienceTimeComponent />

        <ul class="contacts">
            <li @click="copyContact(contact.date)" v-for="contact of store.contacts" class="contact">
                <img :src="`../assets/${contact.image}`"/>
            </li>
        </ul>

        <section class="positions">
            <img class="check-position" id="check-junior" src="../assets/check.png"/>
            <div class="position" id="junior">
                {{ $t('position.junior') }}
            </div>
            <img class="check-position" id="check-middle" src="../assets/check.png"/>
            <div class="position" id="middle">
                {{ $t('position.middle') }}
            </div>
            <div class="position" id="senior">
                {{ $t('position.senior') }}
            </div>
        </section>
        <AboutProject />
        <AboutMeComponent />
        <SkillsComponent />
        <ContactsComponent />
    </div>
</template>


<style scoped lang="scss">
.home {
    margin: auto;
    width: 100%;
    min-height: 1000px;
    h3 {
        margin-top: 70px;
        font-size: 20px;
        color: white;
        text-align: center;
        transition: all ease-in-out .5s;
    }
    h2 {
        width: 100%;
        padding: 0px;
        text-align: center;
        font-size: 120px;
        font-weight: 100;
        text-transform: uppercase;
        color: rgb(219, 219, 219);
        transition: all ease-in-out .3s;
    }
    p {
        text-align: center;
        color: white;
        font-weight: 100;
        font-size: 20px;
        text-transform: uppercase;
        transition: all ease-in-out .5s;
    }
    .contacts {
        margin: auto;
        max-width: 574px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .contact {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all ease-in-out .5s;
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
    .positions {
        margin: auto;
        margin-top: 100px;
        max-width: 1200px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap-reverse;
        position: relative;
        .check-position {
            position: absolute;
            width: 50px;
            bottom: 40px;
            filter: brightness(0) saturate(100%) invert(61%) sepia(100%) saturate(534%) hue-rotate(102deg) brightness(108%) contrast(101%);
        }
        #check-junior {
            left: calc(100px - 25px);
        }
        #check-middle {
            left: calc(50% - 25px);
        }
        .position {
            width: 200px;
            height: 30px;
            border: 1px solid var(--background-color-second-d);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-color-first-d);
            text-transform: uppercase;
        }
        #junior, #middle {
            border: 1px solid var(--text-color-green);
            color: var(--text-color-green);
        }
    }
}
@media only screen and (max-width: 1200px) {
    .home {
        h2 {
            font-size: 64px;
        }
    }
}
@media only screen and (max-width: 700px) {
    .home {
        h3 {
            margin-top: 30px;
        }
        h2 {
            font-size: 50px;
        }
        .contacts {
            .contact {
                width: 80px;
                height: 80px;
                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }
        .positions {
            margin-top: 60px;
            margin-bottom: 200px;
            margin-left: calc(50% - 150px);
            display: block;
            width: 300px;
            #check-junior {
                bottom: 35px;
                left: calc(50% - 25px);
            }
            #check-middle {
                top: 35px;
            }
            .position {
                margin-bottom: 60px;
                width: 100%;
            }
        }
    }
}
@media only screen and (max-width: 430px) {
    .home {
        .time {
            margin-left: calc(50% - 175px);
            width: 350px;
            div {
                gap: 30px;
                p {
                    font-size: 12px;
                }
            }
            .real-time {
                font-size: 37px;
                background-color: red;
            }
        }
    }
}
@keyframes ritmShadow {
    0% {
        box-shadow: 0px 0px 30px rgba(0, 255, 106, 0.39);
    }
    50% {
        box-shadow: 0px 0px 50px rgba(0, 255, 106, 0.39);
    }
    100% {
        box-shadow: 0px 0px 30px rgba(0, 255, 106, 0.39);
    }
}
</style>