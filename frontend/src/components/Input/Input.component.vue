<script setup lang="ts">
import { ref } from 'vue';

const showPassword = ref(false);

const date = ref<string>('');

defineProps<{
    placeholder: string,
    type: string
}>();

const emit = defineEmits(['value']);
emit('value', date);
</script>


<template>
    <div class="input">
        <input v-if="type === 'password'" :placeholder="placeholder" :type="showPassword ? 'text' : 'password'"
        v-model="date"/>
        <input v-else type="text" :placeholder="placeholder"
        v-model="date"/>
        <div v-show="type === 'password'">
            <img @click="() => showPassword = !showPassword" v-if="showPassword" src="../../assets/show.png"/>
            <img @click="() => showPassword = !showPassword" v-else src="../../assets/hide.png"/>
        </div>
    </div>
</template>


<style scoped lang="scss">
.input {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--border-color-second);
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 30px;
        filter: brightness(0) saturate(100%) invert(84%) sepia(3%) saturate(17%) hue-rotate(354deg) brightness(87%) contrast(87%);
    }
    input {
        width: 100%;
        height: 40px;
        background: none;
        border: none;
        outline: none;
        color: white;
        font-size: 20px;
    }
}
</style>