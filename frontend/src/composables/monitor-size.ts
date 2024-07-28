import { onMounted, onUnmounted, reactive, toRefs } from "vue";

export function useMonitorSize() {
    const sizes = reactive({
        browserWidth: window.innerWidth,
        deviceWidth: screen.width,
        isModile: false,
    });

    const browserResized = () => {
        sizes.browserWidth = window.innerWidth;
        sizes.deviceWidth = screen.width;
    }


    onMounted(() => {
        window.addEventListener('resize', browserResized);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', browserResized)
    });

    return {
        ...toRefs(sizes)
    }
}