<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMonitorSize } from '../../composables/monitor-size';
import { useStyleStore } from '../../store';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import MessageComponent from '../Message/Message.component.vue';
import { useStore } from '../../store';
import router from '../../router';

const store = useStore();

const { locale } = useI18n({useScope: 'global'});
const burgerMenuOpen = ref(false);

const styleStore = useStyleStore();

const width = useMonitorSize();

watch(width.browserWidth, (newSize, oldSize) => {
    if(newSize > oldSize) {
        burgerMenuOpen.value = false;
    }
});


const logout = () => {
    fetch('http://localhost:5000/users/logout', {
      method: "GET",
      credentials: 'include',  
    }).then(resp => resp.json())
    .then(date => {
        if(date.message === 'logout') {
            store.userAuth.status = false;
            store.userAuth.email = '';
            return router.push({name: 'SignIn'})
        }
    })
}


const goTo = (x: number) => {
    window.scrollTo(0, x);
}
</script>


<template>
    <header :style="burgerMenuOpen ? store.userAuth.status ? 'height: 224px' : 'height: 260px' : ''">
        <MessageComponent v-for="message in store.getMessages" :text="message.text"/>
        <div class="header-top">
            <h1 class="logo-long"
            :style="styleStore.lightTheme ? '' : 'color: var(--text-color-first-d)'">
            <RouterLink to="/">
                <span>r</span>uben<span>s</span>ahakyan
            </RouterLink>
            </h1>
            <h1 class="logo-short">
                <RouterLink to="/">rs</RouterLink>
            </h1>
            <ul class="header-nav"
            :style="styleStore.lightTheme ? '' : 'color: var(--text-color-first-d)'">
                <li @click="goTo(1250)">
                    <RouterLink to="/">
                        {{ $t('header.nav.about') }}
                    </RouterLink>
                </li>
                <li @click="goTo(3450)">
                    <RouterLink to="/">
                        {{ $t('header.nav.contacts') }}
                    </RouterLink>
                </li>
                <li @click="goTo(1700)">
                    <RouterLink to="/">
                        {{ $t('header.nav.skills') }}
                    </RouterLink>
                </li>
            </ul>
            <template v-if="store.userAuth.status">
                <div class="auth-user">
                    <p>{{ store.userAuth.email }}</p>
                    <div @click="logout" class="log-out">
                        <img src="../../assets/power-off.png"/>
                    </div>
                </div>
            </template>
            <template v-else>
                <ul class="authentication"
                :style="styleStore.lightTheme ? '' : 'color: var(--text-color-first-d)'">
                    <li :style="locale === 'en' ? '' : 'font-size: 15px'">
                        <RouterLink to="/signin">
                            {{ $t('header.authentication.signIn') }}
                        </RouterLink>
                        </li>
                    <li :style="locale === 'en' ? '' : 'font-size: 15px'">
                        <RouterLink to="/signup">
                            {{ $t('header.authentication.signUp') }}
                        </RouterLink>
                    </li>
                </ul>
            </template>
            <div :class="burgerMenuOpen ? 'burger-menu-icon burger-menu-icon-open' : 'burger-menu-icon'" @click="() => burgerMenuOpen = !burgerMenuOpen">
                <div></div>
            </div>
        </div>
        <ul :class="burgerMenuOpen ? 'burger-menu-open' : 'burger-menu'"
        :style="styleStore.lightTheme ? '' : 'color: var(--text-color-first-d)'"
        @click="() => {burgerMenuOpen = false}">
            <li @click="goTo(1250)">
                <RouterLink to="/">
                    {{ $t('header.nav.about') }}
                </RouterLink>
            </li>
            <li @click="goTo(3450)">
                <RouterLink to="/">
                    {{ $t('header.nav.contacts') }}
                </RouterLink>
            </li>
            <li @click="goTo(1700)">
                <RouterLink to="/">
                    {{ $t('header.nav.skills') }}
                </RouterLink>
            </li>
            <template v-if="store.userAuth.status">
                <li @click="logout" id="burger-nav-logout">
                    {{ $t('header.nav.logout') }}
                </li>
            </template>
            <template v-else>
                <RouterLink to="/signin">
                    <li>{{ $t('header.authentication.signIn') }}</li>
                </RouterLink>
                <RouterLink to="/signup">
                    <li>{{ $t('header.authentication.signUp') }}</li>
                </RouterLink>
            </template>
        </ul>
    </header>
    <div class="header-settings">
        <div class="change-style"
        :style="styleStore.lightTheme ? '' : 'background-color: var(--background-color-second-d)'">
            <div @click="() => {
                styleStore.lightTheme = !styleStore.lightTheme;
                styleStore.changeBackgroubdColor;
            }"
            :style="styleStore.lightTheme ? '' : 'left: calc(100% - 45px)'">
            <div></div>
            </div>
            <img id="dark-icon" v-if="styleStore.lightTheme" src="../../assets/dark-mode.png"/>
            <img id="light-icon" v-else :style="'left: 7px'" src="../../assets/sun.png"/>
        </div>
        <div class="change-language">
            <div @click="() => locale === 'en' ? locale = 'ru' : locale = 'en'"
            :style="locale === 'en' ? '' : 'left: calc(100% - 45px)'">
            <div></div>
            </div>
            <p v-if="locale === 'en'">RU</p>
            <p v-else style="left: 18px;">EN</p>
        </div>
    </div>
</template>



<style scoped lang="scss">
header {
    margin-top: 15px;
    width: 100%;
    height: 60px;
    border: 2px solid var(--border-color-l);
    border-radius: 30px;
    background-color: var(--background-color);
    transition: all ease-in-out .3s;
    .auth-user {
        p {
            color: var(--text-color-first-d)
        }
    }
    .header-top {
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo-long {
            font-size: 20px;
            color: var(--text-color-first-l);
            text-transform: uppercase;
            margin-left: 20px;
            cursor: pointer;
            font-weight: 100;
            transition: all ease-in-out .3s;
            span {
                font-weight: 400;
                color: var(--text-color-green);
            }
        }
        .logo-short {
            display: none;
            cursor: pointer;
            margin-left: 20px;
            font-size: 40px;
            color: var(--text-color-green);
            text-transform: uppercase;
        }
        .header-nav {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            li {
                font-size: 20px;
                text-transform: uppercase;
                font-weight: 400;
                cursor: pointer;
                transition: all ease-in-out .3s;
                &:hover {
                    color: var(--text-color-green);
                    transition: all ease-in-out .2s;
                }
            }
        }
        .authentication {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
            margin-right: 2px;
            li {
                height: 50px;
                min-width: 50px;
                border: 2px solid var(--border-color-l);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 25px 4px 4px 25px;
                font-size: 20px;
                text-transform: uppercase;
                font-weight: 100;
                padding-left: 15px;
                padding-right: 10px;
                cursor: pointer;
                transition: all ease-in-out .5s;
                span {
                    color: var(--text-color-green);
                }
                &:last-child {
                    border-radius: 4px 25px 25px 4px;
                    padding-left: 10px;
                    padding-right: 15px;
                }
                &:hover {
                    color: var(--text-color-green);
                    transition: all ease-in-out .3s;
                }
            }
        }
        .burger-menu-icon {
            display: none;
        }
    }
    .burger-menu {
        display: none;
    }
    .burger-menu-open {
        display: none;
    }
    .auth-user {
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-right: 2px;
        .log-out {
            width: 50px;
            height: 50px;
            border: 1px solid var(--border-color-l);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 30px;
                filter: brightness(0) saturate(100%) invert(25%) sepia(93%) saturate(7262%) hue-rotate(357deg) brightness(108%) contrast(115%);
            }
        }
    }
}
.header-settings {
        margin: 10px auto;
        max-width: 260px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .change-style, .change-language {
            width: 100px;
            height: 100%;
            border: 2px solid var(--border-color-l);
            border-radius: 25px;
            padding: 0px 1px;
            position: relative;
            background-color: var(--background-color);
            div {
                z-index: 1;
                position: absolute;
                top: 1px;
                left: 1px;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                border: 2px solid var(--border-color-l);
                background-color: rgb(8, 8, 8);
                cursor: pointer;
                transition: all ease-in-out .3s;
                background: rgb(206,206,206);
                background: radial-gradient(circle, rgb(180, 180, 180) 0%, rgb(20, 20, 20) 100%);
                div {
                    position: absolute;
                    left: calc(20px - 5px);
                    top: calc(20px - 5px);
                    background: none;
                    width: 10px;
                    height: 10px;
                    background-color: var(--border-color-l);
                }
                &:hover > div {
                    background-color: var(--text-color-green);
                }
            }
            img {
                position: absolute;
                top: 7px;
                left: calc(100px - 42px);
                height: 30px;
                width: 30px;
                border-radius: 50%;
            }
            #light-icon {
                filter: brightness(0) saturate(100%) invert(96%) sepia(7%) saturate(774%) hue-rotate(264deg) brightness(118%) contrast(100%);
            }
        }
        .change-language {
            p {
                font-size: 20px;
                color: white;
                position: absolute;
                left: 52px;
                top: 9px;
            }
        }
    }
@media only screen and (max-width: 900px) {
    header {
        .header-top {
            .logo-long {
                display: none;
            }
            .logo-short {
                display: block;
            }
        }
    }
}
@media only screen and (max-width: 700px) {
    header {
        .header-top {
            .logo-long {
                display: none;
            }
            .auth-user {
                .log-out {
                    display: none;
                }
            }
            .burger-menu-icon {
                display: block;
                width: 50px;
                height: 50px;
                margin-right: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                div {
                    width: 50px;
                    height: 4px;
                    border-radius: 2px;
                    background-color: var(--border-color-l);
                    position: relative;
                    transition: all ease-in-out .7s;
                    &::before {
                        position: absolute;
                        content: '';
                        width: 50px;
                        height: 4px;
                        border-radius: 2px;
                        background-color: var(--border-color-l);
                        bottom: 15px;
                        transition: all ease-in-out .3s;
                    }
                    &::after {
                        position: absolute;
                        content: '';
                        width: 50px;
                        height: 4px;
                        border-radius: 2px;
                        background-color: var(--border-color-l);
                        top: 15px;
                        transition: all ease-in-out .3s;
                    }
                }
            }
            .burger-menu-icon-open {
                div {
                    width: 50px;
                    height: 4px;
                    border-radius: 2px;
                    background-color: rgba(255, 255, 255, 0);
                    transition: all ease-in-out .3s;
                    &::before {
                        bottom: 0px;
                        transform: rotate(45deg);
                    }
                    &::after {
                        top: 0px;
                        transform: rotate(-45deg);
                    }
                }
            }
            .header-nav {
                display: none;
            }
            .authentication {
                display: none;
            }
        }
        .burger-menu {
            display: block;
            width: 0px;
            height: 0px;
            li {
                border-top: 1px solid var(--text-color-green);
                color: var(--text-color-green);
                width: 100%;
                height: 10px;
                font-size: 0px;
            }
        }
        .burger-menu-open {
            display: block;
            width: 100%;
            height: 200px;
            transition-property: all;
            transition-duration: .3s;
            transition-timing-function: ease-in-out;
            transition-delay: .1s;
            #burger-nav-logout { 
                &:hover {
                    color: red;
                }
            }
            li {
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                text-transform: uppercase;
                color: var(--text-color-first-l);
                border-top: 1px solid var(--border-color-l);
                cursor: pointer;
                transition-property: all;
                transition-duration: .3s;
                transition-timing-function: ease-in-out;
                transition-delay: .1s;
                &:hover {
                    transition: color ease-in-out .2s;
                    color: var(--text-color-green);
                }
                &:active {
                    color: var(--text-color-first-l);
                }
            }
        }
    }
}
</style>