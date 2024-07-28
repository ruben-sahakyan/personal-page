<script setup lang="ts">
</script>


<template>
    <section>
        <div class="top-line">
            <h3>{{ $t('aboutProject.title') }}</h3>
        </div>
        <p>
            {{ $t('aboutProject.content') }}
        </p>
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
        background: linear-gradient(108deg, rgb(0, 0, 0) 0%, rgb(150, 150, 150) 100%);
        position: relative;
        h3 {
            position: absolute;
            color: var(--text-color-first-d);
            font-size: 20px;
            text-transform: uppercase;
            bottom: -25px;
            right: 0px;
            transition: all ease-in-out .3s;
        }
    }
    p {
        color: var(--text-color-first-d);
        max-width: 700px;
        margin-top: 60px;
        margin: 50px auto;
        font-size: 18px;
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