<script setup lang="ts">
import { useStore } from '../../store';

const store = useStore();

defineProps<{
    text: string
}>();
</script>


<template>
    <section>
        <div class="message">
            <p>{{ text }}</p>
            <div class="close-message"
            @click="store.clearMessages">
                <img src="../../assets/close.png"/>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
section {
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 2;
    top: 10px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0px;
    .message {
        width: 90%;
        height: 100%;
        border: 1px solid rgb(139, 139, 139);
        border-radius: 30px;
        background-color: var(--text-color-green);
        display: flex;
        align-items: center;
        justify-content: center;
        .close-message {
        width: 50px;
        height: 50px;
        border: 1px solid rgb(2, 179, 2);
        border-radius: 50%;
        background-color: rgb(230, 230, 230);
        margin-right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
            width: 30px;
            filter: brightness(0) saturate(100%) invert(70%) sepia(57%) saturate(1656%) hue-rotate(103deg) brightness(107%) contrast(101%);
        }
        }
        p {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            text-transform: uppercase;
            color: rgb(0, 80, 0);
            font-weight: 100;
        }
    }
}
</style>