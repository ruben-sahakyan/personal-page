<script setup lang="ts">
import { useStore } from '../../store';

const store = useStore();

</script>


<template>
    <section>
        <div class="top-line">
            <h3>{{ $t('aboutProject.title') }}</h3>
        </div>
        <div class="about-project">
            <p class="about-project-text">
                {{ $t('aboutProject.content') }}
            </p>
            <div class="skills">
                <h2>{{ $t('aboutProject.skillsTitle') }}</h2>
                <template v-for="(skills, item) in store.usedSkills">
                    <h3>{{ item }}</h3>
                    <div class="skills-list">
                        <p class="skill"v-for="skill of skills">{{ skill.name }}</p>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
section {
    max-width: 100%;
    .top-line {
        max-width: 100%;
        height: 2px;
        margin-right: 40%;
        margin-top: 80px;
        background: rgb(0,0,0);
        background: linear-gradient(108deg, var(--light-border-color-second) 0%, var(--light-border-color-third) 100%);
        position: relative;
        h3 {
            position: absolute;
            color: var(--light-text-color-first);
            font-size: 20px;
            text-transform: uppercase;
            bottom: -25px;
            right: 0px;
            transition: all ease-in-out .3s;
        }
    }
    .about-project {
        width: 100%;
        min-height: 200px;
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        .about-project-text {
            width: 50%;
            color: var(--light-text-color-first)
        }
        .skills {
            width: 50%;
            min-height: 200px;
            h2 {
                text-align: center;
                text-transform: uppercase;
                margin-bottom: 20px;
                color: var(--light-text-color-first);
                font-weight: 100;
            }
            h3 {
                margin: 0px auto;
                width: 160px;
                text-align: center;
                color: var(--light-text-color-first);
                text-transform: uppercase;
                position: relative;
                &::before {
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: 2px;
                    background: rgb(0,0,0);
                    background: linear-gradient(108deg, var(--light-border-color-second) 0%, var(--light-border-color-third) 100%);
                    top: 50%;
                    left: 90%;
                }
                &::after {
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: 2px;
                    background: rgb(0,0,0);
                    background: linear-gradient(108deg, var(--light-border-color-third) 0%, var(--light-border-color-second) 100%);
                    top: 50%;
                    right: 90%;
                }
            }
            .skills-list {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                gap: 10px;
                width: 100%;
                margin: 10px 0px;
                .skill {
                    min-width: 100px;
                    height: 30px;
                    color: var(--light-text-color-first);
                    background-color: var(--light-background-color-first);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgb(128, 128, 128);
                    border-radius: 15px;
                    padding-left: 10px;
                    padding-right: 10px;
                    text-transform: uppercase;
                }
            }
        }
    }
}
@media only screen and (max-width: 1000px) {
    section {
        .about-project {
            display: block;
            margin-top: 70px;
            .about-project-text {
                width: 100%;
                text-align: center;
            }
            .skills {
                margin-top: 50px;
                width: 100%;
            }
        }
    }
}
@media only screen and (max-width: 463px) {
    section {
        .about-project {
            .skills {
                h3 {
                    &::before {
                        width: 60%;
                    }
                    &::after {
                        width: 60%;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 430px) {
    section {
        .top-line {
            h3 {
                font-size: 15px;
            }
        }
    }
}
</style>