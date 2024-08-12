<script setup lang="ts">

</script>


<template>
    <section class="about-me">
        <div class="top-line">
            <h3>{{ $t('aboutMe.title') }}</h3>
        </div>
        <div>
            <p>
                {{ $t('aboutMe.content') }}
            </p>
            <img src="../../assets/Ruben.jpg"/>
        </div>
    </section>
</template>


<style scoped lang="scss">
.about-me {
    width: 100%;
    .top-line {
        max-width: 100%;
        height: 2px;
        background: rgb(0,0,0);
        background: linear-gradient(108deg, rgb(150, 150, 150) 0%, rgb(0, 0, 0) 100%);
        margin-left: 40%;
        margin-top: 80px;
        position: relative;
        h3 {
            position: absolute;
            font-size: 30px;
            top: 0px;
            left: 0px;
            color: var(--text-color-first-d);
            text-transform: uppercase;
        }
    }
    div {
        max-width: 100%;
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap-reverse;
        p {
            max-width: 700px;
            font-size: 18px;
            color: var(--text-color-first-d);
            margin-right: 10px;
        }
        img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            border: 1px solid var(--text-color-first-d);
        }
    }
}
@media only screen and (max-width: 1054px) {
    .about-me {
        div {
            p {
                margin-top: 30px;
            }
        }
    }
}
</style>