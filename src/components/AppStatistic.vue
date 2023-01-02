<script setup lang="ts">
import { computed, onMounted, Ref, ref, watch, watchEffect } from "vue";
import { useFilesStore } from "@/stores/files";
import { numToSize, percentToFixed } from "@/helpers/numbers";
import type { Statistic } from "@/types/stores";
import AppChart from "@/components/AppChart.vue";

/**
 * App statistic component
 */
const fileStore = useFilesStore();
const used = ref(0);
let data: Ref<Array<number>> = ref([]);

/**
 * Computed statistics data
 */
const statistic = computed((): Statistic | null => fileStore.statistic);

/**
 * Monitor statistic data and update render
 */
watchEffect(() => {
  if (!statistic.value) return;

  used.value =
    statistic.value.useImages +
    statistic.value.useDocuments +
    statistic.value.useOther;

  data.value = [
    statistic.value.useImages,
    statistic.value.useDocuments,
    statistic.value.useOther,
    statistic.value.disk - used.value,
  ];
});

/**
 * The function calculate fixed percent
 *
 * @param value
 * @param full
 */
const percent = (value: number, full: number): string => {
  return percentToFixed((value / full) * 100);
};

/**
 * Load statistics data when creating component
 */
onMounted(() => {
  fileStore.loadStatistic();
});
</script>

<template>
  <aside class="statistic">
    <template v-if="fileStore.statistic">
      <h2 class="statistic__header">Statistic</h2>

      <div class="chart">
        <app-chart :data="data" />
        <div class="chart__legend">
          <div class="chart__percent">{{ percent(used, statistic.disk) }}%</div>
          <div class="chart__used">Used storage</div>
        </div>
      </div>

      <div class="labels">
        <div class="labels__item">
          <div class="labels__color" style="background-color: #0f8ce9"></div>
          <div>
            <div class="labels__name">Images</div>
            <div class="labels__percent">
              {{ percent(statistic.useImages, statistic.disk) }}%
            </div>
          </div>
        </div>

        <div class="labels__item">
          <div class="labels__color" style="background-color: #1c35b4"></div>
          <div>
            <div class="labels__name">Document</div>
            <div class="labels__percent">
              {{ percent(statistic.useDocuments, statistic.disk) }}%
            </div>
          </div>
        </div>

        <div class="labels__item">
          <div class="labels__color" style="background-color: #feb101"></div>
          <div>
            <div class="labels__name">Other</div>
            <div class="labels__percent">
              {{ percent(statistic.useOther, statistic.disk) }}%
            </div>
          </div>
        </div>

        <div class="labels__item">
          <div class="labels__color" style="background-color: #eeeeee"></div>
          <div>
            <div class="labels__name">Free</div>
            <div class="labels__percent">
              {{ percent(statistic.free, statistic.disk) }}%
            </div>
          </div>
        </div>
      </div>

      <div class="store">
        <p>
          Free space: {{ numToSize(used) }} of
          {{ numToSize(statistic.disk) }} used
        </p>

        <div class="timeline">
          <div class="timeline__path"></div>
          <div
            class="timeline__line"
            :style="{ width: percent(used, statistic.disk) + '%' }"
          ></div>
        </div>
      </div>

      <a href="#" class="btn">+1 TB for 50$</a>
    </template>
  </aside>
</template>
