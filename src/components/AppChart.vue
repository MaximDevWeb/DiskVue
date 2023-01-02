<script setup lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import { Chart } from "@/module/chart";

/**
 * App Chart component
 */
const props = defineProps<{
  /**
   * The data values
   */
  data: Array<number>;
}>();

let chart: Chart;
const canvas = ref();
const colors = ["#0f8ce9", "#1c35b4", "#feb101", "#eeeeee"];

/**
 * Monitor data and update chart
 */
watch(props, () => {
  chart.update(props.data);
});

/**
 * Create chart when creating component
 */
onMounted(() => {
  chart = new Chart(canvas.value, {
    dataset: props.data,
    colors: colors,
    width: 40,
  });
});
</script>

<template>
  <canvas ref="canvas" width="520" height="520"></canvas>
</template>
