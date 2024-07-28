<script setup lang="ts">

const goUp = () => {
    window.scrollTo(0, 0);
}
</script>

<template>
    <footer>
        <img @click="goUp" class="up" src="../../assets/right.png"/>
        <p>ruben sahakyan</p>
    </footer>
</template>


<style scoped lang="scss">
footer {
    margin: auto;
    max-width: 1200px;
    height: 70px;
    border: 1px solid var(--border-color-second);
    border-bottom: none;
    border-radius: 20px 20px 0px 0px;
    background-color: rgba(0, 0, 0, 0.589);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .up {
        cursor: pointer;
        position: absolute;
        height: 50px;
        bottom: 80px;
        filter: brightness(0) saturate(100%) invert(83%) sepia(1%) saturate(96%) hue-rotate(314deg) brightness(90%) contrast(83%);
        transition: all ease-in-out .2s;
        &:hover {
            transform: translateY(-5px);
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(25%) hue-rotate(329deg) brightness(90%) contrast(84%);
        }
    }
    p {
        color: var(--text-color-green);
        text-transform: uppercase;
        font-size: 32px;
    }
}
</style>