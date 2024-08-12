<script setup lang="ts">
import OneSkill from "../Skills/OneSkill/OneSkill.component.vue";
import { useStore } from "../../store";
import { useStyleStore } from "../../store";

const store = useStore();
const styleStore = useStyleStore();
</script>


<template>
    <section>
        <div class="top-line">
            <h3>{{ $t('skills.title') }}</h3>
        </div>
        <h4 :style="styleStore.lightTheme ? '' : 'color: var(--text-color-first-d)'">hardskills</h4>
        <div class="skills-list">
            <div class="used-this-project">
                <h5>{{ $t('skills.usedThisProject') }}</h5>
                <img src="../../assets/checkmark.png"/>
            </div>
            <div v-for="(skills, skillsChapter) in store.skills.hardSkills">
                <p>{{ skillsChapter }}</p>
                <OneSkill v-for="skill of skills" :skill="skill"/>
            </div>
        </div>
        <h4 :style="styleStore.lightTheme ? '' : 'color: var(--text-color-first-d)'">softskills</h4>
        <div class="skills-list">
            <OneSkill v-for="skill of store.skills.softSkills" :skill="skill" />
        </div>
    </section>
</template>



<style scoped lang="scss">
section {
    margin-top: 80px;
    width: 100%;
    min-height: 200px;
    .top-line {
        position: relative;
        max-width: 100%;
        height: 2px;
        background: rgb(0,0,0);
        background: linear-gradient(108deg, rgb(0, 0, 0) 0%, rgb(150, 150, 150) 100%);
        margin-right: 40%;
        h3 {
            position: absolute;
            font-size: 30px;
            text-transform: uppercase;
            right: 0px;
            color: var(--text-color-first-d);
        }
    }
    h4 {
        text-align: center;
        font-size: 30px;
        margin-top: 100px;
        font-weight: 100;
        text-transform: uppercase;
        color: black;
    }
    .skills-list {
        margin: auto;
        margin-top: 10px;
        max-width: 1200px;
        min-height: 50px;
        border: 2px solid var(--border-color-second);
        border-radius: 34px;
        background-color: var(--background-color-third-ld);
        padding: 10px;
        padding-top: 0px;
        position: relative;
        .used-this-project {
            position: absolute;
            color: white;
            top: -40px;
            right: 5%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            h5 {
                font-size: 15px;
                text-transform: uppercase;
                color: var(--text-color-first-d);
            }
        }
        p {
            margin-top: 10px;
            color: var(--text-color-skill-title);
            text-transform: uppercase;
            text-align: center;
        }
    }
}
@media only screen and (max-width: 780px) {
    section {
        .skills-list {
            .used-this-project {
                top: -80px;
            }
        }
    }
}
</style>