<script setup lang="ts">
import { useStyleStore } from '../../store';

const styleStore = useStyleStore();
</script>


<template>
    <div class="btn-switch">
        <div @click="() => {styleStore.lightTheme = !styleStore.lightTheme}"
        :style="styleStore.lightTheme ? '' : 'left: calc(100% - 45px)'"
        ></div>
    </div>
</template>


<style scoped lang="scss">
.btn-switch {
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
    }
    img {
        position: absolute;
        top: 7px;
        left: calc(100px - 42px);
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }
}
</style>