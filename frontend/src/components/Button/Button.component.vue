<script setup lang="ts">
defineProps<{
    name: string,
    size: string
    }>();
</script>


<template>
    <button :style="`width: ${size}px; height: ${size}px`">
        <p>{{ name }}</p>
    </button>
</template>


<style scoped lang="scss">
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
</style>