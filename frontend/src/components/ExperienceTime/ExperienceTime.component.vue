<script setup lang="ts">
import { ref } from 'vue';

const deltaYears = ref<string>('00');
const deltaMonts = ref<string>('00');
const deltaDays = ref<string>('00');
const deltaHourse = ref<string>('00');
const deltaMinuts = ref<string>('00');
const deltaSeconds = ref<string>('00');

function updateClock() {
    const years = new Date().getFullYear();
    const monts = new Date().getMonth();
    const days = new Date().getUTCDate();
    const hourse = new Date().getUTCHours();
    const minuts = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const startYear = 2022;
    const startMonts = 3;
    const startDays = 14;
    return {
        years: years - startYear,
        monts: monts - startMonts,
        days: days - startDays,
        hourse,
        minuts,
        seconds
    }
};

setInterval(() => {
    const {years, monts, days, hourse, minuts, seconds} = updateClock();
    deltaYears.value = years < 10 ? '0' + String(years) : String(years);
    deltaMonts.value = monts < 10 ? '0' + String(monts) : String(monts);
    deltaDays.value = days < 10 ? '0' + String(days) : String(days);
    deltaHourse.value = hourse < 10 ? '0' + String(hourse) : String(hourse);
    deltaMinuts.value = minuts < 10 ? '0' + String(minuts) : String(minuts);
    deltaSeconds.value = seconds < 10 ? '0' + String(seconds) : String(seconds);
}, 1000)

</script>


<template>
    <section>
        <div class="counter">
            <div>
                <p class="time-name">{{ $t('experienceTime.year') }}</p>
                <p class="time">{{ deltaYears }}</p>
            </div>
            <p class="twodot">:</p>
            <div>
                <p class="time-name">{{ $t('experienceTime.month') }}</p>
                <p class="time">{{ deltaMonts }}</p>
            </div>
            <p class="twodot">:</p>
            <div>
                <p class="time-name">{{ $t('experienceTime.day') }}</p>
                <p class="time">{{ deltaDays }}</p>
            </div>
            <p class="twodot">:</p>
            <div>
                <p class="time-name">{{ $t('experienceTime.hour') }}</p>
                <p class="time">{{ deltaHourse }}</p>
            </div>
            <p class="twodot">:</p>
            <div>
                <p class="time-name">{{ $t('experienceTime.minut') }}</p>
                <p class="time">{{ deltaMinuts }}</p>
            </div>
            <p class="twodot">:</p>
            <div>
                <p class="time-name">{{ $t('experienceTime.second') }}</p>
                <p class="time">{{ deltaSeconds }}</p>
            </div>
        </div>
        <p>{{ $t('experienceTime.ofWorkExperience') }}</p>
    </section>
</template>



<style scoped lang="scss">
section {
    margin: 50px auto;
    max-width: 600px;
    height: 100px;
    .counter {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        .twodot {
            font-family: 'DigitalNumbers';
            text-align: end;
            width: 10px;
            height: 100%;
            font-size: 40px;
            display: flex;
            align-items: end;
            justify-content: center;
            padding-bottom: 5px;
            color: var(--text-color-green);
        }
        div {
            width: 100px;
            height: 100%;
            .time-name {
                width: 100%;
                text-align: center;
                text-transform: uppercase;
                font-size: 15px;
                color: var(--text-color-first-d);
            }
            .time {
                width: 100%;
                font-size: 40px;
                text-align: center;
                font-family: 'DigitalNumbers';
                color: var(--text-color-green);
            }
        }
    }
    p {
        color: var(--text-color-first-d);
        text-align: center;
        font-size: 24px;
        text-transform: uppercase;
        color: var(--text-color-first-d);
    }
}
@media only screen and (max-width: 580px) {
    section {
        .counter {
            width: 100%;
            .twodot {
                padding-bottom: 24px;
            }
            div {
                width: 50px;
                height: 100px;
                .time-name {
                    font-size: 12px;
                }
                .time {
                    font-size: 30px;
                }
            }
        }
    }
}
@media only screen and (max-width: 460px) {
    section {
        .counter {
            gap: 3px;
            width: 100%;
            .twodot {
                font-size: 28px;
                padding-bottom: 20px;
            }
            div {
                width: 40px;
                height: 60px;
                .time-name {
                    font-size: 10px;
                }
                .time {
                    font-size: 25px;
                }
            }
        }
    }
}
</style>