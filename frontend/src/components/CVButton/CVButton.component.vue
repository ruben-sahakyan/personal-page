<script setup lang="ts">
import { useStyleStore } from '../../store';

const styleStore = useStyleStore();
</script>


<template>
    <div class="button-cv">
        <a class="button" :style="styleStore.lightTheme ? 'background-color: var(--light-background-color-second)' : 'background-color: var(--light-background-color-second)'"
        href="../../assets/ruben-sahakyan-cv.pdf" download="">download cv</a>
    </div>
</template>


<style scoped lang="scss">
.button-cv {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    .button {
        width: 60%;
        height: 50px;
        border: 1px solid white;
        border-radius: 25px;
        background-color: var(--light-background-color-second);
        text-transform: uppercase;
        font-size: 20px;
        color: var(--light-text-color-second);
        cursor: pointer;
        position: relative;
        box-shadow: 0px 0px 2px 1px var(--light-background-color-second);
        transition: all ease-in-out .5s;
        display: flex;
        align-items: center;
        justify-content: center;
        &::before {
            position: absolute;
            content: '';
            width: 50%;
            height: 2px;
            right: 0px;
            bottom: 80px;
            background: rgb(0,0,0);
            background: linear-gradient(108deg, rgba(0,255,163,1) 0%, var(--light-border-color-third) 100%);
            transition: all ease-in-out .3s
        }
        &::after {
            position: absolute;
            content: '';
            width: 50%;
            height: 2px;
            background: rgb(0,0,0);
            background: linear-gradient(108deg, var(--light-border-color-third)  0%, rgba(0,255,163,1) 100%);
            top: 80px;
            left: 0px;
            transition: all ease-in-out .3s;
        }
        &:hover {
            background-color: var(--light-background-color-third);
            box-shadow: 0px 0px 20px 1px var(--light-background-color-second);
            &::before {
                width: 100%;
            }
            &::after {
                width: 100%;
            }
        }
    }
}
</style>