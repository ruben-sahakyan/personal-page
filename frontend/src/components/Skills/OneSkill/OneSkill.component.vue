<script setup lang="ts">


defineProps<{
    skill: {
        id: number,
        name: string,
        use: boolean,
    },
}>();

</script>


<template>
    <div class="skill">
        <img class="use" v-show="skill.use" src="../../../assets/checkmark.png"/>
        <div class="bolt"></div>
        <p :style="skill.use ? 'color: var(--text-color-green)' : ''">{{ skill.name }}</p>
        <div class="bolt"></div>
    </div>
</template>


<style scoped lang="scss">
.skill {
    width: 100%;
    height: 44px;
    border: 3px solid var(--border-color-second);
    border-radius: 25px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 4px;
    background: url('../../../assets/skill-bg-fon.png');
    position: relative;
    .use {
        position: absolute;
        width: 40px;
        height: 36px;
        z-index: 1;
        right: 12%;
        bottom: 22px;
    }
    p {
        color: white;
        text-transform: uppercase;
        font-size: 28px;
        font-weight: 900;
        color: var(--text-color-first-d);
        transition: all ease-in-out .3s;
    }
    .bolt {
        width: 32px;
        height: 32px;
        border: 3px solid var(--border-color-second);
        border-radius: 50%;
        background: rgb(158,152,152);
        background: radial-gradient(circle, rgba(158,152,152,1) 0%, rgba(19,19,19,1) 100%);
        position: relative;
        &::before {
            position: absolute;
            content: '';
            width: 24px;
            height: 4px;
            top: calc(50% - 2px);
            left: calc(50% - 12px);
            transform: rotate(36deg);
            background: rgb(48,48,48);
            background: linear-gradient(108deg, rgba(48,48,48,1) 0%, rgba(0,0,0,1) 50%, rgba(48,48,48,1) 100%);
        }
    }
}
@media only screen and (max-width: 450px) {
    .skill {
        p {
            font-size: 20px;
        }
    }
}
</style>