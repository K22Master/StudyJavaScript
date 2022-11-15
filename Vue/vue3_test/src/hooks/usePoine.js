import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function () {
    let poine = reactive({
        x: 0,
        y: 0,
    });
    function savePoint(event) {
        poine.x = event.pageX;
        poine.y = event.pageY;
        console.log(poine.x, poine.y);
    }
    onMounted(() => {
        window.addEventListener("click", savePoint);
    });
    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint);
    });
    return poine;
}